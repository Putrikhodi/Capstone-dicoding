'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import the MapContainer component with SSR disabled
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Next.js
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

type Location = {
  id: number;
  name: string;
  type: 'puskesmas' | 'posyandu';
  position: [number, number];
  address: string;
  phone?: string;
};

export default function LocationMap() {
  const [isClient, setIsClient] = useState(false);

  // Sample data for health facilities
  const locations: Location[] = [
    {
      id: 1,
      name: 'Puskesmas Kecamatan Setiabudi',
      type: 'puskesmas',
      position: [-6.2088, 106.8456], // Jakarta coordinates
      address: 'Jl. Rasuna Said No. 10, Jakarta Selatan',
      phone: '(021) 1234567',
    },
    {
      id: 2,
      name: 'Posyandu Melati',
      type: 'posyandu',
      position: [-6.2188, 106.8556],
      address: 'Jl. Sudirman No. 15, Jakarta Selatan',
    },
    {
      id: 3,
      name: 'Puskesmas Kecamatan Menteng',
      type: 'puskesmas',
      position: [-6.1988, 106.8356],
      address: 'Jl. MH Thamrin No. 20, Jakarta Pusat',
      phone: '(021) 7654321',
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render on server-side
  if (!isClient) {
    return (
      <div className="h-96 bg-cyan-100 rounded-xl flex items-center justify-center">
        <p>Memuat peta...</p>
      </div>
    );
  }

  return (
    <div className="h-96 w-full rounded-xl overflow-hidden">
      <MapContainer
        center={[-6.2088, 106.8456]} // Default center (Jakarta)
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => (
          <Marker 
            key={location.id} 
            position={location.position}
            icon={new Icon({
              iconUrl: location.type === 'puskesmas' 
                ? '/images/marker-hospital.svg' 
                : '/images/marker-posyandu.svg',
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32]
            })}
          >
            <Popup>
              <div className="space-y-1">
                <h3 className="font-semibold">{location.name}</h3>
                <p className="text-sm">{location.address}</p>
                {location.phone && (
                  <p className="text-sm">Telp: {location.phone}</p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  {location.type === 'puskesmas' ? 'Puskesmas' : 'Posyandu'}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
