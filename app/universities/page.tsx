'use client'

import { useState, useEffect } from 'react'
import { universities } from '@/data/universities'
import { UniversityCard } from '@/components/university-card'
import { UniversityFilters } from '@/components/university-filters'
import { Search, Filter, GraduationCap, MapPin, Book } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UniversityComparison } from '@/components/university-comparison'

export default function UniversitiesPage() {
  const [selectedModes, setSelectedModes] = useState<string[]>([])
  const [selectedCourses, setSelectedCourses] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([])

  useEffect(()=>{
  window.scrollTo(0,0);
},[])

  const filteredUniversities = universities.filter(uni => {
    const matchesMode = selectedModes.length === 0 || selectedModes.includes(uni.mode.toLowerCase())
    const matchesCourse = selectedCourses.length === 0 || uni.courses.some(c => c.program && selectedCourses.includes(c.program));
    const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesMode && matchesCourse && matchesSearch
  })

  const handleModeChange = (mode: string) => {
    setSelectedModes(prev => 
      prev.includes(mode) 
        ? prev.filter(m => m !== mode)
        : [...prev, mode]
    )
  }

  const handleCourseChange = (course: string) => {
    setSelectedCourses(prev =>
      prev.includes(course)
        ? prev.filter(c => c !== course)
        : [...prev, course]
    )
  }

  const handleUniversitySelection = (id: string) => {
    setSelectedUniversities(prev => {
      if (prev.includes(id)) {
        return prev.filter(uniId => uniId !== id)
      }
      if (prev.length < 3) {
        return [...prev, id]
      }
      return prev
    })
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="lg:px-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Universities in India
          </h1>
          <p className="lg:text-xl text-md mb-8">
            Compare top universities and find your perfect educational match
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center bg-blue-700 rounded-lg p-4">
              <GraduationCap className="w-8 h-8 mr-4" />
              <div>
                <h3 className="font-semibold">Multiple Programs</h3>
                <p className="text-sm">Wide range of courses available</p>
              </div>
            </div>
            <div className="flex items-center bg-blue-700 rounded-lg p-4">
              <MapPin className="w-8 h-8 mr-4" />
              <div>
                <h3 className="font-semibold">Nationwide Coverage</h3>
                <p className="text-sm">Universities from across India</p>
              </div>
            </div>
            <div className="flex items-center bg-blue-700 rounded-lg p-4">
              <Book className="w-8 h-8 mr-4" />
              <div>
                <h3 className="font-semibold">Detailed Information</h3>
                <p className="text-sm">In-depth details on each university</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="lg:px-16 px-4 py-12">
        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="browse">Browse Universities</TabsTrigger>
            <TabsTrigger value="compare">Compare Universities</TabsTrigger>
          </TabsList>
          <TabsContent value="browse">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className={`w-full lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <div className="sticky top-4">
                  <UniversityFilters
                    selectedModes={selectedModes}
                    selectedCourses={selectedCourses}
                    onModeChange={handleModeChange}
                    onCourseChange={handleCourseChange}
                  />
                </div>
              </div>

              {/* University Cards */}
              <div className="w-full lg:w-3/4">
                <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    All Universities
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
                      isSelected={selectedUniversities.includes(university.id)}
                      onSelect={() => handleUniversitySelection(university.id)}
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
          </TabsContent>
          <TabsContent value="compare">
            <UniversityComparison
              universities={universities.filter(uni => selectedUniversities.includes(uni.id))}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

