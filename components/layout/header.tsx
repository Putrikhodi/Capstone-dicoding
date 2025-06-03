"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogin, setIslogin] = useState(true)
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && !isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = ()=>{
    
    setIslogin(!isLogin)
    router.push('/')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <header className={`fixed w-full bg-white shadow-md transition-all duration-300 z-50 ${isScrolled ? 'py-2' : 'py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={150}
            height={40}
            className="h-8 sm:h-10 w-auto transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-cyan-500 transition-colors font-medium"
          >
            Beranda
          </Link>
          <Link
            href="/tentang-kami"
            className="text-gray-600 hover:text-cyan-500 transition-colors font-medium"
          >
            Tentang Kami
          </Link>
          <Link
            href="/layanan"
            className="text-gray-600 hover:text-cyan-500 transition-colors font-medium"
          >
            Layanan
          </Link>
          <Link
            href="/kontak-kami"
            className="text-gray-600 hover:text-cyan-500 transition-colors font-medium"
          >
            Kontak Kami
          </Link>
        </nav>

        {/* Desktop Buttons */}
        {!isLogin ? (<div className="hidden md:flex items-center gap-3">
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
        </div>) : (<div className="hidden md:flex items-center gap-3">
          <Link href='/profil'><Image alt='icon' src='/images/icon.svg' width={39} height={39} /></Link>
          
          <button
          onClick={handleLogout}
            className="flex items-center space-x-2 text-[#00E240] border border-[#00E240] px-3 py-2 rounded-xl hover:text-red-800 hover:border-red-800"
          >
            <FiLogOut size={24} />
            <span>Logout</span>
          </button>
        </div>)}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-cyan-500 focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden pt-20 px-4`}
      >
        <nav className="flex flex-col items-center space-y-6 py-8">
          <Link
            href="/"
            className="text-xl text-gray-700 hover:text-cyan-500 transition-colors py-2 w-full text-center"
            onClick={closeMenu}
          >
            Beranda
          </Link>
          <Link
            href="/tentang-kami"
            className="text-xl text-gray-700 hover:text-cyan-500 transition-colors py-2 w-full text-center"
            onClick={closeMenu}
          >
            Tentang Kami
          </Link>
          <Link
            href="/layanan"
            className="text-xl text-gray-700 hover:text-cyan-500 transition-colors py-2 w-full text-center"
            onClick={closeMenu}
          >
            Layanan
          </Link>
          <Link
            href="/kontak-kami"
            className="text-xl text-gray-700 hover:text-cyan-500 transition-colors py-2 w-full text-center"
            onClick={closeMenu}
          >
            Kontak Kami
          </Link>

          <div className="pt-4 flex flex-col space-y-4 w-full max-w-xs">
            <Link href="/login" className="w-full" onClick={closeMenu}>
              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-6 text-base"
              >
                Log in
              </Button>
            </Link>
            <Link href="/register" className="w-full" onClick={closeMenu}>
              <Button className="w-full bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-white py-6 text-base">
                Register
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
