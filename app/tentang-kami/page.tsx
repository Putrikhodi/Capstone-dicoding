"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target } from "lucide-react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function TentangKamiPage() {
  useEffect(() => {
    AOS.init({
      duration: 600, // durasi animasi
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="200"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-black">
              Tentang
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Kami
            </span>
          </h1>
          <p className="text-gray-600">
            Mengenal lebih dekat tentang NutriEdu dan misi kami dalam mengatasi
            malnutrisi pada bayi dan balita di Indonesia
          </p>
        </div>

        {/* Logo Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Makna Logo</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto px-4">
            <div className="flex justify-center w-full lg:w-auto">
              <div
                className="relative w-full max-w-md h-auto"
                data-aos="slide-in-left"
              >
                <Image
                  src="/images/Logo-1.png"
                  alt="NutriEdu Logo"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex-1 text-left" data-aos="slide-in-right">
              <p className="text-gray-700 mb-4">
                Logo NutriEdu menggambarkan komitmen kami dalam menjaga
                kesehatan dan nutrisi bayi melalui pendidikan dan teknologi:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Kepala Bayi:</strong> Melambangkan pengetahuan,
                    edukasi, dan kecerdasan dalam mengambil keputusan untuk
                    kesehatan anak.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Simbol Tambah:</strong> Menggambarkan kesehatan dan
                    perawatan medis yang menjadi fokus utama platform kami.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Warna Hijau:</strong> Melambangkan pertumbuhan,
                    kesehatan, dan kehidupan yang menjadi misi utama NutriEdu.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Font Modern:</strong> Mencerminkan pendekatan
                    inovatif dan teknologi dalam mengatasi masalah malnutrisi.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mb-16">
          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="slide-in-left"
          >
            <div
              className="text-3xl font-bold text-center mb-12"
              data-aos="slide-in-left"
            >
              <span className="text-[#0AB5E9]">Visi</span>
              <span className="text-gray-800"> & </span>
              <span className="text-[#00FC93]">Misi</span>
            </div>
          </h2>
          <div
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            data-aos="slide-in-right"
          >
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#00FC93] opacity rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-6">Visi</h3>
                <p className="text-gray-700 text-center">
                  Menjadi platform terdepan dalam memerangi malnutrisi pada bayi
                  dan balita di Indonesia melalui edukasi, teknologi, dan
                  pendampingan yang berkelanjutan.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#00FC93] opacity rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-6">Misi</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Menyediakan alat pemantauan status gizi yang akurat dan
                      mudah digunakan
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Menyediakan informasi dan edukasi tentang nutrisi yang
                      tepat untuk bayi dan balita
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Membangun kerjasama dengan tenaga medis dan posyandu untuk
                      penanganan komprehensif
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Mendukung program pemerintah dalam menurunkan angka
                      malnutrisi di Indonesia
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* About NutriEdu */}
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
              Tentang
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              NutriEdu
            </span>
          </h2>

          <div className="max-w-9xl mx-auto px-4 space-y-6 text-gray-700 leading-relaxed text-justify">
            <p>
              Nutri Edu adalah sebuah platform digital berbasis web yang
              dikembangkan untuk membantu deteksi dini risiko malnutrisi pada
              bayi dan ibu hamil dan tingkat. Terinspirasi dari tingginya angka
              stunting dan malnutrisi di Indonesia serta tantangan dalam
              pendistribusian bantuan gizi yang tepat sasaran, Nutri Edu hadir
              sebagai solusi inovatif yang mendukung program pemerintah seperti
              Makanan Bergizi Gratis (MBG).
            </p>
            <p>
              Menggunakan teknologi machine learning, Nutri Edu mampu
              memprediksi risiko malnutrisi secara mandiri berdasarkan data yang
              diinput oleh pengguna. Platform ini dirancang agar mudah diakses
              oleh masyarakat umum, terutama keluarga yang memiliki keterbatasan
              akses ke fasilitas kesehatan. Dengan pendekatan edukatif dan
              praktis, Nutri Edu bertujuan meningkatkan kesadaran orang tua
              terhadap status gizi anak serta mempercepat intervensi yang
              dibutuhkan untuk pencegahan malnutrisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
