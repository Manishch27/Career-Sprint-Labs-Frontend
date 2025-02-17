'use client'

import { GraduationCap } from 'lucide-react'

interface NotFoundProps {
  entityName: string
}

export function NotFound({ entityName }: NotFoundProps) {
  return (
    <div className="text-center py-12">
      <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
        {entityName} Not Found
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        The requested {entityName.toLowerCase()} could not be found. Please check the URL and try again.
      </p>
    </div>
  )
}

