"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Search,
  Edit,
  MoreHorizontal,
  Send,
  ImageIcon,
  Paperclip,
  Smile,
  Phone,
  Video,
  Info,
  Check,
  CheckCheck,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function CompanyMessagesPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeConversationId = searchParams.get("id")
  const [searchQuery, setSearchQuery] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const messageEndRef = useRef<HTMLDivElement>(null)

  // Mock conversations data
  const conversations = [
    {
      id: "conv-1",
      name: "Proveedor XYZ",
      avatar: null,
      lastMessage: "Ofrecemos todos los materiales solicitados con entrega en 3 días hábiles.",
      timestamp: "10:30 AM",
      unread: true,
      isOnline: true,
      type: "proveedor",
      solicitudId: "SOL-1234",
    },
    {
      id: "conv-2",
      name: "Office Supplies Co.",
      avatar: null,
      lastMessage: "Materiales de la más alta calidad con entrega inmediata.",
      timestamp: "Ayer",
      unread: false,
      isOnline: false,
      type: "proveedor",
      solicitudId: "SOL-1233",
    },
    {
      id: "conv-3",
      name: "Todo Oficina",
      avatar: null,
      lastMessage: "Oferta económica que incluye todos los materiales solicitados.",
      timestamp: "Lun",
      unread: false,
      isOnline: true,
      type: "proveedor",
      solicitudId: "SOL-1232",
    },
    {
      id: "conv-4",
      name: "Tech Solutions",
      avatar: null,
      lastMessage: "Podemos ofrecer un descuento adicional del 5% si el pedido se confirma esta semana.",
      timestamp: "23/05",
      unread: false,
      isOnline: false,
      type: "proveedor",
      solicitudId: "SOL-1231",
    },
    {
      id: "conv-5",
      name: "Clean Pro",
      avatar: null,
      lastMessage: "Nuestro servicio incluye mantenimiento mensual sin costo adicional.",
      timestamp: "20/05",
      unread: false,
      isOnline: false,
      type: "proveedor",
      solicitudId: "SOL-1230",
    },
  ]

  // Filter conversations based on search query
  const filteredConversations = conversations.filter(
    (conv) =>
      searchQuery === "" ||
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Find active conversation
  const activeConversation = conversations.find((conv) => conv.id === activeConversationId) || conversations[0]

  // Mock messages for the active conversation
  const messages = [
    {
      id: 1,
      senderId: "empresa",
      senderName: "Empresa ABC",
      content: "Hola, estamos interesados en recibir ofertas para nuestra solicitud de materiales de oficina.",
      timestamp: "10:15 AM",
      status: "read",
    },
    {
      id: 2,
      senderId: "proveedor",
      senderName: activeConversation.name,
      content: "Gracias por su interés. Estamos encantados de poder ofrecerles nuestros productos de alta calidad.",
      timestamp: "10:18 AM",
      status: "read",
    },
    {
      id: 3,
      senderId: "empresa",
      senderName: "Empresa ABC",
      content: "¿Podría proporcionarnos más detalles sobre los plazos de entrega y las condiciones de pago?",
      timestamp: "10:20 AM",
      status: "read",
    },
    {
      id: 4,
      senderId: "proveedor",
      senderName: activeConversation.name,
      content:
        "Por supuesto. Nuestro plazo de entrega estándar es de 3-5 días hábiles después de la confirmación del pedido. Aceptamos transferencia bancaria, tarjeta de crédito y pago contra entrega.",
      timestamp: "10:25 AM",
      status: "read",
    },
    {
      id: 5,
      senderId: "empresa",
      senderName: "Empresa ABC",
      content: "Excelente. ¿Ofrecen algún descuento por volumen?",
      timestamp: "10:28 AM",
      status: "read",
    },
    {
      id: 6,
      senderId: "proveedor",
      senderName: activeConversation.name,
      content:
        "Sí, ofrecemos un 10% de descuento para pedidos superiores a $1,000 y un 15% para pedidos superiores a $2,500.",
      timestamp: "10:29 AM",
      status: "read",
    },
    {
      id: 7,
      senderId: "proveedor",
      senderName: activeConversation.name,
      content: "Ofrecemos todos los materiales solicitados con entrega en 3 días hábiles.",
      timestamp: "10:30 AM",
      status: "delivered",
    },
  ]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsSubmitting(true)

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false)
      setMessage("")
      // In a real app, you would add the message to the messages array
    }, 500)
  }

  // Scroll to bottom of messages when new message is added
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // If no conversation is selected, select the first one
  useEffect(() => {
    if (!activeConversationId && conversations.length > 0) {
      router.push(`/dashboard/messages?id=${conversations[0].id}`)
    }
  }, [activeConversationId, conversations, router])

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center gap-2 p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold flex-1">Mensajes</h1>
        <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard/messages/new")}>
          <Edit className="h-5 w-5" />
        </Button>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Conversations list (left sidebar) */}
        <div className="w-full md:w-80 border-r flex flex-col h-full">
          <div className="p-3">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar mensajes..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredConversations.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                <p className="text-muted-foreground">No se encontraron conversaciones</p>
              </div>
            ) : (
              <div className="divide-y">
                {filteredConversations.map((conversation) => (
                  <Link
                    key={conversation.id}
                    href={`/dashboard/messages?id=${conversation.id}`}
                    className={cn(
                      "flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors",
                      activeConversationId === conversation.id && "bg-muted",
                      conversation.unread && "bg-muted/20",
                    )}
                  >
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        {conversation.avatar ? (
                          <AvatarImage src={conversation.avatar} alt={conversation.name} />
                        ) : (
                          <AvatarFallback className="bg-secondary text-secondary-foreground">
                            {conversation.name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      {conversation.isOnline && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h3 className={cn("text-sm truncate", conversation.unread ? "font-semibold" : "font-medium")}>
                          {conversation.name}
                        </h3>
                        <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                      </div>
                      <p
                        className={cn(
                          "text-xs truncate",
                          conversation.unread ? "text-foreground" : "text-muted-foreground",
                        )}
                      >
                        {conversation.lastMessage}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <Badge variant="outline" className="text-[10px] h-4 px-1">
                          {conversation.solicitudId}
                        </Badge>
                        <Badge variant="secondary" className="text-[10px] h-4 px-1">
                          {conversation.type === "empresa" ? "Empresa" : "Proveedor"}
                        </Badge>
                      </div>
                    </div>
                    {conversation.unread && <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Chat area (right side) */}
        <div className="hidden md:flex flex-col flex-1 h-full">
          {activeConversation ? (
            <>
              {/* Chat header */}
              <div className="flex items-center justify-between p-3 border-b">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    {activeConversation.avatar ? (
                      <AvatarImage src={activeConversation.avatar} alt={activeConversation.name} />
                    ) : (
                      <AvatarFallback className="bg-secondary text-secondary-foreground">
                        {activeConversation.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{activeConversation.name}</h3>
                      {activeConversation.isOnline && (
                        <Badge variant="secondary" className="text-[10px] h-5">
                          En línea
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">Solicitud: {activeConversation.solicitudId}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon">
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Info className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn("flex", msg.senderId === "empresa" ? "justify-end" : "justify-start")}
                  >
                    {msg.senderId !== "empresa" && (
                      <Avatar className="h-8 w-8 mr-2 mt-1 flex-shrink-0">
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          {msg.senderName.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        "max-w-[70%] rounded-lg p-3",
                        msg.senderId === "empresa" ? "bg-primary text-primary-foreground" : "bg-muted",
                      )}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <div
                        className={cn(
                          "flex items-center justify-end gap-1 mt-1",
                          msg.senderId === "empresa" ? "text-primary-foreground/70" : "text-muted-foreground",
                        )}
                      >
                        <span className="text-[10px]">{msg.timestamp}</span>
                        {msg.senderId === "empresa" && (
                          <span>
                            {msg.status === "sent" ? (
                              <Check className="h-3 w-3" />
                            ) : msg.status === "delivered" ? (
                              <CheckCheck className="h-3 w-3" />
                            ) : (
                              <CheckCheck className="h-3 w-3 text-blue-500" />
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messageEndRef} />
              </div>

              {/* Message input */}
              <div className="p-3 border-t">
                <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                  <Button type="button" variant="ghost" size="icon">
                    <Smile className="h-5 w-5" />
                  </Button>
                  <Button type="button" variant="ghost" size="icon">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Button type="button" variant="ghost" size="icon">
                    <ImageIcon className="h-5 w-5" />
                  </Button>
                  <Input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    className="flex-1"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button type="submit" size="icon" disabled={!message.trim() || isSubmitting}>
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-4 text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">Sus mensajes</h3>
              <p className="text-muted-foreground mb-4">
                Seleccione una conversación o inicie una nueva para comenzar a chatear
              </p>
              <Button onClick={() => router.push("/dashboard/messages/new")}>
                <Edit className="h-4 w-4 mr-2" />
                Nuevo mensaje
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
