import { Metadata } from 'next'
import { constructMetadata } from '@/lib/metadata'
import { HeroSection } from '@/components/hero-section'
import { UniversityCarousel } from '@/components/university-carousel'
import { CoursesSection } from '@/components/courses-section'
import { UniversityRankingsSection } from '@/components/university-rankings-section'
import { FAQsSection } from '@/components/faqs-section'
import { CTABanner } from '@/components/cta-banner'
import { ApplicationSection } from '@/components/application-section'

export const metadata: Metadata = constructMetadata({
  title: 'Career Sarathi - Your Guide to Online & Distance Education in India',
  description: 'Find your ideal program and university in India with Career Sarathi. Expert guidance for online and distance education, UGC-DEB approved universities, and career counseling.',
})

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background">
        <UniversityCarousel />
        <ApplicationSection />
      </div>
      <CoursesSection />
      <UniversityRankingsSection />
      <FAQsSection />
      <CTABanner />
    </main>
  )
}

