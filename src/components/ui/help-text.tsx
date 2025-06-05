import type React from "react"
import { cn } from "@/lib/utils"
import { Info, AlertCircle, CheckCircle, AlertTriangle } from "lucide-react"

export interface HelpTextProps {
  children: React.ReactNode
  variant?: "default" | "info" | "success" | "warning" | "error"
  size?: "sm" | "md"
  showIcon?: boolean
  className?: string
}

/**
 * HelpText Component
 *
 * Displays context-sensitive messages with appropriate styling and icons.
 * Used for form validation, informational messages, and user guidance.
 *
 * @param variant - Visual style variant indicating message type
 * @param size - Text size
 * @param showIcon - Whether to display an icon
 */
export const HelpText: React.FC<HelpTextProps> = ({
  children,
  variant = "default",
  size = "sm",
  showIcon = true,
  className,
}) => {
  const baseStyles = "flex items-start gap-2 font-medium"

  const variants = {
    default: "text-gray-600",
    info: "text-blue-600",
    success: "text-green-600",
    warning: "text-yellow-600",
    error: "text-red-600",
  }

  const sizes = {
    sm: "text-sm",
    md: "text-base",
  }

  const icons = {
    default: Info,
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertCircle,
  }

  const Icon = icons[variant]

  return (
    <div
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      role={variant === "error" ? "alert" : variant === "warning" ? "alert" : undefined}
    >
      {showIcon && (
        <Icon className={cn("flex-shrink-0 mt-0.5", size === "sm" ? "w-4 h-4" : "w-5 h-5")} aria-hidden="true" />
      )}
      <span>{children}</span>
    </div>
  )
}
