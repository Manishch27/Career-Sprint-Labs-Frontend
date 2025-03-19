"use client"

import { useState, useEffect } from "react"
import { universities } from "@/data/universities"
import { UniversityCard } from "@/components/university-card"
import { Search, Filter, GraduationCap, Building, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PrivateUniversitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // For demo purposes, we'll consider all universities as private
  // In a real application, you would filter based on a 'type' property
  const privateUniversities = universities.filter((uni) => uni.name.toLowerCase().includes(searchQuery.toLowerCase()))

  // Sort universities based on selected criteria
  const sortedUniversities = [...privateUniversities].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    } else if (sortBy === "fees") {
      const aFees = a.courses.reduce(
        (min, course) => (course.feesPerSemester < min ? course.feesPerSemester : min),
        Number.POSITIVE_INFINITY,
      )
      const bFees = b.courses.reduce(
        (min, course) => (course.feesPerSemester < min ? course.feesPerSemester : min),
        Number.POSITIVE_INFINITY,
      )
      return aFees - bFees
    } else if (sortBy === "courses") {
      return b.courses.length - a.courses.length
    }
    return 0
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-20">
        <div className="lg:px-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Private Universities in India</h1>
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            Discover top private universities offering quality education and modern facilities
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-red-500/30 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
              <p className="text-2xl font-bold">{privateUniversities.length}+</p>
              <p className="text-sm">Private Universities</p>
            </div>
            <div className="bg-red-500/30 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm">Programs</p>
            </div>
            <div className="bg-red-500/30 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
              <p className="text-2xl font-bold">Modern</p>
              <p className="text-sm">Infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="lg:px-16 px-4 py-12">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Explore Private Universities</h2>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search universities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="w-full md:w-48">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="fees">Fees: Low to High</SelectItem>
                  <SelectItem value="courses">Most Programs</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="md:hidden" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {sortedUniversities.length > 0 ? (
            sortedUniversities.map((university) => <UniversityCard key={university.id} university={university} />)
          ) : (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
              <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">No Universities Found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search query to see more results.</p>
            </div>
          )}
        </div>
      </div>

      {/* About Private Universities Section */}
      <section className="bg-red-50 dark:bg-red-900/20 py-16">
        <div className="lg:px-16 px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">
            Understanding Private Universities
          </h2>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-red-100 dark:bg-red-900/50 p-4 rounded-full">
                <Building className="w-10 h-10 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Innovation in Education</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Private universities in India are established through state or central legislation and are managed by
                  private entities or trusts. These institutions have gained popularity for their innovative approach to
                  education, modern infrastructure, and industry-focused curriculum.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="w-5 h-5 mr-2 text-red-600" />
                  Regulatory Compliance
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Private universities must adhere to regulations set by UGC, AICTE, and other regulatory bodies to
                  ensure quality education standards.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="w-5 h-5 mr-2 text-red-600" />
                  Modern Infrastructure
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Many private universities invest heavily in state-of-the-art facilities, technology, and learning
                  resources to enhance the student experience.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="w-5 h-5 mr-2 text-red-600" />
                  Industry Connections
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Private universities often maintain strong ties with industry partners, providing students with
                  internships, placements, and practical exposure.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="w-5 h-5 mr-2 text-red-600" />
                  Diverse Programs
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Private universities often offer a wide range of traditional and emerging programs to cater to diverse
                  student interests and market demands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="lg:px-16 px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">
            Advantages of Private Universities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Flexible Admission Process
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Many private universities offer multiple admission cycles and flexible entry requirements compared to
                public institutions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Better Infrastructure</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Private universities often feature modern campuses, advanced labs, and better student amenities.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Industry-Focused Curriculum
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Courses are often designed with industry input to ensure graduates have relevant skills for the job
                market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="lg:px-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Ideal Private University</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our education experts guide you through the selection process to find the perfect private university for
            your needs.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
            Get Personalized Guidance
          </Button>
        </div>
      </section>
    </div>
  )
}