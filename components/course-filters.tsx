'use client'

import { Check, X, IndianRupeeIcon as Rupee } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Slider } from "@/components/ui/slider"
import { useState } from 'react';


interface FilterOption {
  id: string
  label: string
}

interface FilterSectionProps {
  title: string
  options: FilterOption[]
  selected: string[]
  onChange: (value: string) => void
}

function FilterSection({ title, options, selected, onChange }: FilterSectionProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-sm text-blue-950 dark:text-blue-50">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center gap-2 text-sm cursor-pointer"
          >
            <div
              className={cn(
                "w-4 h-4 border rounded flex items-center justify-center",
                selected.includes(option.id) 
                  ? "bg-blue-600 border-blue-600" 
                  : "border-gray-300 dark:border-gray-600"
              )}
              onClick={() => onChange(option.id)}
            >
              {selected.includes(option.id) && (
                <Check className="h-3 w-3 text-white" />
              )}
            </div>
            <span className="text-gray-700 dark:text-gray-300">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export function CourseFilters({ 
  course,
  selectedModes,
  selectedFees,
  onModeChange,
  onFeeChange,
}: {
  course: string
  selectedModes: string[]
  selectedFees: number[]
  onModeChange: (mode: string) => void
  onFeeChange: (fees: number[]) => void
}) {

  const modeOptions = [
    { id: 'online', label: 'Online Mode' },
    { id: 'distance', label: 'Distance Mode' },
    { id: 'regular', label: 'Regular Mode' }
  ]

  const [feeRange, setFeeRange] = useState([0, 200000])

  const clearFilters = () => {
    setSelectedModes([])
    setFeeRange([0, 200000]) // Reset fee range
    onFeeChange([0, 200000]) // Notify parent about fee change
  }

  return (
    <Card className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-blue-950 dark:text-blue-50">
          Filters
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
        >
          <X className="w-4 h-4 mr-2" />
          Clear All
        </Button>
      </div>
      <div className="space-y-6">
        <FilterSection
          title="Mode of Education"
          options={modeOptions}
          selected={selectedModes}
          onChange={onModeChange}
        />
        <div className="space-y-3">
          <h3 className="font-semibold text-sm text-blue-950 dark:text-blue-50 flex items-center gap-1">
            <Rupee className="w-4 h-4" /> Fees Range
          </h3>
          <Slider
            defaultValue={[feeRange[0], feeRange[1]]}
            max={200000}
            step={1000}
            onValueChange={(value) => {
              setFeeRange(value);
              onFeeChange(value);
            }}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>₹{feeRange[0].toLocaleString()}</span>
            <span>₹{feeRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

