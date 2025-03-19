"use client"

import { useState, useEffect } from "react"
import { universities } from "@/data/universities"
import { UniversityCard } from "@/components/university-card"
import { Search, Filter, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DistanceUniversitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Filter universities to only show distance ones
  const distanceUniversities = universities.filter(
    (uni) => uni.mode === "Distance" && uni.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Sort universities based on selected criteria
  const sortedUniversities = [...distanceUniversities].sort((a, b) => {
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
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="lg:px-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Distance Education Universities in India</h1>
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            Explore top UGC-DEB approved distance learning universities for flexible education
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-purple-500/30 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
              <p className="text-2xl font-bold">{distanceUniversities.length}+</p>
              <p className="text-sm">Distance Universities</p>
            </div>
            <div className="bg-purple-500/30 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm">UGC Approved</p>
            </div>
            <div className="bg-purple-500/30 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
              <p className="text-2xl font-bold">400+</p>
              <p className="text-sm">Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="lg:px-16 px-4 py-12">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Explore Distance Universities</h2>
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

      {/* Benefits Section */}
      <section className="bg-purple-50 dark:bg-purple-900/20 py-16">
        <div className="lg:px-16 px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">
            Benefits of Distance Education
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Self-Paced Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Study at your own pace with flexible schedules that accommodate your personal and professional
                commitments.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
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
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Quality Education</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Receive the same quality education and degree recognition as traditional on-campus programs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Affordable Education</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Distance education typically costs less than traditional programs, making higher education more
                accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="lg:px-16 px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                What is the difference between distance and online education?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Distance education typically involves physical study materials and occasional in-person sessions, while
                online education is delivered entirely through digital platforms.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Do I need to attend any classes in person?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Most distance education programs require minimal in-person attendance, usually for exams or practical
                sessions. Some programs may be entirely remote.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Are distance learning degrees recognized for government jobs?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, degrees from UGC-DEB approved distance education universities are recognized for government jobs
                and higher education in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="lg:px-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Begin Your Distance Learning Journey Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get personalized guidance on selecting the right distance education program for your career goals.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
            Speak with an Education Advisor
          </Button>
        </div>
      </section>
    </div>
  )
}