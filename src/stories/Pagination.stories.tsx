"use client"

import type { Meta, StoryObj } from "@storybook/react"
import { Pagination } from "@/components/ui/pagination"
import { useState } from "react"
import { action } from "@storybook/addon-actions"

const meta: Meta<typeof Pagination> = {
  title: "Navigation/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The Pagination component provides interactive pagination with page selection logic.
It follows the Gymshark design system with full keyboard navigation support.

## Features
- Configurable page range display
- Previous/Next navigation
- First/Last page shortcuts
- Keyboard navigation
- Responsive design
- Accessibility compliant
- Customizable sibling count
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1 },
      description: "Currently active page (1-indexed)",
    },
    totalPages: {
      control: { type: "number", min: 1 },
      description: "Total number of pages",
    },
    showFirstLast: {
      control: "boolean",
      description: "Show first/last page buttons",
    },
    showPrevNext: {
      control: "boolean",
      description: "Show previous/next buttons",
    },
    siblingCount: {
      control: { type: "number", min: 0, max: 5 },
      description: "Number of pages to show around current page",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const PaginationWithState = (args: any) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1)
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={(page) => {
        setCurrentPage(page)
        action("page-changed")(page)
      }}
    />
  )
}

export const Default: Story = {
  render: PaginationWithState,
  args: {
    currentPage: 1,
    totalPages: 10,
  },
}

export const MiddlePage: Story = {
  render: PaginationWithState,
  args: {
    currentPage: 5,
    totalPages: 10,
  },
}

export const LastPage: Story = {
  render: PaginationWithState,
  args: {
    currentPage: 10,
    totalPages: 10,
  },
}

export const LargeDataset: Story = {
  render: PaginationWithState,
  args: {
    currentPage: 25,
    totalPages: 100,
    siblingCount: 2,
  },
}

export const SmallDataset: Story = {
  render: PaginationWithState,
  args: {
    currentPage: 2,
    totalPages: 3,
  },
}

export const WithoutFirstLast: Story = {
  render: PaginationWithState,
  args: {
    currentPage: 5,
    totalPages: 10,
    showFirstLast: false,
  },
}

export const WithoutPrevNext: Story = {
  render: PaginationWithState,
  args: {
    currentPage: 5,
    totalPages: 10,
    showPrevNext: false,
  },
}

export const MinimalPagination: Story = {
  render: PaginationWithState,
  args: {
    currentPage: 5,
    totalPages: 10,
    showFirstLast: false,
    showPrevNext: false,
    siblingCount: 0,
  },
}

export const DifferentSiblingCounts: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">Sibling Count: 0</h3>
        <PaginationWithState currentPage={5} totalPages={20} siblingCount={0} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-4">Sibling Count: 1 (Default)</h3>
        <PaginationWithState currentPage={5} totalPages={20} siblingCount={1} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-4">Sibling Count: 2</h3>
        <PaginationWithState currentPage={5} totalPages={20} siblingCount={2} />
      </div>
    </div>
  ),
}

export const EdgeCases: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">Single Page</h3>
        <PaginationWithState currentPage={1} totalPages={1} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-4">Two Pages</h3>
        <PaginationWithState currentPage={1} totalPages={2} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-4">Very Large Dataset</h3>
        <PaginationWithState currentPage={500} totalPages={1000} />
      </div>
    </div>
  ),
}
