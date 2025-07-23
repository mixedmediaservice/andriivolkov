export function GET() {
  const robotsContent = `User-agent: *
Allow: /

# Important pages
Allow: /paintings
Allow: /tattoo
Allow: /about
Allow: /contact

# Static assets
Allow: /images/
Allow: /_next/static/

# Sitemap
Sitemap: https://andriivolkov.com/sitemap.xml

# Block admin areas (if any in future)
Disallow: /admin/
Disallow: /api/

# Common bot instructions
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Block problematic bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /`;

  return new Response(robotsContent, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}