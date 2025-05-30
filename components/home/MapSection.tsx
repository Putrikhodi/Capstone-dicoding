'use client';

import dynamic from 'next/dynamic';

const LocationMap = dynamic(
  () => import('@/components/map/LocationMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="h-96 bg-cyan-100 rounded-xl flex items-center justify-center">
        <p>Memuat peta...</p>
      </div>
    )
  }
);

export default function MapSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Lokasi Terdekat</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan fasilitas kesehatan terdekat untuk memantau tumbuh kembang si kecil
          </p>
        </div>
        <LocationMap />
      </div>
    </section>
  );
}
