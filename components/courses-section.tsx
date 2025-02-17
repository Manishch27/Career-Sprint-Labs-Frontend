'use client'

import Link from 'next/link'
import {BookOpen, Briefcase, Code, Calculator, Newspaper, PenTool, FlaskRoundIcon as Flask, Building2, ScrollText, Award, LibraryBig, BadgeIcon as Certificate, School, Lightbulb } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const courses = [
  { name: 'MBA', icon: Briefcase, description: 'Master of Business Administration', slug: 'mba' },
  { name: 'MCA', icon: Code, description: 'Master of Computer Applications', slug: 'mca' },
  { name: 'MCOM', icon: Calculator, description: 'Master of Commerce', slug: 'mcom' },
  { name: 'MA', icon: BookOpen, description: 'Master of Arts', slug: 'ma' },
  { name: 'MSC', icon: Flask, description: 'Master of Science', slug: 'msc' },
  { name: 'MJMC', icon: Newspaper, description: 'Master of Journalism and Mass Communication', slug: 'majmc' },
  { name: 'BBA', icon: Building2, description: 'Bachelor of Business Administration', slug: 'bba' },
  { name: 'BCA', icon: PenTool, description: 'Bachelor of Computer Applications', slug: 'bca' },
  { name: 'BCOM', icon: ScrollText, description: 'Bachelor of Commerce', slug: 'bcom' },
  { name: 'BA', icon: LibraryBig, description: 'Bachelor of Arts', slug: 'ba' },
  { name: 'BSC', icon: Lightbulb, description: 'Bachelor of Science', slug: 'bsc' },
  { name: 'BJMC', icon: Newspaper, description: 'Bachelor of Journalism and Mass Communication', slug: 'bjmc' },
  { name: 'PGP', icon: Award, description: 'Post Graduate Program', slug: 'pgp' },
  { name: 'DIPLOMA', icon: School, description: 'Diploma Courses', slug: 'diploma' },
  { name: 'CERTIFICATE', icon: Certificate, description: 'Certificate Programs', slug: 'certificate' }
]

export function CoursesSection() {
  return (
    <section className="w-full py-20 bg-white dark:bg-background">
      <div className="lg:px-16 px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 dark:text-blue-50">
            Explore Our
            <span className="text-blue-600"> Academic Programs</span>
          </h2>
          <p className="text-xl text-blue-700/80 dark:text-blue-200/80 max-w-3xl mx-auto">
            Discover a wide range of undergraduate, postgraduate, and professional courses tailored to your career aspirations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <Link key={course.slug} href={`/courses/${course.slug}`}>
                <Card 
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-950 dark:text-blue-50 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {course.name}
                      </h3>
                      <p className="text-sm text-blue-700/80 dark:text-blue-200/80 mt-1 hidden">
                        {course.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

