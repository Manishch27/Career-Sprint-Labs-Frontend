import { Metadata } from 'next'
import { constructMetadata } from '@/lib/metadata'
import { RefreshCw, Clock, CheckCircle, HelpCircle } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = constructMetadata({
  title: 'Refund Policy | Career Sarathi',
  description: 'Learn about Career Sarathi\'s refund policy for our educational consultancy services and how we ensure customer satisfaction.',
})

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="lg:px-16 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <RefreshCw className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Refund Policy</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our commitment to your satisfaction and fair refund practices.
            </p>
          </div>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <Clock className="w-6 h-6 mr-2" />
                Consultation Services
              </CardTitle>
              <CardDescription>
                Our refund policy for consultation appointments.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                For our consultation services, we offer a full refund if you cancel your appointment at least 48 hours before the scheduled time. If you cancel within 48 hours of your appointment, a 50% refund will be issued.
              </p>
              <p>
                No refund will be provided for missed appointments or cancellations made after the scheduled appointment time.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <CheckCircle className="w-6 h-6 mr-2" />
                Application Assistance
              </CardTitle>
              <CardDescription>
                Refund terms for our application assistance services.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                For application assistance services, refunds are available on a pro-rata basis depending on the stage of the application process. Once an application has been submitted to an institution, no refund will be provided.
              </p>
              <p>
                We value transparency in our services. If you have any questions about the refund eligibility at any stage of the application process, please contact our support team.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <HelpCircle className="w-6 h-6 mr-2" />
                Digital Products
              </CardTitle>
              <CardDescription>
                Our policy for digital products and online courses.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                For digital products such as e-books or online courses, we offer a 30-day money-back guarantee. If you are not satisfied with the product, you can request a full refund within 30 days of purchase.
              </p>
              <p>
                To request a refund for a digital product, please contact our customer support team with your order details and reason for the refund. We will process your request within 5-7 business days.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <RefreshCw className="w-6 h-6 mr-2" />
                Refund Process
              </CardTitle>
              <CardDescription>
                How to request and process a refund.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                To request a refund, please contact our customer support team at refunds@careersarathi.com with your order details and reason for the refund. We will process your request within 5-7 business days.
              </p>
              <p>
                Please note that we reserve the right to refuse a refund if we suspect fraud or misuse of our services. In such cases, we will communicate our decision and the reasons behind it.
              </p>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

