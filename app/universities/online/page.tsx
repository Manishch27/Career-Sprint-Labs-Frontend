"use client"

import { useState, useEffect } from "react"
import { universities } from "@/data/universities"
import { UniversityCard } from "@/components/university-card"
import { Search, Filter, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function OnlineUniversitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Filter universities to only show online ones
  const onlineUniversities = universities.filter(
    (uni) => uni.mode === "Online" && uni.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Sort universities based on selected criteria
  const sortedUniversities = [...onlineUniversities].sort((a, b) => {
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="lg:px-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Online Universities in India</h1>
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            Discover top UGC-DEB approved online universities offering flexible learning opportunities
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-blue-500/30 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
              <p className="text-2xl font-bold">{onlineUniversities.length}+</p>
              <p className="text-sm">Online Universities</p>
            </div>
            <div className="bg-blue-500/30 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm">UGC Approved</p>
            </div>
            <div className="bg-blue-500/30 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm">Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="lg:px-16 px-4 py-12">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Explore Online Universities</h2>
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
      <section className="bg-blue-50 dark:bg-blue-900/20 py-16">
        <div className="lg:px-16 px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">
            Benefits of Online Education
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
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
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Flexibility</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Study at your own pace and schedule, balancing education with work and personal commitments.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
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
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Recognized Degrees</h3>
              <p className="text-gray-600 dark:text-gray-400">
                UGC-DEB approved degrees that hold the same value as traditional on-campus programs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
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
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Cost-Effective</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Save on commuting, accommodation, and other expenses associated with traditional education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Are online degrees recognized by employers?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, online degrees from UGC-DEB approved universities are recognized by employers across India and
                globally. They hold the same value as traditional degrees.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">How do online exams work?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Most universities conduct online proctored exams that can be taken from home. Some may require you to
                visit exam centers for final assessments.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Can I get placement assistance with online programs?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, most online universities offer placement assistance, career counseling, and have tie-ups with
                corporate partners for recruitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Educational Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert guidance on choosing the right online university and program for your career goals.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Talk to an Education Counselor
          </Button>
        </div>
      </section>
    </div>
  )
}