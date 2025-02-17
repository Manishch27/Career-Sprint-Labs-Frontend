"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { universities } from "@/data/universities"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

export function ApplicationSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const [courses, setCourses] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const courseOptions = Array.from(
      new Set(universities.flatMap((uni) => uni.courses.map((course) => course.program))),
    )
    setCourses(courseOptions)
  }, [])

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Form submitted:", data)
      toast.success("Application submitted successfully!")
      reset()
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="lg:px-16 px-4">
      <div className="relative -mt-32 pt-32 bg-gradient-to-b from-transparent to-white dark:to-background">
        <section className="w-full py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-blue-950 dark:via-background dark:to-blue-950 rounded-md">
          <div className="lg:px-16 px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-blue-950 dark:text-blue-50">
                    Hassle-Free
                    <br />
                    Admissions Process:
                    <br />
                    <span className="text-blue-600">Expert Guidance Awaits</span>
                  </h2>
                  <p className="text-xl text-blue-700/80 dark:text-blue-200/80 max-w-xl">
                    Receive personalized counseling and application assistance. Our expert team offers tailored support
                    to guide you every step of the way.
                  </p>
                </div>
              </div>

              {/* Right Form */}
              <Card className="lg:ml-auto w-full max-w-md">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        {...register("phone", { required: "Phone number is required" })}
                      />
                      {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="studyLevel">Preferred Course</Label>
                      <Select {...register("studyLevel")}>
                        <SelectTrigger id="studyLevel">
                          <SelectValue placeholder="Select Course" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses.map((course) => (
                            <SelectItem key={course} value={course}>
                              {course}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Get Expert Guidance"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

