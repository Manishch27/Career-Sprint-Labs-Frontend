import { Metadata } from 'next'

const siteConfig = {
  name: 'Career Sarathi',
  description: 'Leading higher education consultancy helping students find the best online and distance learning opportunities in India',
  url: 'https://careersarathi.com',
  ogImage: 'https://careersarathi.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/careersarathi',
    facebook: 'https://facebook.com/careersarathi',
    linkedin: 'https://linkedin.com/company/careersarathi'
  }
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = '/favicon.ico',
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`
    },
    description,
    openGraph: {
      title: {
        default: title,
        template: `%s | ${siteConfig.name}`
      },
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      type: 'website',
      siteName: siteConfig.name,
      locale: 'en_US',
      url: siteConfig.url
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@careersarathi'
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}

