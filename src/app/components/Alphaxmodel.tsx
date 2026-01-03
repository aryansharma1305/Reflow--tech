'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const Scene = dynamic(() => import('./Scene'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-blue-50 rounded-2xl">
      <div className="text-center">
        <div className="text-blue-600 font-semibold mb-2">Loading 3D Model...</div>
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  )
});

const Alphaxmodel: React.FC = () => {
  const [key, setKey] = useState(0);

  // Force remount on component mount to fix refresh issues
  useEffect(() => {
    setKey(Date.now());
  }, []);

  return (
    <div 
      className="w-full h-full absolute inset-0" 
      style={{ 
        minHeight: '400px', 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <Scene key={key} modelUrl="/model/compressed.glb" />
    </div>
  );
};

export default Alphaxmodel;