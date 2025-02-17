'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Search, BookOpen, GraduationCap, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const schoolBoards = [
  {
    name: "Board Of Open Schooling & Skill Education (BOSSE)",
    href: "/school-boards/bosse",
    icon: BookOpen,
    description: "Flexible learning opportunities and skill development"
  },
  {
    name: "National Institute of Open Schooling (NIOS)",
    href: "/school-boards/nios",
    icon: GraduationCap,
    description: "India's largest open schooling system"
  }
]

export function SchoolBoardsDropdown() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState(schoolBoards)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    const results = schoolBoards.filter(board => 
      board.name.toLowerCase().includes(query.toLowerCase()) ||
      board.description.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(results)
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-green-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8 shadow-2xl rounded-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.2] bg-[size:20px_20px]"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
            <Input
              type="search"
              placeholder="Search school boards..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 py-3 text-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid gap-6">
          {searchResults.map((board, index) => (
            <motion.div 
              key={board.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={board.href}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <board.icon className="h-10 w-10 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{board.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{board.description}</p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

