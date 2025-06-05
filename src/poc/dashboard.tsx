"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TextInput } from "@/components/ui/text-input"
import { HelpText } from "@/components/ui/help-text"
import { Combobox } from "@/components/ui/combobox"
import { RadioGroup } from "@/components/ui/radio-group"
import { Tabs } from "@/components/ui/tabs"
import { Anchor } from "@/components/ui/anchor"
import { Pagination } from "@/components/ui/pagination"

export default function DashboardPOC() {
    const [currentPage, setCurrentPage] = useState(1)
    const [statusFilter, setStatusFilter] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedPeriod, setSelectedPeriod] = useState("week")
    const [notificationSettings, setNotificationSettings] = useState("")

    const statusOptions = [
        { value: "", label: "All Statuses" },
        { value: "active", label: "Active" },
        { value: "pending", label: "Pending" },
        { value: "completed", label: "Completed" },
        { value: "cancelled", label: "Cancelled" },
    ]

    const periodOptions = [
        { value: "day", label: "Last 24 Hours" },
        { value: "week", label: "Last 7 Days" },
        { value: "month", label: "Last 30 Days" },
        { value: "quarter", label: "Last 3 Months" },
        { value: "year", label: "Last Year" },
    ]

    const notificationOptions = [
        {
            value: "all",
            label: "All Notifications",
            description: "Receive all order updates and promotional emails",
        },
        {
            value: "orders",
            label: "Orders Only",
            description: "Only receive notifications about order status changes",
        },
        {
            value: "none",
            label: "No Notifications",
            description: "Disable all email notifications",
        },
    ]

    const overviewTabs = [
        {
            id: "analytics",
            label: "Analytics",
            content: (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Orders</h3>
                            <p className="text-3xl font-bold">1,247</p>
                            <p className="text-sm text-green-600 mt-1">+12% from last month</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <h3 className="text-sm font-medium text-gray-600 mb-2">Revenue</h3>
                            <p className="text-3xl font-bold">$89,432</p>
                            <p className="text-sm text-green-600 mt-1">+8% from last month</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <h3 className="text-sm font-medium text-gray-600 mb-2">Active Users</h3>
                            <p className="text-3xl font-bold">3,891</p>
                            <p className="text-sm text-red-600 mt-1">-2% from last month</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <h3 className="text-sm font-medium text-gray-600 mb-2">Conversion Rate</h3>
                            <p className="text-3xl font-bold">3.2%</p>
                            <p className="text-sm text-green-600 mt-1">+0.5% from last month</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold">Sales Performance</h3>
                            <Combobox
                                options={periodOptions}
                                value={selectedPeriod}
                                onValueChange={setSelectedPeriod}
                                placeholder="Select period..."
                            />
                        </div>
                        <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
                            <span className="text-gray-500">Sales Chart Placeholder</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: "orders",
            label: "Orders",
            content: (
                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <TextInput
                            placeholder="Search orders..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-1"
                        />
                        <Combobox
                            options={statusOptions}
                            value={statusFilter}
                            onValueChange={setStatusFilter}
                            placeholder="Filter by status..."
                        />
                        <Button variant="primary">Export</Button>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Order ID
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Customer
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Total
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {[
                                        { id: "#GS-001", customer: "John Smith", status: "Completed", total: "$89.99", date: "2024-01-15" },
                                        {
                                            id: "#GS-002",
                                            customer: "Sarah Johnson",
                                            status: "Pending",
                                            total: "$156.50",
                                            date: "2024-01-14",
                                        },
                                        { id: "#GS-003", customer: "Mike Wilson", status: "Active", total: "$203.25", date: "2024-01-14" },
                                        { id: "#GS-004", customer: "Emma Davis", status: "Completed", total: "$67.80", date: "2024-01-13" },
                                        {
                                            id: "#GS-005",
                                            customer: "Alex Brown",
                                            status: "Cancelled",
                                            total: "$124.99",
                                            date: "2024-01-13",
                                        },
                                    ].map((order) => (
                                        <tr key={order.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${order.status === "Completed"
                                                            ? "bg-green-100 text-green-800"
                                                            : order.status === "Pending"
                                                                ? "bg-yellow-100 text-yellow-800"
                                                                : order.status === "Active"
                                                                    ? "bg-blue-100 text-blue-800"
                                                                    : "bg-red-100 text-red-800"
                                                        }`}
                                                >
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.total}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <Anchor href="#" variant="accent" size="sm">
                                                    View
                                                </Anchor>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Pagination currentPage={currentPage} totalPages={15} onPageChange={setCurrentPage} siblingCount={2} />
                    </div>
                </div>
            ),
        },
        {
            id: "settings",
            label: "Settings",
            content: (
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-bold mb-4">Account Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <TextInput label="First Name" defaultValue="Admin" />
                            <TextInput label="Last Name" defaultValue="User" />
                            <TextInput label="Email Address" type="email" defaultValue="admin@gymshark.com" />
                            <TextInput label="Phone Number" type="tel" defaultValue="+1 (555) 123-4567" />
                        </div>
                        <div className="mt-6">
                            <Button variant="primary">Save Changes</Button>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-bold mb-4">Notification Preferences</h3>
                        <RadioGroup
                            name="notifications"
                            options={notificationOptions}
                            value={notificationSettings}
                            onValueChange={setNotificationSettings}
                        />
                        <div className="mt-6">
                            <Button variant="primary">Update Preferences</Button>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-bold mb-4">Security Settings</h3>
                        <div className="space-y-4">
                            <TextInput label="Current Password" type="password" placeholder="Enter current password" />
                            <TextInput label="New Password" type="password" placeholder="Enter new password" showPasswordToggle />
                            <TextInput
                                label="Confirm New Password"
                                type="password"
                                placeholder="Confirm new password"
                                showPasswordToggle
                            />
                        </div>
                        <HelpText variant="info" className="mt-4">
                            Password must be at least 8 characters long and include uppercase, lowercase, and numbers.
                        </HelpText>
                        <div className="mt-6">
                            <Button variant="primary">Change Password</Button>
                        </div>
                    </div>
                </div>
            ),
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-black">GYMSHARK ADMIN</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm">
                                Notifications
                            </Button>
                            <Button variant="ghost" size="sm">
                                Help
                            </Button>
                            <Button variant="secondary" size="sm">
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar Navigation */}
            <div className="flex">
                <nav className="w-64 bg-white border-r border-gray-200 min-h-screen">
                    <div className="p-6">
                        <div className="space-y-2">
                            <Anchor href="#" variant="primary" className="block py-2 px-3 rounded hover:bg-gray-100">
                                Dashboard
                            </Anchor>
                            <Anchor href="#" variant="secondary" className="block py-2 px-3 rounded hover:bg-gray-100">
                                Products
                            </Anchor>
                            <Anchor href="#" variant="secondary" className="block py-2 px-3 rounded hover:bg-gray-100">
                                Orders
                            </Anchor>
                            <Anchor href="#" variant="secondary" className="block py-2 px-3 rounded hover:bg-gray-100">
                                Customers
                            </Anchor>
                            <Anchor href="#" variant="secondary" className="block py-2 px-3 rounded hover:bg-gray-100">
                                Analytics
                            </Anchor>
                            <Anchor href="#" variant="secondary" className="block py-2 px-3 rounded hover:bg-gray-100">
                                Settings
                            </Anchor>
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="flex-1 p-8">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-black mb-2">Dashboard Overview</h2>
                        <p className="text-gray-600">Monitor your store performance and manage operations</p>
                    </div>

                    <Tabs items={overviewTabs} defaultActiveId="analytics" />
                </main>
            </div>
        </div>
    )
}
