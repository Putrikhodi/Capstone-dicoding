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
    <section className="py-16 bg-white relative z-0">
      <div className="container mx-auto px-4">
        
        <LocationMap />
      </div>
    </section>
  );
}
