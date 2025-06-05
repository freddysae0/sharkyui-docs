"use client"

import type { Meta, StoryObj } from "@storybook/react"
import { Combobox } from "@/components/ui/combobox"
import { useState } from "react"
import { action } from "@storybook/addon-actions"

const meta: Meta<typeof Combobox> = {
  title: "Forms/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The Combobox component is an interactive dropdown with search/filter capabilities.
It supports keyboard navigation, accessibility, and follows the Gymshark design system.

## Features
- Searchable and filterable options
- Keyboard navigation (Arrow keys, Enter, Escape)
- Clearable selection
- Error state support
- Disabled state
- Full accessibility compliance
- Custom placeholder text
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for trigger",
    },
    searchPlaceholder: {
      control: "text",
      description: "Placeholder text for search input",
    },
    label: {
      control: "text",
      description: "Label for the combobox",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
    disabled: {
      control: "boolean",
      description: "Whether combobox is disabled",
    },
    clearable: {
      control: "boolean",
      description: "Whether selection can be cleared",
    },
    searchable: {
      control: "boolean",
      description: "Whether options can be searched/filtered",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sizeOptions = [
  { value: "xs", label: "Extra Small" },
  { value: "s", label: "Small" },
  { value: "m", label: "Medium" },
  { value: "l", label: "Large" },
  { value: "xl", label: "Extra Large" },
  { value: "xxl", label: "Double Extra Large" },
]

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
  { value: "br", label: "Brazil" },
  { value: "in", label: "India" },
  { value: "cn", label: "China" },
]

const ComboboxWithState = (args: any) => {
  const [value, setValue] = useState(args.value || "")
  return (
    <div className="w-80">
      <Combobox
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
  render: ComboboxWithState,
  args: {
    options: sizeOptions,
    placeholder: "Select a size...",
  },
}

export const WithLabel: Story = {
  render: ComboboxWithState,
  args: {
    options: sizeOptions,
    label: "Product Size",
    placeholder: "Choose your size...",
  },
}

export const WithError: Story = {
  render: ComboboxWithState,
  args: {
    options: sizeOptions,
    label: "Size Selection",
    placeholder: "Select a size...",
    error: "Please select a size to continue",
  },
}

export const Clearable: Story = {
  render: ComboboxWithState,
  args: {
    options: sizeOptions,
    label: "Size (Clearable)",
    placeholder: "Select a size...",
    clearable: true,
    value: "m",
  },
}

export const NotSearchable: Story = {
  render: ComboboxWithState,
  args: {
    options: sizeOptions,
    label: "Size (No Search)",
    placeholder: "Select a size...",
    searchable: false,
  },
}

export const Disabled: Story = {
  render: ComboboxWithState,
  args: {
    options: sizeOptions,
    label: "Size (Disabled)",
    placeholder: "Select a size...",
    disabled: true,
  },
}

export const LargeDataset: Story = {
  render: ComboboxWithState,
  args: {
    options: countryOptions,
    label: "Country",
    placeholder: "Search countries...",
    searchPlaceholder: "Type to search countries...",
    clearable: true,
  },
}

export const WithDisabledOptions: Story = {
  render: ComboboxWithState,
  args: {
    options: [
      { value: "xs", label: "Extra Small" },
      { value: "s", label: "Small" },
      { value: "m", label: "Medium" },
      { value: "l", label: "Large", disabled: true },
      { value: "xl", label: "Extra Large", disabled: true },
      { value: "xxl", label: "Double Extra Large" },
    ],
    label: "Available Sizes",
    placeholder: "Select available size...",
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
      <ComboboxWithState options={sizeOptions} label="Normal State" placeholder="Select a size..." />
      <ComboboxWithState options={sizeOptions} label="With Selection" placeholder="Select a size..." value="m" />
      <ComboboxWithState
        options={sizeOptions}
        label="Error State"
        placeholder="Select a size..."
        error="This field is required"
      />
      <ComboboxWithState options={sizeOptions} label="Disabled State" placeholder="Select a size..." disabled />
    </div>
  ),
}
