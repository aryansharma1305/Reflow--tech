import { API_CONFIG } from "../api-config";

const contactUsApi = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: name,
    email: email,
    message: message,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow" as RequestRedirect,
  };

  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}/user/contact`,
      requestOptions
    );
    const result = await response.json();
    if (response.ok) {
      return result;
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error(error);
  }
};

export { contactUsApi };
