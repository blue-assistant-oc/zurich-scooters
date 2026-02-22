'use client';

import dynamic from 'next/dynamic';
import type { Vehicle } from '@/lib/types';

const MapComponent = dynamic(() => import('./MapComponent'), { ssr: false });

interface MapWrapperProps {
  vehicles: Vehicle[];
  origin: [number, number];
  destination: [number, number] | null;
  corridorWidth: number;
  tileLayer: 'dark' | 'light' | 'osm';
  userLocation: [number, number] | null;
}

export default function MapWrapper(props: MapWrapperProps) {
  return <MapComponent {...props} />;
}
