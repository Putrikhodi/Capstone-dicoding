"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, MapPin } from "lucide-react";
import MapSection from "@/components/home/MapSection";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Link from 'next/link';


export default function HomePage() {
  let baseDuration = 200;

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16 bg-white">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-slide-in-left mt-8 md:mt-0 ">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Jaga Nutrisi Bayi,{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Cegah
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Malnutrisi
              </span>
            </h1>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
              NutriEdu hadir sebagai solusi untuk membantu orangtua mencegah dan
              mengatasi malnutrisi pada bayi dan balita usia 0-5 tahun melalui
              edukasi, pemantauan, dan pembimbingan nutrisi yang tepat.
            </p>
            <Link href='/layanan' className="bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 rounded-md hover:to-green-500 text-white px-8 py-3 text-lg">
              Pelajari Status Nutrisi
            </Link >
          </div>
          <div className="relative animate-slide-in-right">
            <div className="w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-purple-200 via-green-200 to-cyan-200 rounded-2xl md:rounded-3xl overflow-hidden">
              <Image
                src="/images/mom-son-1.jpg"
                alt="Happy mother with her son"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-b from-[#FFFFFF] to-[#d9ffef] py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Layanan{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                NutriEdu
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Berbagai layanan untuk membantu memantau dan meningkatkan status
              gizi bayi dan balita Anda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card
              className="shadow-lg hover:shadow-xl transition-shadow h-full"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              <CardContent className="p-6 sm:p-8 text-center flex flex-col h-full">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Pemeriksaan Status Gizi
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                  Analisis cepat status gizi bayi berdasarkan data pertumbuhan
                  dan pemeriksaan
                </p>
                <Link href='/layanan' className="h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-white text-sm sm:text-base">
                  Selengkapnya →
                </Link>
              </CardContent>
            </Card>

            <Card
              className="shadow-lg hover:shadow-xl transition-shadow h-full"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              <CardContent className="p-6 sm:p-8 text-center flex flex-col h-full">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Artikel Edukasi</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                  Informasi terbaru tentang nutrisi dan pencegahan malnutrisi
                  pada bayi
                </p>
                <Link href='#article' className="h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-white text-sm sm:text-base">
                  Selengkapnya →
                </Link>
              </CardContent>
            </Card>

            <Card
              className="shadow-lg hover:shadow-xl transition-shadow h-full"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <CardContent className="p-6 sm:p-8 text-center flex flex-col h-full">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Lokasi Terdekat</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                  Temukan penyedia dan puskesmas terdekat untuk pemeriksaan
                  langsung
                </p>
                <Link href='#location' className="h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-white text-sm sm:text-base">
                  Selengkapnya →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-[#d9ffef] to-[#feffff]" id="article">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Artikel{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Kesehatan
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/images/artikel-1.png",
                title: "Gejala Stunting, Penyebab, dan Cara Mencegahnya yang Benar. Bumil Wajib Tahu!",
                date: "20 September 2024",
                author: "dr. Bintari Anindhita, Sp.GK",
                excerpt:
                  "Stunting adalah gangguan pertumbuhan dan perkembangan anak karena kurangnya nutrisi dan infeksi, yang ditandai dengan tinggi badan yang berada di bawah rata-rata anak seusianya.",
                link: "https://www.mitrakeluarga.com/artikel/stunting-gejala-penyebab-cara-mengatasi"
              },
              {
                image: "/images/artikel-3.png",
                title: "Mengenal Stunting - Pengertian, Penyebab, dan Pencegahannya",
                date: "22 Agustus 2024",
                author: "Tim Medis Siloam Hospitals",
                excerpt:
                  "Penyebab utama dari stunting adalah malnutrisi pada ibu hamil dan kurangnya asupan nutrisi selama masa pertumbuhan anak.",
                link: "https://www.siloamhospitals.com/informasi-siloam/artikel/apa-itu-stunting"
              },
              {
                image: "/images/artikel-2.png",
                title: "Ketahui Masalah Stunting dan Cara Mengatasi Stunting",
                date: "20 Mei 2022",
                author: "Tim Nestlehealthsciene",
                excerpt:
                  "Merujuk Organisasi Kesehatan Dunia atau World Health Organization (WHO), stunting adalah gangguan tumbuh kembang pada anak lantaran gizi buruk, infeksi berulang, serta stimulasi psikososial yang tidak memadai.",
                link: "https://www.nestlehealthscience.co.id/artikel/masalah-stunting-anak"
              },
            ].map((item, index) => {
              const duration = 500 + index * 200;
              return (
                <Card
                  key={index}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col"
                  data-aos="fade-up"
                  data-aos-duration={duration}
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-100 to-green-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <CardContent className="p-4 sm:p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="text-xs sm:text-sm text-gray-500 mb-2">
                        {item.date} • Oleh {item.author}
                      </div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                        {item.excerpt}
                      </p>
                    </div>

                    <Button
                      variant="outline"
                      className="mt-auto border-cyan-400 text-cyan-600 hover:bg-cyan-50"
                    >
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        Selengkapnya
                      </a>
                    </Button>
                  </CardContent>
                </Card>

              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16" id="location">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Lokasi{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Terdekat
              </span>
            </h2>
            <p className="text-gray-600">
              Temukan Puskesmas dan Posyandu terdekat untuk pemeriksaan dan
              konsultasi nutrisi bayi dan balita
            </p>
          </div>

          <MapSection />
        </div>
      </section>
    </div>
  );
}
