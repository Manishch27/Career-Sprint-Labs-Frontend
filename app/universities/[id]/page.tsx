'use client'

import { useState, useRef, useEffect} from 'react'
import { universities } from '@/data/universities'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from 'next/image'
import {MapPin, GraduationCap, Award, Book, Clock, MessageCircle, ArrowRight, Phone, FileText, Calendar, IndianRupee } from 'lucide-react'
import Link from 'next/link'
import { Users, FileCheck, PiggyBank, Users2, Building2, Star } from 'lucide-react';
import { CircleDot, Send, Wallet, CheckCircle2 } from 'lucide-react'
import { Briefcase, Globe2, Laptop} from 'lucide-react'

export default function UniversityDetailPage({ params }: { params: { id: string }}) {

  const university = universities.find(uni => uni.id === params.id)
  const [activeImage, setActiveImage] = useState(0)
  const navRef = useRef<HTMLDivElement>(null);
  const [activeNavItem, setActiveNavItem] = useState(1);
  
    useEffect(()=>{
  window.scrollTo(0,0);
},[])

useEffect(() => {
  const handleScroll = () => {
    if (navRef.current) {
      const scrollPosition = navRef.current.scrollLeft
      const itemWidth = navRef.current.querySelector('button')?.offsetWidth || 0
      const activeIndex = Math.round(scrollPosition / itemWidth)
      setActiveNavItem(activeIndex)
    }
  }

  if (navRef.current) {
    navRef.current.addEventListener('scroll', handleScroll)
  }

  return () => {
    if (navRef.current) {
      navRef.current.removeEventListener('scroll', handleScroll)
    }
  }
}, [])

  if (!university) {
    return <div>University not found</div>
  }

  const images = [
    university.image,
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600'
  ]

  const navItems = ['About', 'Courses', 'EMI', 'Benefits', 'Exam', 'Approvals', 'Placement', 'Degree', 'Admission', 'FAQs']
  

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-900 to-blue-800 text-white">
  <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
  <div className="lg:px-16 px-4 py-8 sm:py-12 md:py-24 lg:py-32 relative">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4 md:space-y-6 lg:space-y-8 text-center md:text-left">
        <div className="space-y-2 md:space-y-4">
          <Badge className="bg-blue-700/50 text-white hover:bg-blue-700/70 backdrop-blur-sm">
            {university.accreditation.grade} Grade by {university.accreditation.body}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {university.name}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100">
            Transform your future with our industry-aligned programs
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 lg:gap-6">
          {university.approvals?.slice(0, 5).map((approval) => (
            <div
              key={university.id}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 md:px-4 md:py-2"
            >
              <span className="text-xs md:text-sm font-medium">{approval.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 w-full sm:w-auto">
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 bg-white/10 hover:bg-black/10 w-full sm:w-auto"
          >
            <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2" />
            Talk to Counselor
          </Button>
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden shadow-2xl mt-8 md:mt-0">
        <div className="aspect-[16/9] relative">
          <Image
            src={images[activeImage]}
            alt={university.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                activeImage === index
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              onClick={() => setActiveImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Sticky Horizontal Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-blue-600 text-white px-4 py-3 flex items-center justify-center overflow-x-auto">
        <div className="flex justify-center gap-4 whitespace-nowrap" ref={navRef} aria-label="University Navigation">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md font-medium ${activeNavItem === index ? 'bg-yellow-400 text-blue-900' : 'hover:bg-yellow-200 hover:text-blue-900'}`}
              aria-current={activeNavItem === index ? 'page' : undefined}
              onClick={() => {
                const element = document.getElementById(item.toLowerCase())
                setActiveNavItem(index);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="lg:px-16 px-4 py-8">
        <div className="space-y-12">
          
          {/* About Section */}
          <section id="about" className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">About {university.name}</h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p>{university.about}</p>
                  <p className="mt-4">
                    The vision of {university.name} is to provide higher education degrees without compromising
                    the quality of education to students from the comfort of their homes and to working
                    professionals who are looking to upscale their knowledge and career.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Course Fees Section */}
          <section id="courses" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Online Degree Courses with Updated Fees for 2024
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                {university.name} offers various online degree courses to enhance your career skills and academic knowledge.
                The university provides education in multiple disciplines, including Arts, Commerce, Management, IT, and more.
              </p>
            </div>

            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-blue-50 dark:bg-blue-900/20">
                      <TableRow>
                        <TableHead className="text-blue-900 dark:text-blue-100 font-semibold">Course</TableHead>
                        <TableHead className="text-blue-900 dark:text-blue-100 font-semibold">Degree Type</TableHead>
                        <TableHead className="text-blue-900 dark:text-blue-100 font-semibold">Duration</TableHead>
                        <TableHead className="text-blue-900 dark:text-blue-100 font-semibold">Semester Fee</TableHead>
                        <TableHead className="text-blue-900 dark:text-blue-100 font-semibold">EMI Available</TableHead>
                        <TableHead className="text-blue-900 dark:text-blue-100 font-semibold">Brochure</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {university.courses.map((course, index) => (
                        <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                          <TableCell className="font-medium">
                            <Link href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                              {course.program}
                            </Link>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <GraduationCap className="h-4 w-4 text-gray-500" />
                              <span>{course.degree}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-gray-500" />
                              <span>{course.duration}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1 font-semibold text-pink-600 dark:text-pink-400">
                              <IndianRupee className="h-4 w-4" />
                              {course.feesPerSemester ? course.feesPerSemester.toLocaleString() : 'N/A'}/-
                              <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
                               {course.duration.includes("Months")?"Total":"per semester"}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                              Yes
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm" className="hover:bg-orange-50 hover:text-orange-600 hover:border-orange-600">
                              <FileText className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 sm:p-6 space-y-4">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                Why Choose Our Programs?
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-blue-100 dark:bg-blue-800/50 p-2">
                    <Book className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900 dark:text-blue-100">Industry-Aligned</h4>
                    <p className="text-sm text-blue-700/80 dark:text-blue-300/80">Curriculum designed with industry experts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-blue-100 dark:bg-blue-800/50 p-2">
                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900 dark:text-blue-100">Flexible Learning</h4>
                    <p className="text-sm text-blue-700/80 dark:text-blue-300/80">Study at your own pace and schedule</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-blue-100 dark:bg-blue-800/50 p-2">
                    <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900 dark:text-blue-100">Recognized Degree</h4>
                    <p className="text-sm text-blue-700/80 dark:text-blue-300/80">UGC & AICTE approved programs</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Approvals Section */}
          <section id="approvals" className="space-y-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                {university.name} Approved By
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                Recognized and accredited by top educational bodies in India and globally
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {university.approvals.map((approval, index) => (
                <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-2 sm:mb-4">
                      <Image
                        src={approval.image}
                        alt={`${approval.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-1 sm:mb-2">
                      {approval.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hidden group-hover:block">
                      {approval.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* EMI Options Section */}
          <section id="emi" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                EMI Options Available At {university.name}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {university.name} offers convenient EMI (Equated Monthly Installment) facilities to help students manage their educational expenses effectively. These EMI options make it easier for students to pay their fees in monthly instalments.
              </p>
            </div>

            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Key Features of EMI Facility at {university.name}
                </h3>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-blue-50 dark:bg-blue-900/20">
                      <IndianRupee className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Flexible Payment Plans</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Distribute the cost of your tuition fees over convenient monthly instalments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-green-50 dark:bg-green-900/20">
                      <Badge className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Zero-Interest EMI</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Pay your fees in instalments without incurring extra interest charges, making education more cost-effective.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-purple-50 dark:bg-purple-900/20">
                      <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Wide Accessibility</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Applicable for various undergraduate, postgraduate, and doctoral programs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-orange-50 dark:bg-orange-900/20">
                      <FileCheck className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Effortless Application Process</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        EMI facilities can easily be applied for with a straightforward approval process and minimal effort.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-pink-50 dark:bg-pink-900/20">
                      <PiggyBank className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Enhanced Financial Planning</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Assists students and their families in better managing their finances by avoiding large one-time payments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-teal-50 dark:bg-teal-900/20">
                      <Users2 className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Inclusive Support for Students</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Aims to support students from diverse financial backgrounds, ensuring equal access to quality education.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-cyan-50 dark:bg-cyan-900/20">
                      <Building2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Collaborations with Financial Partners</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Partnerships with major banks and financial institutions to offer secure and reliable EMI plans.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Apply for EMI
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>

          {/* Programs Section */}
          <section id="programs" className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Explorer Online Learning Courses in India</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Management Courses</h3>
                    <ul className="space-y-2">
                      {university.courses
                        .filter(course => course.program.includes('M'))
                        .map((course, index) => (
                          <li key={index}>
                            <Link
                              href="#"
                              className="text-blue-600 hover:underline dark:text-blue-400"
                            >
                              {course.program} Course Online
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Other Programs</h3>
                    <ul className="space-y-2">
                      {university.courses
                        .filter(course => !course.program.includes('M'))
                        .map((course, index) => (
                          <li key={index}>
                            <Link
                              href="#"
                              className="text-blue-600 hover:underline dark:text-blue-400"
                            >
                              {course.program} Course Online
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Features Section */}
          <section id="benefits" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Book className="h-5 w-5 text-yellow-600" />
                    Extensive Learning Opportunities
                  </h3>
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    {university.name} offers 70+ electives and 20K+ courses on LinkedIn Learning.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                    Professional Network
                  </h3>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    The university has 7+ leading global partners and 2K+ hiring corporates.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    On-campus Events
                  </h3>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Regular workshops and sessions for enhanced learning experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Admission Process Section - Enhanced Version */}
          <section id="admission" className="space-y-12 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-background rounded-3xl p-8 md:p-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Begin Your Journey at {university.name}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Your path to success starts here. Follow our simple 5-step admission process to join our community of learners.
              </p>
            </div>

            <div className="relative">
              {/* Animated Progress Line */}
              <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 transform -translate-y-1/2 rounded-full hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                {[
                  {
                    icon: CircleDot,
                    title: "Submit Form",
                    description: "Fill out our online application form with your details",
                    color: "blue",
                    step: 1
                  },
                  {
                    icon: FileCheck,
                    title: "Document Verification",
                    description: "Upload & verify your academic documents",
                    color: "purple",
                    step: 2
                  },
                  {
                    icon: Wallet,
                    title: "Fee Payment",
                    description: "Secure online payment with multiple options",
                    color: "pink",
                    step: 3
                  },
                  {
                    icon: Send,
                    title: "Enrollment Kit",
                    description: "Receive your digital study materials",
                    color: "green",
                    step: 4
                  },
                  {
                    icon: CheckCircle2,
                    title: "Start Learning",
                    description: "Access your personalized learning dashboard",
                    color: "teal",
                    step: 5
                  }
                ].map((step, index) => (
                  <div key={index} className="group relative flex flex-col items-center text-center">
                    <div className={`w-20 h-20 rounded-xl bg-${step.color}-100 dark:bg-${step.color}-900/30 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <step.icon className={`w-10 h-10 text-${step.color}-600 dark:text-${step.color}-400`} />

                      <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-${step.color}-200 dark:bg-${step.color}-800 flex items-center justify-center text-${step.color}-700 dark:text-${step.color}-300 font-bold transform rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                        {step.step}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 mt-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                Begin Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Need help? Talk to our admission counselors
              </p>
            </div>
          </section>

          {/* More Than Just A Degree Section */}
          <section id="degree" className="space-y-12">
            <Card className="overflow-hidden border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 md:p-12 space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        More Than Just A Degree
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        Our degrees open doors to opportunities. Here&lsquo;s what makes our programs stand out:
                      </p>
                    </div>

                    <div className="space-y-6">
                      {[
                        {
                          icon: Award,
                          title: "UGC-DEB Approved",
                          description: "Meets all educational standards"
                        },
                        {
                          icon: Globe2,
                          title: "Global Recognition",
                          description: "Accepted across industries worldwide"
                        },
                        {
                          icon: Users,
                          title: "Industry Connections",
                          description: "Strong network of recruiters"
                        },
                        {
                          icon: GraduationCap,
                          title: "Career Growth",
                          description: "Proven track record of alumni success"
                        },
                        {
                          icon: Building2,
                          title: "Institution Equivalence",
                          description: "Same value as on-campus degrees"
                        }
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-4 group">
                          <div className="w-12 h12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full md:w-auto">
                      Download Sample Degree
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-8 md:p-12 flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                      
                      <Image
                        src={university.moreThanDegree.sampleDegree.image}
                        alt="Sample Degree Certificate"
                        fill
                        className=""
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white text-sm">
                        <p className="font-medium">Sample Degree Certificate</p>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Placement Partners Section */}
          <section id="placement" className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Your Career Success Partners
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Join our network of 2000+ hiring partners and unlock endless career opportunities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-0">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">50%</div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">Average Salary Hike</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">For our placed students</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-0">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">300+</div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">Hiring Partners</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Active recruitment partners</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 border-0">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl font-bold text-pink-600 dark:text-pink-400">3X</div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">Interview Opportunities</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Compared to industry average</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Placement Highlights
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          icon: Briefcase,
                          title: "2000+ Hiring Partners",
                          description: "Leading companies across sectors"
                        },
                        {
                          icon: Laptop,
                          title: "E-hire Portal Access",
                          description: "Exclusive job opportunities"
                        },
                        {
                          icon: Clock,
                          title: "Quick Placement",
                          description: "Average 45 days to first offer"
                        }
                      ].map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300">
                          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Our Recruiting Partners
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                      {university.placements.images.map((company, index) => (
                        <div key={index} className="aspect-video relative bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center group hover:shadow-lg transition-all duration-300">
                          <Image
                            src={company}
                            alt={company}
                            width={100}
                            height={50}
                            className="object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQs Section*/}
          <section id="faqs" className="space-y-8 sm:space-y-12">
            <div className="text-center space-y-4">
              <span className="inline-block">
                <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 text-xs sm:text-sm">
                  Got Questions?
                </Badge>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Find answers to common questions about studying at {university.name}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-900/50">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <Accordion type="single" collapsible className="w-full space-y-4 sm:space-y-6">
                    {university.faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`faq-${index}`}
                        className="group border-none [&[data-state=open]]:bg-blue-50/50 dark:[&[data-state=open]]:bg-blue-950/50 rounded-xl px-4 sm:px-6 py-0 transition-all duration-200"
                      >
                        <AccordionTrigger
                          className="flex items-center gap-3 py-4 text-left hover:no-underline [&[data-state=open]>div>.star]:text-yellow-500 [&[data-state=open]>div>.star]:rotate-[360deg]"
                        >
                          <div className="flex items-center gap-3 flex-1">
                            <Star className="star w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-600 transition-all duration-500" />
                            <span className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {faq.question}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-4">
                          <div className="pl-6 sm:pl-8 pr-4">
                            <div className="relative">
                              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-purple-500/50" />
                              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed pl-4 sm:pl-6">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>

              <div className="mt-8 text-center">
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                  Still have questions? We&lsquo;re here to help!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="group w-full sm:w-auto"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 group-hover:text-blue-500 transition-colors" />
                    Chat with an Advisor
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}