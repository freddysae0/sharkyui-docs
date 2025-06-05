"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Check, ChevronDown, Search, X } from "lucide-react"

export interface ComboboxOption {
  value: string
  label: string
  disabled?: boolean
}

export interface ComboboxProps {
  options: ComboboxOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  label?: string
  error?: string
  disabled?: boolean
  clearable?: boolean
  searchable?: boolean
  className?: string
}

/**
 * Combobox Component
 *
 * Interactive dropdown with search/filter capabilities.
 * Supports keyboard navigation, accessibility, and follows Gymshark design system.
 *
 * @param options - Array of selectable options
 * @param value - Currently selected value
 * @param onValueChange - Callback when selection changes
 * @param placeholder - Placeholder text for trigger
 * @param searchPlaceholder - Placeholder text for search input
 * @param label - Label for the combobox
 * @param error - Error message to display
 * @param disabled - Whether combobox is disabled
 * @param clearable - Whether selection can be cleared
 * @param searchable - Whether options can be searched/filtered
 */
export const Combobox: React.FC<ComboboxProps> = ({
  options,
  value,
  onValueChange,
  placeholder = "Select an option...",
  searchPlaceholder = "Search options...",
  label,
  error,
  disabled = false,
  clearable = false,
  searchable = true,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  const triggerRef = useRef<HTMLButtonElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const optionRefs = useRef<{ [key: string]: HTMLLIElement | null }>({})

  const selectedOption = options.find((option) => option.value === value)

  const filteredOptions =
    searchable && searchQuery
      ? options.filter((option) => option.label.toLowerCase().includes(searchQuery.toLowerCase()))
      : options

  const enabledOptions = filteredOptions.filter((option) => !option.disabled)

  useEffect(() => {
    if (isOpen && searchable && searchRef.current) {
      searchRef.current.focus()
    }
  }, [isOpen, searchable])

  useEffect(() => {
    setHighlightedIndex(-1)
  }, [searchQuery])

  const handleToggle = () => {
    if (disabled) return
    setIsOpen(!isOpen)
    setSearchQuery("")
  }

  const handleSelect = (optionValue: string) => {
    onValueChange?.(optionValue)
    setIsOpen(false)
    setSearchQuery("")
    triggerRef.current?.focus()
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    onValueChange?.("")
    setIsOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return

    switch (e.key) {
      case "Enter":
        e.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
        } else if (highlightedIndex >= 0 && enabledOptions[highlightedIndex]) {
          handleSelect(enabledOptions[highlightedIndex].value)
        }
        break
      case "Escape":
        setIsOpen(false)
        triggerRef.current?.focus()
        break
      case "ArrowDown":
        e.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
        } else {
          setHighlightedIndex((prev) => (prev < enabledOptions.length - 1 ? prev + 1 : 0))
        }
        break
      case "ArrowUp":
        e.preventDefault()
        if (isOpen) {
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : enabledOptions.length - 1))
        }
        break
      case "Tab":
        setIsOpen(false)
        break
    }
  }

  const comboboxId = `combobox-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className={cn("relative w-full", className)}>
      {/* Label */}
      {label && (
        <label htmlFor={comboboxId} className="block text-sm font-medium text-gray-900 mb-2">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        ref={triggerRef}
        id={comboboxId}
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={`${comboboxId}-listbox`}
        disabled={disabled}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 text-left bg-white border rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black disabled:cursor-not-allowed disabled:opacity-50",
          error ? "border-red-500" : "border-gray-300 hover:border-gray-400",
          isOpen && "border-black",
        )}
      >
        <span className={cn("block truncate", !selectedOption && "text-gray-500")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <div className="flex items-center gap-2">
          {clearable && selectedOption && (
            <button
              type="button"
              onClick={handleClear}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Clear selection"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <ChevronDown className={cn("w-4 h-4 text-gray-400 transition-transform", isOpen && "rotate-180")} />
        </div>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {/* Search Input */}
          {searchable && (
            <div className="p-2 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Options List */}
          <ul ref={listRef} role="listbox" id={`${comboboxId}-listbox`} className="max-h-60 overflow-auto py-1">
            {filteredOptions.length === 0 ? (
              <li className="px-4 py-2 text-sm text-gray-500">No options found</li>
            ) : (
              filteredOptions.map((option, index) => {
                const isSelected = option.value === value
                const isHighlighted = enabledOptions.indexOf(option) === highlightedIndex

                return (
                  <li
                    key={option.value}
                    ref={(el) => {
                      optionRefs.current[option.value] = el
                    }}
                    role="option"
                    aria-selected={isSelected}
                    className={cn(
                      "relative cursor-pointer select-none py-2 pl-10 pr-4 text-sm transition-colors",
                      option.disabled && "cursor-not-allowed opacity-50",
                      !option.disabled && (isHighlighted || isSelected) && "bg-gray-100",
                      !option.disabled && "hover:bg-gray-50",
                    )}
                    onClick={() => !option.disabled && handleSelect(option.value)}
                  >
                    {isSelected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                        <Check className="w-4 h-4" />
                      </span>
                    )}
                    <span className={cn("block truncate", isSelected && "font-medium")}>{option.label}</span>
                  </li>
                )
              })
            )}
          </ul>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
