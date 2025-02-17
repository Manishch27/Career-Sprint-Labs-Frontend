import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://careersarathi.com'
  
  const routes = [
    '',
    '/about-us',
    '/contact-us',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
    '/refund-policy',
    '/universities',
    '/courses',
    '/universities/online',
    '/universities/distance',
    '/universities/list/ugc-deb-approved',
    '/universities/list/nirf-ranked',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}

