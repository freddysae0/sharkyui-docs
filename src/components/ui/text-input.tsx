"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"


export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, "size"> {
  label?: string
  error?: string
  success?: string
  helperText?: string
  size?: "sm" | "md" | "lg"
  variant?: "input" | "textarea"
  rows?: number
  showPasswordToggle?: boolean
}

/**
 * TextInput Component
 *
 * Flexible text input component supporting both input and textarea functionality.
 * Includes error/success states, helper text, and password visibility toggle.
 *
 * @param label - Input label text
 * @param error - Error message to display
 * @param success - Success message to display
 * @param helperText - Helper text below input
 * @param size - Input size
 * @param variant - Input type (input or textarea)
 * @param rows - Number of rows for textarea
 * @param showPasswordToggle - Show password visibility toggle
 */
export const TextInput = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, TextInputProps>(
  (
    {
      className,
      label,
      error,
      success,
      helperText,
      size = "md",
      variant = "default",
      type = "text",
      rows = 4,
      showPasswordToggle = false,
      id,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
    const hasError = !!error
    const hasSuccess = !!success && !hasError
    const isPassword = type === "password"
    const actualType = isPassword && showPassword ? "text" : type

    const baseStyles =
      "w-full border rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black disabled:cursor-not-allowed disabled:opacity-50"

    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-base",
      lg: "px-5 py-4 text-lg",
    }

    const stateStyles = hasError
      ? "border-red-500 focus:border-red-500"
      : hasSuccess
        ? "border-green-500 focus:border-green-500"
        : "border-gray-300 focus:border-black hover:border-gray-400"

    const inputStyles = cn(baseStyles, sizes[size], stateStyles, isPassword && showPasswordToggle && "pr-12", className)

    const InputComponent = variant === "textarea" ? "textarea" : "input"

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-900 mb-2">
            {label}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          <InputComponent
            ref={ref as any}
            id={inputId}
            type={actualType}
            rows={variant === "textarea" ? rows : undefined}
            className={inputStyles}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${inputId}-error` : success ? `${inputId}-success` : helperText ? `${inputId}-helper` : undefined
            }
            {...props}
          />

          {/* Password Toggle */}
          {variant === "input" && isPassword && showPasswordToggle && (
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          )}
        </div>

        {/* Helper/Error/Success Text */}
        {(error || success || helperText) && (
          <div className="mt-2">
            {error && (
              <p id={`${inputId}-error`} className="text-sm text-red-600" role="alert">
                {error}
              </p>
            )}
            {success && !error && (
              <p id={`${inputId}-success`} className="text-sm text-green-600">
                {success}
              </p>
            )}
            {helperText && !error && !success && (
              <p id={`${inputId}-helper`} className="text-sm text-gray-600">
                {helperText}
              </p>
            )}
          </div>
        )}
      </div>
    )
  },
)

TextInput.displayName = "TextInput"
