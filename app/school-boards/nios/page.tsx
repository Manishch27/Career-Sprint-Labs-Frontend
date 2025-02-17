import { Metadata } from 'next'
import Image from 'next/image'
import { constructMetadata } from '@/lib/metadata'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, BookOpen, Users, GraduationCap, FileText, Globe, ArrowRight} from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'NIOS - The National Institute of Open Schooling | Career Sarathi',
  description: 'Discover the National Institute of Open Schooling (NIOS) and its comprehensive open schooling programs for learners across India.',
})

export default function NIOSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative bg-green-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-green-500 skew-x-12 transform origin-bottom"></div>
        <div className="lg:px-16 px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Open Education for All
              </h1>
              <p className="text-xl mb-6 text-green-100">
                Explore India&apos;s largest open schooling system with the National Institute of Open Schooling (NIOS)
              </p>
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                Discover Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute top-0 left-0 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <Image
                  src="/images/nios-hero-image.png"
                  alt="NIOS Education"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="lg:px-16 px-4 py-16">
        {/* About NIOS */}
        <Card className="mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-green-50 dark:bg-green-900/50">
            <CardTitle className="text-2xl font-bold text-green-600 dark:text-green-400">About NIOS</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The National Institute of Open Schooling (NIOS) is an autonomous organization under the Ministry of Education, Government of India. Established in 1989, NIOS provides flexible, learner-centric quality education for all, with a special focus on disadvantaged groups. It is the largest open schooling system in the world, offering academic and vocational courses up to pre-degree level.
            </p>
          </CardContent>
        </Card>

        {/* Key Features */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Flexible Learning", icon: BookOpen, description: "Study at your own pace with no age limit" },
            { title: "Wide Reach", icon: Globe, description: "Study centers across India and abroad" },
            { title: "Diverse Courses", icon: GraduationCap, description: "Academic, vocational, and life enrichment courses" },
            { title: "Inclusive Education", icon: Users, description: "Special provisions for differently-abled learners" },
            { title: "Recognized Certification", icon: FileText, description: "Certificates equivalent to formal education boards" },
            { title: "Modern Learning", icon: CheckCircle, description: "Multimedia and online learning resources" },
          ].map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-100 dark:bg-green-900/50 rounded-full p-4 mb-4">
                <feature.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Programs Offered */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Programs Offered</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { title: "Open Basic Education (OBE)", badge: "Foundational" },
            { title: "Secondary Course", badge: "Academic" },
            { title: "Senior Secondary Course", badge: "Academic" },
            { title: "Vocational Education Courses", badge: "Skill Development" },
            { title: "Indian Sign Language", badge: "Special Program" },
            { title: "Online Courses", badge: "Digital Learning" },
          ].map((program, index) => (
            <Card key={index} className="flex justify-between items-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{program.title}</h3>
                <Badge variant="secondary" className="mt-2">{program.badge}</Badge>
              </div>
              <Button variant="outline">Learn More</Button>
            </Card>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Student Testimonial</h2>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
              <Image src="/images/nios-student-avatar.jpg" alt="NIOS Student" width={80} height={80} />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            &quot;NIOS has been a game-changer for me. As a working professional, I could complete my senior secondary education without compromising my job. The course material is excellent, and the support from NIOS has been outstanding.&quot;
            </p>
            <p className="font-semibold text-green-600 dark:text-green-400">Priya Patel</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Senior Secondary Graduate</p>
          </div>
        </div>

        {/* Admission Process */}
        <Card className="mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-green-50 dark:bg-green-900/50">
            <CardTitle className="text-2xl font-bold text-green-600 dark:text-green-400">Admission Process</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Visit the official NIOS website (www.nios.ac.in)</li>
              <li>Choose the desired course (Secondary/Senior Secondary/Vocational)</li>
              <li>Register online and create your account</li>
              <li>Fill out the online admission form</li>
              <li>Upload required documents</li>
              <li>Pay the admission fee online</li>
              <li>Choose your study center and subjects</li>
              <li>Download your Identity Card and start learning</li>
            </ol>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="bg-green-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Embrace Open Learning with NIOS</h2>
          <p className="text-xl mb-6">Take the first step towards your educational goals. Join NIOS today!</p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
            Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Contact Information */}
        <Card className="mt-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-green-50 dark:bg-green-900/50">
            <CardTitle className="text-2xl font-bold text-green-600 dark:text-green-400">Contact NIOS</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For more information or inquiries, please contact:
            </p>
            <address className="not-italic text-gray-700 dark:text-gray-300">
              The National Institute of Open Schooling (NIOS)<br />
              A-24/25, Institutional Area, Sector-62<br />
              NOIDA - 201309, Uttar Pradesh<br />
              Learner Support Centre: 1800 180 9393<br />
              Email: lsc@nios.ac.in
            </address>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

