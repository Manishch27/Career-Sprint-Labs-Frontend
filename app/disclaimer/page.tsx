import { Metadata } from 'next'
import { constructMetadata } from '@/lib/metadata'
import { Shield, AlertTriangle, Info, ExternalLink } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = constructMetadata({
  title: 'Disclaimer | Career Sarathi',
  description: 'Read our disclaimer regarding the information provided on Career Sarathi, your trusted education consultancy platform.',
})

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="lg:px-16 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Disclaimer</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Please read this disclaimer carefully before using our services.
            </p>
          </div>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <AlertTriangle className="w-6 h-6 mr-2" />
                General Information
              </CardTitle>
              <CardDescription>
                The content provided on Career Sarathi is for general informational purposes only.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
              </p>
              <p>
                Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <ExternalLink className="w-6 h-6 mr-2" />
                External Links
              </CardTitle>
              <CardDescription>
                Our policy regarding external websites and resources.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                Through this website, you can link to other websites which are not under the control of Career Sarathi. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
              </p>
              <p>
                Every effort is made to keep the website up and running smoothly. However, Career Sarathi takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">
                <Info className="w-6 h-6 mr-2" />
                Use of Information
              </CardTitle>
              <CardDescription>
                How we present and use information on our platform.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Career Sarathi excludes all representations and warranties relating to this website and its contents or which is or may be provided by any affiliates or any other third party, including in relation to any inaccuracies or omissions in this website and/or Career Sarathi's literature.
              </p>
              <p>
                We reserve the right to update or change our disclaimer at any time. Your continued use of the service after we post any modifications to the disclaimer on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified disclaimer.
              </p>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

