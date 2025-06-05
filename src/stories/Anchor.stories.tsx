import type { Meta, StoryObj } from "@storybook/react"
import { Anchor } from "@/components/ui/anchor"

const meta: Meta<typeof Anchor> = {
  title: "Navigation/Anchor",
  component: Anchor,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The Anchor component is a styled link element following the Gymshark design system. 
It supports multiple variants, sizes, and states with full accessibility compliance.

## Features
- Multiple visual variants (primary, secondary, accent)
- Different sizes (sm, md, lg)
- Underline behavior control
- External link support with automatic icons
- Full keyboard navigation
- WCAG 2.1 AA compliant
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "accent"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the anchor text",
    },
    underline: {
      control: "select",
      options: ["none", "hover", "always"],
      description: "Underline behavior",
    },
    external: {
      control: "boolean",
      description: "Whether link opens in new tab",
    },
    href: {
      control: "text",
      description: "Link destination",
    },
    children: {
      control: "text",
      description: "Link text content",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: "#",
    children: "Default Link",
  },
}

export const Primary: Story = {
  args: {
    href: "#",
    variant: "primary",
    children: "Primary Link",
  },
}

export const Secondary: Story = {
  args: {
    href: "#",
    variant: "secondary",
    children: "Secondary Link",
  },
}

export const Accent: Story = {
  args: {
    href: "#",
    variant: "accent",
    children: "Accent Link",
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Anchor href="#" size="sm">
        Small Link
      </Anchor>
      <Anchor href="#" size="md">
        Medium Link
      </Anchor>
      <Anchor href="#" size="lg">
        Large Link
      </Anchor>
    </div>
  ),
}

export const UnderlineVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Anchor href="#" underline="none">
        No Underline
      </Anchor>
      <Anchor href="#" underline="hover">
        Hover Underline
      </Anchor>
      <Anchor href="#" underline="always">
        Always Underline
      </Anchor>
    </div>
  ),
}

export const External: Story = {
  args: {
    href: "https://gymshark.com",
    external: true,
    children: "External Link (opens in new tab)",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <div className="space-y-2">
        <h3 className="font-bold">Primary</h3>
        <Anchor href="#" variant="primary" size="sm">
          Small
        </Anchor>
        <Anchor href="#" variant="primary" size="md">
          Medium
        </Anchor>
        <Anchor href="#" variant="primary" size="lg">
          Large
        </Anchor>
      </div>
      <div className="space-y-2">
        <h3 className="font-bold">Secondary</h3>
        <Anchor href="#" variant="secondary" size="sm">
          Small
        </Anchor>
        <Anchor href="#" variant="secondary" size="md">
          Medium
        </Anchor>
        <Anchor href="#" variant="secondary" size="lg">
          Large
        </Anchor>
      </div>
      <div className="space-y-2">
        <h3 className="font-bold">Accent</h3>
        <Anchor href="#" variant="accent" size="sm">
          Small
        </Anchor>
        <Anchor href="#" variant="accent" size="md">
          Medium
        </Anchor>
        <Anchor href="#" variant="accent" size="lg">
          Large
        </Anchor>
      </div>
    </div>
  ),
}
