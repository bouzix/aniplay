export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/anime/', '/api/'],
    },
    sitemap: 'https://1001anime.com/sitemap.xml',
  }
}