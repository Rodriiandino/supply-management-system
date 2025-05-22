"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, ArrowLeft, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProveedorSearchPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("top")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const categories = [
    "Materiales de oficina",
    "Tecnología",
    "Mobiliario",
    "Limpieza",
    "Catering",
    "Papelería",
    "Informática",
    "Marketing",
    "Transporte",
    "Seguridad",
    "Mantenimiento",
    "Consultoría",
  ]

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const clearFilters = () => {
    setSelectedCategories([])
  }

  const searchResults = [
    {
      id: "SOL-1234",
      empresa: "Empresa ABC",
      title: "Materiales de oficina",
      description: "Papel, bolígrafos, carpetas y otros insumos de oficina",
      date: "Hace 2 días",
      ubicacion: "Ciudad Capital",
      categoria: "Materiales de oficina",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "SOL-1233",
      empresa: "Empresa XYZ",
      title: "Equipos informáticos",
      description: "Laptops, monitores y periféricos para el departamento de TI",
      date: "Hace 5 días",
      ubicacion: "Zona Industrial",
      categoria: "Tecnología",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "SOL-1230",
      empresa: "Corporación 123",
      title: "Mobiliario de oficina",
      description: "Sillas ergonómicas y escritorios para la nueva área",
      date: "Hace 3 semanas",
      ubicacion: "Centro Empresarial",
      categoria: "Mobiliario",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "SOL-1229",
      empresa: "Empresa DEF",
      title: "Servicios de catering",
      description: "Servicio de catering para evento corporativo",
      date: "Hace 1 día",
      ubicacion: "Hotel Central",
      categoria: "Catering",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "SOL-1228",
      empresa: "Global Corp",
      title: "Material promocional",
      description: "Folletos, tarjetas y material promocional para feria",
      date: "Hace 3 días",
      ubicacion: "Centro de Convenciones",
      categoria: "Marketing",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "SOL-1227",
      empresa: "Tech Solutions",
      title: "Software especializado",
      description: "Licencias de software para gestión de proyectos",
      date: "Hace 1 semana",
      ubicacion: "Parque Tecnológico",
      categoria: "Tecnología",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  // Filter results based on search query and selected categories
  const filteredResults = searchResults.filter((result) => {
    const matchesQuery =
      searchQuery === "" ||
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.empresa.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategories = selectedCategories.length === 0 || selectedCategories.includes(result.categoria)

    return matchesQuery && matchesCategories
  })

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Search header */}
      <header className="sticky top-0 z-50 flex items-center p-2 gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1 relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar solicitudes..."
            className="pl-8 w-full bg-muted"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1 h-7 w-7"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => document.getElementById("filter-dropdown")?.classList.toggle("hidden")}
        >
          <Filter className="h-5 w-5 mr-1" />
          Filtros {selectedCategories.length > 0 && `(${selectedCategories.length})`}
        </Button>
      </header>

      {/* Filter dropdown */}
      <div id="filter-dropdown" className="hidden border-b p-4 bg-background">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Filtrar por categoría</h3>
          {selectedCategories.length > 0 && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Limpiar filtros
            </Button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategories.includes(category) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 container max-w-4xl py-4 px-4">
        {searchQuery || selectedCategories.length > 0 ? (
          <>
            {/* Search results */}
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2">Resultados de búsqueda</h2>
              {filteredResults.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No se encontraron resultados</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {filteredResults.map((result) => (
                    <Link key={result.id} href={`/dashboard/solicitudes/${result.id}/proveedor`}>
                      <Card className="h-full overflow-hidden border hover:border-primary/50 transition-colors">
                        <div className="aspect-square relative">
                          <img
                            src={result.image || "/placeholder.svg"}
                            alt={result.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>{result.empresa.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <p className="text-sm font-medium truncate">{result.empresa}</p>
                          </div>
                          <p className="text-sm font-medium truncate">{result.title}</p>
                          <p className="text-xs text-muted-foreground line-clamp-2">{result.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Trending/Popular */}
            <Tabs defaultValue="top" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="top" onClick={() => setActiveTab("top")}>
                  Populares
                </TabsTrigger>
                <TabsTrigger value="recent" onClick={() => setActiveTab("recent")}>
                  Recientes
                </TabsTrigger>
              </TabsList>

              <TabsContent value="top" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {searchResults
                    .slice(0, 6)
                    .sort((a, b) => a.id.localeCompare(b.id))
                    .map((result) => (
                      <Link key={result.id} href={`/dashboard/solicitudes/${result.id}/proveedor`}>
                        <Card className="h-full overflow-hidden border hover:border-primary/50 transition-colors">
                          <div className="aspect-square relative">
                            <img
                              src={result.image || "/placeholder.svg"}
                              alt={result.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback>{result.empresa.substring(0, 2)}</AvatarFallback>
                              </Avatar>
                              <p className="text-sm font-medium truncate">{result.empresa}</p>
                            </div>
                            <p className="text-sm font-medium truncate">{result.title}</p>
                            <p className="text-xs text-muted-foreground line-clamp-2">{result.description}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="recent" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {searchResults
                    .slice(0, 6)
                    .sort((a, b) => b.date.localeCompare(a.date))
                    .map((result) => (
                      <Link key={result.id} href={`/dashboard/solicitudes/${result.id}/proveedor`}>
                        <Card className="h-full overflow-hidden border hover:border-primary/50 transition-colors">
                          <div className="aspect-square relative">
                            <img
                              src={result.image || "/placeholder.svg"}
                              alt={result.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback>{result.empresa.substring(0, 2)}</AvatarFallback>
                              </Avatar>
                              <p className="text-sm font-medium truncate">{result.empresa}</p>
                            </div>
                            <p className="text-sm font-medium truncate">{result.title}</p>
                            <p className="text-xs text-muted-foreground">{result.date}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Categories */}
            <div className="mt-8">
              <h2 className="text-lg font-medium mb-4">Explorar categorías</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.slice(0, 6).map((category) => (
                  <Card
                    key={category}
                    className="cursor-pointer hover:border-primary/50 transition-colors"
                    onClick={() => {
                      setSelectedCategories([category])
                      document.getElementById("filter-dropdown")?.classList.remove("hidden")
                    }}
                  >
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-2">
                        <span className="text-secondary-foreground font-medium">{category.substring(0, 1)}</span>
                      </div>
                      <p className="font-medium">{category}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
