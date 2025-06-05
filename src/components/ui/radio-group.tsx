"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export interface RadioOption {
  value: string
  label: string
  description?: string
  disabled?: boolean
}

export interface RadioGroupProps {
  options: RadioOption[]
  value?: string
  onValueChange?: (value: string) => void
  name: string
  label?: string
  error?: string
  orientation?: "horizontal" | "vertical"
  size?: "sm" | "md" | "lg"
  className?: string
}

/**
 * RadioGroup Component
 *
 * Functional radio button group ensuring single selection within the group.
 * Supports keyboard navigation and follows Gymshark design system.
 *
 * @param options - Array of radio options
 * @param value - Currently selected value
 * @param onValueChange - Callback when selection changes
 * @param name - Name attribute for radio group
 * @param label - Label for the radio group
 * @param error - Error message to display
 * @param orientation - Layout orientation
 * @param size - Size of radio buttons
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onValueChange,
  name,
  label,
  error,
  orientation = "vertical",
  size = "md",
  className,
}) => {
  const [focusedValue, setFocusedValue] = useState<string | null>(null)

  const handleKeyDown = (e: React.KeyboardEvent, optionValue: string) => {
    const enabledOptions = options.filter((option) => !option.disabled)
    const currentIndex = enabledOptions.findIndex((option) => option.value === optionValue)

    let nextIndex = currentIndex

    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault()
        nextIndex = currentIndex < enabledOptions.length - 1 ? currentIndex + 1 : 0
        break
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault()
        nextIndex = currentIndex > 0 ? currentIndex - 1 : enabledOptions.length - 1
        break
      case " ":
        e.preventDefault()
        onValueChange?.(optionValue)
        return
      default:
        return
    }

    const nextOption = enabledOptions[nextIndex]
    if (nextOption) {
      setFocusedValue(nextOption.value)
      onValueChange?.(nextOption.value)
    }
  }

  const groupId = `radio-group-${Math.random().toString(36).substr(2, 9)}`

  const containerStyles = orientation === "horizontal" ? "flex flex-wrap gap-6" : "space-y-3"

  const sizes = {
    sm: { radio: "w-4 h-4", text: "text-sm" },
    md: { radio: "w-5 h-5", text: "text-base" },
    lg: { radio: "w-6 h-6", text: "text-lg" },
  }

  return (
    <fieldset className={cn("w-full", className)}>
      {/* Legend/Label */}
      {label && <legend className="text-sm font-medium text-gray-900 mb-3">{label}</legend>}

      {/* Radio Options */}
      <div
        role="radiogroup"
        aria-labelledby={label ? `${groupId}-legend` : undefined}
        aria-invalid={!!error}
        aria-describedby={error ? `${groupId}-error` : undefined}
        className={containerStyles}
      >
        {options.map((option) => {
          const isSelected = option.value === value
          const isFocused = option.value === focusedValue
          const radioId = `${groupId}-${option.value}`

          return (
            <label
              key={option.value}
              htmlFor={radioId}
              className={cn(
                "relative flex items-start gap-3 cursor-pointer",
                option.disabled && "cursor-not-allowed opacity-50",
              )}
            >
              {/* Radio Input */}
              <input
                id={radioId}
                type="radio"
                name={name}
                value={option.value}
                checked={isSelected}
                disabled={option.disabled}
                onChange={(e) => onValueChange?.(e.target.value)}
                onFocus={() => setFocusedValue(option.value)}
                onBlur={() => setFocusedValue(null)}
                onKeyDown={(e) => handleKeyDown(e, option.value)}
                className="sr-only"
              />

              {/* Custom Radio Button */}
              <div
                className={cn(
                  "flex-shrink-0 rounded-full border-2 transition-colors",
                  sizes[size].radio,
                  isSelected ? "border-black bg-black" : "border-gray-300 bg-white hover:border-gray-400",
                  isFocused && "ring-2 ring-offset-2 ring-black",
                  option.disabled && "border-gray-200 bg-gray-100",
                )}
              >
                {/* Inner Dot */}
                {isSelected && (
                  <div className={cn("w-full h-full rounded-full bg-white scale-50 transition-transform")} />
                )}
              </div>

              {/* Label and Description */}
              <div className="flex-1 min-w-0">
                <span className={cn("block font-medium text-gray-900", sizes[size].text)}>{option.label}</span>
                {option.description && <span className="block text-sm text-gray-600 mt-1">{option.description}</span>}
              </div>
            </label>
          )
        })}
      </div>

      {/* Error Message */}
      {error && (
        <p id={`${groupId}-error`} className="mt-3 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  )
}
