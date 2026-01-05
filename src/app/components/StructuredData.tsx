export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Reflow Tech",
    "description": "AI-Powered Manufacturing Performance Solutions for Pharmaceutical Industries",
    "url": "https://reflowtech.in",
    "logo": "https://reflowtech.in/translogo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://reflowtech.in"
    ],
    "foundingDate": "2024",
    "industry": "Manufacturing Technology",
    "keywords": [
      "AI manufacturing solutions",
      "pharmaceutical industry AI",
      "manufacturing performance optimization",
      "zero downtime manufacturing",
      "AI control systems"
    ],
    "offers": {
      "@type": "Offer",
      "name": "AI-Powered Manufacturing Performance Solutions",
      "description": "Achieve Zero Downtime, Zero Injuries, and Zero Financial Losses with Reflow's Cutting-Edge AI Control Systems for Pharmaceutical Manufacturing",
      "category": "AI Manufacturing Solutions"
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
