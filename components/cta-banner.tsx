import { Button } from "@/components/ui/button"
import { Phone } from 'lucide-react'

export function CTABanner() {
  return (
    <section className="w-full py-12 bg-blue-50 dark:bg-blue-950">
      <div className="lg:px-16 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-950 dark:text-blue-50">
              Ready to start your journey?
            </h2>
            <p className="lg:text-2xl md:text-2xl sm:md text-blue-600 font-semibold">
              Begin your education adventure with Career Sarathi today!
            </p>
          </div>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 h-14 rounded-full"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Us Now
          </Button>
        </div>
      </div>
    </section>
  )
}

