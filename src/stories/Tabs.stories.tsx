import type { Meta, StoryObj } from "@storybook/react"
import { Tabs } from "@/components/ui/tabs"
import { action } from "@storybook/addon-actions"

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The Tabs component provides interactive tabs with tab selection and content switching.
It supports keyboard navigation and follows the Gymshark design system.

## Features
- Tab selection and content switching
- Keyboard navigation (Arrow keys, Home, End)
- Support for disabled tabs
- Two visual variants (default and pills)
- Full accessibility compliance
- Customizable content for each tab
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "pills"],
      description: "Visual style variant",
    },
    defaultActiveId: {
      control: "text",
      description: "Initially active tab ID",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const basicTabItems = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">Overview</h3>
        <p className="text-gray-600">
          This is the overview tab content. It provides a general introduction to the topic.
        </p>
      </div>
    ),
  },
  {
    id: "features",
    label: "Features",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">Features</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Feature one with detailed description</li>
          <li>Feature two with additional benefits</li>
          <li>Feature three with technical specifications</li>
        </ul>
      </div>
    ),
  },
  {
    id: "pricing",
    label: "Pricing",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">Pricing</h3>
        <p className="text-gray-600">Detailed pricing information and subscription options are available here.</p>
      </div>
    ),
  },
]

const productTabItems = [
  {
    id: "description",
    label: "Description",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">Product Description</h3>
        <p className="text-gray-600 mb-4">
          This premium athletic wear is designed for maximum performance and comfort during your most intense workouts.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Moisture-wicking fabric technology</li>
          <li>Four-way stretch for unrestricted movement</li>
          <li>Flatlock seams to prevent chafing</li>
          <li>Quick-dry material for all-day comfort</li>
        </ul>
      </div>
    ),
  },
  {
    id: "sizing",
    label: "Size Guide",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">Size Guide</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2 text-left">Size</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Chest (inches)</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Waist (inches)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">S</td>
                <td className="border border-gray-200 px-4 py-2">34-36</td>
                <td className="border border-gray-200 px-4 py-2">28-30</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">M</td>
                <td className="border border-gray-200 px-4 py-2">38-40</td>
                <td className="border border-gray-200 px-4 py-2">32-34</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">L</td>
                <td className="border border-gray-200 px-4 py-2">42-44</td>
                <td className="border border-gray-200 px-4 py-2">36-38</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "reviews",
    label: "Reviews",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">Customer Reviews</h3>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-center mb-2">
              <span className="font-medium">Sarah M.</span>
              <span className="ml-2 text-yellow-500">★★★★★</span>
            </div>
            <p className="text-gray-600">"Amazing quality and fit! These are now my go-to workout clothes."</p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-center mb-2">
              <span className="font-medium">Mike R.</span>
              <span className="ml-2 text-yellow-500">★★★★☆</span>
            </div>
            <p className="text-gray-600">"Great material and construction. Runs slightly small, so size up."</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "shipping",
    label: "Shipping",
    disabled: true,
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">Shipping Information</h3>
        <p className="text-gray-600">This tab is disabled.</p>
      </div>
    ),
  },
]

export const Default: Story = {
  args: {
    items: basicTabItems,
    onTabChange: action("tab-changed"),
  },
}

export const Pills: Story = {
  args: {
    items: basicTabItems,
    variant: "pills",
    onTabChange: action("tab-changed"),
  },
}

export const WithDefaultActive: Story = {
  args: {
    items: basicTabItems,
    defaultActiveId: "features",
    onTabChange: action("tab-changed"),
  },
}

export const WithDisabledTab: Story = {
  args: {
    items: productTabItems,
    onTabChange: action("tab-changed"),
  },
}

export const ProductExample: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Premium Athletic Wear</h2>
        <p className="text-gray-600">High-performance clothing for serious athletes</p>
      </div>
      <Tabs items={productTabItems} defaultActiveId="description" onTabChange={action("product-tab-changed")} />
    </div>
  ),
}

export const BothVariants: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-bold mb-4">Default Variant</h3>
        <Tabs items={basicTabItems} variant="default" onTabChange={action("default-tab-changed")} />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Pills Variant</h3>
        <Tabs items={basicTabItems} variant="pills" onTabChange={action("pills-tab-changed")} />
      </div>
    </div>
  ),
}

export const ManyTabs: Story = {
  args: {
    items: [
      { id: "tab1", label: "Tab 1", content: <div className="p-4">Content for Tab 1</div> },
      { id: "tab2", label: "Tab 2", content: <div className="p-4">Content for Tab 2</div> },
      { id: "tab3", label: "Tab 3", content: <div className="p-4">Content for Tab 3</div> },
      { id: "tab4", label: "Tab 4", content: <div className="p-4">Content for Tab 4</div> },
      { id: "tab5", label: "Tab 5", content: <div className="p-4">Content for Tab 5</div> },
      { id: "tab6", label: "Tab 6", content: <div className="p-4">Content for Tab 6</div> },
      { id: "tab7", label: "Tab 7", content: <div className="p-4">Content for Tab 7</div> },
    ],
    variant: "pills",
    onTabChange: action("many-tabs-changed"),
  },
}
