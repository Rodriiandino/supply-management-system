import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Filter, Plus, Search, ShoppingCart } from "lucide-react"
import Link from "next/link"
import DashboardLayout from "@/components/layout/dashboard-layout"

export default function SolicitudesPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Solicitudes</h1>
            <p className="text-muted-foreground">Gestione sus solicitudes de insumos</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/dashboard/solicitudes/nueva">
              <Button className="flex items-center gap-1">
                <Plus className="h-4 w-4" />
                Nueva solicitud
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex-1 md:max-w-sm">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar solicitudes..." className="w-full pl-8" />
            </div>
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            Filtrar
          </Button>
        </div>

        <Tabs defaultValue="activas" className="space-y-4">
          <TabsList>
            <TabsTrigger value="activas">Activas</TabsTrigger>
            <TabsTrigger value="pendientes">Pendientes</TabsTrigger>
            <TabsTrigger value="completadas">Completadas</TabsTrigger>
            <TabsTrigger value="todas">Todas</TabsTrigger>
          </TabsList>
          <TabsContent value="activas" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Solicitudes activas</CardTitle>
                <CardDescription>Solicitudes publicadas que están recibiendo ofertas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4">
                    {[
                      {
                        id: "SOL-1234",
                        title: "Materiales de oficina",
                        description: "Papel, bolígrafos, carpetas y otros insumos de oficina",
                        date: "Hace 2 días",
                        status: "Activa",
                        offers: 3,
                        priority: "Alta",
                      },
                      {
                        id: "SOL-1233",
                        title: "Equipos informáticos",
                        description: "Laptops, monitores y periféricos para el departamento de TI",
                        date: "Hace 5 días",
                        status: "Activa",
                        offers: 2,
                        priority: "Media",
                      },
                      {
                        id: "SOL-1230",
                        title: "Mobiliario de oficina",
                        description: "Sillas ergonómicas y escritorios para la nueva área",
                        date: "Hace 3 semanas",
                        status: "Activa",
                        offers: 6,
                        priority: "Baja",
                      },
                    ].map((solicitud) => (
                      <div key={solicitud.id} className="flex flex-col space-y-2  rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{solicitud.title}</h3>
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
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{solicitud.status}</Badge>
                            <Link href={`/dashboard/solicitudes/${solicitud.id}`}>
                              <Button variant="ghost" size="icon">
                                <ArrowUpRight className="h-4 w-4" />
                                <span className="sr-only">Ver detalles</span>
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{solicitud.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="text-muted-foreground">
                            {solicitud.id} • {solicitud.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                            <span>{solicitud.offers} ofertas</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pendientes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Solicitudes pendientes</CardTitle>
                <CardDescription>Solicitudes en proceso de aprobación</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4">
                    {[
                      {
                        id: "SOL-1229",
                        title: "Servicios de catering",
                        description: "Servicio de catering para evento corporativo",
                        date: "Hace 1 día",
                        status: "Pendiente",
                        priority: "Media",
                      },
                      {
                        id: "SOL-1228",
                        title: "Material promocional",
                        description: "Folletos, tarjetas y material promocional para feria",
                        date: "Hace 3 días",
                        status: "Pendiente",
                        priority: "Baja",
                      },
                    ].map((solicitud) => (
                      <div key={solicitud.id} className="flex flex-col space-y-2 rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{solicitud.title}</h3>
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
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{solicitud.status}</Badge>
                            <Link href={`/dashboard/solicitudes/${solicitud.id}`}>
                              <Button variant="ghost" size="icon">
                                <ArrowUpRight className="h-4 w-4" />
                                <span className="sr-only">Ver detalles</span>
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{solicitud.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="text-muted-foreground">
                            {solicitud.id} • {solicitud.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="completadas" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Solicitudes completadas</CardTitle>
                <CardDescription>Solicitudes finalizadas con entrega de insumos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4">
                    {[
                      {
                        id: "SOL-1227",
                        title: "Insumos de cafetería",
                        description: "Café, té, azúcar y otros insumos para la cafetería",
                        date: "Hace 2 semanas",
                        status: "Completada",
                        proveedor: "Coffee Supplies",
                      },
                      {
                        id: "SOL-1226",
                        title: "Artículos de limpieza",
                        description: "Productos de limpieza para las oficinas",
                        date: "Hace 3 semanas",
                        status: "Completada",
                        proveedor: "Clean Pro",
                      },
                    ].map((solicitud) => (
                      <div key={solicitud.id} className="flex flex-col space-y-2 rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{solicitud.title}</h3>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{solicitud.status}</Badge>
                            <Link href={`/dashboard/solicitudes/${solicitud.id}`}>
                              <Button variant="ghost" size="icon">
                                <ArrowUpRight className="h-4 w-4" />
                                <span className="sr-only">Ver detalles</span>
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{solicitud.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="text-muted-foreground">
                            {solicitud.id} • {solicitud.date}
                          </div>
                          <div className="text-muted-foreground">Proveedor: {solicitud.proveedor}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="todas" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Todas las solicitudes</CardTitle>
                <CardDescription>Listado completo de solicitudes</CardDescription>
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
                        id: "SOL-1229",
                        title: "Servicios de catering",
                        date: "Hace 1 día",
                        status: "Pendiente",
                      },
                      {
                        id: "SOL-1227",
                        title: "Insumos de cafetería",
                        date: "Hace 2 semanas",
                        status: "Completada",
                        proveedor: "Coffee Supplies",
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
                                : solicitud.status === "Pendiente"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {solicitud.status}
                          </Badge>
                          {solicitud.offers && (
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <ShoppingCart className="h-4 w-4" />
                              {solicitud.offers}
                            </div>
                          )}
                          <Link href={`/dashboard/solicitudes/${solicitud.id}`}>
                            <Button variant="ghost" size="icon">
                              <ArrowUpRight className="h-4 w-4" />
                              <span className="sr-only">Ver detalles</span>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
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
