import { Metadata } from 'next'
import { constructMetadata } from '@/lib/metadata'
import { Shield, CheckCircle, FileText, Users, Bell, Scale } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = constructMetadata({
  title: 'Terms & Conditions | Career Sarathi',
  description: 'Read our terms and conditions to understand the rules and guidelines for using Career Sarathi services.',
})

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="lg:px-16 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Scale className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms & Conditions</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Please read these terms and conditions carefully before using Career Sarathi services.
            </p>
          </div>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <CheckCircle className="w-6 h-6 mr-2" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                By accessing and using Career Sarathi's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <FileText className="w-6 h-6 mr-2" />
                Services Description
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                Career Sarathi provides educational counseling and information services to students seeking admission in various UGC and DEB recognized universities. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Educational counseling and guidance</li>
                <li>University and course information</li>
                <li>Admission assistance</li>
                <li>Document verification support</li>
                <li>Career planning advice</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <Users className="w-6 h-6 mr-2" />
                User Obligations
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account information</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with the proper working of our website</li>
                <li>Not attempt to circumvent any security measures</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <Shield className="w-6 h-6 mr-2" />
                Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Career Sarathi and is protected by intellectual property laws.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <Bell className="w-6 h-6 mr-2" />
                Changes to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last Updated" date of these terms.
              </p>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

