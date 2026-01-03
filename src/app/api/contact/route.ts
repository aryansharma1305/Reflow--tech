import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { callBackendAPI, API_CONFIG } from "@/lib/api-config";

interface Database {
  contact: {
    create: (data: { data: { name: string; email: string; message: string } }) => Promise<unknown>;
  };
}

let dbPromise: Promise<Database | null> | null = null;

async function getDb(): Promise<Database | null> {
  if (dbPromise === null) {
    dbPromise = (async () => {
      try {
        // @ts-expect-error - Optional module, may not exist
        const dbModule = await import("@/lib/db").catch(() => null) as { db?: Database } | null;
        if (dbModule && dbModule.db) {
          return dbModule.db;
        }
      } catch {
        console.warn("Database module not found. Contact submissions will not be saved to database.");
      }
      return null;
    })();
  }
  return dbPromise;
}

export async function POST(req: NextRequest) {
  const db = await getDb();
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email format",
        },
        {
          status: 400,
        }
      );
    }

    let contact = null;
    if (db) {
      try {
        contact = await db.contact.create({
          data: {
            name,
            email,
            message,
          },
        });
      } catch (dbError) {
        console.error("Database error:", dbError);
      }
    }

    let backendResponse = null;
    try {
      backendResponse = await callBackendAPI(API_CONFIG.ENDPOINTS.CONTACT.CREATE, {
        method: 'POST',
        body: {
          name,
          email,
          message,
        },
        requireAuth: false,
      });
      if (!backendResponse.success) {
        console.warn("Backend API call failed, but continuing with email:", backendResponse.error);
      }
    } catch (backendError) {
      console.warn("Backend API not available, continuing with local processing:", backendError);
    }

    const transporter2 = nodemailer.createTransport({
      host: 'smtp.zoho.in',
      port: 465,
      secure: true,
      auth: {
        user: `contact@reflowtech.in`,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS2,
      }
    });

    const emailPromises = [];
    const userMailPromise = transporter2.sendMail({
      from: `contact@reflowtech.in`,
      to: email,
      subject: "Thank you for contacting ReflowTech",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us. We have received your message and our team will get back to you shortly.</p>
        <p><strong>Your Query:</strong> ${message}</p>
        <p>If you need immediate assistance, feel free to reply to this email or contact us directly.</p>
        <p>Best regards,</p>
        <p>ReflowTech</p>
      `,
    });
    emailPromises.push(userMailPromise);
    const adminMailPromise = transporter2.sendMail({
      from: `contact@reflowtech.in`,
      to: `contact@reflowtech.in`,
      subject: "Contact Query",
      html: `
        <p><strong>Contact Query:</strong> ${message}</p>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      `,
    });
    emailPromises.push(adminMailPromise);

    const emailResults = await Promise.allSettled(emailPromises);
    const emailErrors = emailResults.filter(result => result.status === 'rejected');
    if (emailErrors.length > 0) {
      console.error("Email sending errors:", emailErrors);
      if (!contact && emailErrors.length === emailPromises.length) {
        throw new Error("Failed to send emails");
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send message";
    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      {
        status: 500,
      }
    );
  }
}
