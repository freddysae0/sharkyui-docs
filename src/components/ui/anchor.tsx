import React from "react"
import { cn } from "@/lib/utils"

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "accent"
  size?: "sm" | "md" | "lg"
  underline?: "none" | "hover" | "always"
  external?: boolean
}

/**
 * Anchor Component
 *
 * A styled anchor element following Gymshark design system.
 * Supports multiple variants, sizes, and states with full accessibility.
 *
 * @param variant - Visual style variant
 * @param size - Size of the anchor text
 * @param underline - Underline behavior
 * @param external - Whether link opens in new tab
 */
export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ className, variant = "primary", size = "md", underline = "hover", external = false, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center gap-1 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"

    const variants = {
      primary: "text-black hover:text-neutral-600",
      secondary: "text-neutral-600 hover:text-black",
      accent: "text-[#00FF7F] hover:text-[#00CC66]",
    }

    const sizes = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    }

    const underlineStyles = {
      none: "no-underline",
      hover: "no-underline hover:underline",
      always: "underline",
    }

    return (
      <a
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], underlineStyles[underline], className)}
        {...(external && {
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": `${children} (opens in new tab)`,
        })}
        {...props}
      >
        {children}
        {external && (
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </a>
    )
  },
)

Anchor.displayName = "Anchor"
