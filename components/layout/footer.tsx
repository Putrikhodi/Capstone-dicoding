import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, MessageCircle, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image 
                src="/images/Logo.png" 
                alt="Logo" 
                width={150} 
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className="text-blue-200 mb-4">
              Setiap kegiatan adalah momen berharga. Nutri Edu mengabadikan cerita dan membagikan ilmu demi gizi dan
              pengetahuan yang lebih luas.
            </p>
            <div className="flex gap-4">
              <MessageCircle className="w-5 h-5 text-blue-300 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-blue-300 hover:text-white cursor-pointer" />
              <Facebook className="w-5 h-5 text-blue-300 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-blue-300 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-blue-200 hover:text-white transition-colors">
                Beranda
              </Link>
              <Link href="/tentang-kami" className="block text-blue-200 hover:text-white transition-colors">
                Tentang Kami
              </Link>
              <Link href="/layanan" className="block text-blue-200 hover:text-white transition-colors">
                Layanan
              </Link>
              <Link href="/kontak-kami" className="block text-blue-200 hover:text-white transition-colors">
                Kontak Kami
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Centre</h3>
            <p className="text-blue-200 mb-2">NutriEdu Organization</p>
            <p className="text-cyan-400">app@nutriedu.com</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-400 to-green-400 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-white text-sm">© Copyright 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
