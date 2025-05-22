"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  MessageSquare,
  Heart,
  Bookmark,
  Share2,
  Send,
  Calendar,
  Timer,
  MapPin,
  Package,
  CheckCircle2,
  Clock,
  MoreHorizontal,
  AlertCircle,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { Separator } from "@/components/ui/separator"

export default function SolicitudProveedorPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("detalles")
  const [newComment, setNewComment] = useState("")
  const [isCommenting, setIsCommenting] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ofertaForm, setOfertaForm] = useState({
    monto: "",
    descripcion: "",
    plazoEntrega: "",
  })
  const [isSubmittingOferta, setIsSubmittingOferta] = useState(false)
  const commentInputRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false)
      setNewComment("")
      setIsCommenting(false)
    }, 1000)
  }

  const handleSubmitOferta = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingOferta(true)

    // Simulación de envío
    setTimeout(() => {
      setIsSubmittingOferta(false)
      // Reset form or redirect
    }, 1000)
  }

  useEffect(() => {
    if (isCommenting && commentInputRef.current) {
      commentInputRef.current.focus()
    }
  }, [isCommenting])

  // Mock data for this solicitud
  const solicitud = {
    id: params.id,
    empresa: "Empresa ABC",
    empresaLogo: null,
    title: "Materiales de oficina",
    description:
      "Necesitamos diversos materiales de oficina para abastecer nuestras nuevas instalaciones. Requerimos papel, bolígrafos, carpetas, clips, grapas, post-its y otros insumos básicos de oficina. Todos los productos deben ser de buena calidad y entregados en nuestra dirección principal.",
    date: "23/05/2024",
    publishedAt: "Hace 2 días",
    cantidad: "100 unidades",
    plazoEntrega: "7 días",
    fechaLimite: "30/06/2024",
    ubicacion: "Ciudad Capital",
    presupuestoEstimado: "$1,000 - $1,500",
    departamento: "Administración",
    comments: [
      {
        id: 1,
        usuario: "Proveedor XYZ",
        tipo: "proveedor",
        fecha: "Hace 1 día",
        mensaje: "¿Podrían especificar qué marcas de bolígrafos prefieren?",
        avatar: null,
      },
      {
        id: 2,
        usuario: "Empresa ABC",
        tipo: "empresa",
        fecha: "Hace 1 día",
        mensaje:
          "Preferimos marcas como BIC, Pilot o similares. Lo importante es que sean de buena calidad y duraderos.",
        avatar: null,
      },
      {
        id: 3,
        usuario: "Office Supplies Co.",
        tipo: "proveedor",
        fecha: "Hace 1 día",
        mensaje: "¿Cuál es el plazo máximo de entrega que considerarían aceptable?",
        avatar: null,
      },
      {
        id: 4,
        usuario: "Empresa ABC",
        tipo: "empresa",
        fecha: "Hace 23 horas",
        mensaje: "Necesitamos los materiales en un plazo máximo de 7 días.",
        avatar: null,
      },
    ],
    ofertas: [
      {
        id: 1,
        proveedor: "Proveedor XYZ",
        fecha: "Hace 1 día",
        monto: "$1,200",
        descripcion:
          "Ofrecemos todos los materiales solicitados con entrega en 3 días hábiles. Incluye papel premium, bolígrafos de marca reconocida y carpetas de alta calidad.",
        estado: "pendiente",
        avatar: null,
      },
      {
        id: 2,
        proveedor: "Office Supplies Co.",
        fecha: "Hace 1 día",
        monto: "$1,350",
        descripcion:
          "Materiales de la más alta calidad con entrega inmediata. Incluye servicio de reposición mensual con descuento.",
        estado: "pendiente",
        avatar: null,
      },
      {
        id: 3,
        proveedor: "Todo Oficina",
        fecha: "Hace 2 días",
        monto: "$980",
        descripcion: "Oferta económica que incluye todos los materiales solicitados. Entrega en 5 días hábiles.",
        estado: "pendiente",
        avatar: null,
      },
    ],
    priority: "Alta",
    status: "Activa",
    images: ["/placeholder.svg?height=600&width=600"],
    likes: 12,
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Instagram-style header */}
      <header className="sticky top-0 z-50 flex items-center gap-2 p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">{solicitud.title}</h1>
          <p className="text-xs text-muted-foreground">{solicitud.id}</p>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </header>

      {/* Instagram-style content */}
      <main className="flex-1">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Images and Comments (like Instagram post) */}
          <div className="md:w-2/3 md:border-r">
            {/* Images */}
            {solicitud.images && solicitud.images.length > 0 && (
              <div className="relative">
                <img
                  src={solicitud.images[0] || "/placeholder.svg"}
                  alt={solicitud.title}
                  className="w-full aspect-square object-cover md:aspect-auto md:max-h-[600px]"
                />
                <div className="absolute top-3 right-3">
                  <Badge
                    variant={
                      solicitud.priority === "Alta"
                        ? "destructive"
                        : solicitud.priority === "Media"
                          ? "default"
                          : "secondary"
                    }
                  >
                    {solicitud.priority}
                  </Badge>
                </div>
              </div>
            )}

            {/* Instagram-style actions */}
            <div className="p-4 flex justify-between">
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" onClick={() => console.log("Like")}>
                  <Heart className={`h-6 w-6 ${false ? "text-red-500 fill-red-500" : ""}`} />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsCommenting(true)}>
                  <MessageSquare className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => console.log("Share")}>
                  <Share2 className="h-6 w-6" />
                </Button>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsSaved(!isSaved)}>
                <Bookmark className={`h-6 w-6 ${isSaved ? "text-primary fill-primary" : ""}`} />
              </Button>
            </div>

            {/* Likes */}
            <div className="px-4 pb-1">
              <p className="text-sm font-medium">{solicitud.likes} interesados</p>
            </div>

            {/* Caption */}
            <div className="px-4 pb-2">
              <div className="flex items-center gap-2 mb-1">
                <Avatar className="h-6 w-6">
                  <AvatarFallback>{solicitud.empresa.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <p className="text-sm">
                  <span className="font-bold">{solicitud.empresa}</span>{" "}
                  <span className="font-medium">{solicitud.title}</span>
                </p>
              </div>
              <p className="text-sm mb-1">{solicitud.description}</p>
              <p className="text-xs text-muted-foreground">{solicitud.publishedAt}</p>
            </div>

            <Separator className="my-2" />

            {/* Comments section (Instagram-style) */}
            <div className="px-4 pb-4">
              <h3 className="text-sm font-medium mb-2">Comentarios</h3>
              <div className="space-y-4 mb-4">
                {solicitud.comments.map((comment) => (
                  <div key={comment.id} className="flex gap-2">
                    <Avatar className="h-8 w-8 flex-shrink-0">
                      {comment.avatar ? (
                        <AvatarImage src={comment.avatar} />
                      ) : (
                        <AvatarFallback>{comment.usuario.substring(0, 2)}</AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-sm">{comment.usuario}</span>
                        <Badge variant="outline" className="text-xs h-5">
                          {comment.tipo === "empresa" ? "Empresa" : "Proveedor"}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{comment.fecha}</span>
                      </div>
                      <p className="text-sm">{comment.mensaje}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add comment */}
              {isCommenting ? (
                <form onSubmit={handleSubmitComment} className="space-y-2">
                  <div className="flex gap-2">
                    <Avatar className="h-8 w-8 flex-shrink-0">
                      <AvatarFallback>PX</AvatarFallback>
                    </Avatar>
                    <Textarea
                      ref={commentInputRef}
                      placeholder="Añadir un comentario..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="flex-1 resize-none"
                      rows={2}
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setIsCommenting(false)
                        setNewComment("")
                      }}
                    >
                      Cancelar
                    </Button>
                    <Button type="submit" size="sm" disabled={isSubmitting || !newComment.trim()}>
                      <Send className="h-4 w-4 mr-2" />
                      {isSubmitting ? "Enviando..." : "Publicar"}
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>PX</AvatarFallback>
                  </Avatar>
                  <Button
                    variant="ghost"
                    className="text-muted-foreground text-sm w-full justify-start font-normal h-auto py-2"
                    onClick={() => setIsCommenting(true)}
                  >
                    Añadir un comentario...
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Right side - Details and Offer Form */}
          <div className="md:w-1/3 p-4 space-y-6">
            {/* Quick info */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Fecha límite: {solicitud.fechaLimite}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Timer className="h-4 w-4 text-muted-foreground" />
                <span>Plazo: {solicitud.plazoEntrega}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{solicitud.ubicacion}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Package className="h-4 w-4 text-muted-foreground" />
                <span>Cantidad: {solicitud.cantidad}</span>
              </div>
            </div>

            <Tabs defaultValue="detalles" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="detalles" onClick={() => setActiveTab("detalles")}>
                  Detalles
                </TabsTrigger>
                <TabsTrigger value="ofertas" onClick={() => setActiveTab("ofertas")}>
                  Ofertas ({solicitud.ofertas.length})
                </TabsTrigger>
              </TabsList>
              <TabsContent value="detalles" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Empresa</h3>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{solicitud.empresa.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{solicitud.empresa}</p>
                      <p className="text-xs text-muted-foreground">Miembro desde 2022</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-medium">Departamento</h3>
                    <p className="text-sm text-muted-foreground">{solicitud.departamento}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Presupuesto estimado</h3>
                    <p className="text-sm text-muted-foreground">{solicitud.presupuestoEstimado}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Fecha de publicación</h3>
                    <p className="text-sm text-muted-foreground">{solicitud.date}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Estado</h3>
                    <Badge>{solicitud.status}</Badge>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Estado del proceso</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary p-1">
                        <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Publicada</p>
                        <p className="text-xs text-muted-foreground">{solicitud.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary p-1">
                        <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Ofertas recibidas</p>
                        <p className="text-xs text-muted-foreground">{solicitud.ofertas.length} ofertas</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-muted p-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Selección de proveedor</p>
                        <p className="text-xs text-muted-foreground">Pendiente</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-muted p-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Entrega</p>
                        <p className="text-xs text-muted-foreground">Pendiente</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="ofertas" className="space-y-4 mt-4">
                {solicitud.ofertas.length > 0 ? (
                  <div className="space-y-4">
                    {solicitud.ofertas.map((oferta) => (
                      <div key={oferta.id} className="border rounded-lg p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              {oferta.avatar ? (
                                <AvatarImage src={oferta.avatar} />
                              ) : (
                                <AvatarFallback>{oferta.proveedor.substring(0, 2)}</AvatarFallback>
                              )}
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{oferta.proveedor}</h3>
                              <p className="text-xs text-muted-foreground">{oferta.fecha}</p>
                            </div>
                          </div>
                          <div className="text-lg font-bold">{oferta.monto}</div>
                        </div>
                        <p className="text-sm">{oferta.descripcion}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <AlertCircle className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Aún no hay ofertas para esta solicitud</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            {/* Offer form */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Realizar oferta</CardTitle>
                <CardDescription>Complete el formulario para enviar su oferta</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmitOferta}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="monto">Monto total (USD)</Label>
                    <Input
                      id="monto"
                      type="number"
                      placeholder="Ej: 1200"
                      value={ofertaForm.monto}
                      onChange={(e) => setOfertaForm({ ...ofertaForm, monto: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="descripcion">Descripción de la oferta</Label>
                    <Textarea
                      id="descripcion"
                      placeholder="Describa detalladamente su oferta, incluyendo productos, calidad, garantías, etc."
                      rows={3}
                      value={ofertaForm.descripcion}
                      onChange={(e) => setOfertaForm({ ...ofertaForm, descripcion: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="plazoEntrega">Plazo de entrega (días)</Label>
                    <Input
                      id="plazoEntrega"
                      type="number"
                      placeholder="Ej: 5"
                      value={ofertaForm.plazoEntrega}
                      onChange={(e) => setOfertaForm({ ...ofertaForm, plazoEntrega: e.target.value })}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isSubmittingOferta}>
                    {isSubmittingOferta ? (
                      "Enviando oferta..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar oferta
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
