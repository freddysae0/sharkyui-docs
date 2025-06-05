"use client"

import type { Meta, StoryObj } from "@storybook/react"
import { TextInput } from "@/components/ui/text-input"
import { useState } from "react"

const meta: Meta<typeof TextInput> = {
  title: "Forms/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The TextInput component is a flexible input supporting both input and textarea functionality.
It includes error/success states, helper text, and password visibility toggle.

## Features
- Support for input and textarea variants
- Error and success state styling
- Helper text display
- Password visibility toggle
- Multiple sizes (sm, md, lg)
- Full accessibility compliance
- Responsive design
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Input label text",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
    success: {
      control: "text",
      description: "Success message to display",
    },
    helperText: {
      control: "text",
      description: "Helper text below input",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Input size",
    },
    variant: {
      control: "select",
      options: ["default", "textarea"],
      description: "Input type",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "Input type",
    },
    disabled: {
      control: "boolean",
      description: "Disable the input",
    },
    showPasswordToggle: {
      control: "boolean",
      description: "Show password visibility toggle",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const TextInputWithState = (args: any) => {
  const [value, setValue] = useState(args.value || "")
  return (
    <div className="w-80">
      <TextInput {...args} value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

export const Default: Story = {
  render: TextInputWithState,
  args: {
    label: "Default Input",
    placeholder: "Enter text...",
  },
}

export const WithHelperText: Story = {
  render: TextInputWithState,
  args: {
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email",
    helperText: "We'll never share your email with anyone else.",
  },
}

export const WithError: Story = {
  render: TextInputWithState,
  args: {
    label: "Username",
    placeholder: "Enter username",
    error: "Username must be at least 3 characters long",
    value: "ab",
  },
}

export const WithSuccess: Story = {
  render: TextInputWithState,
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    success: "Password strength: Strong",
    value: "mySecurePassword123!",
  },
}

export const PasswordWithToggle: Story = {
  render: TextInputWithState,
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    showPasswordToggle: true,
    value: "secretPassword",
  },
}

export const Textarea: Story = {
  render: TextInputWithState,
  args: {
    label: "Message",
    variant: "textarea",
    placeholder: "Tell us about yourself...",
    rows: 4,
    helperText: "Maximum 500 characters",
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <TextInputWithState label="Small Input" size="sm" placeholder="Small size" />
      <TextInputWithState label="Medium Input" size="md" placeholder="Medium size" />
      <TextInputWithState label="Large Input" size="lg" placeholder="Large size" />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <TextInputWithState label="Normal" placeholder="Normal state" />
      <TextInputWithState label="Disabled" placeholder="Disabled state" disabled />
      <TextInputWithState label="Error State" placeholder="Error state" error="This field is required" value="" />
      <TextInputWithState label="Success State" placeholder="Success state" success="Looks good!" value="Valid input" />
    </div>
  ),
}

export const AllTypes: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
      <TextInputWithState label="Text" type="text" placeholder="Text input" />
      <TextInputWithState label="Email" type="email" placeholder="email@example.com" />
      <TextInputWithState label="Password" type="password" placeholder="Password" showPasswordToggle />
      <TextInputWithState label="Number" type="number" placeholder="123" />
      <TextInputWithState label="Phone" type="tel" placeholder="+1 (555) 123-4567" />
      <TextInputWithState label="URL" type="url" placeholder="https://example.com" />
    </div>
  ),
}
