import { University } from '@/types/university'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

interface UniversityComparisonProps {
  universities: University[]
}

export function UniversityComparison({ universities }: UniversityComparisonProps) {
  if (universities.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          No Universities Selected
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Please select universities to compare from the browse tab.
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Criteria</TableHead>
            {universities.map(uni => (
              <TableHead key={uni.id}>{uni.name}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Mode</TableCell>
            {universities.map(uni => (
              <TableCell key={uni.id}>
                <Badge
                  className={
                    uni.mode === 'Online' 
                      ? "bg-green-600" 
                      : uni.mode === 'Distance'
                      ? "bg-blue-600"
                      : "bg-purple-600"
                  }
                >
                  {uni.mode}
                </Badge>
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Location</TableCell>
            {universities.map(uni => (
              <TableCell key={uni.id}>{uni.location.city}, {uni.location.state}</TableCell>
            ))}
          </TableRow>
          <TableRow>
  <TableCell className="font-medium">Course Fee</TableCell>
  {universities.map((uni) => (
    <TableCell key={uni.id}>
      {uni.courses.map((course, index) => (
        <div key={index}>
          ₹{course.feesPerSemester}/- {course.period || 'Semester'}
        </div>
      ))}
    </TableCell>
  ))}
</TableRow>
          <TableRow>
            <TableCell className="font-medium">Approvals</TableCell>
            {universities.map(uni => (
              <TableCell key={uni.id}>
                {uni.approvals.map(approval => approval.name).join(', ')}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Courses Offered</TableCell>
            {universities.map(uni => (
              <TableCell key={uni.id}>
                {uni.courses.map(course => course.program).join(', ')}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Key Advantage</TableCell>
            {universities.map(uni => (
              <TableCell key={uni.id}>{uni.keyHighlights?.[0] || "N/A"} {/* Access keyHighlights safely */}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

