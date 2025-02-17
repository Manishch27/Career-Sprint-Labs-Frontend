import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { University } from '@/types/university';
import { cn } from '@/lib/utils';
import { MapPin, Award, GraduationCap, CheckCircle, Plus, Minus } from 'lucide-react';

interface UniversityCardProps {
  university: University;
  isSelected?: boolean;
  onSelect?: () => void;
}

export function UniversityCard({ university, isSelected, onSelect }: UniversityCardProps) {
  const startingFees = university.courses?.reduce(
    (min, course) => (course.feesPerSemester < min ? course.feesPerSemester : min),
    Infinity
  );

  return (
    <Card className={cn("overflow-hidden hover:shadow-lg transition-all duration-300", isSelected && "border-blue-500 border-2")}>
      <CardContent className="p-0">
        <div className="md:flex">
          <div className="md:w-1/3 relative">
            <Image
              src={university.image || '/placeholder.svg'}
              alt={university.name}
              width={300}
              height={200}
              className="w-full h-48 md:h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-lg p-2">
              <Image
                src={university.logo || '/placeholder.svg'}
                alt={university.name}
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>

          <div className="md:w-2/3 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-950 dark:text-blue-50 mb-2">
                  {university.name}
                </h3>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {university.location?.city}, {university.location?.state}
                </div>
              </div>
              <Badge
                className={cn(
                  "text-white",
                  university.mode === 'Online' 
                    ? "bg-green-600 hover:bg-green-600" 
                    : university.mode === 'Distance'
                    ? "bg-blue-600 hover:bg-blue-600"
                    : "bg-purple-600 hover:bg-purple-600"
                )}
              >
                {university.mode}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Starting Fee:</p>
                <p className="font-semibold">
                  ₹ {startingFees !== Infinity ? startingFees.toLocaleString('en-IN') : 'N/A'} /- per semester
                  </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Approvals:</p>
                <div className="flex flex-wrap gap-1">
                  {university.approvals?.slice(0,3).map((approval, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {approval.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Courses:</p>
              <div className="flex flex-wrap gap-2">
                {university.courses?.slice(0, 3).map((course, index) => (
                  <Badge key={index} variant="outline" className="bg-blue-50 dark:bg-blue-900/50">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-gray-500" />
                      <span>{course.program} Degree</span>
                    </div>
                  </Badge>
                ))}
                {(university.courses?.length || 0) > 3 && (
                  <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/50">
                    +{university.courses.length - 3} more
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center text-green-600 dark:text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">
                  {university.keyHighlights?.[0]?.name || 'Key Highlight'}
                </span>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Link href={`/universities/${university.id}`}>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    More Details
                  </Button>
                </Link>
                <Button variant="outline">Download Brochure</Button>
                {onSelect && (
                  <Button
                    variant="outline"
                    onClick={(e) => {
                      e.preventDefault();
                      onSelect();
                    }}
                    className={cn(
                      "border-blue-500 text-blue-500",
                      isSelected && "bg-blue-500 text-white hover:bg-blue-600"
                    )}
                  >
                    {isSelected ? (
                      <>
                        <Minus className="w-4 h-4 mr-2" />
                        Remove
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 mr-2" />
                        Compare
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

