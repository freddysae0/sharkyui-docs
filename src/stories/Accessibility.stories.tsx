import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"
import { TextInput } from "@/components/ui/text-input"
import { Anchor } from "@/components/ui/anchor"

const meta: Meta<{}> = {
  title: "Design System/  Accessibility",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Accessibility is a core principle of the Gymshark design system. All components are built to meet WCAG 2.1 AA standards.

## Key Features
- Semantic HTML structure
- Proper ARIA attributes
- Keyboard navigation support
- High contrast color ratios
- Screen reader compatibility
- Focus management

## Testing
Use the A11y addon in Storybook to automatically test accessibility compliance.
        `,
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<{}>

export const ColorContrast: Story = {
  render: () => (
    <div className="p-8 space-y-8 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold mb-6">Color Contrast Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-4">✅ Good Contrast (WCAG AA)</h3>
            <div className="space-y-4">
              <div className="bg-black text-white p-4 rounded">
                <p>Black background with white text (21:1 ratio)</p>
              </div>
              <div className="bg-white text-black p-4 rounded border">
                <p>White background with black text (21:1 ratio)</p>
              </div>
              <div className="bg-[#4A4A4A] text-white p-4 rounded">
                <p>Dark gray background with white text (9.7:1 ratio)</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">❌ Poor Contrast (Avoid)</h3>
            <div className="space-y-4">
              <div className="bg-gray-300 text-gray-400 p-4 rounded">
                <p>Low contrast text (2.3:1 ratio)</p>
              </div>
              <div className="bg-[#00FF7F] text-white p-4 rounded">
                <p>Accent color with white text (1.4:1 ratio)</p>
              </div>
              <div className="bg-yellow-200 text-yellow-300 p-4 rounded">
                <p>Very low contrast (1.2:1 ratio)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const KeyboardNavigation: Story = {
  render: () => (
    <div className="p-8 space-y-8 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold mb-6">Keyboard Navigation</h2>
        <p className="text-gray-600 mb-6">
          Try navigating through these elements using only your keyboard (Tab, Shift+Tab, Enter, Space, Arrow keys).
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-4">Interactive Elements</h3>
            <div className="space-y-4">
              <div className="flex gap-4 flex-wrap">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="accent">Accent Button</Button>
              </div>

              <div className="flex gap-4 flex-wrap">
                <Anchor href="#" variant="primary">
                  Primary Link
                </Anchor>
                <Anchor href="#" variant="secondary">
                  Secondary Link
                </Anchor>
                <Anchor href="#" variant="accent">
                  Accent Link
                </Anchor>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Form Controls</h3>
            <div className="space-y-4">
              <TextInput
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                helperText="Use Tab to navigate to the next field"
              />
              <TextInput
                label="Password"
                type="password"
                placeholder="Enter your password"
                helperText="Use Shift+Tab to navigate to the previous field"
              />
              <div className="flex gap-4">
                <Button type="submit">Submit</Button>
                <Button variant="secondary" type="button">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const FocusManagement: Story = {
  render: () => (
    <div className="p-8 space-y-8 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold mb-6">Focus Management</h2>
        <p className="text-gray-600 mb-6">
          All interactive elements have clear focus indicators that meet accessibility standards.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-4">Focus Indicators</h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">Click on an element, then press Tab to see focus indicators:</p>

              <div className="grid grid-cols-2 gap-4">
                <button className="p-3 border border-gray-300 rounded hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2">
                  Custom Focus Ring
                </button>
                <input
                  type="text"
                  placeholder="Input with focus ring"
                  className="p-3 border border-gray-300 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Skip Links</h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">Skip links help keyboard users navigate quickly to main content:</p>
              <div className="border border-gray-200 rounded p-4 bg-gray-50">
                <a
                  href="#main-content"
                  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50"
                >
                  Skip to main content
                </a>
                <p className="text-sm">Press Tab when this area is focused to see the skip link.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const ScreenReaderSupport: Story = {
  render: () => (
    <div className="p-8 space-y-8 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold mb-6">Screen Reader Support</h2>
        <p className="text-gray-600 mb-6">
          All components include proper semantic HTML and ARIA attributes for screen reader compatibility.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-4">Semantic HTML</h3>
            <div className="space-y-4">
              <article className="border border-gray-200 rounded p-4">
                <header>
                  <h4 className="font-bold">Article Title</h4>
                  <time dateTime="2024-01-15">January 15, 2024</time>
                </header>
                <main>
                  <p>This article uses semantic HTML elements like article, header, main, and time.</p>
                </main>
                <footer className="text-sm text-gray-600 mt-2">By Author Name</footer>
              </article>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">ARIA Labels and Descriptions</h3>
            <div className="space-y-4">
              <button
                aria-label="Close dialog"
                aria-describedby="close-description"
                className="p-2 border border-gray-300 rounded hover:bg-gray-50"
              >
                ✕
              </button>
              <p id="close-description" className="text-sm text-gray-600">
                This button has an aria-label for screen readers since the visual content (✕) isn't descriptive.
              </p>

              <div role="alert" className="bg-red-50 border border-red-200 text-red-800 p-4 rounded">
                <strong>Error:</strong> This is an alert that will be announced by screen readers.
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Hidden Content for Screen Readers</h3>
            <div className="space-y-4">
              <button className="flex items-center gap-2 p-3 border border-gray-300 rounded hover:bg-gray-50">
                <span aria-hidden="true">🔍</span>
                <span>Search</span>
                <span className="sr-only">(opens search dialog)</span>
              </button>
              <p className="text-sm text-gray-600">
                The emoji is hidden from screen readers with aria-hidden, and additional context is provided with
                sr-only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const AccessibilityChecklist: Story = {
  render: () => (
    <div className="p-8 space-y-8 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold mb-6">Accessibility Checklist</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">✅ What We Do</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Use semantic HTML elements (header, nav, main, footer)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Provide proper heading hierarchy (h1, h2, h3...)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Include alt text for all meaningful images</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Ensure 4.5:1 color contrast ratio minimum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Support keyboard navigation for all interactive elements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Provide clear focus indicators</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Use ARIA attributes where needed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Label form controls properly</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">🔧 Testing Tools</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Storybook A11y addon (automated testing)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>axe DevTools browser extension</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>WAVE Web Accessibility Evaluator</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Lighthouse accessibility audit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Keyboard navigation testing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Screen reader testing (NVDA, JAWS, VoiceOver)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Color contrast analyzers</span>
              </li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  ),
}
