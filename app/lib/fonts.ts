import localFont from 'next/font/local';

export const euclidCircular = localFont({
  src: [
    {
      path: '../euclid-circular-b/Euclid Circular B Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../euclid-circular-b/Euclid Circular B Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../euclid-circular-b/Euclid Circular B Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../euclid-circular-b/Euclid Circular B SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../euclid-circular-b/Euclid Circular B Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-euclid-circular',
  display: 'swap',
});

// For Gordita, using a similar fallback since it's not available
// You can replace this with the actual Gordita font files if you have them
export const gordita = localFont({
  src: [
    {
      path: '../euclid-circular-b/Euclid Circular B Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-gordita',
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
});

