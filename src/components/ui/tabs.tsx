"use client"

import type React from "react"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

export interface TabItem {
  id: string
  label: string
  content: React.ReactNode
  disabled?: boolean
}

export interface TabsProps {
  items: TabItem[]
  defaultActiveId?: string
  onTabChange?: (tabId: string) => void
  variant?: "default" | "pills"
  className?: string
}

/**
 * Tabs Component
 *
 * Interactive tabs component with tab selection and content switching.
 * Supports keyboard navigation and follows Gymshark design system.
 *
 * @param items - Array of tab items with id, label, and content
 * @param defaultActiveId - Initially active tab ID
 * @param onTabChange - Callback when tab changes
 * @param variant - Visual style variant
 */
export const Tabs: React.FC<TabsProps> = ({ items, defaultActiveId, onTabChange, variant = "default", className }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveId || items[0]?.id)
  const tabListRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  const handleTabChange = (tabId: string) => {
    if (items.find((item) => item.id === tabId)?.disabled) return

    setActiveTab(tabId)
    onTabChange?.(tabId)
  }

  const handleKeyDown = (event: React.KeyboardEvent, tabId: string) => {
    const enabledTabs = items.filter((item) => !item.disabled)
    const currentIndex = enabledTabs.findIndex((item) => item.id === tabId)

    let nextIndex = currentIndex

    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault()
        nextIndex = currentIndex > 0 ? currentIndex - 1 : enabledTabs.length - 1
        break
      case "ArrowRight":
        event.preventDefault()
        nextIndex = currentIndex < enabledTabs.length - 1 ? currentIndex + 1 : 0
        break
      case "Home":
        event.preventDefault()
        nextIndex = 0
        break
      case "End":
        event.preventDefault()
        nextIndex = enabledTabs.length - 1
        break
      default:
        return
    }

    const nextTab = enabledTabs[nextIndex]
    if (nextTab) {
      handleTabChange(nextTab.id)
      tabRefs.current[nextTab.id]?.focus()
    }
  }

  const activeContent = items.find((item) => item.id === activeTab)?.content

  const tabListStyles =
    variant === "pills"
      ? "inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1"
      : "flex border-b border-gray-200"

  const tabButtonStyles =
    variant === "pills"
      ? "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      : "inline-flex items-center justify-center whitespace-nowrap border-b-2 border-transparent px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  const activeTabStyles = variant === "pills" ? "bg-white text-black shadow-sm" : "border-black text-black"

  const inactiveTabStyles =
    variant === "pills" ? "text-gray-600 hover:text-black" : "text-gray-600 hover:text-black hover:border-gray-300"

  return (
    <div className={cn("w-full", className)}>
      {/* Tab List */}
      <div ref={tabListRef} role="tablist" aria-orientation="horizontal" className={tabListStyles}>
        {items.map((item) => {
          const isActive = item.id === activeTab

          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[item.id] = el
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${item.id}`}
              id={`tab-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              disabled={item.disabled}
              onClick={() => handleTabChange(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              className={cn(tabButtonStyles, isActive ? activeTabStyles : inactiveTabStyles)}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      {/* Tab Panels */}
      {items.map((item) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`tabpanel-${item.id}`}
          aria-labelledby={`tab-${item.id}`}
          hidden={item.id !== activeTab}
          className="mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          tabIndex={0}
        >
          {item.id === activeTab && item.content}
        </div>
      ))}
    </div>
  )
}
