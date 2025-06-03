import "./globals.css";
import "./aos.css";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NutriEdu",
  description:
    "NutriEdu hadir sebagai solusi untuk membantu orangtua mencegah dan mengatasi malnutrisi pada bayi dan balita usia 0-5 tahun",
  icons: [
    // Favicon standar
    { url: "/icon_16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/icon_32x32.png", sizes: "32x32", type: "image/png" },
    // Apple Touch Icons
    {
      url: "/icon_180x180.png",
      sizes: "180x180",
      type: "image/png",
      rel: "apple-touch-icon",
    },
    // Android Chrome
    { url: "/icon_192x192.png", sizes: "192x192", type: "image/png" },
    // Windows Tiles
    { url: "/icon_144x144.png", sizes: "144x144", type: "image/png" },
    // Fallback
    { url: "/icon_512x512.png", sizes: "512x512", type: "image/png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="flex flex-col min-h-screen">
        <Header />

        <main className="pt-20 flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
