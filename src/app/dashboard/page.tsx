import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, FileText, ShoppingCart, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import DashboardLayout from "@/components/layout/dashboard-layout"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Bienvenido de nuevo, Empresa ABC</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/dashboard/solicitudes/nueva">
              <Button>Nueva solicitud</Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Solicitudes activas</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Ofertas recibidas</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+8 desde el mes pasado</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Proveedores activos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">+1 desde el mes pasado</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Ahorro estimado</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4,200</div>
              <p className="text-xs text-muted-foreground">+15% desde el mes pasado</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="solicitudes" className="space-y-4">
          <TabsList>
            <TabsTrigger value="solicitudes">Solicitudes recientes</TabsTrigger>
            <TabsTrigger value="ofertas">Ofertas recientes</TabsTrigger>
          </TabsList>
          <TabsContent value="solicitudes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Solicitudes recientes</CardTitle>
                <CardDescription>Ha creado 6 solicitudes en los últimos 30 días</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4">
                    {[
                      {
                        id: "SOL-1234",
                        title: "Materiales de oficina",
                        date: "Hace 2 días",
                        status: "Activa",
                        offers: 3,
                      },
                      {
                        id: "SOL-1233",
                        title: "Equipos informáticos",
                        date: "Hace 5 días",
                        status: "Activa",
                        offers: 2,
                      },
                      {
                        id: "SOL-1232",
                        title: "Servicios de limpieza",
                        date: "Hace 1 semana",
                        status: "Cerrada",
                        offers: 4,
                      },
                      {
                        id: "SOL-1231",
                        title: "Insumos de cafetería",
                        date: "Hace 2 semanas",
                        status: "Completada",
                        offers: 5,
                      },
                    ].map((solicitud) => (
                      <div
                        key={solicitud.id}
                        className="flex items-center justify-between space-x-4 rounded-lg border p-4"
                      >
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">{solicitud.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {solicitud.id} • {solicitud.date}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              solicitud.status === "Activa"
                                ? "default"
                                : solicitud.status === "Cerrada"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {solicitud.status}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <ShoppingCart className="h-4 w-4" />
                            {solicitud.offers}
                          </div>
                          <Button variant="ghost" size="icon">
                            <ArrowUpRight className="h-4 w-4" />
                            <span className="sr-only">Ver detalles</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Link href="/dashboard/solicitudes">
                      <Button variant="outline">Ver todas las solicitudes</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="ofertas" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Ofertas recientes</CardTitle>
                <CardDescription>Ha recibido 24 ofertas en los últimos 30 días</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4">
                    {[
                      {
                        id: "OF-2345",
                        solicitud: "Materiales de oficina",
                        proveedor: "Proveedor XYZ",
                        date: "Hace 1 día",
                        monto: "$1,200",
                        status: "Pendiente",
                      },
                      {
                        id: "OF-2344",
                        solicitud: "Equipos informáticos",
                        proveedor: "Tech Solutions",
                        date: "Hace 3 días",
                        monto: "$5,600",
                        status: "Pendiente",
                      },
                      {
                        id: "OF-2343",
                        solicitud: "Servicios de limpieza",
                        proveedor: "Clean Pro",
                        date: "Hace 6 días",
                        monto: "$800",
                        status: "Aceptada",
                      },
                      {
                        id: "OF-2342",
                        solicitud: "Insumos de cafetería",
                        proveedor: "Coffee Supplies",
                        date: "Hace 1 semana",
                        monto: "$350",
                        status: "Rechazada",
                      },
                    ].map((oferta) => (
                      <div
                        key={oferta.id}
                        className="flex items-center justify-between space-x-4 rounded-lg border p-4"
                      >
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">{oferta.solicitud}</p>
                          <p className="text-sm text-muted-foreground">
                            {oferta.proveedor} • {oferta.date}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm font-medium">{oferta.monto}</div>
                          <Badge
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
                          <Button variant="ghost" size="icon">
                            <ArrowUpRight className="h-4 w-4" />
                            <span className="sr-only">Ver detalles</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Link href="/dashboard/ofertas">
                      <Button variant="outline">Ver todas las ofertas</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
