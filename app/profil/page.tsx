import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Trash2 } from "lucide-react";

export default function ProfilePage({ onLogout }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      

      {/* Konten Profil */}
      <main className="max-w-4xl mx-auto px-4 py-10 flex-grow">
        <h2 className="text-3xl font-bold text-center">
          Profile <span className="text-[#0CBF91]">Saya</span>
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Selamat datang, Lihat riwayat analisis status nutrisi anak yang telah Anda lakukan
        </p>

        {/* Informasi Pengguna */}
        <div className="bg-white rounded-xl shadow-md mt-10 p-6 space-y-4">
          <h3 className="text-lg font-semibold">Informasi Pengguna</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-800">
            <div>
              <strong>Nama Lengkap</strong>
              <p>Keanu Dustin Kemala</p>
            </div>
            <div>
              <strong>Email</strong>
              <p>keanudustin10@gmail.com</p>
            </div>
            <div>
              <strong>Alamat</strong>
              <p>Indonesia, Jakarta, Pluit</p>
            </div>
          </div>
        </div>

        {/* Riwayat Analisis */}
        <div className="bg-white rounded-xl shadow-md mt-6 p-6">
          <h3 className="text-lg font-semibold mb-4">Riwayat Analisis Nutrisi</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2">Nama Anak</th>
                  <th className="px-4 py-2">Umur</th>
                  <th className="px-4 py-2">BB/TB</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Tanggal</th>
                  <th className="px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    <div>Keanu Dustin</div>
                    <div className="text-xs text-gray-500">Laki - Laki</div>
                  </td>
                  <td className="px-4 py-2">2 thn 6 bln</td>
                  <td className="px-4 py-2">15kg / 30 cm</td>
                  <td className="px-4 py-2">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Normal</span>
                  </td>
                  <td className="px-4 py-2">31 Mei 2025</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
