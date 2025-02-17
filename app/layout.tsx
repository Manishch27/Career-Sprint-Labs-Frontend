import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Layout } from '@/components/layout'
import { PopupForm } from '@/components/popup-form'
import { constructMetadata } from '@/lib/metadata'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Schema.org markup for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Career Sarathi",
              "url": "https://careersarathi.com",
              "logo": "https://careersarathi.com/logo.png",
              "description": "Leading higher education consultancy helping students find the best online and distance learning opportunities in India",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Education Street",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110001",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-1234567890",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://facebook.com/careersarathi",
                "https://twitter.com/careersarathi",
                "https://linkedin.com/company/careersarathi"
              ]
            })
          }}
        />
        <script
          src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places"
          async
          defer
        ></script>
      </head>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
          <PopupForm />
        </ThemeProvider>
      </body>
    </html>
  )
}

