import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add meta tags for SEO
const metaTags = [
  { name: "description", content: "Find and book top lawyers in Pakistan. Connect with experienced legal professionals specializing in family, corporate, criminal, and property law." },
  { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1" },
  { property: "og:title", content: "Oblinne - Pakistani Legal Services" },
  { property: "og:description", content: "Connect with experienced Pakistani lawyers for consultations, representation, and legal advice." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://oblinne.pk" }
];

// Add meta tags to head
metaTags.forEach(meta => {
  const metaElement = document.createElement("meta");
  Object.keys(meta).forEach(key => {
    metaElement.setAttribute(key, meta[key]);
  });
  document.head.appendChild(metaElement);
});

// Set title
document.title = "Oblinne - Pakistani Legal Services";

// Add font links
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Open+Sans:wght@300;400;600&family=Noto+Nastaliq+Urdu:wght@400;700&display=swap";
document.head.appendChild(fontLink);

createRoot(document.getElementById("root")!).render(<App />);
