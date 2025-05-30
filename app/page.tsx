import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, MapPin } from "lucide-react"
import MapSection from "@/components/home/MapSection"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Jaga Nutrisi Bayi,{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Cegah</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Malnutrisi
              </span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              NutriEdu hadir sebagai solusi untuk membantu orangtua mencegah dan mengatasi malnutrisi pada bayi dan
              balita usia 0-5 tahun melalui edukasi, pemantauan, dan pembimbingan nutrisi yang tepat.
            </p>
            <Button className="bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-white px-8 py-3 text-lg">
              Konsul Status Nutrisi
            </Button>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-200 via-green-200 to-cyan-200 rounded-3xl overflow-hidden">
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
      <section className="bg-gradient-to-br from-cyan-50 to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Layanan{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                NutriEdu
              </span>
            </h2>
            <p className="text-gray-600">
              Berbagai layanan untuk membantu memantau dan meningkatkan status gizi bayi dan balita Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Pemeriksaan Status Gizi</h3>
                <p className="text-gray-600 mb-6">
                  Analisis cepat status gizi bayi berdasarkan data pertumbuhan dan pemeriksaan
                </p>
                <Button className="bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-white">
                  Selengkapnya →
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Artikel Edukasi</h3>
                <p className="text-gray-600 mb-6">
                  Informasi terbaru tentang nutrisi dan pencegahan malnutrisi pada bayi
                </p>
                <Button className="bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-white">
                  Selengkapnya →
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Lokasi Terdekat</h3>
                <p className="text-gray-600 mb-6">Temukan penyedia dan puskesmas terdekat untuk pemeriksaan langsung</p>
                <Button className="bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-white">
                  Selengkapnya →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Artikel{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Kesehatan</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-cyan-100 to-green-100">
                  <Image
                    src="/images/baby-1.jpg"
                    alt="Healthy baby"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">15 Mei 2024 • Oleh dr. Rina Putri</div>
                  <h3 className="font-semibold mb-3">Mengenal Tanda Stunting pada Bayi dan Balita</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Stunting merupakan kondisi gagal tumbuh pada anak akibat kekurangan gizi dalam waktu yang cukup
                    lama. Ketahui tanda-tandanya pada bayi dan balita.
                  </p>
                  <Button variant="outline" className="border-cyan-400 text-cyan-600 hover:bg-cyan-50">
                    Selengkapnya
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Lokasi{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Terdekat
              </span>
            </h2>
            <p className="text-gray-600">
              Temukan Puskesmas dan Posyandu terdekat untuk pemeriksaan dan konsultasi nutrisi bayi dan balita
            </p>
          </div>

          <MapSection />
        </div>
      </section>

      <Footer />
    </div>
  )
}
