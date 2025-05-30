import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-xl relative z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-cyan-500 transition-colors"
          >
            Beranda
          </Link>
          <Link
            href="/tentang-kami"
            className="text-gray-600 hover:text-cyan-500 transition-colors"
          >
            Tentang Kami
          </Link>
          <Link
            href="/layanan"
            className="text-gray-600 hover:text-cyan-500 transition-colors"
          >
            Layanan
          </Link>
          <Link
            href="/kontak-kami"
            className="text-gray-600 hover:text-cyan-500 transition-colors"
          >
            Kontak Kami
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Log in
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-white">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
