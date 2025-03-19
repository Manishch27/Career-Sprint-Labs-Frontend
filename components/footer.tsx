'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Youtube, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'
import logo from "@/public/Sarthi.png"


const universities = [
  "Online Manipal", "Amity University", "Lovely Professional University",
  "Chandigarh University", "DY Patil University", "Vivekananda Global University",
  "Sharda University", "Shoolini University", "Jain University",
  "Sikkim Manipal University", "Vignan University", "UPES University",
  "Amrita University", "Shobhit University", "Mangalayatan University",
  "Uttaranchal University", "Suresh Gyan Vihar University", 
  "Swami Vivekanand Subharti University"
]

// const distanceCourses = [
//   "BA Distance Education", "BBA Distance Education", "BCA Distance Education",
//   "BCOM Distance Education", "BLIS Distance Education", "BJMC Distance Education",
//   "BSC Distance Education", "MA Distance Education", "MBA Distance Education",
//   "MCA Distance Education", "MCOM Distance Education", "MLIS Distance Education",
//   "MSC Distance Education", "MJMC Distance Education"
// ]

const onlineCourses = [
  "Online MBA Course", "Online MCA Course", "Online MCOM Course",
  "Online MA Course", "Online MSC Course", "Online MJMC Course",
  "Online BBA Course", "Online BCA Course", "Online BCOM Course",
  "Online BA Course", "Online BSC Course", "Online BJMC Course",
  "Online & Distance Diploma Courses", "PGP Courses", "Certificate Course"
]

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Youtube, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="lg:px-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="Career Sarathi logo" className="h-24"/>
            </Link>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link 
                    key={index} 
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:text-blue-400">Contact Us</Link></li>
              <li><Link href="/disclaimer" className="hover:text-blue-400">Disclaimer</Link></li>
              <li><Link href="/refund-policy" className="hover:text-blue-400">Refund Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-blue-400">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Universities Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Online & Distance Universities</h3>
            <ul className="space-y-2">
              {universities.slice(0, 8).map((uni, index) => (
                <li key={index}>
                  <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                    {uni}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              {onlineCourses.slice(0, 8).map((course, index) => (
                <li key={index}>
                  <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <span><a href="tel:+919027717308">+91-9027717308</a></span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <span><a href="mailto:info@careersaathi.com">info@careersaathi.com</a></span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} CareerSprint Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

