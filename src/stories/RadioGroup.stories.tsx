"use client"

import type { Meta, StoryObj } from "@storybook/react"
import { RadioGroup } from "@/components/ui/radio-group"
import { useState } from "react"
import { action } from "@storybook/addon-actions"

const meta: Meta<typeof RadioGroup> = {
  title: "Forms/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The RadioGroup component is a functional radio button group ensuring single selection within the group.
It supports keyboard navigation and follows the Gymshark design system.

## Features
- Single selection enforcement
- Keyboard navigation (Arrow keys, Space)
- Support for disabled options
- Optional descriptions for options
- Horizontal and vertical layouts
- Multiple sizes
- Error state support
- Full accessibility compliance
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Name attribute for radio group",
    },
    label: {
      control: "text",
      description: "Label for the radio group",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Layout orientation",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of radio buttons",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const shippingOptions = [
  {
    value: "standard",
    label: "Standard Shipping",
    description: "5-7 business days - Free",
  },
  {
    value: "express",
    label: "Express Shipping",
    description: "2-3 business days - $9.99",
  },
  {
    value: "overnight",
    label: "Overnight Shipping",
    description: "Next business day - $24.99",
  },
]

const sizeOptions = [
  { value: "xs", label: "XS" },
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
]

const RadioGroupWithState = (args: any) => {
  const [value, setValue] = useState(args.value || "")
  return (
    <div className="w-full max-w-md">
      <RadioGroup
        {...args}
        value={value}
        onValueChange={(newValue) => {
          setValue(newValue)
          action("value-changed")(newValue)
        }}
      />
    </div>
  )
}

export const Default: Story = {
  render: RadioGroupWithState,
  args: {
    options: shippingOptions,
    name: "shipping",
    label: "Shipping Method",
  },
}

export const WithoutDescriptions: Story = {
  render: RadioGroupWithState,
  args: {
    options: sizeOptions,
    name: "size",
    label: "Size",
  },
}

export const Horizontal: Story = {
  render: RadioGroupWithState,
  args: {
    options: sizeOptions,
    name: "size-horizontal",
    label: "Size (Horizontal)",
    orientation: "horizontal",
  },
}

export const WithError: Story = {
  render: RadioGroupWithState,
  args: {
    options: shippingOptions,
    name: "shipping-error",
    label: "Shipping Method",
    error: "Please select a shipping method to continue",
  },
}

export const WithDisabledOptions: Story = {
  render: RadioGroupWithState,
  args: {
    options: [
      { value: "standard", label: "Standard Shipping", description: "5-7 business days - Free" },
      { value: "express", label: "Express Shipping", description: "2-3 business days - $9.99", disabled: true },
      { value: "overnight", label: "Overnight Shipping", description: "Next business day - $24.99" },
    ],
    name: "shipping-disabled",
    label: "Available Shipping Options",
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <RadioGroupWithState
        options={sizeOptions}
        name="size-small"
        label="Small Radio Buttons"
        size="sm"
        orientation="horizontal"
      />
      <RadioGroupWithState
        options={sizeOptions}
        name="size-medium"
        label="Medium Radio Buttons"
        size="md"
        orientation="horizontal"
      />
      <RadioGroupWithState
        options={sizeOptions}
        name="size-large"
        label="Large Radio Buttons"
        size="lg"
        orientation="horizontal"
      />
    </div>
  ),
}

export const PreSelected: Story = {
  render: RadioGroupWithState,
  args: {
    options: shippingOptions,
    name: "shipping-preselected",
    label: "Shipping Method",
    value: "express",
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-4xl">
      <RadioGroupWithState options={shippingOptions} name="shipping-normal" label="Normal State" />
      <RadioGroupWithState options={shippingOptions} name="shipping-selected" label="With Selection" value="express" />
      <RadioGroupWithState
        options={shippingOptions}
        name="shipping-error"
        label="Error State"
        error="Please select a shipping method"
      />
      <RadioGroupWithState
        options={sizeOptions}
        name="size-horizontal"
        label="Horizontal Layout"
        orientation="horizontal"
      />
    </div>
  ),
}
