"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, User, DollarSign } from "lucide-react"
import Link from "next/link"

const itemsData = [
  {
    id: 1,
    title: "NASA Computer Terminal",
    description:
      "Vintage terminal used in Apollo missions. Still functional. This historic computer was recovered from a government auction. Shows authentic wear marks and retains original gray metal casing. Perfect for space memorabilia collectors or computing history enthusiasts.",
    price: 15000,
    seller: "spacetech_collector",
    image: "/placeholder.svg?height=400&width=600",
    category: "Electronics",
    condition: "Used - Good condition",
    location: "Nevada, USA",
  },
  {
    id: 2,
    title: "FBI Hard Drive",
    description:
      "Found at flea market. Contains encrypted data. This external hard drive appears to come from a batch of declassified IT equipment. Contains encrypted partitions I couldn't decrypt. Sold as-is, ideal for cybersecurity experts or curious individuals.",
    price: 800,
    seller: "mystery_finder",
    image: "/placeholder.svg?height=400&width=600",
    category: "Computing",
    condition: "Used - Fair condition",
    location: "Detroit, MI",
  },
  {
    id: 3,
    title: "Mysterious USB Drive",
    description:
      "No label. Contains obscure files... This black unmarked USB drive was found in a lot of electronic items. Contains files with strange names and password-protected folders. I prefer to get rid of it.",
    price: 250,
    seller: "digital_explorer",
    image: "/placeholder.svg?height=400&width=600",
    category: "Computing",
    condition: "Used - Good condition",
    location: "Portland, OR",
  },
  {
    id: 4,
    title: "Ancient Aztec Civilization Book",
    description:
      "Very rare edition with strange handwritten annotations. This book appears to date from the early 20th century and deals with Aztec rituals and customs. The margins are filled with annotations in handwriting I can't decipher. Some pages contain hand-drawn symbols.",
    price: 1200,
    seller: "ancient_books",
    image: "/placeholder.svg?height=400&width=600",
    category: "Books",
    condition: "Antique - Fair condition",
    location: "Boston, MA",
  },
]

export default function ItemPage() {
  const params = useParams()
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState<string | null>(null)
  const [showPurchaseConfirm, setShowPurchaseConfirm] = useState(false)

  const itemId = Number.parseInt(params.id as string)
  const item = itemsData.find((i) => i.id === itemId)

  useEffect(() => {
    const user = localStorage.getItem("fastbroc_user")
    if (user) setCurrentUser(user)
  }, [])

  if (!item) {
    return (
      <div className="min-h-screen bg-black text-green-400 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-green-400 mb-4 font-mono">ERROR 404 - ITEM NOT FOUND</h1>
          <Link href="/">
            <Button className="bg-green-800 hover:bg-green-700 text-black font-mono">[return home]</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handlePurchase = () => {
    if (!currentUser) {
      alert("Authentication required to make a purchase")
      return
    }
    setShowPurchaseConfirm(true)
  }

  const confirmPurchase = () => {
    alert(`Transaction initiated - "${item.title}" for $${item.price}`)
    setShowPurchaseConfirm(false)
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-black text-green-400">
      {/* Header */}
      <header className="bg-gray-900 border-b border-green-800 p-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-green-600 hover:text-green-400 mb-2 font-mono">
            <ArrowLeft size={20} />
            [back]
          </Link>
          <h1 className="text-3xl font-bold text-green-400 font-mono">FastBroc</h1>
          <p className="text-green-600 text-sm font-mono">Item details</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div>
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-96 object-cover rounded-lg border border-green-800 opacity-80"
            />
          </div>

          {/* Details */}
          <div>
            <Card className="bg-gray-900 border-green-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl text-green-400 font-mono">{item.title}</CardTitle>
                  <Badge variant="secondary" className="bg-gray-800 text-green-500 font-mono">
                    {item.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <DollarSign size={24} />
                  <span className="text-3xl font-bold font-mono">{item.price}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-green-400 mb-2 font-mono"># Description</h3>
                  <p className="text-green-600 font-mono text-sm">{item.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-400 font-mono">Condition</h4>
                    <p className="text-green-600 font-mono text-sm">{item.condition}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 font-mono">Location</h4>
                    <p className="text-green-600 font-mono text-sm">{item.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-gray-800 rounded border border-green-800">
                  <User size={20} className="text-green-500" />
                  <div>
                    <p className="font-semibold text-green-400 font-mono">Seller</p>
                    <p className="text-green-500 font-mono">{item.seller}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handlePurchase}
                    className="flex-1 bg-green-800 hover:bg-green-700 text-black font-mono"
                    size="lg"
                  >
                    [purchase now]
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-gray-800 text-green-400 border-green-700 hover:bg-gray-700 font-mono"
                    size="lg"
                  >
                    [contact seller]
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Purchase confirmation */}
        {showPurchaseConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <Card className="max-w-md mx-4 bg-gray-900 border-green-800">
              <CardHeader>
                <CardTitle className="text-green-400 font-mono">CONFIRM TRANSACTION</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-green-600 font-mono text-sm">
                  Confirm purchase of <strong className="text-green-400">{item.title}</strong> for{" "}
                  <strong className="text-green-400">${item.price}</strong>?
                </p>
                <div className="flex gap-3">
                  <Button
                    onClick={confirmPurchase}
                    className="flex-1 bg-green-800 hover:bg-green-700 text-black font-mono"
                  >
                    [confirm]
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowPurchaseConfirm(false)}
                    className="flex-1 bg-gray-800 text-green-400 border-green-700 hover:bg-gray-700 font-mono"
                  >
                    [cancel]
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
