import { Metadata } from 'next'
import Image from 'next/image'
import { constructMetadata } from '@/lib/metadata'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, BookOpen, Users, GraduationCap, FileText, ArrowRight, Star } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
  title: 'BOSSE - Board Of Open Schooling & Skill Education | Career Sarathi',
  description: 'Learn about the Board Of Open Schooling & Skill Education (BOSSE) and its programs for open schooling and skill development.',
})

export default function BOSSEPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-blue-500 skew-x-12 transform origin-bottom"></div>
        <div className="lg:px-16 px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Empowering Learners Through Open Education
              </h1>
              <p className="text-xl mb-6 text-blue-100">
                Discover flexible learning opportunities with the Board Of Open Schooling & Skill Education (BOSSE)
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <Image
                  src="/images/bosse-hero-image.png"
                  alt="BOSSE Education"
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
        {/* About BOSSE */}
        <Card className="mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-blue-50 dark:bg-blue-900/50">
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">About BOSSE</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The Board Of Open Schooling & Skill Education (BOSSE) is an autonomous institution established by the Government of Sikkim. It aims to provide quality education through open schooling and promote skill development among learners. BOSSE offers flexible learning opportunities, allowing students to pursue education at their own pace, breaking barriers of traditional schooling systems.
            </p>
          </CardContent>
        </Card>

        {/* Key Features */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Flexible Learning", icon: BookOpen, description: "Study at your own pace and convenience" },
            { title: "Skill Development", icon: GraduationCap, description: "Focus on practical skills and vocational training" },
            { title: "Inclusive Education", icon: Users, description: "Opportunities for all, including dropouts and working professionals" },
            { title: "Recognized Certification", icon: FileText, description: "Certificates recognized by various institutions and employers" },
            { title: "Comprehensive Curriculum", icon: CheckCircle, description: "Well-designed courses covering academic and vocational subjects" },
          ].map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full p-4 mb-4">
                <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
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
            { title: "Secondary Course (Class 10)", badge: "Academic" },
            { title: "Senior Secondary Course (Class 12)", badge: "Academic" },
            { title: "Vocational Courses", badge: "Skill Development" },
            { title: "Open Basic Education", badge: "Foundational" },
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
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Student Testimonial</h2>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
              <Image src="/images/student-avatar.jpg" alt="Student" width={80} height={80} />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              "BOSSE has given me the flexibility to continue my education while working. The curriculum is comprehensive and the support from teachers is excellent. I'm grateful for this opportunity to learn and grow."
            </p>
            <p className="font-semibold text-blue-600 dark:text-blue-400">Rahul Sharma</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Senior Secondary Student</p>
          </div>
        </div>

        {/* Admission Process */}
        <Card className="mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-blue-50 dark:bg-blue-900/50">
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">Admission Process</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Visit the official BOSSE website</li>
              <li>Choose the desired program</li>
              <li>Fill out the online application form</li>
              <li>Upload required documents</li>
              <li>Pay the registration fee</li>
              <li>Receive confirmation and start your learning journey</li>
            </ol>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Educational Journey?</h2>
          <p className="text-xl mb-6">Join BOSSE today and unlock your potential through flexible, quality education.</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Contact Information */}
        <Card className="mt-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-blue-50 dark:bg-blue-900/50">
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">Contact BOSSE</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For more information or inquiries, please contact:
            </p>
            <address className="not-italic text-gray-700 dark:text-gray-300">
              Board Of Open Schooling & Skill Education (BOSSE)<br />
              Sikkim State Open School Complex<br />
              Syari, Gangtok, East Sikkim - 737102<br />
              Phone: +91-3592-295335<br />
              Email: bosse.edu.in@gmail.com
            </address>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

