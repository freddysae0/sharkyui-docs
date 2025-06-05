"use client"

import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"
import { action } from "@storybook/addon-actions"

const meta: Meta<typeof Button> = {
  title: "Forms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The Button component is a versatile button following the Gymshark design system. 
It supports multiple variants, sizes, states, and responsive behavior.

## Features
- Multiple visual variants (primary, secondary, accent, ghost)
- Different sizes (sm, md, lg)
- Loading and disabled states
- Full width option for responsive layouts
- Uppercase styling following Gymshark brand
- Full keyboard navigation and accessibility
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "accent", "ghost"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Button size",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether button takes full width",
    },
    loading: {
      control: "boolean",
      description: "Show loading state",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
    children: {
      control: "text",
      description: "Button text content",
    },
    onClick: {
      action: "clicked",
      description: "Click handler",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Button",
    onClick: action("clicked"),
  },
}

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
    onClick: action("primary-clicked"),
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
    onClick: action("secondary-clicked"),
  },
}

export const Accent: Story = {
  args: {
    variant: "accent",
    children: "Accent Button",
    onClick: action("accent-clicked"),
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
    onClick: action("ghost-clicked"),
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm" onClick={action("small-clicked")}>
        Small
      </Button>
      <Button size="md" onClick={action("medium-clicked")}>
        Medium
      </Button>
      <Button size="lg" onClick={action("large-clicked")}>
        Large
      </Button>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button onClick={action("normal-clicked")}>Normal</Button>
        <Button loading onClick={action("loading-clicked")}>
          Loading
        </Button>
        <Button disabled onClick={action("disabled-clicked")}>
          Disabled
        </Button>
      </div>
    </div>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <div className="w-80">
      <Button fullWidth onClick={action("full-width-clicked")}>
        Full Width Button
      </Button>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-4">
        <h3 className="font-bold">Variants</h3>
        <Button variant="primary" onClick={action("primary-clicked")}>
          Primary
        </Button>
        <Button variant="secondary" onClick={action("secondary-clicked")}>
          Secondary
        </Button>
        <Button variant="accent" onClick={action("accent-clicked")}>
          Accent
        </Button>
        <Button variant="ghost" onClick={action("ghost-clicked")}>
          Ghost
        </Button>
      </div>
      <div className="space-y-4">
        <h3 className="font-bold">Sizes</h3>
        <Button size="sm" onClick={action("small-clicked")}>
          Small
        </Button>
        <Button size="md" onClick={action("medium-clicked")}>
          Medium
        </Button>
        <Button size="lg" onClick={action("large-clicked")}>
          Large
        </Button>
      </div>
    </div>
  ),
}
