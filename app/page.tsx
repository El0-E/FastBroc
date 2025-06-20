"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Contenu du site
const siteContent = [
  {
    id: 1,
    title: "Bienvenue sur FastBroc",
    description: "Une plateforme simple et élégante.",
    image: "/placeholder.svg",
    category: "Accueil",
  },
  {
    id: 2,
    title: "À propos de nous",
    description: "Découvrez notre histoire et notre mission.",
    image: "/placeholder.svg",
    category: "Information",
  },
  {
    id: 3,
    title: "Nos services",
    description: "Explorez nos différentes offres.",
    image: "/placeholder.svg",
    category: "Services",
  },
  {
    id: 4,
    title: "Contactez-nous",
    description: "Nous sommes à votre écoute pour toute question.",
    image: "/placeholder.svg",
    category: "Contact",
  },
]

export default function HomePage() {
  const [currentUser, setCurrentUser] = useState<string | null>(null)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    // Vérification de l'utilisateur
    const user = localStorage.getItem("fastbroc_user")
    const admin = localStorage.getItem("fastbroc_admin")
    if (user) setCurrentUser(user)
    if (admin === "true") setIsAdmin(true)
  }, [])

  const handleLogin = () => {
    const username = prompt("Nom d'utilisateur:")
    if (!username) return

    const password = prompt("Mot de passe:")
    if (!password) return

    // Vérification des identifiants admin
    if (username === "admin" && password === "supersecret123") {
      localStorage.setItem("fastbroc_user", username)
      localStorage.setItem("fastbroc_admin", "true")
      setCurrentUser(username)
      setIsAdmin(true)
      alert("Accès administrateur accordé!")
    }
    else {
      alert("Identifiants invalides")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("fastbroc_user")
    localStorage.removeItem("fastbroc_admin")
    setCurrentUser(null)
    setIsAdmin(false)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-blue-50 border-b border-blue-100 p-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">FastBroc</h1>
            <p className="text-blue-400 text-sm">Plateforme simple et élégante</p>
          </div>
          <div className="flex gap-4 items-center">
            {currentUser ? (
              <>
                {isAdmin && (
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
                    Admin
                  </Badge>
                )}
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="bg-white text-blue-600 border-blue-200 hover:bg-blue-50"
                >
                  Déconnexion
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                onClick={handleLogin}
                className="bg-white text-blue-600 border-blue-200 hover:bg-blue-50"
              >
                Connexion
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 p-2">
        <div className="max-w-6xl mx-auto flex gap-6 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Accueil
          </Link>
          <Link href="/about" className="text-blue-600 hover:text-blue-800">
            À propos
          </Link>
          <Link href="/contact" className="text-blue-600 hover:text-blue-800">
            Contact
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        {/* Contenu principal */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Bienvenue sur FastBroc</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.map((item) => (
              <Card key={item.id} className="bg-white border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <CardHeader className="p-0">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg text-gray-800 mb-2">{item.title}</CardTitle>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex justify-end">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-600">
                      {item.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-50 border-t border-blue-100 p-6 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 text-sm">&copy; 2025 FastBroc</p>
          <p className="text-gray-500 text-xs mt-2">Une plateforme simple et élégante</p>
        </div>
      </footer>
    </div>
  )
}
