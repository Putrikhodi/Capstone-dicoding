import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function KontakKamiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Kontak
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Kami
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Punya pertanyaan atau ingin berkonsultasi? Jangan ragu untuk
            menghubungi kami
          </p>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto bg-white shadow-xl">
          <CardHeader className="text-center pb-6">
            <h2 className="text-2xl font-bold">Bantuan</h2>
            <p className="text-gray-600">
              Isi formulir berikut untuk mengirim pesan kepada tim NutriEdu
            </p>
          </CardHeader>

          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Nama Lengkap</Label>
                  <Input
                    id="fullName"
                    placeholder="Masukan Nama Lengkap Anda"
                    className="mt-1 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Masukan Email Anda"
                    className="mt-1 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Pesan</Label>
                <Textarea
                  id="message"
                  placeholder="Tuliskan pesan anda di sini"
                  rows={6}
                  className="mt-1 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 resize-none"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white py-3 text-lg">
                Kirim Pesan
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
