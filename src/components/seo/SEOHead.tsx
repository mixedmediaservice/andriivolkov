import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string[];
  noindex?: boolean;
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = '/images/Andrii-Volkov-Amsterdam-2019.jpeg',
  ogType = 'website',
  keywords = [],
  noindex = false
}: SEOHeadProps) {
  const fullTitle = title.includes('Andrii Volkov') ? title : `${title} | Andrii Volkov - Artist`;
  const baseUrl = 'https://andriivolkov.com';
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  
  const defaultKeywords = [
    'Andrii Volkov',
    'contemporary artist',
    'paintings',
    'tattoo art',
    'mixed media',
    'Amsterdam artist',
    'street art',
    'urban art',
    'alternative materials',
    'art portfolio'
  ];
  
  const allKeywords = [...defaultKeywords, ...keywords].join(', ');

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="Andrii Volkov" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="language" content="English" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}
      
      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={`${baseUrl}${canonical || ''}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Andrii Volkov - Artist Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${baseUrl}${canonical || ''}`} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/images/volkov-profile.png" />
    </Head>
  );
}