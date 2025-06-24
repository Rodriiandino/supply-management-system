/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Globe,
  Mail,
  Phone,
  MessageSquare,
  Building,
  FileText,
  CheckCircle,
  Clock,
  Grid,
  List,
  Filter,
  Search
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

export default function CompanyProfile({ paramId }: { paramId: string }) {
  const router = useRouter()
  const [, setActiveTab] = useState('activas')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')

  // Mock company data
  const company = {
    id: paramId,
    name: paramId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    logo: null,
    coverImage: '/placeholder.svg?height=200&width=800',
    description:
      'Empresa líder en el sector tecnológico con más de 15 años de experiencia. Nos especializamos en soluciones innovadoras para empresas de todos los tamaños.',
    location: 'Ciudad Capital, Zona Empresarial',
    website: 'www.empresaabc.com',
    email: 'contacto@empresaabc.com',
    phone: '+1 234 567 890',
    foundedYear: '2008',
    employees: '50-100',
    industry: 'Tecnología',
    verified: true,
    joinDate: 'Marzo 2022',
    stats: {
      solicitudesActivas: 12,
      solicitudesCompletadas: 45,
      proveedoresActivos: 8,
      valoracionPromedio: 4.8
    }
  }

  // Mock solicitudes data
  const solicitudes = {
    activas: [
      {
        id: 'SOL-1234',
        title: 'Materiales de oficina',
        description: 'Papel, bolígrafos, carpetas y otros insumos de oficina',
        date: 'Hace 2 días',
        fechaLimite: '30/06/2024',
        status: 'Activa',
        offers: 3,
        priority: 'Alta',
        image: '/placeholder.svg?height=300&width=300'
      },
      {
        id: 'SOL-1233',
        title: 'Equipos informáticos',
        description:
          'Laptops, monitores y periféricos para el departamento de TI',
        date: 'Hace 5 días',
        fechaLimite: '15/07/2024',
        status: 'Activa',
        offers: 2,
        priority: 'Media',
        image: '/placeholder.svg?height=300&width=300'
      },
      {
        id: 'SOL-1230',
        title: 'Mobiliario de oficina',
        description: 'Sillas ergonómicas y escritorios para la nueva área',
        date: 'Hace 3 semanas',
        fechaLimite: '10/07/2024',
        status: 'Activa',
        offers: 6,
        priority: 'Baja',
        image: '/placeholder.svg?height=300&width=300'
      }
    ],
    completadas: [
      {
        id: 'SOL-1227',
        title: 'Insumos de cafetería',
        description: 'Café, té, azúcar y otros insumos para la cafetería',
        date: 'Hace 2 meses',
        fechaLimite: '15/04/2024',
        status: 'Completada',
        proveedor: 'Coffee Supplies',
        image: '/placeholder.svg?height=300&width=300'
      },
      {
        id: 'SOL-1226',
        title: 'Artículos de limpieza',
        description: 'Productos de limpieza para las oficinas',
        date: 'Hace 3 meses',
        fechaLimite: '01/04/2024',
        status: 'Completada',
        proveedor: 'Clean Pro',
        image: '/placeholder.svg?height=300&width=300'
      },
      {
        id: 'SOL-1225',
        title: 'Material promocional',
        description: 'Folletos, tarjetas y material promocional para feria',
        date: 'Hace 4 meses',
        fechaLimite: '15/03/2024',
        status: 'Completada',
        proveedor: 'Marketing Pro',
        image: '/placeholder.svg?height=300&width=300'
      },
      {
        id: 'SOL-1224',
        title: 'Servicios de catering',
        description: 'Servicio de catering para evento corporativo',
        date: 'Hace 5 meses',
        fechaLimite: '28/02/2024',
        status: 'Completada',
        proveedor: 'Catering Deluxe',
        image: '/placeholder.svg?height=300&width=300'
      }
    ]
  }

  // Filter solicitudes based on search query
  const filteredSolicitudes = {
    activas: solicitudes.activas.filter(
      sol =>
        searchQuery === '' ||
        sol.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sol.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    completadas: solicitudes.completadas.filter(
      sol =>
        searchQuery === '' ||
        sol.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sol.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  return (
    <div className='flex flex-col min-h-screen bg-background'>
      {/* Header */}
      <header className='container-custom sticky top-0 z-50 flex items-center gap-2 p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <Button variant='ghost' size='icon' onClick={() => router.back()}>
          <ArrowLeft className='h-5 w-5' />
        </Button>
        <h1 className='text-xl font-bold flex-1'>{company.name}</h1>
        <Button
          variant='outline'
          size='sm'
          className='flex items-center gap-1'
          onClick={() =>
            router.push(`/dashboard/proveedor/messages/new?company=${paramId}`)
          }
        >
          <MessageSquare className='h-4 w-4' />
          Mensaje
        </Button>
      </header>

      <div className='container-custom max-w-4xl px-4 pt-[69px]'>
        <div className='flex flex-col md:flex-row gap-6 -mt-12 md:-mt-16 mb-6'>
          {/* Profile image */}
          <div className='flex justify-center md:justify-start z-10'>
            <Avatar className='h-24 w-24 md:h-32 md:w-32 border-4 border-background'>
              {company.logo ? (
                <AvatarImage src={company.logo} alt={company.name} />
              ) : (
                <AvatarFallback className='text-2xl bg-primary text-primary-foreground'>
                  {company.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
          </div>

          {/* Profile info */}
          <div className='flex-1 space-y-3 mt-4 md:mt-12'>
            <div className='flex flex-col md:flex-row md:items-center gap-3 md:gap-6'>
              <div>
                <h2 className='text-2xl font-semibold flex items-center gap-2'>
                  {company.name}
                  {company.verified && (
                    <Badge variant='secondary' className='ml-1'>
                      <CheckCircle className='h-3 w-3 mr-1' />
                      Verificada
                    </Badge>
                  )}
                </h2>
                <p className='text-sm text-muted-foreground'>
                  {company.industry}
                </p>
              </div>
              <div className='flex flex-wrap gap-2 md:ml-auto'>
                <Button
                  size='sm'
                  onClick={() =>
                    router.push(
                      `/dashboard/proveedor/messages/new?company=${paramId}`
                    )
                  }
                >
                  <MessageSquare className='h-4 w-4 mr-1' />
                  Contactar
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className='flex gap-6'>
              <div className='text-center'>
                <p className='font-bold'>{company.stats.solicitudesActivas}</p>
                <p className='text-xs text-muted-foreground'>
                  Solicitudes activas
                </p>
              </div>
              <div className='text-center'>
                <p className='font-bold'>
                  {company.stats.solicitudesCompletadas}
                </p>
                <p className='text-xs text-muted-foreground'>Completadas</p>
              </div>
              <div className='text-center'>
                <p className='font-bold'>{company.stats.proveedoresActivos}</p>
                <p className='text-xs text-muted-foreground'>Proveedores</p>
              </div>
              <div className='text-center'>
                <p className='font-bold'>{company.stats.valoracionPromedio}</p>
                <p className='text-xs text-muted-foreground'>Valoración</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company description and details */}
        <div className='space-y-6 mb-8'>
          <div>
            <p className='text-sm'>{company.description}</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
            <div className='flex items-center gap-2'>
              <MapPin className='h-4 w-4 text-muted-foreground' />
              <span>{company.location}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Globe className='h-4 w-4 text-muted-foreground' />
              <a
                href={`https://${company.website}`}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                {company.website}
              </a>
            </div>
            <div className='flex items-center gap-2'>
              <Mail className='h-4 w-4 text-muted-foreground' />
              <a href={`mailto:${company.email}`} className='hover:underline'>
                {company.email}
              </a>
            </div>
            <div className='flex items-center gap-2'>
              <Phone className='h-4 w-4 text-muted-foreground' />
              <span>{company.phone}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Building className='h-4 w-4 text-muted-foreground' />
              <span>
                Fundada en {company.foundedYear} • {company.employees} empleados
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Calendar className='h-4 w-4 text-muted-foreground' />
              <span>Miembro desde {company.joinDate}</span>
            </div>
          </div>
        </div>

        <Separator className='my-6' />

        {/* Search and filter */}
        <div className='flex flex-col md:flex-row gap-4 items-center mb-6'>
          <div className='relative flex-1 w-full'>
            <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Buscar solicitudes...'
              className='pl-8 w-full'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <div className='flex items-center gap-2 w-full md:w-auto'>
            <Button
              variant='outline'
              size='sm'
              className='flex items-center gap-1'
            >
              <Filter className='h-4 w-4' />
              Filtrar
            </Button>
            <div className='border rounded-md flex'>
              <Button
                variant='ghost'
                size='sm'
                className={cn(
                  'rounded-none',
                  viewMode === 'grid' && 'bg-muted'
                )}
                onClick={() => setViewMode('grid')}
              >
                <Grid className='h-4 w-4' />
              </Button>
              <Button
                variant='ghost'
                size='sm'
                className={cn(
                  'rounded-none',
                  viewMode === 'list' && 'bg-muted'
                )}
                onClick={() => setViewMode('list')}
              >
                <List className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs for solicitudes */}
        <Tabs defaultValue='activas' className='w-full mb-8'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger
              value='activas'
              onClick={() => setActiveTab('activas')}
              className='flex items-center justify-center gap-2'
            >
              <FileText className='h-4 w-4' />
              <span>
                Solicitudes Activas ({filteredSolicitudes.activas.length})
              </span>
            </TabsTrigger>
            <TabsTrigger
              value='completadas'
              onClick={() => setActiveTab('completadas')}
              className='flex items-center justify-center gap-2'
            >
              <CheckCircle className='h-4 w-4' />
              <span>
                Solicitudes Completadas (
                {filteredSolicitudes.completadas.length})
              </span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value='activas' className='mt-6'>
            {filteredSolicitudes.activas.length === 0 ? (
              <div className='text-center py-12'>
                <FileText className='h-12 w-12 text-muted-foreground mx-auto mb-4' />
                <h3 className='text-lg font-medium mb-2'>
                  No se encontraron solicitudes activas
                </h3>
                <p className='text-muted-foreground'>
                  {searchQuery
                    ? 'Intente con otra búsqueda'
                    : 'Esta empresa no tiene solicitudes activas actualmente'}
                </p>
              </div>
            ) : viewMode === 'grid' ? (
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {filteredSolicitudes.activas.map(solicitud => (
                  <Link
                    key={solicitud.id}
                    href={`/dashboard/solicitudes/${solicitud.id}/proveedor`}
                  >
                    <Card className='h-full overflow-hidden border hover:border-primary/50 transition-colors'>
                      <div className='aspect-square relative'>
                        <img
                          src={solicitud.image || '/placeholder.svg'}
                          alt={solicitud.title}
                          className='w-full h-full object-cover'
                        />
                        <div className='absolute top-2 right-2'>
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
                        </div>
                      </div>
                      <CardContent className='p-3'>
                        <p className='text-sm font-medium truncate'>
                          {solicitud.title}
                        </p>
                        <p className='text-xs text-muted-foreground line-clamp-2 mb-1'>
                          {solicitud.description}
                        </p>
                        <div className='flex items-center justify-between text-xs'>
                          <span className='text-muted-foreground'>
                            {solicitud.date}
                          </span>
                          <span className='flex items-center gap-1'>
                            <Clock className='h-3 w-3' />
                            {solicitud.fechaLimite}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className='space-y-4'>
                {filteredSolicitudes.activas.map(solicitud => (
                  <Link
                    key={solicitud.id}
                    href={`/dashboard/solicitudes/${solicitud.id}/proveedor`}
                  >
                    <div className='flex gap-4 border rounded-lg p-4 hover:border-primary/50 transition-colors'>
                      <div className='w-16 h-16 rounded-md overflow-hidden flex-shrink-0'>
                        <img
                          src={solicitud.image || '/placeholder.svg'}
                          alt={solicitud.title}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <div className='flex items-center justify-between'>
                          <h3 className='font-medium flex items-center gap-2'>
                            {solicitud.title}
                            <Badge
                              variant={
                                solicitud.priority === 'Alta'
                                  ? 'destructive'
                                  : solicitud.priority === 'Media'
                                  ? 'default'
                                  : 'secondary'
                              }
                              className='ml-2'
                            >
                              {solicitud.priority}
                            </Badge>
                          </h3>
                          <span className='text-xs text-muted-foreground'>
                            {solicitud.id}
                          </span>
                        </div>
                        <p className='text-sm text-muted-foreground line-clamp-2 my-1'>
                          {solicitud.description}
                        </p>
                        <div className='flex items-center justify-between text-xs'>
                          <span className='text-muted-foreground'>
                            {solicitud.date}
                          </span>
                          <div className='flex items-center gap-3'>
                            <span className='flex items-center gap-1'>
                              <MessageSquare className='h-3 w-3' />
                              {solicitud.offers} ofertas
                            </span>
                            <span className='flex items-center gap-1'>
                              <Clock className='h-3 w-3' />
                              Límite: {solicitud.fechaLimite}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value='completadas' className='mt-6'>
            {filteredSolicitudes.completadas.length === 0 ? (
              <div className='text-center py-12'>
                <CheckCircle className='h-12 w-12 text-muted-foreground mx-auto mb-4' />
                <h3 className='text-lg font-medium mb-2'>
                  No se encontraron solicitudes completadas
                </h3>
                <p className='text-muted-foreground'>
                  {searchQuery
                    ? 'Intente con otra búsqueda'
                    : 'Esta empresa no tiene solicitudes completadas'}
                </p>
              </div>
            ) : viewMode === 'grid' ? (
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {filteredSolicitudes.completadas.map(solicitud => (
                  <Link
                    key={solicitud.id}
                    href={`/dashboard/solicitudes/${solicitud.id}/proveedor`}
                  >
                    <Card className='h-full overflow-hidden border hover:border-primary/50 transition-colors'>
                      <div className='aspect-square relative'>
                        <img
                          src={solicitud.image || '/placeholder.svg'}
                          alt={solicitud.title}
                          className='w-full h-full object-cover'
                        />
                        <div className='absolute top-2 right-2'>
                          <Badge variant='outline'>Completada</Badge>
                        </div>
                      </div>
                      <CardContent className='p-3'>
                        <p className='text-sm font-medium truncate'>
                          {solicitud.title}
                        </p>
                        <p className='text-xs text-muted-foreground line-clamp-2 mb-1'>
                          {solicitud.description}
                        </p>
                        <div className='flex items-center justify-between text-xs'>
                          <span className='text-muted-foreground'>
                            {solicitud.date}
                          </span>
                          <span className='text-muted-foreground'>
                            Proveedor: {solicitud.proveedor}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className='space-y-4'>
                {filteredSolicitudes.completadas.map(solicitud => (
                  <Link
                    key={solicitud.id}
                    href={`/dashboard/solicitudes/${solicitud.id}/proveedor`}
                  >
                    <div className='flex gap-4 border rounded-lg p-4 hover:border-primary/50 transition-colors'>
                      <div className='w-16 h-16 rounded-md overflow-hidden flex-shrink-0'>
                        <img
                          src={solicitud.image || '/placeholder.svg'}
                          alt={solicitud.title}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <div className='flex items-center justify-between'>
                          <h3 className='font-medium flex items-center gap-2'>
                            {solicitud.title}
                            <Badge variant='outline' className='ml-2'>
                              Completada
                            </Badge>
                          </h3>
                          <span className='text-xs text-muted-foreground'>
                            {solicitud.id}
                          </span>
                        </div>
                        <p className='text-sm text-muted-foreground line-clamp-2 my-1'>
                          {solicitud.description}
                        </p>
                        <div className='flex items-center justify-between text-xs'>
                          <span className='text-muted-foreground'>
                            {solicitud.date}
                          </span>
                          <span className='text-muted-foreground'>
                            Proveedor: {solicitud.proveedor}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
