import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "wep_ent2 | Landing",
  description: "واجهة تعريفية مع قسم عملائنا بخلفية زجاجية للعلامات التجارية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
