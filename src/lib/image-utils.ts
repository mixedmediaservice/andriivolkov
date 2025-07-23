// Image optimization utilities

// Generate a simple blur placeholder
export const generateBlurPlaceholder = (width: number, height: number, color = '#f1f5f9') => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:0.3" />
          <stop offset="50%" style="stop-color:${color};stop-opacity:0.5" />
          <stop offset="100%" style="stop-color:${color};stop-opacity:0.3" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#gradient)" />
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
};

// Generate responsive image sizes based on the container
export const getImageSizes = (breakpoints: { mobile?: string; tablet?: string; desktop?: string }) => {
  const { mobile = '100vw', tablet = '50vw', desktop = '33vw' } = breakpoints;
  return `(max-width: 768px) ${mobile}, (max-width: 1200px) ${tablet}, ${desktop}`;
};

// Common image configurations for different use cases
export const imageConfigs = {
  hero: {
    sizes: '100vw',
    priority: true,
    quality: 90,
  },
  gallery: {
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    priority: false,
    quality: 85,
  },
  portrait: {
    sizes: '(max-width: 1024px) 100vw, 50vw',
    priority: true,
    quality: 85,
  },
  thumbnail: {
    sizes: '(max-width: 768px) 50vw, 25vw',
    priority: false,
    quality: 75,
  },
};

// Convert image extension to webp equivalent
export const getOptimizedImageSrc = (src: string): string => {
  // For development, return original path
  if (process.env.NODE_ENV === 'development') {
    return src;
  }
  
  // Next.js will automatically serve WebP if supported by browser
  return src;
};

// Preload critical images
export const preloadImage = (src: string) => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  }
};