"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Settings,
  Grid,
  Bookmark,
  ArrowLeft,
  Edit,
  CheckSquare,
  XSquare,
  Award,
  Star,
  MapPin,
  Calendar,
  MessageSquare,
  ShoppingCart,
  LogOut,
  Truck,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ProveedorProfilePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("ofertas")

  // Mock data for the profile
  const profile = {
    id: "PROV-12345",
    name: "Proveedor XYZ",
    username: "proveedorxyz",
    bio: "Proveedor especializado en tecnología y materiales de oficina. Más de 10 años de experiencia en el mercado empresarial.",
    location: "Ciudad Capital",
    website: "www.proveedorxyz.com",
    joinDate: "Marzo 2022",
    profileImage: null,
    categories: ["Tecnología", "Materiales de oficina", "Electrónica"],
    stats: {
      ofertas: 34,
      ofertasAceptadas: 18,
      solicitudesSeguidas: 42,
      valoracion: 4.8,
      totalVentas: "$25,600",
    },
  }

  // Mock data for offers
  const ofertas = [
    {
      id: "OF-2345",
      solicitudId: "SOL-1234",
      solicitud: "Materiales de oficina",
      empresa: "Empresa ABC",
      fecha: "Hace 1 día",
      monto: "$1,200",
      status: "Pendiente",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "OF-2344",
      solicitudId: "SOL-1233",
      solicitud: "Equipos informáticos",
      empresa: "Empresa XYZ",
      fecha: "Hace 3 días",
      monto: "$5,600",
      status: "Pendiente",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "OF-2343",
      solicitudId: "SOL-1232",
      solicitud: "Servicios de limpieza",
      empresa: "Corporación 123",
      fecha: "Hace 6 días",
      monto: "$800",
      status: "Aceptada",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "OF-2342",
      solicitudId: "SOL-1231",
      solicitud: "Insumos de cafetería",
      empresa: "Empresa DEF",
      fecha: "Hace 1 semana",
      monto: "$350",
      status: "Rechazada",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "OF-2341",
      solicitudId: "SOL-1230",
      solicitud: "Mobiliario de oficina",
      empresa: "Empresa GHI",
      fecha: "Hace 2 semanas",
      monto: "$2,400",
      status: "Aceptada",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "OF-2340",
      solicitudId: "SOL-1229",
      solicitud: "Material promocional",
      empresa: "Marketing Pro",
      fecha: "Hace 3 semanas",
      monto: "$1,800",
      status: "Aceptada",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  // Mock data for saved solicitudes
  const solicitudesSeguidas = [
    {
      id: "SOL-1234",
      empresa: "Empresa ABC",
      title: "Materiales de oficina",
      fecha: "Hace 2 días",
      status: "Activa",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "SOL-1233",
      empresa: "Empresa XYZ",
      title: "Equipos informáticos",
      fecha: "Hace 5 días",
      status: "Activa",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "SOL-1229",
      empresa: "Empresa DEF",
      title: "Servicios de catering",
      fecha: "Hace 1 día",
      status: "Activa",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center gap-2 p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard/proveedor")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold flex-1">{profile.name}</h1>
        <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard/proveedor/settings")}>
          <Settings className="h-5 w-5" />
        </Button>
      </header>

      {/* Profile Info (Instagram style) */}
      <main className="flex-1 container max-w-4xl py-6 px-4">
        <div className="space-y-8">
          {/* Profile header */}
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Profile image */}
            <div className="flex justify-center md:justify-start">
              <Avatar className="h-20 w-20 md:h-24 md:w-24">
                {profile.profileImage ? (
                  <AvatarImage src={profile.profileImage} alt={profile.name} />
                ) : (
                  <AvatarFallback className="text-2xl">{profile.name.substring(0, 2)}</AvatarFallback>
                )}
              </Avatar>
            </div>

            {/* Profile info */}
            <div className="flex-1 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                <h2 className="text-xl font-semibold">{profile.username}</h2>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Editar perfil
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => router.push("/dashboard/proveedor/messages")}>
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Mensajes
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="font-bold">{profile.stats.ofertas}</p>
                  <p className="text-sm text-muted-foreground">Ofertas</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">{profile.stats.ofertasAceptadas}</p>
                  <p className="text-sm text-muted-foreground">Aceptadas</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">{profile.stats.solicitudesSeguidas}</p>
                  <p className="text-sm text-muted-foreground">Seguidas</p>
                </div>
              </div>

              {/* Bio */}
              <div>
                <p className="font-medium">{profile.name}</p>
                <p className="text-sm">{profile.bio}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {profile.categories.map((category) => (
                    <Badge key={category} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Additional info */}
              <div className="flex flex-col gap-1 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Miembro desde {profile.joinDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4 text-yellow-500" />
                  <span className="flex items-center">
                    {profile.stats.valoracion}
                    <Star className="h-3 w-3 ml-1 text-yellow-500 fill-yellow-500" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Card */}
          <Card className="w-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Resumen de actividad</CardTitle>
              <CardDescription>Desempeño general como proveedor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-secondary/20">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary mb-2">
                    <ShoppingCart className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <p className="text-xl font-bold">{profile.stats.ofertas}</p>
                  <p className="text-xs text-muted-foreground">Ofertas realizadas</p>
                </div>
                <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-primary/10">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary mb-2">
                    <CheckSquare className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="text-xl font-bold">{profile.stats.ofertasAceptadas}</p>
                  <p className="text-xs text-muted-foreground">Ofertas aceptadas</p>
                </div>
                <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-muted">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted-foreground/70 mb-2">
                    <Truck className="h-5 w-5 text-muted" />
                  </div>
                  <p className="text-xl font-bold">12</p>
                  <p className="text-xs text-muted-foreground">Entregas realizadas</p>
                </div>
                <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-muted">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted-foreground/70 mb-2">
                    <Briefcase className="h-5 w-5 text-muted" />
                  </div>
                  <p className="text-xl font-bold">{profile.stats.totalVentas}</p>
                  <p className="text-xs text-muted-foreground">Ventas totales</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs (Instagram style) */}
          <Tabs defaultValue="ofertas" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="ofertas"
                onClick={() => setActiveTab("ofertas")}
                className="flex items-center justify-center gap-2"
              >
                <Grid className="h-4 w-4" />
                <span className="hidden sm:inline">Mis Ofertas</span>
              </TabsTrigger>
              <TabsTrigger
                value="seguidas"
                onClick={() => setActiveTab("seguidas")}
                className="flex items-center justify-center gap-2"
              >
                <Bookmark className="h-4 w-4" />
                <span className="hidden sm:inline">Solicitudes Guardadas</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ofertas">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 mt-4">
                {ofertas.map((oferta) => (
                  <Link key={oferta.id} href={`/dashboard/solicitudes/${oferta.solicitudId}/proveedor`}>
                    <div className="relative group aspect-square">
                      <img
                        src={oferta.image || "/placeholder.svg"}
                        alt={oferta.solicitud}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-white text-center p-2">
                          <p className="font-medium">{oferta.solicitud}</p>
                          <p className="text-sm">{oferta.monto}</p>
                          <Badge
                            className="mt-1"
                            variant={
                              oferta.status === "Aceptada"
                                ? "default"
                                : oferta.status === "Rechazada"
                                  ? "destructive"
                                  : "outline"
                            }
                          >
                            {oferta.status}
                          </Badge>
                        </div>
                      </div>
                      {oferta.status === "Aceptada" && (
                        <div className="absolute top-2 right-2">
                          <CheckSquare className="h-5 w-5 text-green-500 fill-green-500" />
                        </div>
                      )}
                      {oferta.status === "Rechazada" && (
                        <div className="absolute top-2 right-2">
                          <XSquare className="h-5 w-5 text-red-500 fill-red-500" />
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="seguidas">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 mt-4">
                {solicitudesSeguidas.map((solicitud) => (
                  <Link key={solicitud.id} href={`/dashboard/solicitudes/${solicitud.id}/proveedor`}>
                    <div className="relative group aspect-square">
                      <img
                        src={solicitud.image || "/placeholder.svg"}
                        alt={solicitud.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-white text-center p-2">
                          <p className="font-medium">{solicitud.title}</p>
                          <p className="text-sm">{solicitud.empresa}</p>
                          <p className="text-xs">{solicitud.fecha}</p>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2">
                        <Bookmark className="h-5 w-5 text-primary fill-primary" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Logout Button */}
      <div className="container max-w-4xl px-4 pb-8">
        <Separator className="my-6" />
        <Button variant="outline" className="w-full" onClick={() => router.push("/login")}>
          <LogOut className="h-4 w-4 mr-2" />
          Cerrar sesión
        </Button>
      </div>
    </div>
  )
}
