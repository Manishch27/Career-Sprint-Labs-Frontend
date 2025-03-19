'use client'

import { useState, useEffect, useMemo } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search, ExternalLink, GraduationCap } from 'lucide-react'
import { universities } from '@/data/universities'

export default function UniversitiesList() {
  const params = useParams()
  const listType = params?.listType as string | undefined

  const [searchTerm, setSearchTerm] = useState('')
  const [filteredUniversities, setFilteredUniversities] = useState(universities)

  // ✅ Memoize the list type to prevent unnecessary re-renders
  const isUGCDEB = useMemo(() => listType === 'ugc-deb-approved', [listType])
  const pageTitle = isUGCDEB ? 'UGC-DEB Approved Universities 2024' : 'NIRF Ranked Universities 2024'

  // ✅ Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // ✅ Proper filtering logic
  useEffect(() => {
    let filtered = universities.filter(uni =>
      (isUGCDEB ? uni.approvals.some(approval => approval.name === 'UGC-DEB') : uni.ranking !== undefined) &&
      uni.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (!isUGCDEB) {
      filtered = filtered.sort((a, b) => (a.ranking || 0) - (b.ranking || 0))
    }

    setFilteredUniversities(filtered)
  }, [searchTerm, isUGCDEB])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="lg:px-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            {pageTitle}
          </h1>
          <p className="sm:text-md lg:text-xl mb-8 text-center max-w-3xl mx-auto">
            Explore the top universities in India recognized for their excellence in education and research.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="lg:px-16 px-4 py-12">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search universities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-4">
            <Link href="/universities/list/ugc-deb-approved">
              <Button variant={isUGCDEB ? "default" : "outline"}>
                UGC-DEB Approved
              </Button>
            </Link>
            <Link href="/universities/list/nirf-ranked">
              <Button variant={!isUGCDEB ? "default" : "outline"}>
                NIRF Ranked
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((uni) => (
            <Card key={uni.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 mr-4">
                    <Image
                      src={uni.logo}
                      alt={`${uni.name} logo`}
                      width={64}
                      height={64}
                      layout="intrinsic"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{uni.name}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {uni.location.city}, {uni.location.state}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {uni.approvals.some(approval => approval.name === 'UGC-DEB') && (
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      UGC-DEB Approved
                    </Badge>
                  )}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{uni.courses.length} Programs</span>
                  </div>
                  <Link href={`/universities/${uni.id}`}>
                    <Button variant="outline" size="sm">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              No Universities Found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filters to see more results.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}