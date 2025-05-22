"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Bell,
  MessageSquare,
  Star,
  Calendar,
  ShoppingCart,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export default function ProveedorNotificationsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("all")

  // Mock notifications data
  const notifications = [
    {
      id: 1,
      type: "offer_accepted",
      title: "Oferta aceptada",
      message: "Su oferta para 'Materiales de oficina' ha sido aceptada",
      empresa: "Empresa ABC",
      solicitudId: "SOL-1234",
      date: "Hace 2 horas",
      read: false,
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    },
    {
      id: 2,
      type: "offer_rejected",
      title: "Oferta rechazada",
      message: "Su oferta para 'Equipos informáticos' ha sido rechazada",
      empresa: "Empresa XYZ",
      solicitudId: "SOL-1233",
      date: "Hace 1 día",
      read: true,
      icon: <XCircle className="h-5 w-5 text-red-500" />,
    },
    {
      id: 3,
      type: "new_message",
      title: "Nuevo mensaje",
      message: "Ha recibido un mensaje de Empresa ABC sobre su oferta",
      empresa: "Empresa ABC",
      solicitudId: "SOL-1234",
      date: "Hace 1 día",
      read: false,
      icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
    },
    {
      id: 4,
      type: "new_request",
      title: "Nueva solicitud",
      message: "Se ha publicado una nueva solicitud que coincide con su perfil",
      empresa: "Corporación 123",
      solicitudId: "SOL-1232",
      date: "Hace 2 días",
      read: true,
      icon: <Bell className="h-5 w-5 text-purple-500" />,
    },
    {
      id: 5,
      type: "new_review",
      title: "Nueva valoración",
      message: "Empresa ABC ha dejado una valoración de 5 estrellas para su servicio",
      empresa: "Empresa ABC",
      solicitudId: "SOL-1231",
      date: "Hace 3 días",
      read: true,
      icon: <Star className="h-5 w-5 text-yellow-500" />,
    },
    {
      id: 6,
      type: "deadline_reminder",
      title: "Recordatorio de plazo",
      message: "El plazo para entregar 'Insumos de cafetería' vence en 2 días",
      empresa: "Empresa DEF",
      solicitudId: "SOL-1230",
      date: "Hace 3 días",
      read: true,
      icon: <Calendar className="h-5 w-5 text-orange-500" />,
    },
    {
      id: 7,
      type: "payment_received",
      title: "Pago recibido",
      message: "Ha recibido un pago de $1,200 por 'Materiales de oficina'",
      empresa: "Empresa ABC",
      solicitudId: "SOL-1229",
      date: "Hace 4 días",
      read: true,
      icon: <ShoppingCart className="h-5 w-5 text-green-500" />,
    },
    {
      id: 8,
      type: "delivery_confirmation",
      title: "Confirmación de entrega",
      message: "Empresa XYZ ha confirmado la recepción de su entrega",
      empresa: "Empresa XYZ",
      solicitudId: "SOL-1228",
      date: "Hace 5 días",
      read: true,
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    },
  ]

  // Filter notifications based on active tab
  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === "all") return true
    if (activeTab === "unread") return !notification.read
    if (activeTab === "offers") return notification.type.includes("offer")
    if (activeTab === "messages") return notification.type === "new_message"
    if (activeTab === "activity")
      return ["new_review", "new_request", "delivery_confirmation"].includes(notification.type)
    return true
  })

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center gap-2 p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold flex-1">Notificaciones</h1>
      </header>

      {/* Main content */}
      <main className="flex-1 container max-w-2xl py-4 px-0">
        <Tabs defaultValue="all" className="w-full">
          <div className="px-4">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="all" onClick={() => setActiveTab("all")} className="text-xs md:text-sm">
                Todas
              </TabsTrigger>
              <TabsTrigger value="unread" onClick={() => setActiveTab("unread")} className="text-xs md:text-sm">
                No leídas
              </TabsTrigger>
              <TabsTrigger value="offers" onClick={() => setActiveTab("offers")} className="text-xs md:text-sm">
                Ofertas
              </TabsTrigger>
              <TabsTrigger value="messages" onClick={() => setActiveTab("messages")} className="text-xs md:text-sm">
                Mensajes
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            {filteredNotifications.length > 0 ? (
              <div className="divide-y">
                {filteredNotifications.map((notification) => (
                  <Link
                    key={notification.id}
                    href={`/dashboard/solicitudes/${notification.solicitudId}/proveedor`}
                    className={cn(
                      "flex items-start gap-3 p-4 hover:bg-muted/50 transition-colors",
                      !notification.read && "bg-muted/20",
                    )}
                  >
                    <div className="flex-shrink-0 mt-1">{notification.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className={cn("text-sm font-medium", !notification.read && "font-semibold")}>
                          {notification.title}
                        </h3>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{notification.message}</p>
                      <div className="flex items-center mt-2">
                        <Avatar className="h-5 w-5 mr-1">
                          <AvatarFallback className="text-xs">{notification.empresa.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs">{notification.empresa}</span>
                        {!notification.read && (
                          <span className="ml-auto">
                            <Badge variant="secondary" className="h-2 w-2 rounded-full p-0" />
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No hay notificaciones</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="unread" className="mt-0">
            {/* This content will be dynamically populated based on the filtered notifications */}
            {filteredNotifications.length > 0 ? (
              <div className="divide-y">
                {filteredNotifications.map((notification) => (
                  <Link
                    key={notification.id}
                    href={`/dashboard/solicitudes/${notification.solicitudId}/proveedor`}
                    className="flex items-start gap-3 p-4 hover:bg-muted/50 transition-colors bg-muted/20"
                  >
                    <div className="flex-shrink-0 mt-1">{notification.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-sm font-semibold">{notification.title}</h3>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{notification.message}</p>
                      <div className="flex items-center mt-2">
                        <Avatar className="h-5 w-5 mr-1">
                          <AvatarFallback className="text-xs">{notification.empresa.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs">{notification.empresa}</span>
                        <span className="ml-auto">
                          <Badge variant="secondary" className="h-2 w-2 rounded-full p-0" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No hay notificaciones sin leer</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="offers" className="mt-0">
            {/* Offers notifications */}
            {filteredNotifications.length > 0 ? (
              <div className="divide-y">
                {filteredNotifications.map((notification) => (
                  <Link
                    key={notification.id}
                    href={`/dashboard/solicitudes/${notification.solicitudId}/proveedor`}
                    className={cn(
                      "flex items-start gap-3 p-4 hover:bg-muted/50 transition-colors",
                      !notification.read && "bg-muted/20",
                    )}
                  >
                    <div className="flex-shrink-0 mt-1">{notification.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className={cn("text-sm font-medium", !notification.read && "font-semibold")}>
                          {notification.title}
                        </h3>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{notification.message}</p>
                      <div className="flex items-center mt-2">
                        <Avatar className="h-5 w-5 mr-1">
                          <AvatarFallback className="text-xs">{notification.empresa.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs">{notification.empresa}</span>
                        {!notification.read && (
                          <span className="ml-auto">
                            <Badge variant="secondary" className="h-2 w-2 rounded-full p-0" />
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No hay notificaciones de ofertas</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="messages" className="mt-0">
            {/* Messages notifications */}
            {filteredNotifications.length > 0 ? (
              <div className="divide-y">
                {filteredNotifications.map((notification) => (
                  <Link
                    key={notification.id}
                    href={`/dashboard/solicitudes/${notification.solicitudId}/proveedor`}
                    className={cn(
                      "flex items-start gap-3 p-4 hover:bg-muted/50 transition-colors",
                      !notification.read && "bg-muted/20",
                    )}
                  >
                    <div className="flex-shrink-0 mt-1">{notification.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className={cn("text-sm font-medium", !notification.read && "font-semibold")}>
                          {notification.title}
                        </h3>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{notification.message}</p>
                      <div className="flex items-center mt-2">
                        <Avatar className="h-5 w-5 mr-1">
                          <AvatarFallback className="text-xs">{notification.empresa.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs">{notification.empresa}</span>
                        {!notification.read && (
                          <span className="ml-auto">
                            <Badge variant="secondary" className="h-2 w-2 rounded-full p-0" />
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No hay notificaciones de mensajes</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
