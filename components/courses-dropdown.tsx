'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Laptop, FileText, Briefcase, GraduationCap, Users, ChevronRight, LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface CourseItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

interface Category {
  title: string;
  icon: LucideIcon;
  items: CourseItem[];
}

const categories: Category[] = [
  {
    title: "Management",
    icon: Briefcase,
    items: [
      { name: "MBA Overview", href: "/courses/mba", icon: GraduationCap },
      { name: "MBA Specializations", href: "/courses/mba/specializations", icon: BookOpen },
      { name: "Executive MBA", href: "/courses/executive-mba", icon: Briefcase },
      { name: "PGDM", href: "/courses/pgdm", icon: GraduationCap },
      { name: "BBA", href: "/courses/bba", icon: GraduationCap },
      { name: "Distance MBA", href: "/courses/distance-mba", icon: BookOpen }
    ]
  },
  {
    title: "Technology",
    icon: Laptop,
    items: [
      { name: "MCA Overview", href: "/courses/mca", icon: GraduationCap },
      { name: "MCA Specializations", href: "/courses/mca/specializations", icon: BookOpen },
      { name: "BCA", href: "/courses/bca", icon: GraduationCap },
      { name: "B.Tech", href: "/courses/btech", icon: GraduationCap },
      { name: "M.Tech", href: "/courses/mtech", icon: GraduationCap },
      { name: "Diploma in IT", href: "/courses/diploma-it", icon: FileText }
    ]
  },
  {
    title: "Resources",
    icon: FileText,
    items: [
      { name: "Course Finder", href: "/courses/finder", icon: Search },
      { name: "Career Counselling", href: "/career-counselling", icon: Users },
      { name: "Compare Courses", href: "/courses/compare", icon: FileText },
      { name: "Admission Process", href: "/courses/admission-process", icon: FileText },
      { name: "Fee Structure", href: "/courses/fee-structure", icon: FileText },
      { name: "FAQs", href: "/courses/faqs", icon: FileText }
    ]
  }
]

export function CoursesDropdown() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchResults, setSearchResults] = useState<CourseItem[]>([])

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
    <div className="bg-green-50 dark:bg-green-950 p-8 shadow-2xl rounded-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.2] bg-[size:20px_20px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 dark:bg-green-800 rounded-full filter blur-3xl opacity-20 -z-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300 dark:bg-green-700 rounded-full filter blur-3xl opacity-20 -z-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-green-100 dark:bg-green-900 rounded-full filter blur-3xl opacity-20 -z-10 animate-blob animation-delay-4000"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 dark:text-green-400 h-5 w-5" />
            <Input
              type="search"
              placeholder="Search for courses..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 py-3 text-lg bg-white dark:bg-green-900 border-2 border-green-200 dark:border-green-700 rounded-xl focus:ring-2 focus:ring-green-400 dark:focus:ring-green-500"
            />
          </div>
          
          {searchResults.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 bg-white dark:bg-green-900 shadow-lg rounded-xl border border-green-200 dark:border-green-700 overflow-hidden"
            >
              <ul className="divide-y divide-green-200 dark:divide-green-700">
                {searchResults.map((result, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={result.href}
                      className="flex items-center px-4 py-3 hover:bg-green-50 dark:hover:bg-green-900/50 transition-colors"
                    >
                      <result.icon className="w-5 h-5 mr-3 text-green-500 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-200">{result.name}</span>
                      <ChevronRight className="w-5 h-5 ml-auto text-green-400 dark:text-green-500" />
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
              className="bg-white dark:bg-green-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-200 dark:border-green-700"
            >
              <h3 className="font-bold text-xl mb-4 text-green-600 dark:text-green-400 flex items-center">
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
                    <Link href={item.href} className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 flex items-center">
                      <item.icon className="w-5 h-5 mr-2 text-green-500 dark:text-green-400" />
                      <span>{item.name}</span>
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
