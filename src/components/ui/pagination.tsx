"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showFirstLast?: boolean
  showPrevNext?: boolean
  siblingCount?: number
  className?: string
}

/**
 * Pagination Component
 *
 * Interactive pagination component with page selection logic.
 * Follows Gymshark design system with full keyboard navigation support.
 *
 * @param currentPage - Currently active page (1-indexed)
 * @param totalPages - Total number of pages
 * @param onPageChange - Callback when page changes
 * @param showFirstLast - Show first/last page buttons
 * @param showPrevNext - Show previous/next buttons
 * @param siblingCount - Number of pages to show around current page
 */
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  siblingCount = 1,
  className,
}) => {
  const generatePageNumbers = () => {
    const pages: (number | "ellipsis")[] = []

    // Always show first page
    if (showFirstLast) {
      pages.push(1)
    }

    // Calculate range around current page
    const startPage = Math.max(showFirstLast ? 2 : 1, currentPage - siblingCount)
    const endPage = Math.min(showFirstLast ? totalPages - 1 : totalPages, currentPage + siblingCount)

    // Add ellipsis after first page if needed
    if (showFirstLast && startPage > 2) {
      pages.push("ellipsis")
    }

    // Add pages around current page
    for (let i = startPage; i <= endPage; i++) {
      if (!showFirstLast || (i !== 1 && i !== totalPages)) {
        pages.push(i)
      }
    }

    // Add ellipsis before last page if needed
    if (showFirstLast && endPage < totalPages - 1) {
      pages.push("ellipsis")
    }

    // Always show last page
    if (showFirstLast && totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = generatePageNumbers()

  const buttonBaseStyles =
    "inline-flex items-center justify-center min-w-[40px] h-10 px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50"

  const pageButtonStyles = "border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
  const activePageStyles = "bg-black text-white border-black hover:bg-gray-800"
  const navButtonStyles = "border border-gray-300 hover:bg-gray-50 hover:border-gray-400"

  return (
    <nav
      role="navigation"
      aria-label="Pagination Navigation"
      className={cn("flex items-center justify-center space-x-1", className)}
    >
      {/* Previous Button */}
      {showPrevNext && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className={cn(buttonBaseStyles, navButtonStyles)}
          aria-label="Go to previous page"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="sr-only">Previous</span>
        </button>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((page, index) => {
        if (page === "ellipsis") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="inline-flex items-center justify-center min-w-[40px] h-10 px-3 text-sm"
              aria-hidden="true"
            >
              <MoreHorizontal className="w-4 h-4" />
            </span>
          )
        }

        const isActive = page === currentPage

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(buttonBaseStyles, isActive ? activePageStyles : pageButtonStyles)}
            aria-label={`Go to page ${page}`}
            aria-current={isActive ? "page" : undefined}
          >
            {page}
          </button>
        )
      })}

      {/* Next Button */}
      {showPrevNext && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className={cn(buttonBaseStyles, navButtonStyles)}
          aria-label="Go to next page"
        >
          <ChevronRight className="w-4 h-4" />
          <span className="sr-only">Next</span>
        </button>
      )}
    </nav>
  )
}

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
)
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

const PaginationLink = React.forwardRef<HTMLAnchorElement, React.ComponentProps<"a"> & { isActive?: boolean }>(
  ({ className, isActive, ...props }, ref) => (
    <a
      ref={ref}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex items-center justify-center min-w-[40px] h-10 px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black",
        isActive ? "bg-black text-white border-black" : "border border-gray-300 hover:bg-gray-50 hover:border-gray-400",
        className,
      )}
      {...props}
    />
  ),
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = React.forwardRef<HTMLAnchorElement, React.ComponentProps<"a">>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      aria-label="Go to previous page"
      className={cn(
        "inline-flex items-center justify-center gap-1 h-10 px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black border border-gray-300 hover:bg-gray-50 hover:border-gray-400",
        className,
      )}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span>Previous</span>
    </a>
  ),
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = React.forwardRef<HTMLAnchorElement, React.ComponentProps<"a">>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      aria-label="Go to next page"
      className={cn(
        "inline-flex items-center justify-center gap-1 h-10 px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black border border-gray-300 hover:bg-gray-50 hover:border-gray-400",
        className,
      )}
      {...props}
    >
      <span>Next</span>
      <ChevronRight className="h-4 w-4" />
    </a>
  ),
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = React.forwardRef<HTMLSpanElement, React.ComponentProps<"span">>(
  ({ className, ...props }, ref) => (
    <span ref={ref} aria-hidden className={cn("flex h-10 w-10 items-center justify-center", className)} {...props}>
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  ),
)
PaginationEllipsis.displayName = "PaginationEllipsis"
