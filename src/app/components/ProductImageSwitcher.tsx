'use client';

import Image from 'next/image';

const ProductImageSwitcher: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-blue-50 rounded-2xl" style={{ minHeight: '400px' }}>
      <Image 
        src="/ALPHAX.png" 
        alt="ALPHA X Product" 
        width={500} 
        height={500} 
        className="object-contain"
        style={{ width: "auto", height: "auto" }}
        priority
      />
    </div>
  );
};

export default ProductImageSwitcher;

