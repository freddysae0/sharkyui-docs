"use client"

import type { Meta, StoryObj } from "@storybook/react"
import { TextInput } from "@/components/ui/text-input"
import { useState } from "react"
import AuthPOC from "@/poc/auth"

const meta: Meta<typeof AuthPOC> = {
    title: "Proof of Concept/Auth",
    component: AuthPOC,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
This is a proof of concept for the Gymshark design system.
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

export const Default: Story = {
    render: AuthPOC,
}