import React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  loading?: boolean
}

/**
 * Button Component
 *
 * Versatile button component following Gymshark design system.
 * Supports multiple variants, sizes, states, and responsive behavior.
 *
 * @param variant - Visual style variant
 * @param size - Button size
 * @param fullWidth - Whether button takes full width
 * @param loading - Show loading state
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", fullWidth = false, loading = false, disabled, children, ...props },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black cursor-pointer disabled:pointer-events-none disabled:opacity-50"

    const variants = {
      primary: "bg-black text-white hover:bg-gray-800 active:bg-gray-900",
      secondary: "border-2 border-black text-black bg-transparent hover:bg-black hover:text-white active:bg-gray-800",
      accent: "bg-[#00FF7F] text-black hover:bg-[#00CC66] active:bg-[#00AA55]",
      ghost: "text-black hover:bg-gray-100 active:bg-gray-200",
    }

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-13 px-8 text-lg",
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], fullWidth && "w-full", className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="w-4 h-4 mr-2 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"
