import "./globals.css";
import "./aos.css";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
