'use client'

import { useState, useEffect } from 'react'
import { universities } from '@/data/universities'
import { UniversityCard } from '@/components/university-card'
import { CourseFilters } from '@/components/course-filters'
import { Briefcase, GraduationCap, Clock, Award, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface CoursePageProps {
  params: {
    course: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const courseId = params.course.toUpperCase()
  const [selectedModes, setSelectedModes] = useState<string[]>([])
  const [selectedFees, setSelectedFees] = useState([0, 200000]) // Initial fee range
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredUniversities = universities.filter(uni => {
    const hasCourse = uni.courses.some(c => c.program === courseId)
    const matchesMode = selectedModes.length === 0 || (uni.mode && selectedModes.includes(uni.mode.toLowerCase()))
    const courseFee = uni.courses.find(c => c.program === courseId)?.feesPerSemester || 0
    const matchesFee = courseFee >= selectedFees[0] && courseFee <= selectedFees[1]
    const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase())
    return hasCourse && matchesMode && matchesFee && matchesSearch
  })
  
   useEffect(()=>{
  window.scrollTo(0,0);
},[])


  const handleModeChange = (mode: string) => {
    setSelectedModes(prev =>
      prev.includes(mode)
        ? prev.filter(m => m !== mode)
        : [...prev, mode]
    )
  }

  const handleFeeChange = (fees: number[]) => {
    setSelectedFees(fees)
  }
  
 
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
       {/* Hero Section */}
       <section className="bg-blue-600 text-white py-20">
        <div className="lg:px-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            {courseId} Programs in India
          </h1>
          <p className="lg:text-xl sm:text-md mb-8 text-center max-w-3xl mx-auto">
            Explore top universities offering {courseId} and find your perfect match.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center bg-blue-700 rounded-lg p-4">
              <Briefcase className="w-8 h-8 mr-4" />
              <div>
                <h3 className="font-semibold">Career Opportunities</h3>
                <p className="text-sm">Wide range of job prospects</p>
              </div>
            </div>
            <div className="flex items-center bg-blue-700 rounded-lg p-4">
              <GraduationCap className="w-8 h-8 mr-4" />
              <div>
                <h3 className="font-semibold">Expert Faculty</h3>
                <p className="text-sm">Learn from industry leaders</p>
              </div>
            </div>
            <div className="flex items-center bg-blue-700 rounded-lg p-4">
              <Clock className="w-8 h-8 mr-4" />
              <div>
                <h3 className="font-semibold">Flexible Learning</h3>
                <p className="text-sm">Online and distance options</p>
              </div>
            </div>
            <div className="flex items-center bg-blue-700 rounded-lg p-4">
              <Award className="w-8 h-8 mr-4" />
              <div>
                <h3 className="font-semibold">Accredited Programs</h3>
                <p className="text-sm">Recognized by top bodies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="lg:px-16 px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`w-full lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-4">
              <CourseFilters
                course={courseId}
                selectedModes={selectedModes}
                selectedFees={selectedFees}
                onModeChange={handleModeChange}
                onFeeChange={handleFeeChange}
              />
            </div>
          </div>

          {/* University Cards */}
          <div className="w-full lg:w-3/4">
            <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Universities Offering {courseId}
              </h2>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search universities..."
                    className="pl-10 pr-4 py-2 rounded-md"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Found {filteredUniversities.length} universities matching your criteria
            </p>

            <div className="grid gap-6">
              {filteredUniversities.map((university) => (
                <UniversityCard
                  key={university.id}
                  university={university}
                />
              ))}
            </div>

            {filteredUniversities.length === 0 && (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
                <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  No Universities Found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your filters or search query to see more results.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

