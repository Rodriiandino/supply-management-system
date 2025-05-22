"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Check, Clock, MessageSquare, X } from "lucide-react"
import Link from "next/link"
import DashboardLayout from "@/components/layout/dashboard-layout"
import { Separator } from "@/components/ui/separator"

export default function SolicitudDetallePage({ params }: { params: { id: string } }) {
  const [newComment, setNewComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false)
      setNewComment("")
    }, 1000)
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <Link href="/dashboard/solicitudes">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Volver</span>
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Solicitud {params.id}</h1>
            <p className="text-muted-foreground">Materiales de oficina</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Badge>Activa</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detalles de la solicitud</CardTitle>
                <CardDescription>Publicada hace 2 días</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Descripción</h3>
                  <p className="text-sm text-muted-foreground">
                    Necesitamos diversos materiales de oficina para abastecer nuestras nuevas instalaciones. Requerimos
                    papel, bolígrafos, carpetas, clips, grapas, post-its y otros insumos básicos de oficina. Todos los
                    productos deben ser de buena calidad y entregados en nuestra dirección principal.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-1">Categoría</h3>
                    <p className="text-sm text-muted-foreground">Materiales de oficina</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Prioridad</h3>
                    <Badge variant="destructive">Alta</Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Cantidad</h3>
                    <p className="text-sm text-muted-foreground">100 unidades</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Área solicitante</h3>
                    <p className="text-sm text-muted-foreground">Administración</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Fecha límite</h3>
                    <p className="text-sm text-muted-foreground">30/06/2024</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Estado</h3>
                    <Badge>Activa</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">Observaciones adicionales</h3>
                  <p className="text-sm text-muted-foreground">
                    Preferimos proveedores que puedan entregar todos los productos en un solo pedido. La entrega debe
                    realizarse en horario de oficina (9:00 - 18:00).
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Editar</Button>
                <Button variant="destructive">Cancelar solicitud</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ofertas recibidas</CardTitle>
                <CardDescription>3 proveedores han realizado ofertas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    id: 1,
                    proveedor: "Proveedor XYZ",
                    fecha: "Hace 1 día",
                    monto: "$1,200",
                    descripcion:
                      "Ofrecemos todos los materiales solicitados con entrega en 3 días hábiles. Incluye papel premium, bolígrafos de marca reconocida y carpetas de alta calidad.",
                    estado: "pendiente",
                  },
                  {
                    id: 2,
                    proveedor: "Office Supplies Co.",
                    fecha: "Hace 1 día",
                    monto: "$1,350",
                    descripcion:
                      "Materiales de la más alta calidad con entrega inmediata. Incluye servicio de reposición mensual con descuento.",
                    estado: "pendiente",
                  },
                  {
                    id: 3,
                    proveedor: "Todo Oficina",
                    fecha: "Hace 2 días",
                    monto: "$980",
                    descripcion:
                      "Oferta económica que incluye todos los materiales solicitados. Entrega en 5 días hábiles.",
                    estado: "pendiente",
                  },
                ].map((oferta) => (
                  <div key={oferta.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{oferta.proveedor.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{oferta.proveedor}</h3>
                          <p className="text-xs text-muted-foreground">{oferta.fecha}</p>
                        </div>
                      </div>
                      <div className="text-lg font-bold">{oferta.monto}</div>
                    </div>
                    <p className="text-sm">{oferta.descripcion}</p>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        Contactar
                      </Button>
                      <Button variant="destructive" size="sm" className="flex items-center gap-1">
                        <X className="h-4 w-4" />
                        Rechazar
                      </Button>
                      <Button size="sm" className="flex items-center gap-1">
                        <Check className="h-4 w-4" />
                        Aceptar
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Comentarios</CardTitle>
                <CardDescription>Discusión sobre esta solicitud</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      usuario: "Proveedor XYZ",
                      tipo: "proveedor",
                      fecha: "Hace 1 día",
                      mensaje: "¿Podrían especificar qué marcas de bolígrafos prefieren?",
                    },
                    {
                      id: 2,
                      usuario: "Empresa ABC",
                      tipo: "empresa",
                      fecha: "Hace 1 día",
                      mensaje:
                        "Preferimos marcas como BIC, Pilot o similares. Lo importante es que sean de buena calidad y duraderos.",
                    },
                    {
                      id: 3,
                      usuario: "Office Supplies Co.",
                      tipo: "proveedor",
                      fecha: "Hace 1 día",
                      mensaje: "¿Cuál es el plazo máximo de entrega que considerarían aceptable?",
                    },
                    {
                      id: 4,
                      usuario: "Empresa ABC",
                      tipo: "empresa",
                      fecha: "Hace 23 horas",
                      mensaje: "Necesitamos los materiales en un plazo máximo de 7 días.",
                    },
                  ].map((comentario) => (
                    <div key={comentario.id} className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{comentario.usuario.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{comentario.usuario}</span>
                          <Badge variant="outline" className="text-xs">
                            {comentario.tipo === "empresa" ? "Empresa" : "Proveedor"}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{comentario.fecha}</span>
                        </div>
                        <p className="text-sm">{comentario.mensaje}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                <form onSubmit={handleSubmitComment} className="space-y-3">
                  <Textarea
                    placeholder="Escriba un comentario..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={3}
                  />
                  <div className="flex justify-end">
                    <Button type="submit" disabled={isSubmitting || !newComment.trim()}>
                      {isSubmitting ? "Enviando..." : "Enviar comentario"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Estado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary p-1">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Publicada</p>
                      <p className="text-xs text-muted-foreground">23/05/2024 - 10:30</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary p-1">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Ofertas recibidas</p>
                      <p className="text-xs text-muted-foreground">3 ofertas</p>
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
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-muted p-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Finalizada</p>
                      <p className="text-xs text-muted-foreground">Pendiente</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Acciones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full">Ver todas las ofertas</Button>
                <Button variant="outline" className="w-full">
                  Editar solicitud
                </Button>
                <Button variant="destructive" className="w-full">
                  Cancelar solicitud
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Información adicional</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h3 className="text-sm font-semibold">Creada por</h3>
                  <p className="text-sm text-muted-foreground">Juan Pérez</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Departamento</h3>
                  <p className="text-sm text-muted-foreground">Administración</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Presupuesto estimado</h3>
                  <p className="text-sm text-muted-foreground">$1,000 - $1,500</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Tiempo restante</h3>
                  <p className="text-sm text-muted-foreground">5 días</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
