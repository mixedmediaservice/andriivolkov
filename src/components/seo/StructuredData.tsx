interface StructuredDataProps {
  type: 'person' | 'artwork' | 'website';
  data?: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let schema = {};

  switch (type) {
    case 'person':
      schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Andrii Volkov",
        "jobTitle": "Artist",
        "description": "Contemporary artist specializing in paintings and tattoo art, known for finding extraordinary beauty in ordinary materials and urban environments.",
        "url": "https://andriivolkov.com",
        "image": "https://andriivolkov.com/images/Andrii-Volkov-Amsterdam-2019.jpeg",
        "sameAs": [
          "https://www.instagram.com/volkov.scvt",
          "https://www.aiacontemporary.com/store/andrii-volkov"
        ],
        "knowsAbout": [
          "Contemporary Art",
          "Mixed Media Painting",
          "Tattoo Art",
          "Street Art Documentation",
          "Alternative Materials"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Visual Artist",
          "occupationLocation": {
            "@type": "Place",
            "name": "Amsterdam, Netherlands"
          }
        }
      };
      break;
    
    case 'artwork':
      schema = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "creator": {
          "@type": "Person",
          "name": "Andrii Volkov"
        },
        "artMedium": "Mixed Media, Paint, Alternative Materials",
        "artworkSurface": "Canvas",
        "genre": "Contemporary Art",
        ...data
      };
      break;
    
    case 'website':
      schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Andrii Volkov - Artist Portfolio",
        "url": "https://andriivolkov.com",
        "description": "Portfolio of contemporary artist Andrii Volkov, featuring original paintings and tattoo art that transforms ordinary materials into extraordinary artistic expressions.",
        "author": {
          "@type": "Person",
          "name": "Andrii Volkov"
        },
        "inLanguage": "en-US"
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}