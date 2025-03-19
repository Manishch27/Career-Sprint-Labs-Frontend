"use client"

import { useState, useEffect } from "react"
import { universities } from "@/data/universities"
import { UniversityCard } from "@/components/university-card"
import { Search, Filter, GraduationCap, Award, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NAACAPlusUniversitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Filter universities to only show NAAC A+ or A++ ones
  const naacAPlusUniversities = universities.filter(
    (uni) =>
      (uni.accreditation.grade === "A+" || uni.accreditation.grade === "A++") &&
      uni.accreditation.body === "NAAC" &&
      uni.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Sort universities based on selected criteria
  const sortedUniversities = [...naacAPlusUniversities].sort((a, b) => {
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
    } else if (sortBy === "grade") {
      // Sort A++ before A+
      return a.accreditation.grade === "A++" ? -1 : 1
    }
    return 0
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-20">
        <div className="lg:px-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">NAAC A+ & A++ Universities</h1>
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            Discover top-tier universities with the highest NAAC accreditation grades in India
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-yellow-500/30 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
              <p className="text-2xl font-bold">{naacAPlusUniversities.length}+</p>
              <p className="text-sm">Elite Universities</p>
            </div>
            <div className="bg-yellow-500/30 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
              <p className="text-2xl font-bold">A+/A++</p>
              <p className="text-sm">NAAC Grade</p>
            </div>
            <div className="bg-yellow-500/30 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
              <p className="text-2xl font-bold">Excellence</p>
              <p className="text-sm">Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="lg:px-16 px-4 py-12">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">NAAC A+ & A++ Accredited Universities</h2>
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
                  <SelectItem value="grade">Grade: Highest First</SelectItem>
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

      {/* About NAAC Section */}
      <section className="bg-amber-50 dark:bg-amber-900/20 py-16">
        <div className="lg:px-16 px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">
            Understanding NAAC Accreditation
          </h2>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-amber-100 dark:bg-amber-900/50 p-4 rounded-full">
                <Star className="w-10 h-10 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Mark of Excellence</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The National Assessment and Accreditation Council (NAAC) is an autonomous body established by the UGC
                  to assess and accredit higher education institutions in India. NAAC grades universities on a scale
                  from C to A++, with A++ being the highest level of excellence.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="w-5 h-5 mr-2 text-amber-600" />
                  A+ Grade (3.26-3.50)
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Universities with an A+ grade demonstrate very high levels of academic quality, infrastructure,
                  research output, and student support services.
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="w-5 h-5 mr-2 text-amber-600" />
                  A++ Grade (3.51-4.00)
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  The prestigious A++ grade is awarded to institutions that exemplify the highest standards of
                  excellence in all aspects of higher education.
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="w-5 h-5 mr-2 text-amber-600" />
                  Comprehensive Assessment
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  NAAC evaluates institutions on seven criteria including curriculum, teaching-learning, research,
                  infrastructure, student support, governance, and innovation.
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="w-5 h-5 mr-2 text-amber-600" />
                  Validity Period
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  NAAC accreditation is valid for a period of five years, after which universities must undergo
                  reassessment to maintain their grade.
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
            Benefits of Choosing NAAC A+/A++ Universities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Quality Education</h3>
              <p className="text-gray-600 dark:text-gray-400">
                NAAC A+/A++ universities maintain the highest standards of teaching, learning resources, and academic
                rigor.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Enhanced Employability</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Degrees from highly accredited universities are preferred by employers, giving graduates a competitive
                edge in the job market.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Global Recognition</h3>
              <p className="text-gray-600 dark:text-gray-400">
                NAAC A+/A++ accreditation enhances the international recognition of your degree for further studies or
                employment abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-600 text-white py-16">
        <div className="lg:px-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Aim for Excellence in Your Education</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect NAAC A+/A++ accredited university for your academic and career goals.
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50">
            Get Expert Guidance
          </Button>
        </div>
      </section>
    </div>
  )
}