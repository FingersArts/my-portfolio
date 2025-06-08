import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portofolio Aziz Mujahiddin Nugraha",
  description: "Portofolio UI/UX Designer dan Data Analyst oleh Aziz Mujahiddin Nugraha, menampilkan proyek dan keahlian.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}