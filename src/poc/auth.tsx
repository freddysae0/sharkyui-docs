"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TextInput } from "@/components/ui/text-input"
import { HelpText } from "@/components/ui/help-text"
import { Combobox } from "@/components/ui/combobox"
import { RadioGroup } from "@/components/ui/radio-group"
import { Tabs } from "@/components/ui/tabs"
import { Anchor } from "@/components/ui/anchor"

export default function AuthPOC() {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
        rememberMe: false,
    })

    const [signupForm, setSignupForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        country: "",
        gender: "",
        newsletter: false,
    })

    const [resetForm, setResetForm] = useState({
        email: "",
    })

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isLoading, setIsLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")

    const countryOptions = [
        { value: "us", label: "United States" },
        { value: "uk", label: "United Kingdom" },
        { value: "ca", label: "Canada" },
        { value: "au", label: "Australia" },
        { value: "de", label: "Germany" },
        { value: "fr", label: "France" },
        { value: "es", label: "Spain" },
        { value: "it", label: "Italy" },
    ]

    const genderOptions = [
        {
            value: "male",
            label: "Male",
            description: "Shop men's athletic wear",
        },
        {
            value: "female",
            label: "Female",
            description: "Shop women's athletic wear",
        },
        {
            value: "other",
            label: "Other",
            description: "Prefer not to specify",
        },
    ]

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validatePassword = (password: string) => {
        return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)
    }

    const handleLogin = async () => {
        const newErrors: Record<string, string> = {}

        if (!loginForm.email) {
            newErrors.loginEmail = "Email is required"
        } else if (!validateEmail(loginForm.email)) {
            newErrors.loginEmail = "Please enter a valid email address"
        }

        if (!loginForm.password) {
            newErrors.loginPassword = "Password is required"
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            setIsLoading(true)
            // Simulate API call
            setTimeout(() => {
                setIsLoading(false)
                setSuccessMessage("Login successful! Redirecting...")
            }, 2000)
        }
    }

    const handleSignup = async () => {
        const newErrors: Record<string, string> = {}

        if (!signupForm.firstName) newErrors.firstName = "First name is required"
        if (!signupForm.lastName) newErrors.lastName = "Last name is required"

        if (!signupForm.email) {
            newErrors.signupEmail = "Email is required"
        } else if (!validateEmail(signupForm.email)) {
            newErrors.signupEmail = "Please enter a valid email address"
        }

        if (!signupForm.password) {
            newErrors.signupPassword = "Password is required"
        } else if (!validatePassword(signupForm.password)) {
            newErrors.signupPassword = "Password must be at least 8 characters with uppercase, lowercase, and numbers"
        }

        if (!signupForm.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password"
        } else if (signupForm.password !== signupForm.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match"
        }

        if (!signupForm.country) newErrors.country = "Please select your country"
        if (!signupForm.gender) newErrors.gender = "Please select your gender preference"

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            setIsLoading(true)
            // Simulate API call
            setTimeout(() => {
                setIsLoading(false)
                setSuccessMessage("Account created successfully! Please check your email to verify your account.")
            }, 2000)
        }
    }

    const handlePasswordReset = async () => {
        const newErrors: Record<string, string> = {}

        if (!resetForm.email) {
            newErrors.resetEmail = "Email is required"
        } else if (!validateEmail(resetForm.email)) {
            newErrors.resetEmail = "Please enter a valid email address"
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            setIsLoading(true)
            // Simulate API call
            setTimeout(() => {
                setIsLoading(false)
                setSuccessMessage("Password reset link sent! Check your email for instructions.")
            }, 2000)
        }
    }

    const authTabs = [
        {
            id: "login",
            label: "Sign In",
            content: (
                <div className="space-y-6">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-black mb-2">WELCOME BACK</h2>
                        <p className="text-gray-600">Sign in to your Gymshark account</p>
                    </div>

                    <div className="space-y-4">
                        <TextInput
                            label="Email Address"
                            type="email"
                            placeholder="Enter your email"
                            value={loginForm.email}
                            onChange={(e) => setLoginForm((prev) => ({ ...prev, email: e.target.value }))}
                            error={errors.loginEmail}
                        />

                        <TextInput
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            value={loginForm.password}
                            onChange={(e) => setLoginForm((prev) => ({ ...prev, password: e.target.value }))}
                            error={errors.loginPassword}
                            showPasswordToggle
                        />

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={loginForm.rememberMe}
                                    onChange={(e) => setLoginForm((prev) => ({ ...prev, rememberMe: e.target.checked }))}
                                    className="mr-2"
                                />
                                <span className="text-sm text-gray-600">Remember me</span>
                            </label>
                            <Anchor href="#" variant="accent" size="sm">
                                Forgot password?
                            </Anchor>
                        </div>

                        <Button variant="primary" size="lg" fullWidth loading={isLoading} onClick={handleLogin}>
                            Sign In
                        </Button>

                        {successMessage && <HelpText variant="success">{successMessage}</HelpText>}

                        <div className="text-center">
                            <span className="text-gray-600">Don't have an account? </span>
                            <Anchor href="#" variant="accent">
                                Create one here
                            </Anchor>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: "signup",
            label: "Create Account",
            content: (
                <div className="space-y-6">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-black mb-2">JOIN THE PACK</h2>
                        <p className="text-gray-600">Create your Gymshark account and unlock exclusive benefits</p>
                    </div>

                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <TextInput
                                label="First Name"
                                placeholder="Enter your first name"
                                value={signupForm.firstName}
                                onChange={(e) => setSignupForm((prev) => ({ ...prev, firstName: e.target.value }))}
                                error={errors.firstName}
                            />
                            <TextInput
                                label="Last Name"
                                placeholder="Enter your last name"
                                value={signupForm.lastName}
                                onChange={(e) => setSignupForm((prev) => ({ ...prev, lastName: e.target.value }))}
                                error={errors.lastName}
                            />
                        </div>

                        <TextInput
                            label="Email Address"
                            type="email"
                            placeholder="Enter your email"
                            value={signupForm.email}
                            onChange={(e) => setSignupForm((prev) => ({ ...prev, email: e.target.value }))}
                            error={errors.signupEmail}
                            helperText="We'll use this email for order updates and exclusive offers"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <TextInput
                                label="Password"
                                type="password"
                                placeholder="Create a password"
                                value={signupForm.password}
                                onChange={(e) => setSignupForm((prev) => ({ ...prev, password: e.target.value }))}
                                error={errors.signupPassword}
                                showPasswordToggle
                            />
                            <TextInput
                                label="Confirm Password"
                                type="password"
                                placeholder="Confirm your password"
                                value={signupForm.confirmPassword}
                                onChange={(e) => setSignupForm((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                                error={errors.confirmPassword}
                                showPasswordToggle
                            />
                        </div>

                        <Combobox
                            label="Country"
                            options={countryOptions}
                            value={signupForm.country}
                            onValueChange={(value) => setSignupForm((prev) => ({ ...prev, country: value }))}
                            placeholder="Select your country..."
                            error={errors.country}
                            searchable
                        />

                        <RadioGroup
                            label="Gender Preference"
                            name="gender"
                            options={genderOptions}
                            value={signupForm.gender}
                            onValueChange={(value) => setSignupForm((prev) => ({ ...prev, gender: value }))}
                            error={errors.gender}
                        />

                        <div className="space-y-3">
                            <label className="flex items-start">
                                <input
                                    type="checkbox"
                                    checked={signupForm.newsletter}
                                    onChange={(e) => setSignupForm((prev) => ({ ...prev, newsletter: e.target.checked }))}
                                    className="mr-3 mt-1"
                                />
                                <span className="text-sm text-gray-600">
                                    Subscribe to our newsletter for exclusive offers, new product launches, and fitness tips
                                </span>
                            </label>
                        </div>

                        <Button variant="primary" size="lg" fullWidth loading={isLoading} onClick={handleSignup}>
                            Create Account
                        </Button>

                        {successMessage && <HelpText variant="success">{successMessage}</HelpText>}

                        <div className="text-center text-xs text-gray-500">
                            By creating an account, you agree to our{" "}
                            <Anchor href="#" variant="accent" size="sm">
                                Terms of Service
                            </Anchor>{" "}
                            and{" "}
                            <Anchor href="#" variant="accent" size="sm">
                                Privacy Policy
                            </Anchor>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: "reset",
            label: "Reset Password",
            content: (
                <div className="space-y-6">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-black mb-2">RESET PASSWORD</h2>
                        <p className="text-gray-600">Enter your email to receive a password reset link</p>
                    </div>

                    <div className="space-y-4">
                        <TextInput
                            label="Email Address"
                            type="email"
                            placeholder="Enter your email"
                            value={resetForm.email}
                            onChange={(e) => setResetForm((prev) => ({ ...prev, email: e.target.value }))}
                            error={errors.resetEmail}
                            helperText="We'll send you a secure link to reset your password"
                        />

                        <Button variant="primary" size="lg" fullWidth loading={isLoading} onClick={handlePasswordReset}>
                            Send Reset Link
                        </Button>

                        {successMessage && <HelpText variant="success">{successMessage}</HelpText>}

                        <div className="text-center">
                            <span className="text-gray-600">Remember your password? </span>
                            <Anchor href="#" variant="accent">
                                Back to sign in
                            </Anchor>
                        </div>
                    </div>
                </div>
            ),
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                {/* Logo */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-black">GYMSHARK</h1>
                    <p className="text-gray-600 mt-2">Unlock your potential</p>
                </div>

                {/* Auth Form */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <Tabs items={authTabs} defaultActiveId="login" variant="pills" />
                </div>

                {/* Additional Links */}
                <div className="mt-8 text-center space-y-2">
                    <div className="flex justify-center space-x-6">
                        <Anchor href="#" variant="secondary" size="sm">
                            Help Center
                        </Anchor>
                        <Anchor href="#" variant="secondary" size="sm">
                            Contact Support
                        </Anchor>
                        <Anchor href="#" variant="secondary" size="sm">
                            Privacy Policy
                        </Anchor>
                    </div>
                    <p className="text-xs text-gray-500">© 2024 Gymshark. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
