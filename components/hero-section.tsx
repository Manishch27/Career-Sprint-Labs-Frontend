'use client'

import { ArrowRight, Sparkles, Globe2, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function HeroSection() {
  return (
    <div className="relative w-full min-h-[700px] flex flex-col items-center justify-center px-4 py-8 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        
        {/* College-related objects with enhanced styling */}
        <div className="absolute top-1/6 left-1/6 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg rotate-12 animate-float opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/6 w-32 h-32 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full animate-float animation-delay-2000 opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-4 border-blue-300/50 rounded-full animate-spin-slow"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/2 left-20 transform rotate-45">
          <Sparkles className="w-12 h-12 text-blue-400/30 animate-pulse" />
        </div>
        <div className="absolute bottom-1/3 right-20">
          <Globe2 className="w-16 h-16 text-blue-500/30 animate-float animation-delay-4000" />
        </div>
        <div className="absolute top-1/4 right-1/3">
          <GraduationCap className="w-20 h-20 text-blue-600/30 animate-bounce" />
        </div>
      </div>

      {/* Stats Banner */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 hidden md:flex lg:flex gap-4 md:gap-8 bg-white/90 hidden-sm dark:bg-gray-900/90 p-4 rounded-full shadow-lg backdrop-blur-sm ">
        <Badge variant="secondary" className="bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200">
          15+ Universities
        </Badge>
        <Badge variant="secondary" className="bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200">
          30+ Programs
        </Badge>
        <Badge variant="secondary" className="bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200">
          Trusted by Thousands of Students
        </Badge>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto text-center z-10 space-y-12">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight text-blue-950 dark:text-blue-50">
            Learn Anywhere, Achieve
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
               Everywhere
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-700/80 dark:text-blue-200/80 max-w-3xl mx-auto">
            Unlock opportunities with Career Sarathi. Discover your ideal program and university in India in minutes.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 h-14">
            Start Exploring <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 h-14 border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/50 backdrop-blur-sm"
          >
            Watch Demo
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="pt-12 flex flex-wrap justify-center gap-6 text-sm text-blue-600 dark:text-blue-300">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            <span>Personalized Recommendations</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe2 className="h-5 w-5" />
            <span>Nationwide Network</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            <span>Expert Guidance</span>
          </div>
        </div>
      </div>
    </div>
  )
}

