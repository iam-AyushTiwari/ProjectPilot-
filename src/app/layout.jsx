import localFont from "next/font/local";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { ThemeContextProvider } from "./contextAPI/ThemeContext";
import ContextAppProvider from "./contextApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project Manager Application - ProjectPilot",
  description: "ProjectPilot is a full stack project management application",
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextAppProvider>
        <ThemeContextProvider>
          <body className={poppins.variable}>{children}</body>
        </ThemeContextProvider>
      </ContextAppProvider>
    </html>
  );
}
