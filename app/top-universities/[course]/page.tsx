'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Star, MapPin, GraduationCap, Award, Users, BookOpen, DollarSign, Clock, CheckCircle, ExternalLink, ChevronDown, ChevronUp, Search, Laptop } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { universities } from '@/data/universities'

export default function TopUniversitiesPage() {
  const params = useParams()
  const course = (params.course as string).toUpperCase()
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortCriteria, setSortCriteria] = useState<'rank' | 'placement' | 'fee'>('rank')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [compareList, setCompareList] = useState<string[]>([])
  
    useEffect(()=>{
  window.scrollTo(0,0);
},[])

  // Filter and sort universities based on the course and search term
  const filteredUniversities = universities
    .filter(uni => uni.courses.some(c => c.program === course))
    .filter(uni => uni.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortCriteria === 'rank') {
        return sortOrder === 'asc' ? a.ranking - b.ranking : b.ranking - a.ranking
      } else if (sortCriteria === 'placement') {
        const aRate = parseInt(a.quantitativeMetrics.placementRate)
        const bRate = parseInt(b.quantitativeMetrics.placementRate)
        return sortOrder === 'asc' ? aRate - bRate : bRate - aRate
      } else {
        const aFee = a.courses.find(c => c.program === course)?.feesPerSemester || 0
        const bFee = b.courses.find(c => c.program === course)?.feesPerSemester || 0
        return sortOrder === 'asc' ? aFee - bFee : bFee - aFee
      }
    })
    .slice(0, 10)

  const toggleSort = (criteria: 'rank' | 'placement' | 'fee') => {
    if (sortCriteria === criteria) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortCriteria(criteria)
      setSortOrder('asc')
    }
  }

  const toggleCompare = (uniId: string) => {
    setCompareList(prev => 
      prev.includes(uniId) 
        ? prev.filter(id => id !== uniId)
        : prev.length < 3 ? [...prev, uniId] : prev
    )
  }

  useEffect(() => {
    if (filteredUniversities.length > 0 && !selectedUniversity) {
      setSelectedUniversity(filteredUniversities[0].id)
    }
  }, [filteredUniversities, selectedUniversity])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="lg:px-16 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Top 10 {course} Universities in India
          </h1>
          <p className="lg:text-xl text-md mb-8 text-center max-w-3xl mx-auto">
            Discover the best institutions offering {course} programs in India. Compare rankings, placements, and more to make an informed decision.
          </p>
          <div className="flex justify-center space-x-4">
            <Badge className="bg-blue-500 text-white px-4 py-2 text-sm lg:text-lg">
              {filteredUniversities.length} Universities
            </Badge>
            <Badge className="bg-green-500 text-white px-4 py-2 text-sm lg:text-lg">
              Verified Rankings
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="lg:px-16 px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* University List */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Top {course} Universities</h2>
              <Button variant="outline" size="sm" onClick={() => setCompareList([])}>
                Clear Compare ({compareList.length})
              </Button>
            </div>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Search universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex justify-between mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              <button onClick={() => toggleSort('rank')} className="flex items-center">
                Rank {sortCriteria === 'rank' && (sortOrder === 'asc' ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />)}
              </button>
              <button onClick={() => toggleSort('placement')} className="flex items-center">
                Placement {sortCriteria === 'placement' && (sortOrder === 'asc' ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />)}
              </button>
              <button onClick={() => toggleSort('fee')} className="flex items-center">
                Fee {sortCriteria === 'fee' && (sortOrder === 'asc' ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />)}
              </button>
            </div>
            {filteredUniversities.map((uni, index) => (
              <Card 
                key={uni.id}
                className={`cursor-pointer transition-all duration-300 ${selectedUniversity === uni.id ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'}`}
                onClick={() => setSelectedUniversity(uni.id)}
              >
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="flex-shrink-0 relative w-16 h-16">
                    <Image
                      src={uni.logo}
                      alt={uni.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg">{uni.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Rank #{index + 1}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Fee: ₹{uni.courses.find(c => c.program === course)?.feesPerSemester.toLocaleString()}/semester</p>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-end">
                    <Badge variant={index < 3 ? "default" : "secondary"} className="mb-2">
                      {uni.quantitativeMetrics.placementRate}
                    </Badge>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleCompare(uni.id)
                      }}
                    >
                      {compareList.includes(uni.id) ? 'Remove' : 'Compare'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* University Details */}
          <div className="md:col-span-2">
            {selectedUniversity ? (
              <UniversityDetails university={filteredUniversities.find(uni => uni.id === selectedUniversity)!} course={course} />
            ) : (
              <div className="flex items-center justify-center h-full bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
                <div className="text-center">
                  <GraduationCap className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-xl text-gray-600 dark:text-gray-300">Select a university to view detailed information</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Comparison Section */}
        {compareList.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">University Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="p-2 text-left">Criteria</th>
                    {compareList.map(uniId => (
                      <th key={uniId} className="p-2 text-left">{universities.find(u => u.id === uniId)?.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 font-medium">Ranking</td>
                    {compareList.map(uniId => (
                      <td key={uniId} className="p-2">#{universities.find(u => u.id === uniId)?.ranking}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Placement Rate</td>
                    {compareList.map(uniId => (
                      <td key={uniId} className="p-2">{universities.find(u => u.id === uniId)?.quantitativeMetrics.placementRate}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Course Fee</td>
                    {compareList.map(uniId => {
                      const uni = universities.find(u => u.id === uniId)
                      const fee = uni?.courses.find(c => c.program === course)?.feesPerSemester
                      return <td key={uniId} className="p-2">₹{fee?.toLocaleString()}/semester</td>
                    })}
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Accreditation</td>
                    {compareList.map(uniId => {
                      const uni = universities.find(u => u.id === uniId)
                      return <td key={uniId} className="p-2">{uni?.accreditation.grade} by {uni?.accreditation.body}</td>
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

interface UniversityDetailsProps {
  university: typeof universities[0]
  course: string
}

function UniversityDetails({ university, course }: UniversityDetailsProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-full p-2">
              <Image
                src={university.logo}
                alt={university.name}
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold">{university.name}</h2>
              <p className="text-blue-100 flex items-center justify-center md:justify-start mt-2">
                <MapPin className="w-4 h-4 mr-1" />
                {university.location.city}, {university.location.state}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-blue-100">
            <div>
              <p className="text-sm">Accreditation</p>
              <p className="font-semibold">{university.accreditation.grade} by {university.accreditation.body}</p>
            </div>
            <div>
              <p className="text-sm">Placement Rate</p>
              <p className="font-semibold">{university.quantitativeMetrics.placementRate}</p>
            </div>
            <div>
              <p className="text-sm">Corporate Tie-ups</p>
              <p className="font-semibold">{university.quantitativeMetrics.corporateTieups}</p>
            </div>
            <div>
              <p className="text-sm">Total Students</p>
              <p className="font-semibold">{university.quantitativeMetrics.students}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-4 flex flex-wrap justify-start">
              <TabsTrigger value="overview" className="mb-2 mr-2">Overview</TabsTrigger>
              <TabsTrigger value="course" className="mb-2 mr-2">Course Details</TabsTrigger>
              <TabsTrigger value="placements" className="mb-2 mr-2">Placements</TabsTrigger>
              <TabsTrigger value="facilities" className="mb-2 mr-2">Facilities</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">About {university.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{university.about}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{course} Program Highlights</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {university.keyHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Rankings</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">NIRF Ranking</p>
                      <Progress value={75} className="w-full" />
                      <p className="text-right text-sm text-gray-500 dark:text-gray-400">75th</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">QS World University Rankings</p>
                      <Progress value={60} className="w-full" />
                      <p className="text-right text-sm text-gray-500 dark:text-gray-400">601-650</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="course">
              {university.courses.find(c => c.program === course) ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <BookOpen className="w-6 h-6 text-blue-500 mb-2" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">Course</p>
                      <p className="font-semibold">{course}</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <Clock className="w-6 h-6 text-green-500 mb-2" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                      <p className="font-semibold">{university.courses.find(c => c.program === course)?.duration}</p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <DollarSign className="w-6 h-6 text-yellow-500 mb-2" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">Fee (per semester)</p>
                      <p className="font-semibold">₹{university.courses.find(c => c.program === course)?.feesPerSemester.toLocaleString()}</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <Users className="w-6 h-6 text-purple-500 mb-2" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">Batch Size</p>
                      <p className="font-semibold">120 students</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Course Description</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      The {course} program at {university.name} is designed to equip students with the knowledge and skills needed to excel in today's competitive business environment. The curriculum combines theoretical concepts with practical applications, preparing students for leadership roles in various industries.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Key Subjects</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600 dark:text-gray-300">Business Strategy</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600 dark:text-gray-300">Financial Management</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600 dark:text-gray-300">Marketing Management</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600 dark:text-gray-300">Operations Management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-300">Course details not available</p>
              )}
            </TabsContent>
            <TabsContent value="placements">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Placement Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Average Package</p>
                      <p className="font-semibold text-2xl">₹8.5 LPA</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Highest Package</p>
                      <p className="font-semibold text-2xl">₹24 LPA</p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Placement Rate</p>
                      <p className="font-semibold text-2xl">{university.quantitativeMetrics.placementRate}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Top Recruiters</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {university.placements.images.map((image, index) => (
                      <div key={index} className="relative aspect-video bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`Recruiter ${index + 1}`}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Placement Trends</h3>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Sector-wise Placements</p>
                    <div className="space-y-2">
                      {university.placements.sectors.map((sector, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm">
                            <span>{sector}</span>
                            <span>{Math.floor(100 / university.placements.sectors.length)}%</span>
                          </div>
                          <Progress value={Math.floor(100 / university.placements.sectors.length)} className="w-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="facilities">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Campus Facilities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <BookOpen className="w-6 h-6 text-blue-500 mb-2" />
                      <p className="font-semibold">Library</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">State-of-the-art library with extensive collection</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <Users className="w-6 h-6 text-green-500 mb-2" />
                      <p className="font-semibold">Sports Complex</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Multi-sport facilities for students</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <Laptop className="w-6 h-6 text-yellow-500 mb-2" />
                      <p className="font-semibold">Computer Labs</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Well-equipped computer labs with latest software</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Accommodation</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {university.name} offers comfortable and safe accommodation options for students. The hostels are equipped with modern amenities to ensure a conducive living and learning environment.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Separate hostels for boys and girls</li>
                    <li>24/7 security and CCTV surveillance</li>
                    <li>Wi-Fi enabled rooms</li>
                    <li>Mess facility with nutritious meals</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 p-4 md:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {university.approvals.map((approval, index) => (
                <Badge key={index} variant="secondary">{approval.name}</Badge>
              ))}
            </div>
            <Link href={`/universities/${university.id}`}>
              <Button className="w-full sm:w-auto">
                View Full Profile
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

