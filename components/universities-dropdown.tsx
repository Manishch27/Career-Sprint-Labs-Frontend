'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Search, GraduationCap, BookOpen, Award, TrendingUp, Star, Building, FileText, Users, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const categories = [
  {
    title: "Explore Universities",
    icon: GraduationCap,
    items: [
      { name: "Top Online Universities", href: "/universities/online", icon: Building },
      { name: "UGC-DEB Approved", href: "/universities/list/ugc-deb-approved", icon: Award },
      { name: "NAAC A+ Universities", href: "/universities/list/naac-aplus", icon: Star },
      { name: "NIRF Ranked Universities", href: "/universities/list/nirf-ranked", icon: TrendingUp },
      { name: "Distance Universities", href: "/universities/distance", icon: BookOpen },
      { name: "Private Universities", href: "/universities/private", icon: Building }
    ]
  },
  {
    title: "Popular Universities",
    icon: Star,
    items: [
      { name: "Lovely Professional University", href: "/universities/lpu", icon: Building },
      { name: "Amity University", href: "/universities/amity", icon: Building },
      { name: "Chandigarh University", href: "/universities/chandigarh", icon: Building },
      { name: "UPES", href: "/universities/upes", icon: Building },
      { name: "Manipal University", href: "/universities/manipal", icon: Building },
      { name: "Jain University", href: "/universities/jain", icon: Building }
    ]
  },
  {
    title: "Resources",
    icon: FileText,
    items: [
      { name: "Compare Universities", href: "/universities/compare", icon: Users },
      { name: "University Rankings", href: "/universities/rankings", icon: TrendingUp },
      { name: "Admission Calendar", href: "/universities/admission-calendar", icon: FileText },
      { name: "Career Counselling", href: "/career-counselling", icon: Users },
      { name: "Education Loan", href: "/education-loan", icon: FileText },
      { name: "FAQs", href: "/universities/faqs", icon: FileText }
    ]
  }
]

export function UniversitiesDropdown() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Array<{ name: string; href: string; icon: any }>>([])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === '') {
      setSearchResults([])
      return
    }
    
    const allItems = categories.flatMap(category => category.items)
    const results = allItems.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(results)
  }

  return (
    <div className="bg-blue-50 dark:bg-blue-950 p-8 shadow-2xl rounded-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.2] bg-[size:20px_20px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-800 rounded-full filter blur-3xl opacity-20 -z-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 dark:bg-blue-700 rounded-full filter blur-3xl opacity-20 -z-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-blue-100 dark:bg-blue-900 rounded-full filter blur-3xl opacity-20 -z-10 animate-blob animation-delay-4000"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 dark:text-blue-400 h-5 w-5" />
            <Input
              type="search"
              placeholder="Search for universities..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 py-3 text-lg bg-white dark:bg-blue-900 border-2 border-blue-200 dark:border-blue-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
            />
          </div>
          
          {searchResults.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 bg-white dark:bg-blue-900 shadow-lg rounded-xl border border-blue-200 dark:border-blue-700 overflow-hidden"
            >
              <ul className="divide-y divide-blue-200 dark:divide-blue-700">
                {searchResults.map((result, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={result.href}
                      className="flex items-center px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      <result.icon className="w-5 h-5 mr-3 text-blue-500 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-200">{result.name}</span>
                      <ChevronRight className="w-5 h-5 ml-auto text-blue-400 dark:text-blue-500" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-blue-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-200 dark:border-blue-700"
            >
              <h3 className="font-bold text-xl mb-4 text-blue-600 dark:text-blue-400 flex items-center">
                <category.icon className="w-6 h-6 mr-2" />
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + (itemIndex * 0.1) }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                    >
                      <item.icon className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

