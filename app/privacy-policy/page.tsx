import { Metadata } from 'next'
import { constructMetadata } from '@/lib/metadata'
import { Lock, Database, Share2, UserCheck, Bell, Shield } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy | Career Sarathi',
  description: 'Learn how Career Sarathi collects, uses, and protects your personal information in our comprehensive privacy policy.',
})

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="lg:px-16 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Lock className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your privacy is important to us. Learn how we protect your personal information.
            </p>
          </div>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <Database className="w-6 h-6 mr-2" />
                Information We Collect
              </CardTitle>
              <CardDescription>
                Types of personal data we gather and process.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                We collect personal information that you provide directly to us, such as your name, email address, phone number, and educational background when you register for our services or contact us for support.
              </p>
              <p>
                We may also collect information about your use of our website and services, including your IP address, browser type, and the pages you visit.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <Share2 className="w-6 h-6 mr-2" />
                How We Use Your Information
              </CardTitle>
              <CardDescription>
                Purposes for which we process your personal data.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                We use the information we collect to provide and improve our services, communicate with you, and personalize your experience. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processing your inquiries and requests</li>
                <li>Sending you updates about our services and educational opportunities</li>
                <li>Analyzing usage patterns to improve our website and services</li>
                <li>Preventing fraud and ensuring the security of our platform</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <UserCheck className="w-6 h-6 mr-2" />
                Information Sharing and Disclosure
              </CardTitle>
              <CardDescription>
                How and when we share your information with third parties.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Educational institutions when processing your applications</li>
                <li>Service providers who assist us in operating our website and services</li>
                <li>Law enforcement or other government agencies when required by law</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <Shield className="w-6 h-6 mr-2" />
                Data Security
              </CardTitle>
              <CardDescription>
                Measures we take to protect your personal information.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <Bell className="w-6 h-6 mr-2" />
                Your Rights
              </CardTitle>
              <CardDescription>
                Your rights regarding your personal information.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                You have the right to access, correct, or delete your personal information. You can also object to or restrict certain processing of your data. To exercise these rights, please contact us at privacy@careersarathi.com.
              </p>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Privacy Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

