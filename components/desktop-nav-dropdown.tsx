'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { GraduationCap, BookOpen, Award, TrendingUp, ChevronRight, Star, Search } from 'lucide-react'

const categories = [
  { name: "Online Universities", href: "/universities/online", icon: GraduationCap },
  { name: "Distance Universities", href: "/universities/distance", icon: BookOpen },
  { name: "Universities Approvals", href: "/universities/approvals", icon: Award },
  { name: "Top 10 Universities", href: "/universities/top-10", icon: TrendingUp, isNew: true },
  { name: "Suggest Universities", href: "/universities/suggest", icon: Star, isNew: true },
  { name: "Top 10 MBA Universities", href: "/top-universities/mba", icon: Award, isNew: true },
]

const featuredUniversities = [
  {
    logo: "https://i.ibb.co/b5X6K6j/gla.jpg",
    name: "Lovely Professional University",
    nirf: "27th",
    naac: "A++",
    href: "/universities/lpu"
  },
  {
    logo: "https://www.odljain.com/images/about.jpg",
    name: "Jain University",
    nirf: "85th",
    naac: "A+",
    href: "/universities/jain"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI4icYBJgcfkoYrum2aefZaud5-0qjAlhe08TIuIFy8LhmQFD1NAM7hXatrFb_i8Kl_zQ&usqp=CAU",
    name: "Manipal University",
    nirf: "54th",
    naac: "A+",
    href: "/universities/manipal"
  },
  {
    logo: "https://amity.edu/images/university.jpg",
    name: "Amity University",
    nirf: "32th",
    naac: "A+",
    href: "/universities/amity"
  },
]

interface UniversityCardProps {
  logo: string
  name: string
  nirf?: string
  naac?: string
  href: string
}

function UniversityCard({ logo, name, nirf, naac, href }: UniversityCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 shrink-0">
            <Image
              src={logo}
              alt={name}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm text-gray-900 dark:text-gray-100 truncate">{name}</h3>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              {nirf && (
                <Badge variant="secondary" className="text-xs">
                  NIRF {nirf}
                </Badge>
              )}
              {naac && (
                <Badge variant="secondary" className="text-xs">
                  NAAC {naac}
                </Badge>
              )}
            </div>
          </div>
        </div>
        <Button size="sm" variant="link" asChild className="mt-2 p-0">
          <Link href={href}>
            View Courses
            <ChevronRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export function DesktopNavDropdown() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Array<{ name: string; href: string }>>([])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === '') {
      setSearchResults([])
      return
    }
    const results = [
      ...categories,
      ...featuredUniversities,
    ].filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(results)
  }

  return (
    <div className="absolute top-full left-0 w-full bg-background border-t shadow-lg py-6 z-50">
      <div className="lg:px-16 px-4">
        <div className="grid grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="search"
                placeholder="Search universities..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border bg-gray-50 dark:bg-gray-800"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            {searchResults.length > 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {searchResults.map((result, index) => (
                    <li key={index}>
                      <Link
                        href={result.href}
                        className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        {result.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className={cn(
                      "flex items-center justify-between py-2 px-3 rounded-lg text-sm font-medium",
                      "hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                      "text-gray-900 dark:text-gray-100"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className="h-5 w-5 text-blue-600" />
                      {category.name}
                    </div>
                    {category.isNew && (
                      <Badge className="bg-green-500 text-white text-xs">New</Badge>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="col-span-3 space-y-4">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Featured Universities</h3>
            <div className="grid grid-cols-2 gap-4">
              {featuredUniversities.map((university) => (
                <UniversityCard key={university.name} {...university} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

