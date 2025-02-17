'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { UniversitiesDropdown } from './universities-dropdown'
import { CoursesDropdown } from './courses-dropdown'
import { SchoolBoardsDropdown } from './school-boards-dropdown'
import { MobileNav } from './mobile-nav'
import logo from "@/public/Sarthi.png"

export function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="w-full py-4 px-4 bg-background z-50 shadow-sm">
      <div className="lg:px-14 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="https://www.careersarathi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSarthi.55a14cb5.png&w=3840&q=75" alt="Career Sarathi logo" className="h-12 lg:h-16" />
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          <NavLinks activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>

        <div className="lg:hidden flex items-center space-x-4">
          <MobileNav />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

interface NavLinksProps {
  activeDropdown: string | null
  setActiveDropdown: (dropdown: string | null) => void
}

function NavLinks({ activeDropdown, setActiveDropdown }: NavLinksProps) {
  const navItems = [
    { name: "Universities", component: UniversitiesDropdown },
    { name: "Courses", component: CoursesDropdown },
    { name: "School Boards", component: SchoolBoardsDropdown },
  ]

  return (
    <div className="flex items-center space-x-6">
      {navItems.map((item) => (
        <Popover key={item.name} onOpenChange={(open) => open ? setActiveDropdown(item.name) : setActiveDropdown(null)}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className={`px-3 py-2 text-sm font-medium rounded-md ${activeDropdown === item.name ? 'bg-accent text-accent-foreground' : ''}`}
            >
              {item.name}
              <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-screen max-w-screen-xl p-0" align="start">
            <item.component />
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}

