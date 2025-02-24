import Header from "@/components/Header";
import Menu from "@/components/Menu";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Roma blog - Tomas Cardenas",
  description: "A blog about web development and programming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased `}>
        <div className="px-24 shadow-lg">
          <Header />
          <Menu />
          {children}
        </div>
      </body>
    </html>
  );
}
