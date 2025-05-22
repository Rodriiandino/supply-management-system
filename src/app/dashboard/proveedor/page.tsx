'use client'

import type React from 'react'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Search,
  Home,
  Heart,
  User,
  Plus,
  MessageSquare,
  MoreHorizontal,
  Bookmark,
  Send,
  Clock,
  MapPin,
  Package,
  Bell,
  CheckCircle,
  ArrowUpRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function ProveedorFeedPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('home')
  const [showOfferForm, setShowOfferForm] = useState<string | null>(null)
  const [offerText, setOfferText] = useState('')
  const [offerPrice, setOfferPrice] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)
  const [savedSolicitudes, setSavedSolicitudes] = useState<string[]>([])
  const [likedSolicitudes, setLikedSolicitudes] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmitOffer = (id: string) => {
    setIsLoading(true)

    // Simulación de envío
    setTimeout(() => {
      setIsLoading(false)
      setShowOfferForm(null)
      setOfferText('')
      setOfferPrice('')
    }, 1000)
  }

  const toggleSaved = (id: string) => {
    if (savedSolicitudes.includes(id)) {
      setSavedSolicitudes(savedSolicitudes.filter(item => item !== id))
    } else {
      setSavedSolicitudes([...savedSolicitudes, id])
    }
  }

  const toggleLiked = (id: string) => {
    if (likedSolicitudes.includes(id)) {
      setLikedSolicitudes(likedSolicitudes.filter(item => item !== id))
    } else {
      setLikedSolicitudes([...likedSolicitudes, id])
    }
  }

  // Categorías disponibles
  const categories = [
    'Todas',
    'Materiales',
    'Tecnología',
    'Servicios',
    'Mobiliario',
    'Limpieza',
    'Catering'
  ]

  // Datos de solicitudes
  const solicitudes = [
    {
      id: 'SOL-1234',
      empresa: 'Empresa ABC',
      empresaId: 'empresa-abc',
      empresaLogo: null,
      title: 'Materiales de oficina',
      description:
        'Necesitamos diversos materiales de oficina para abastecer nuestras nuevas instalaciones. Papel, bolígrafos, carpetas, clips, grapas y post-its.',
      date: 'Hace 2 días',
      cantidad: '100 unidades',
      plazoEntrega: '7 días',
      ubicacion: 'Ciudad Capital',
      comments: 3,
      likes: 12,
      category: 'Materiales',
      priority: 'Alta',
      presupuesto: '$1,000 - $1,500',
      fechaLimite: '30/06/2024',
      images: ['/placeholder.svg?height=400&width=400']
    },
    {
      id: 'SOL-1233',
      empresa: 'Empresa XYZ',
      empresaId: 'empresa-xyz',
      empresaLogo: null,
      title: 'Equipos informáticos',
      description:
        'Laptops, monitores y periféricos para el departamento de TI. Requerimos equipos de última generación con garantía mínima de 2 años.',
      date: 'Hace 5 días',
      cantidad: '20 unidades',
      plazoEntrega: '15 días',
      ubicacion: 'Zona Industrial',
      comments: 8,
      likes: 24,
      category: 'Tecnología',
      priority: 'Media',
      presupuesto: '$15,000 - $20,000',
      fechaLimite: '15/07/2024',
      images: ['/placeholder.svg?height=400&width=400']
    },
    {
      id: 'SOL-1230',
      empresa: 'Corporación 123',
      empresaId: 'corporacion-123',
      empresaLogo: null,
      title: 'Mobiliario de oficina',
      description:
        'Sillas ergonómicas y escritorios para la nueva área. Estilo moderno y materiales duraderos.',
      date: 'Hace 3 semanas',
      cantidad: '15 juegos',
      plazoEntrega: '30 días',
      ubicacion: 'Centro Empresarial',
      comments: 15,
      likes: 42,
      category: 'Mobiliario',
      priority: 'Baja',
      presupuesto: '$8,000 - $12,000',
      fechaLimite: '10/07/2024',
      images: ['/placeholder.svg?height=400&width=400']
    },
    {
      id: 'SOL-1229',
      empresa: 'Empresa DEF',
      empresaId: 'empresa-def',
      empresaLogo: null,
      title: 'Servicios de catering',
      description:
        'Servicio de catering para evento corporativo con 100 asistentes. Menú ejecutivo con opciones vegetarianas.',
      date: 'Hace 1 día',
      cantidad: '100 personas',
      plazoEntrega: '2 semanas',
      ubicacion: 'Hotel Central',
      comments: 4,
      likes: 18,
      category: 'Catering',
      priority: 'Media',
      presupuesto: '$3,500 - $5,000',
      fechaLimite: '05/07/2024',
      images: ['/placeholder.svg?height=400&width=400']
    },
    {
      id: 'SOL-1228',
      empresa: 'Global Corp',
      empresaId: 'global-corp',
      empresaLogo: null,
      title: 'Servicios de limpieza',
      description:
        'Servicios de limpieza profesional para oficinas corporativas de 1,000 m². Contrato anual.',
      date: 'Hace 3 días',
      cantidad: '12 meses',
      plazoEntrega: 'Inmediato',
      ubicacion: 'Distrito Financiero',
      comments: 6,
      likes: 15,
      category: 'Limpieza',
      priority: 'Alta',
      presupuesto: '$2,000 mensuales',
      fechaLimite: '01/07/2024',
      images: ['/placeholder.svg?height=400&width=400']
    },
    {
      id: 'SOL-1227',
      empresa: 'Tech Solutions',
      empresaId: 'tech-solutions',
      empresaLogo: null,
      title: 'Software especializado',
      description:
        'Licencias de software para gestión de proyectos y diseño gráfico. Incluye soporte técnico.',
      date: 'Hace 1 semana',
      cantidad: '50 licencias',
      plazoEntrega: '5 días',
      ubicacion: 'Parque Tecnológico',
      comments: 10,
      likes: 30,
      category: 'Tecnología',
      priority: 'Media',
      presupuesto: '$25,000 - $30,000',
      fechaLimite: '20/06/2024',
      images: ['/placeholder.svg?height=400&width=400']
    }
  ]

  // Filtrar solicitudes por categoría
  const filteredSolicitudes =
    categoryFilter && categoryFilter !== 'Todas'
      ? solicitudes.filter(s => s.category === categoryFilter)
      : solicitudes

  // Estadísticas para el dashboard
  const stats = {
    solicitudesActivas: solicitudes.length,
    ofertasEnviadas: 12,
    ofertasAceptadas: 5,
    solicitudesGuardadas: savedSolicitudes.length
  }

  // Efecto para inicializar estados
  useEffect(() => {
    // Simulación de datos guardados
    setSavedSolicitudes(['SOL-1233', 'SOL-1229'])
    setLikedSolicitudes(['SOL-1230'])
  }, [])

  return (
    <div className='flex flex-col min-h-screen bg-background'>
      {/* Header mejorado */}
      <header className='sticky top-0 z-50 flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <Link href='/dashboard/proveedor' className='flex items-center gap-2'>
          <Package className='h-6 w-6 text-secondary' />
          <h1 className='text-xl font-bold logo-text'>SupplyConnect</h1>
        </Link>
        <div className='hidden md:flex relative max-w-sm mx-auto'>
          <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
          <Input
            type='search'
            placeholder='Buscar solicitudes...'
            className='pl-8 w-[300px] bg-muted'
            onFocus={() => router.push('/dashboard/proveedor/search')}
          />
        </div>
        <div className='flex items-center gap-4'>
          <Link href='/dashboard/proveedor/notifications'>
            <Button variant='ghost' size='icon' className='relative'>
              <Bell className='h-5 w-5' />
              <span className='absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground'>
                3
              </span>
            </Button>
          </Link>
          <Link href='/dashboard/proveedor/messages'>
            <Button variant='ghost' size='icon' className='relative'>
              <MessageSquare className='h-5 w-5' />
              <span className='absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground'>
                2
              </span>
            </Button>
          </Link>
          <Link href='/dashboard/proveedor/profile'>
            <Button variant='ghost' size='icon'>
              <User className='h-5 w-5' />
            </Button>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className='flex-1 container max-w-5xl py-6 px-4'>
        {/* Dashboard Stats */}
        <div className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Dashboard del Proveedor</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <Card className='bg-background hover:shadow-md transition-shadow'>
              <CardContent className='p-4 flex flex-col items-center justify-center text-center'>
                <div className='rounded-full bg-primary/10 p-3 mb-2'>
                  <FileIcon className='h-6 w-6 text-primary' />
                </div>
                <div className='text-2xl font-bold'>
                  {stats.solicitudesActivas}
                </div>
                <p className='text-sm text-muted-foreground'>
                  Solicitudes activas
                </p>
              </CardContent>
            </Card>

            <Card className='bg-background hover:shadow-md transition-shadow'>
              <CardContent className='p-4 flex flex-col items-center justify-center text-center'>
                <div className='rounded-full bg-secondary/20 p-3 mb-2'>
                  <Send className='h-6 w-6 text-secondary-dark' />
                </div>
                <div className='text-2xl font-bold'>
                  {stats.ofertasEnviadas}
                </div>
                <p className='text-sm text-muted-foreground'>
                  Ofertas enviadas
                </p>
              </CardContent>
            </Card>

            <Card className='bg-background hover:shadow-md transition-shadow'>
              <CardContent className='p-4 flex flex-col items-center justify-center text-center'>
                <div className='rounded-full bg-green-100 p-3 mb-2'>
                  <CheckCircle className='h-6 w-6 text-green-600' />
                </div>
                <div className='text-2xl font-bold'>
                  {stats.ofertasAceptadas}
                </div>
                <p className='text-sm text-muted-foreground'>
                  Ofertas aceptadas
                </p>
              </CardContent>
            </Card>

            <Card className='bg-background hover:shadow-md transition-shadow'>
              <CardContent className='p-4 flex flex-col items-center justify-center text-center'>
                <div className='rounded-full bg-blue-100 p-3 mb-2'>
                  <Bookmark className='h-6 w-6 text-blue-600' />
                </div>
                <div className='text-2xl font-bold'>
                  {stats.solicitudesGuardadas}
                </div>
                <p className='text-sm text-muted-foreground'>
                  Solicitudes guardadas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Category filter */}
        <div className='mb-6 overflow-x-auto'>
          <div className='flex space-x-2 pb-2'>
            {categories.map(category => (
              <Button
                key={category}
                variant={
                  categoryFilter === category ||
                  (category === 'Todas' && !categoryFilter)
                    ? 'default'
                    : 'outline'
                }
                size='sm'
                onClick={() =>
                  setCategoryFilter(category === 'Todas' ? null : category)
                }
                className='rounded-full'
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Feed */}
        <div className='space-y-6 mb-16'>
          {filteredSolicitudes.map(solicitud => (
            <Card
              key={solicitud.id}
              className='overflow-hidden hover:shadow-md transition-shadow'
            >
              {/* Card header - like Instagram post header */}
              <CardHeader className='p-4 flex flex-row items-center justify-between space-y-0'>
                <div className='flex items-center gap-2'>
                  <Avatar className='h-10 w-10 border-2 border-secondary/20'>
                    <AvatarFallback className='bg-secondary/10 text-primary font-semibold'>
                      {solicitud.empresa.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Link
                      href={`/dashboard/proveedor/empresas/${solicitud.empresaId}`}
                      className='text-base font-medium hover:underline'
                    >
                      {solicitud.empresa}
                    </Link>
                    <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                      <div className='flex items-center'>
                        <MapPin className='h-3 w-3 mr-1' />
                        {solicitud.ubicacion}
                      </div>
                      <div className='flex items-center'>
                        <Clock className='h-3 w-3 mr-1' />
                        {solicitud.date}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <Badge
                    variant={
                      solicitud.priority === 'Alta'
                        ? 'destructive'
                        : solicitud.priority === 'Media'
                        ? 'default'
                        : 'secondary'
                    }
                  >
                    {solicitud.priority}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost' size='icon'>
                        <MoreHorizontal className='h-5 w-5' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem
                        onClick={() =>
                          router.push(
                            `/dashboard/solicitudes/${solicitud.id}/proveedor`
                          )
                        }
                      >
                        Ver detalles
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => toggleSaved(solicitud.id)}
                      >
                        {savedSolicitudes.includes(solicitud.id)
                          ? 'Quitar de guardados'
                          : 'Guardar solicitud'}
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          router.push(
                            `/dashboard/proveedor/messages/new?company=${solicitud.empresaId}&solicitud=${solicitud.id}`
                          )
                        }
                      >
                        Enviar mensaje
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>

              {/* Content */}
              <div className='grid md:grid-cols-2 gap-0'>
                {/* Image */}
                <div className='aspect-square relative'>
                  <img
                    src={solicitud.images[0] || '/placeholder.svg'}
                    alt={solicitud.title}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute bottom-3 left-3'>
                    <Badge
                      variant='outline'
                      className='bg-background/80 backdrop-blur-sm'
                    >
                      {solicitud.category}
                    </Badge>
                  </div>
                </div>

                {/* Details */}
                <div className='p-4 flex flex-col'>
                  <div className='mb-2'>
                    <h3 className='text-xl font-bold mb-1'>
                      {solicitud.title}
                    </h3>
                    <p className='text-sm text-muted-foreground line-clamp-3'>
                      {solicitud.description}
                    </p>
                  </div>

                  <div className='grid grid-cols-2 gap-3 my-3'>
                    <div className='flex flex-col'>
                      <span className='text-xs text-muted-foreground'>
                        Cantidad
                      </span>
                      <span className='text-sm font-medium'>
                        {solicitud.cantidad}
                      </span>
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-xs text-muted-foreground'>
                        Plazo de entrega
                      </span>
                      <span className='text-sm font-medium'>
                        {solicitud.plazoEntrega}
                      </span>
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-xs text-muted-foreground'>
                        Presupuesto
                      </span>
                      <span className='text-sm font-medium'>
                        {solicitud.presupuesto}
                      </span>
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-xs text-muted-foreground'>
                        Fecha límite
                      </span>
                      <span className='text-sm font-medium'>
                        {solicitud.fechaLimite}
                      </span>
                    </div>
                  </div>

                  <div className='mt-auto space-y-3'>
                    <Separator />

                    {/* Action buttons */}
                    <div className='flex justify-between items-center'>
                      <div className='flex space-x-2'>
                        <Button
                          variant='ghost'
                          size='sm'
                          className={cn(
                            likedSolicitudes.includes(solicitud.id) &&
                              'text-red-500'
                          )}
                          onClick={() => toggleLiked(solicitud.id)}
                        >
                          <Heart
                            className={cn(
                              'h-5 w-5 mr-1',
                              likedSolicitudes.includes(solicitud.id) &&
                                'fill-red-500'
                            )}
                          />
                          <span>
                            {solicitud.likes +
                              (likedSolicitudes.includes(solicitud.id) ? 1 : 0)}
                          </span>
                        </Button>
                        <Button
                          variant='ghost'
                          size='sm'
                          onClick={() =>
                            router.push(
                              `/dashboard/solicitudes/${solicitud.id}/proveedor`
                            )
                          }
                        >
                          <MessageSquare className='h-5 w-5 mr-1' />
                          <span>{solicitud.comments}</span>
                        </Button>
                        <Button
                          variant='ghost'
                          size='sm'
                          onClick={() => toggleSaved(solicitud.id)}
                        >
                          <Bookmark
                            className={cn(
                              'h-5 w-5',
                              savedSolicitudes.includes(solicitud.id) &&
                                'fill-primary text-primary'
                            )}
                          />
                        </Button>
                      </div>

                      <Button
                        size='sm'
                        onClick={() =>
                          router.push(
                            `/dashboard/solicitudes/${solicitud.id}/proveedor`
                          )
                        }
                      >
                        Ver detalles
                        <ArrowUpRight className='ml-1 h-4 w-4' />
                      </Button>
                    </div>

                    {/* Offer form toggle */}
                    {showOfferForm === solicitud.id ? (
                      <div className='space-y-2 pt-2'>
                        <div className='flex gap-2'>
                          <Input
                            type='number'
                            placeholder='Precio (USD)'
                            value={offerPrice}
                            onChange={e => setOfferPrice(e.target.value)}
                            className='flex-1'
                          />
                          <Button
                            onClick={() => handleSubmitOffer(solicitud.id)}
                            size='sm'
                            disabled={
                              !offerPrice.trim() ||
                              !offerText.trim() ||
                              isLoading
                            }
                          >
                            {isLoading ? 'Enviando...' : 'Enviar oferta'}
                          </Button>
                        </div>
                        <Textarea
                          placeholder='Detalles de su oferta...'
                          value={offerText}
                          onChange={e => setOfferText(e.target.value)}
                          className='text-sm'
                          rows={2}
                        />
                      </div>
                    ) : (
                      <Button
                        variant='outline'
                        size='sm'
                        className='w-full mt-2'
                        onClick={() => setShowOfferForm(solicitud.id)}
                      >
                        <Send className='h-4 w-4 mr-2' />
                        Realizar oferta
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Bottom navigation bar (mobile-first like Instagram) */}
      <div className='fixed bottom-0 left-0 right-0 z-50 bg-background border-t flex items-center justify-around p-3 md:hidden'>
        <Button
          variant='ghost'
          size='icon'
          className={cn(activeTab === 'home' && 'text-primary')}
          onClick={() => setActiveTab('home')}
        >
          <Home className='h-6 w-6' />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className={cn(activeTab === 'search' && 'text-primary')}
          onClick={() => router.push('/dashboard/proveedor/search')}
        >
          <Search className='h-6 w-6' />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className={cn(activeTab === 'new' && 'text-primary')}
          onClick={() => console.log('Nueva acción')}
        >
          <Plus className='h-6 w-6' />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className={cn(activeTab === 'notifications' && 'text-primary')}
          onClick={() => router.push('/dashboard/proveedor/notifications')}
        >
          <Heart className='h-6 w-6' />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className={cn(activeTab === 'profile' && 'text-primary')}
          onClick={() => router.push('/dashboard/proveedor/profile')}
        >
          <User className='h-6 w-6' />
        </Button>
      </div>
    </div>
  )
}

// Componente de icono de archivo para las estadísticas
function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' />
      <polyline points='14 2 14 8 20 8' />
    </svg>
  )
}
