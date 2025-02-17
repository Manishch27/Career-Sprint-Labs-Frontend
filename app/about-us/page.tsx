import type { Metadata } from "next"
import Image from "next/image"
import { Building2, Users, GraduationCap, BookOpen, ArrowRight, Star, Globe, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { constructMetadata } from "@/lib/metadata"

export const metadata: Metadata = constructMetadata({
  title: "About Career Sarathi - Leading Education Consultancy in India",
  description:
    "Learn about Career Sarathi, India's premier education consultancy connecting students with top UGC-DEB approved universities for online and distance education since 2007.",
})

const stats = [
  {
    number: "10,000+",
    label: "Enrolled Students",
    icon: Users,
  },
  {
    number: "10+",
    label: "Years of Experience",
    icon: Building2,
  },
  {
    number: "100+",
    label: "Partner Universities",
    icon: GraduationCap,
  },
  {
    number: "500+",
    label: "Courses Offered",
    icon: BookOpen,
  },
]

const admissionSteps = [
  {
    title: "Submit Form",
    description: "Fill in and submit your application form online",
    icon: "/icons/submit-form.svg",
  },
  {
    title: "Expert Counselling",
    description: "Receive personalized guidance from our expert counsellors",
    icon: "/icons/counselling.svg",
  },
  {
    title: "Choose University",
    description: "Select your ideal course & university with our assistance",
    icon: "/icons/university.svg",
  },
  {
    title: "Online Payment",
    description: "Complete the admission process with secure online payment",
    icon: "/icons/payment.svg",
  },
  {
    title: "Confirmation",
    description: "Receive your admission confirmation via email",
    icon: "/icons/confirmation.svg",
  },
]

const mediaLogos = [
  { src: "/media/dailyhunt.png", alt: "Dailyhunt" },
  { src: "/media/hindustan-times.png", alt: "Hindustan Times" },
  { src: "/media/mid-day.png", alt: "Mid Day" },
  { src: "/media/latestly.png", alt: "Latestly" },
  { src: "/media/the-print.png", alt: "The Print" },
  { src: "/media/ani.png", alt: "ANI" },
]

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute w-96 h-96 -top-10 -left-10 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute w-96 h-96 -bottom-10 -right-10 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        <div className="lg:px-16 px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Empowering Education
                <span className="block text-yellow-300 mt-2">Transforming Lives</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-lg">
                Career Sarathi: Your trusted partner in navigating the world of online and distance education since
                2007.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300">
                  Our Story <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 transition-colors duration-300"
                >
                  Explore Programs
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/about-hero.jpg"
                  alt="Career Sarathi Team"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">Transforming Education</p>
                  <p className="text-sm">Empowering students across India</p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-blue-800 font-bold text-xl z-20 shadow-lg">
                10+ Years
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-transform duration-300"
                >
                  <Icon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <h3 className="text-2xl font-bold mb-1">{stat.number}</h3>
                  <p className="text-sm text-blue-100">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="lg:px-16 px-4 py-16">
        {/* Our Mission */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Accessible Education</h3>
                <p>Breaking barriers to provide quality education for all, regardless of location or background.</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                <p>Offering personalized counseling to help students make informed decisions about their future.</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p>Partnering with top UGC-DEB approved universities to ensure high-quality education.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About SODE */}
        <section className="mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">SODE</h2>
            <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-8">
              (School of Online & Distance Education)
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/images/office-exterior.jpg"
                  alt="Career Sarathi Office Exterior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/images/office-interior.jpg"
                  alt="Career Sarathi Office Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p>
                The School of Online & Distance Education (SODE) is the cornerstone of Career Sarathi's mission.
                Established in 2007, SODE has been at the forefront of connecting aspiring students and working
                professionals with top-tier distance education universities across India.
              </p>
              <p>
                Our platform offers a diverse array of professional undergraduate and postgraduate courses, all
                accessible through online learning. With SODE, we've helped thousands of students chart their path to a
                successful career, bridging the gap between ambition and opportunity.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="bg-blue-600 rounded-xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <Icon className="w-12 h-12 text-yellow-300" />
                    </div>
                    <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                    <p className="text-blue-100">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Image
                      src={step.icon || "/placeholder.svg"}
                      alt={step.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Media Coverage */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Featured In</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {mediaLogos.map((logo, index) => (
                <div key={index} className="relative w-32 h-12">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>
              <blockquote className="text-xl italic text-center mb-4">
                "Career Sarathi transformed my educational journey. Their expert guidance helped me find the perfect
                online program, and now I'm well on my way to achieving my career goals."
              </blockquote>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/student-avatar.jpg"
                  alt="Student"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Priya Sharma</p>
                  <p className="text-blue-200">MBA Student, Class of 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Let us help you find the perfect educational path for your future.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Expert Guidance <ArrowRight className="ml-2" />
          </Button>
        </section>
      </div>
    </div>
  )
}

