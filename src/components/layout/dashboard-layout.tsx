"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Package,
  Home,
  FileText,
  ShoppingCart,
  Users,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  MessageSquare,
  BarChart3,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
  userType?: "empresa" | "proveedor"
}

export default function DashboardLayout({ children, userType = "empresa" }: DashboardLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const isEmpresa = userType === "empresa"

  const routes = [
    {
      label: "Inicio",
      icon: Home,
      href: isEmpresa ? "/dashboard" : "/dashboard/proveedor",
      active: pathname === (isEmpresa ? "/dashboard" : "/dashboard/proveedor"),
    },
    {
      label: isEmpresa ? "Solicitudes" : "Solicitudes disponibles",
      icon: FileText,
      href: "/dashboard/solicitudes",
      active: pathname === "/dashboard/solicitudes",
    },
    {
      label: isEmpresa ? "Proveedores" : "Mis ofertas",
      icon: ShoppingCart,
      href: "/dashboard/ofertas",
      active: pathname === "/dashboard/ofertas",
    },
    {
      label: "Mensajes",
      icon: MessageSquare,
      href: isEmpresa ? "/dashboard/messages" : "/dashboard/proveedor/messages",
      active: pathname === (isEmpresa ? "/dashboard/messages" : "/dashboard/proveedor/messages"),
    },
    {
      label: "Estadísticas",
      icon: BarChart3,
      href: "/dashboard/estadisticas",
      active: pathname === "/dashboard/estadisticas",
    },
    {
      label: isEmpresa ? "Usuarios" : "Perfil",
      icon: Users,
      href: isEmpresa ? "/dashboard/usuarios" : "/dashboard/proveedor/profile",
      active: pathname === (isEmpresa ? "/dashboard/usuarios" : "/dashboard/proveedor/profile"),
    },
    {
      label: "Configuración",
      icon: Settings,
      href: isEmpresa ? "/dashboard/configuracion" : "/dashboard/proveedor/settings",
      active: pathname === (isEmpresa ? "/dashboard/configuracion" : "/dashboard/proveedor/settings"),
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <div className="flex items-center border-b pb-4">
              <Link
                href={isEmpresa ? "/dashboard" : "/dashboard/proveedor"}
                className="flex items-center gap-2 font-semibold"
                onClick={() => setIsMobileNavOpen(false)}
              >
                <Package className="h-6 w-6 text-secondary" />
                <span className="text-lg font-bold logo-text">SupplyConnect</span>
              </Link>
              <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsMobileNavOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <nav className="grid gap-2 py-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md",
                    route.active ? "bg-secondary text-secondary-foreground" : "hover:bg-muted",
                  )}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <route.icon className="h-5 w-5" />
                  {route.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto border-t pt-4">
              <Link
                href="/login"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-muted"
                onClick={() => setIsMobileNavOpen(false)}
              >
                <LogOut className="h-5 w-5" />
                Cerrar sesión
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href={isEmpresa ? "/dashboard" : "/dashboard/proveedor"}
          className="flex items-center gap-2 font-semibold"
        >
          <Package className="h-6 w-6 text-secondary hidden md:block" />
          <span className="text-lg font-bold logo-text hidden md:block">SupplyConnect</span>
        </Link>
        <div className="flex-1 md:grow-0 md:w-[300px]">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar..." className="w-full bg-background pl-8 md:w-[300px]" />
            </div>
          </form>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Link href={isEmpresa ? "/dashboard/messages" : "/dashboard/proveedor/messages"}>
            <Button variant="outline" size="icon" className="relative">
              <MessageSquare className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                2
              </span>
            </Button>
          </Link>
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              3
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" alt="Avatar" />
                  <AvatarFallback className="bg-secondary text-secondary-foreground">
                    {isEmpresa ? "EA" : "PS"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={isEmpresa ? "/dashboard/perfil" : "/dashboard/proveedor/profile"}>Perfil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={isEmpresa ? "/dashboard/configuracion" : "/dashboard/proveedor/settings"}>
                  Configuración
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/login">Cerrar sesión</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 md:block">
          <nav className="grid gap-2 p-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md",
                  route.active ? "bg-secondary text-secondary-foreground" : "hover:bg-muted",
                )}
              >
                <route.icon className="h-5 w-5" />
                {route.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
