// Design Tokens based on Gymshark Design System
export const colors = {
  primary: "#000000", // Black - Main text, primary buttons
  secondary: "#FFFFFF", // White - Page background, reverse text
  background: "#F5F5F5", // Light Gray - Page sections, cards
  accent: "#00FF7F", // Neon Green - CTAs, links, highlights
  neutral: "#4A4A4A", // Dark Gray - Secondary text, placeholders
  error: "#E63946", // Red - Error messages, destructive actions
} as const

export const typography = {
  fonts: {
    heading: '"Bebas Neue", "Arial Black", sans-serif',
    body: '"Roboto", "Open Sans", sans-serif',
  },
  weights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  sizes: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
  },
  lineHeights: {
    tight: 1.3,
    normal: 1.5,
    relaxed: 1.6,
  },
} as const

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px",
  "3xl": "64px",
} as const

export const breakpoints = {
  mobile: "0px",
  tablet: "600px",
  desktop: "1024px",
  wide: "1440px",
} as const

export const borderRadius = {
  none: "0",
  sm: "2px",
  md: "4px",
  lg: "8px",
  full: "9999px",
} as const

export const shadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
} as const
