'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageItem {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  columns?: number;
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const gridClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <>
      <div className={`grid ${gridClass} gap-6`}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className="group cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative aspect-square bg-neutral-800 overflow-hidden hover:opacity-90 transition-opacity">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-neutral-300 text-xl"
            >
              ✕ Close
            </button>
            <div className="relative">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={800}
                height={800}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
            {images.length > 1 && (
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
                  }}
                  className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
                  }}
                  className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}