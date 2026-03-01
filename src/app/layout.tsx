import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Therapy Kids Sofi - Atención Integral Especializada Infantil",
  description: "Terapia infantil especializada para niños con discapacidad. Atención personalizada para síndrome de Down, autismo y más. Sofía Gasca - León, Guanajuato.",
  keywords: "terapia infantil, niños con discapacidad, síndrome de Down, autismo, León Guanajuato, Sofía Gasca, terapia especializada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
