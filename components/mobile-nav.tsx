'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu, GraduationCap, BookOpen, Award, TrendingUp, ChevronRight, Phone, Mail, MapPin, Clock, Search, Star, FileText, School } from 'lucide-react'

const categories = [
  { name: "Online Universities", href: "/universities/online", icon: GraduationCap },
  { name: "Distance Universities", href: "/universities/distance", icon: BookOpen },
  { name: "Universities Approvals", href: "/universities/approvals", icon: Award },
  { name: "Top 10 Universities", href: "/universities/top-10", icon: TrendingUp, isNew: true },
  { name: "Suggest Universities", href: "/universities/suggest", icon: Star, isNew: true },
]

const quickLinks = [
  { name: "MBA", href: "/courses/mba", icon: FileText },
  { name: "MCA", href: "/courses/mca", icon: School },
  { name: "BBA", href: "/courses/bba", icon: FileText },
  { name: "BCA", href: "/courses/bca", icon: School },
]

const contactInfo = [
  { icon: Phone, content: "+91 1234567890" },
  { icon: Mail, content: "info@careersaathi.com" },
  { icon: MapPin, content: "New Delhi, India" },
  { icon: Clock, content: "Mon - Sat: 9:00 AM - 6:00 PM" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Array<{ name: string; href: string }>>([])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === '') {
      setSearchResults([])
      return
    }
    // This is a basic search. In a real app, you might want to use a more sophisticated search algorithm
    const results = [
      ...categories,
      ...quickLinks,
    ].filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(results)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-[540px] p-0">
        <ScrollArea className="h-full px-4">
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
          </SheetHeader>
          
          {/* Search Bar */}
          <div className="p-4 border-b">
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
            {searchResults.length > 0 && (
              <div className="mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {searchResults.map((result, index) => (
                    <li key={index}>
                      <Link
                        href={result.href}
                        className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {result.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Main Navigation */}
          {searchResults.length === 0 && (
            <div className="p-4 space-y-6">
              {/* Categories */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 px-2">
                  Universities
                </h3>
                <div className="space-y-1">
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
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 px-2">
                  Popular Courses
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm font-medium bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <link.icon className="h-4 w-4 text-blue-600" />
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 px-2">
                  Contact Us
                </h3>
                <div className="space-y-3 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <info.icon className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-600 dark:text-gray-300">{info.content}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Button variant="outline" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                <Button className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
              </div>
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

