
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TextInput } from "@/components/ui/text-input"
import { HelpText } from "@/components/ui/help-text"
import { Combobox } from "@/components/ui/combobox"
import { RadioGroup } from "@/components/ui/radio-group"
import { Tabs } from "@/components/ui/tabs"
import { Anchor } from "@/components/ui/anchor"

export default function EcommercePOC() {
    const [selectedSize, setSelectedSize] = useState("")
    const [selectedColor, setSelectedColor] = useState("")
    const [shippingMethod, setShippingMethod] = useState("")
    const [quantity, setQuantity] = useState("1")
    const [email, setEmail] = useState("")
    const [isAddedToCart, setIsAddedToCart] = useState(false)

    const sizeOptions = [
        { value: "xs", label: "XS - Extra Small" },
        { value: "s", label: "S - Small" },
        { value: "m", label: "M - Medium" },
        { value: "l", label: "L - Large" },
        { value: "xl", label: "XL - Extra Large" },
        { value: "xxl", label: "XXL - Double Extra Large" },
    ]

    const colorOptions = [
        { value: "black", label: "Jet Black" },
        { value: "white", label: "Pure White" },
        { value: "gray", label: "Storm Gray" },
        { value: "navy", label: "Navy Blue" },
        { value: "green", label: "Forest Green" },
    ]

    const shippingOptions = [
        {
            value: "standard",
            label: "Standard Shipping",
            description: "5-7 business days - FREE",
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

    const handleAddToCart = () => {
        if (selectedSize && selectedColor) {
            setIsAddedToCart(true)
            setTimeout(() => setIsAddedToCart(false), 3000)
        }
    }

    const productTabs = [
        {
            id: "description",
            label: "Description",
            content: (
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Premium Athletic Performance Tee</h3>
                    <p className="text-gray-600">
                        Engineered for the modern athlete, this performance tee combines cutting-edge fabric technology with
                        Gymshark's signature style. Perfect for high-intensity training sessions and everyday wear.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Moisture-wicking DryTech fabric technology</li>
                        <li>Four-way stretch for unrestricted movement</li>
                        <li>Flatlock seams to prevent chafing</li>
                        <li>Quick-dry material for all-day comfort</li>
                        <li>Antimicrobial treatment reduces odor</li>
                    </ul>
                </div>
            ),
        },
        {
            id: "sizing",
            label: "Size Guide",
            content: (
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Size Chart</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="border border-gray-200 px-4 py-2 text-left">Size</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Chest (inches)</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Length (inches)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">XS</td>
                                    <td className="border border-gray-200 px-4 py-2">32-34</td>
                                    <td className="border border-gray-200 px-4 py-2">26</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">S</td>
                                    <td className="border border-gray-200 px-4 py-2">34-36</td>
                                    <td className="border border-gray-200 px-4 py-2">27</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">M</td>
                                    <td className="border border-gray-200 px-4 py-2">38-40</td>
                                    <td className="border border-gray-200 px-4 py-2">28</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">L</td>
                                    <td className="border border-gray-200 px-4 py-2">42-44</td>
                                    <td className="border border-gray-200 px-4 py-2">29</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">XL</td>
                                    <td className="border border-gray-200 px-4 py-2">46-48</td>
                                    <td className="border border-gray-200 px-4 py-2">30</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">XXL</td>
                                    <td className="border border-gray-200 px-4 py-2">50-52</td>
                                    <td className="border border-gray-200 px-4 py-2">31</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <HelpText variant="info">
                        For the best fit, measure yourself and compare with our size chart. When in doubt, size up.
                    </HelpText>
                </div>
            ),
        },
        {
            id: "reviews",
            label: "Reviews",
            content: (
                <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="text-3xl font-bold">4.8</div>
                        <div>
                            <div className="flex text-yellow-500 text-lg">★★★★★</div>
                            <div className="text-sm text-gray-600">Based on 247 reviews</div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="border-b border-gray-200 pb-4">
                            <div className="flex items-center mb-2">
                                <span className="font-medium">Alex M.</span>
                                <span className="ml-2 text-yellow-500">★★★★★</span>
                                <span className="ml-auto text-sm text-gray-500">Verified Purchase</span>
                            </div>
                            <p className="text-gray-600">
                                "Perfect fit and amazing quality. The fabric feels premium and the cut is exactly what I expected from
                                Gymshark."
                            </p>
                        </div>

                        <div className="border-b border-gray-200 pb-4">
                            <div className="flex items-center mb-2">
                                <span className="font-medium">Sarah K.</span>
                                <span className="ml-2 text-yellow-500">★★★★★</span>
                                <span className="ml-auto text-sm text-gray-500">Verified Purchase</span>
                            </div>
                            <p className="text-gray-600">
                                "Love the moisture-wicking technology. Keeps me dry during intense workouts. Highly recommend!"
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-black">GYMSHARK</h1>
                        </div>
                        <nav className="flex space-x-8">
                            <Anchor href="#" variant="primary">
                                Men
                            </Anchor>
                            <Anchor href="#" variant="primary">
                                Women
                            </Anchor>
                            <Anchor href="#" variant="primary">
                                Accessories
                            </Anchor>
                            <Anchor href="#" variant="primary">
                                Sale
                            </Anchor>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm">
                                Cart (0)
                            </Button>
                            <Button variant="primary" size="sm">
                                Account
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500 text-lg">Product Image</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="aspect-square bg-gray-100 rounded border-2 border-transparent hover:border-black cursor-pointer flex items-center justify-center"
                                >
                                    <span className="text-xs text-gray-500">{i}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-black mb-2">PREMIUM ATHLETIC TEE</h1>
                            <p className="text-lg text-gray-600 mb-4">High-performance training essential</p>
                            <div className="flex items-center gap-4">
                                <span className="text-3xl font-bold">$45.00</span>
                                <span className="text-lg text-gray-500 line-through">$60.00</span>
                                <span className="bg-[#00FF7F] text-black px-2 py-1 rounded text-sm font-bold">25% OFF</span>
                            </div>
                        </div>

                        {/* Product Options */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Combobox
                                    label="Size"
                                    options={sizeOptions}
                                    value={selectedSize}
                                    onValueChange={setSelectedSize}
                                    placeholder="Select size..."
                                    error={!selectedSize ? "Please select a size" : undefined}
                                />

                                <Combobox
                                    label="Color"
                                    options={colorOptions}
                                    value={selectedColor}
                                    onValueChange={setSelectedColor}
                                    placeholder="Select color..."
                                    error={!selectedColor ? "Please select a color" : undefined}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <TextInput
                                    label="Quantity"
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                                <div className="flex items-end">
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        fullWidth
                                        onClick={handleAddToCart}
                                        disabled={!selectedSize || !selectedColor}
                                    >
                                        {isAddedToCart ? "Added!" : "Add to Cart"}
                                    </Button>
                                </div>
                            </div>

                            {isAddedToCart && (
                                <HelpText variant="success">
                                    Item added to cart successfully! Continue shopping or proceed to checkout.
                                </HelpText>
                            )}
                        </div>

                        {/* Shipping Options */}
                        <div className="border-t border-gray-200 pt-6">
                            <RadioGroup
                                label="Shipping Options"
                                name="shipping"
                                options={shippingOptions}
                                value={shippingMethod}
                                onValueChange={setShippingMethod}
                            />
                        </div>

                        {/* Newsletter Signup */}
                        <div className="border-t border-gray-200 pt-6">
                            <h3 className="font-bold mb-2">Get 10% off your first order</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Subscribe to our newsletter for exclusive offers and updates.
                            </p>
                            <div className="flex gap-2">
                                <TextInput
                                    placeholder="Enter your email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1"
                                />
                                <Button variant="accent">Subscribe</Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Information Tabs */}
                <div className="mt-16">
                    <Tabs items={productTabs} defaultActiveId="description" />
                </div>

                {/* Related Products */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-8">YOU MIGHT ALSO LIKE</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-square bg-gray-200 rounded-lg mb-4 group-hover:bg-gray-300 transition-colors flex items-center justify-center">
                                    <span className="text-gray-500">Product {i}</span>
                                </div>
                                <h3 className="font-bold mb-1">Related Product {i}</h3>
                                <p className="text-gray-600 text-sm mb-2">Performance wear</p>
                                <p className="font-bold">$39.00</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
