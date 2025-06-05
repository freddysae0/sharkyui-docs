import type { Meta, StoryObj } from "@storybook/react"
import { HelpText } from "@/components/ui/help-text"

const meta: Meta<typeof HelpText> = {
  title: "Forms/HelpText",
  component: HelpText,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The HelpText component displays context-sensitive messages with appropriate styling and icons.
Used for form validation, informational messages, and user guidance.

## Features
- Multiple variants for different message types
- Optional icons for visual context
- Two size options
- Semantic HTML with proper ARIA roles
- Consistent styling with design system
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "info", "success", "warning", "error"],
      description: "Visual style variant indicating message type",
    },
    size: {
      control: "select",
      options: ["sm", "md"],
      description: "Text size",
    },
    showIcon: {
      control: "boolean",
      description: "Whether to display an icon",
    },
    children: {
      control: "text",
      description: "Help text content",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "This is default help text to guide users.",
  },
}

export const Info: Story = {
  args: {
    variant: "info",
    children: "Additional information about this feature.",
  },
}

export const Success: Story = {
  args: {
    variant: "success",
    children: "Your changes have been saved successfully.",
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Please review your information before submitting.",
  },
}

export const Error: Story = {
  args: {
    variant: "error",
    children: "There was an error processing your request.",
  },
}

export const WithoutIcon: Story = {
  args: {
    variant: "info",
    showIcon: false,
    children: "Help text without an icon.",
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <HelpText size="sm" variant="info">
        Small help text
      </HelpText>
      <HelpText size="md" variant="info">
        Medium help text
      </HelpText>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <HelpText variant="default">Default: This is general help text.</HelpText>
      <HelpText variant="info">Info: Additional context about this field.</HelpText>
      <HelpText variant="success">Success: Operation completed successfully.</HelpText>
      <HelpText variant="warning">Warning: Please double-check this information.</HelpText>
      <HelpText variant="error">Error: This field contains invalid data.</HelpText>
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
        <input
          type="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-md"
          placeholder="Enter your email"
        />
        <div className="mt-2">
          <HelpText variant="default">We'll use this email to send you important updates.</HelpText>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Password</label>
        <input
          type="password"
          className="w-full px-4 py-3 border border-red-500 rounded-md"
          placeholder="Enter your password"
        />
        <div className="mt-2">
          <HelpText variant="error">Password must be at least 8 characters long.</HelpText>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Confirm Password</label>
        <input
          type="password"
          className="w-full px-4 py-3 border border-green-500 rounded-md"
          placeholder="Confirm your password"
        />
        <div className="mt-2">
          <HelpText variant="success">Passwords match perfectly!</HelpText>
        </div>
      </div>
    </div>
  ),
}
