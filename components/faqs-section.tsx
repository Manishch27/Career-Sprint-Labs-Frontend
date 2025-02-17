'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { HelpCircle, Star } from 'lucide-react'

const faqs = [
  {
    question: "What programs do you offer?",
    answer: "We offer a wide range of undergraduate and postgraduate programs from top universities across India. Whether you're looking to study in fields like engineering, business, arts, or sciences, we have a program to suit your career aspirations."
  },
  {
    question: "How do I choose the right university?",
    answer: "Our expert counselors will help you shortlist universities based on your academic interests, location preferences, budget, and career goals. We guide you through the entire selection process to ensure the best fit for your future."
  },
  {
    question: "Do I need to appear for any entrance exams?",
    answer: "Some programs may require entrance exams, while others may have direct admission based on your academic qualifications. Our team will provide you with all the details and help you prepare for any required exams."
  },
  {
    question: "Can I apply to multiple universities at once?",
    answer: "Yes, you can apply to multiple universities. Our team will assist you in managing your applications, ensuring that all documentation is submitted on time and in the correct format."
  },
  {
    question: "How can Career Sarathi help with my application?",
    answer: "We provide comprehensive support with your application process, including guidance on documentation, essay writing, and submitting your application. Our expert team ensures that your application is complete and stands out to universities."
  },
  {
    question: "Is there any 24/7 support available?",
    answer: "Yes, we offer 24/7 assistance to ensure that you have the support you need at any stage of your education journey, whether it's for application help, queries, or general guidance."
  },
  {
    question: "What makes Career Sarathi different from other education consultants?",
    answer: "At Career Sarathi, we provide personalized, one-on-one counseling, expert guidance through the application process, and a dedicated team to ensure your success. We focus on aligning your educational goals with the best universities in India to help you build a successful career."
  }
]

export function FAQsSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-blue-50 dark:from-background dark:to-blue-950">
      <div className="lg:px-16 px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <HelpCircle className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 dark:text-blue-50">
              Frequently Asked
              <span className="text-blue-600"> Questions</span>
            </h2>
          </div>
          <p className="text-xl text-blue-700/80 dark:text-blue-200/80 max-w-3xl mx-auto">
            Find answers to common questions about studying in India with Career Sarathi
          </p>
        </div>

        <div className="max-w-5xl mx-auto"> {/* Reduced max-width for better mobile responsiveness */}
          <Card className="p-4 md:p-6 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg"> {/* Added border and rounded corners */}
            <Accordion type="single" collapsible className="w-full space-y-2"> {/* Reduced spacing */}
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 px-2 py-2 data-[state=open]:bg-blue-50/50 dark:data-[state=open]:bg-blue-950/50 transition-colors rounded-lg"
                >
                  <AccordionTrigger className="flex items-center gap-2 text-left text-lg font-semibold text-blue-950 dark:text-blue-50 hover:text-blue-600 dark:hover:text-blue-400">
                    <Star className="w-5 h-5 text-yellow-400" /> {/* Added star icon */}
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-blue-700/80 dark:text-blue-200/80 pt-2 pb-4 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  )
}

