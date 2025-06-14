'use client'

import type React from 'react'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'

// Mock proveedores data
const proveedores = [
  {
    id: 'proveedor-xyz',
    name: 'Proveedor XYZ',
    avatar: null,
    description: 'Materiales de oficina y tecnología',
    categories: ['Materiales de oficina', 'Tecnología']
  },
  {
    id: 'office-supplies',
    name: 'Office Supplies Co.',
    avatar: null,
    description: 'Especialistas en insumos de oficina',
    categories: ['Materiales de oficina']
  },
  {
    id: 'todo-oficina',
    name: 'Todo Oficina',
    avatar: null,
    description: 'Mobiliario y equipamiento de oficinas',
    categories: ['Mobiliario', 'Materiales de oficina']
  },
  {
    id: 'tech-solutions',
    name: 'Tech Solutions',
    avatar: null,
    description: 'Soluciones tecnológicas para empresas',
    categories: ['Tecnología', 'Servicios informáticos']
  },
  {
    id: 'clean-pro',
    name: 'Clean Pro',
    avatar: null,
    description: 'Servicios de limpieza profesional',
    categories: ['Limpieza', 'Mantenimiento']
  }
]

// Mock solicitudes data
const solicitudes = [
  {
    id: 'SOL-1234',
    title: 'Materiales de oficina',
    description: 'Papel, bolígrafos, carpetas y otros insumos de oficina',
    category: 'Materiales de oficina'
  },
  {
    id: 'SOL-1233',
    title: 'Equipos informáticos',
    description: 'Laptops, monitores y periféricos para el departamento de TI',
    category: 'Tecnología'
  },
  {
    id: 'SOL-1232',
    title: 'Mobiliario de oficina',
    description: 'Sillas ergonómicas y escritorios para la nueva área',
    category: 'Mobiliario'
  },
  {
    id: 'SOL-1231',
    title: 'Servicios de limpieza',
    description: 'Servicios de limpieza para oficinas corporativas',
    category: 'Limpieza'
  },
  {
    id: 'SOL-1230',
    title: 'Servicios de catering',
    description: 'Servicio de catering para evento corporativo',
    category: 'Catering'
  }
]

export default function CompanyNewMessagePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const proveedorParam = searchParams.get('proveedor')
  const solicitudParam = searchParams.get('solicitud')

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProveedor, setSelectedProveedor] = useState<string | null>(
    null
  )
  const [selectedSolicitud, setSelectedSolicitud] = useState<string | null>(
    null
  )
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [step, setStep] = useState<'proveedor' | 'solicitud' | 'message'>(
    'proveedor'
  )

  // Filter proveedores based on search query
  const filteredProveedores = proveedores.filter(
    proveedor =>
      searchQuery === '' ||
      proveedor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proveedor.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proveedor.categories.some(cat =>
        cat.toLowerCase().includes(searchQuery.toLowerCase())
      )
  )

  // Filter solicitudes based on proveedor categories
  const relevantSolicitudes = solicitudes.filter(solicitud => {
    if (!selectedProveedor) return true
    const proveedor = proveedores.find(p => p.id === selectedProveedor)
    if (!proveedor) return true
    return proveedor.categories.includes(solicitud.category)
  })

  // Handle proveedor selection
  const handleSelectProveedor = (proveedorId: string) => {
    setSelectedProveedor(proveedorId)
    setStep('solicitud')
  }

  // Handle solicitud selection
  const handleSelectSolicitud = (solicitudId: string) => {
    setSelectedSolicitud(solicitudId)
    setStep('message')
  }

  // Handle send message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsSubmitting(true)

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false)
      // Navigate to messages page
      router.push('/dashboard/messages')
    }, 1000)
  }

  // Handle skip solicitud selection
  const handleSkipSolicitud = () => {
    setSelectedSolicitud(null)
    setStep('message')
  }

  // Set initial state based on URL params
  useEffect(() => {
    if (proveedorParam) {
      const proveedor = proveedores.find(p => p.id === proveedorParam)
      if (proveedor) {
        setSelectedProveedor(proveedor.id)

        if (solicitudParam) {
          const solicitud = solicitudes.find(s => s.id === solicitudParam)
          if (solicitud) {
            setSelectedSolicitud(solicitud.id)
            setStep('message')
          } else {
            setStep('solicitud')
          }
        } else {
          setStep('solicitud')
        }
      }
    }
  }, [proveedorParam, solicitudParam])

  return (
    <div className='w-full flex flex-col min-h-screen bg-background'>
      {/* Header */}
      <header className='container-custom sticky top-0 z-50 flex items-center gap-2 p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <Button
          variant='ghost'
          size='icon'
          onClick={() => {
            if (step === 'message' && selectedSolicitud) {
              setStep('solicitud')
            } else if (step === 'solicitud') {
              setStep('proveedor')
              setSelectedProveedor(null)
            } else {
              router.back()
            }
          }}
        >
          <ArrowLeft className='h-5 w-5' />
        </Button>
        <h1 className='text-xl font-bold flex-1'>
          {step === 'proveedor'
            ? 'Nuevo mensaje'
            : step === 'solicitud'
            ? 'Seleccionar solicitud'
            : 'Redactar mensaje'}
        </h1>
        {step === 'message' && (
          <Button
            type='submit'
            form='message-form'
            size='sm'
            disabled={!message.trim() || isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </Button>
        )}
      </header>

      {/* Main content */}
      <main className='w-full flex-1 container-custom max-w-2xl py-4 px-4'>
        {/* Step 1: Select proveedor */}
        {step === 'proveedor' && (
          <div className='w-full space-y-4'>
            <div className='relative'>
              <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
              <Input
                type='search'
                placeholder='Buscar proveedor...'
                className='pl-8 w-full'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                autoFocus
              />
              {searchQuery && (
                <Button
                  variant='ghost'
                  size='icon'
                  className='absolute right-1 top-1 h-7 w-7'
                  onClick={() => setSearchQuery('')}
                >
                  <X className='h-4 w-4' />
                </Button>
              )}
            </div>

            <div className='space-y-2'>
              <h2 className='text-sm font-medium'>Seleccione un proveedor</h2>
              {filteredProveedores.length === 0 ? (
                <div className='text-center py-8'>
                  <p className='text-muted-foreground'>
                    No se encontraron proveedores
                  </p>
                </div>
              ) : (
                <div className='space-y-2'>
                  {filteredProveedores.map(proveedor => (
                    <div
                      key={proveedor.id}
                      className='flex items-center gap-3 p-3 rounded-lg border hover:border-primary/50 transition-colors cursor-pointer'
                      onClick={() => handleSelectProveedor(proveedor.id)}
                    >
                      <Avatar className='h-12 w-12'>
                        {proveedor.avatar ? (
                          <AvatarImage
                            src={proveedor.avatar}
                            alt={proveedor.name}
                          />
                        ) : (
                          <AvatarFallback className='bg-secondary text-secondary-foreground'>
                            {proveedor.name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div className='flex-1 min-w-0'>
                        <h3 className='font-medium'>{proveedor.name}</h3>
                        <p className='text-sm text-muted-foreground truncate'>
                          {proveedor.description}
                        </p>
                        <div className='flex flex-wrap gap-1 mt-1'>
                          {proveedor.categories.map(category => (
                            <Badge
                              key={category}
                              variant='outline'
                              className='text-xs'
                            >
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Select solicitud */}
        {step === 'solicitud' && selectedProveedor && (
          <div className='w-full space-y-4'>
            <div className='flex items-center gap-3 p-3 rounded-lg border mb-4'>
              <Avatar className='h-12 w-12'>
                <AvatarFallback className='bg-secondary text-secondary-foreground'>
                  {proveedores
                    .find(p => p.id === selectedProveedor)
                    ?.name.substring(0, 2)
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className='flex-1 min-w-0'>
                <h3 className='font-medium'>
                  {proveedores.find(p => p.id === selectedProveedor)?.name}
                </h3>
                <p className='text-sm text-muted-foreground truncate'>
                  {
                    proveedores.find(p => p.id === selectedProveedor)
                      ?.description
                  }
                </p>
              </div>
            </div>

            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <h2 className='text-sm font-medium'>
                  Seleccione una solicitud (opcional)
                </h2>
                <Button variant='ghost' size='sm' onClick={handleSkipSolicitud}>
                  Omitir
                </Button>
              </div>

              {relevantSolicitudes.length === 0 ? (
                <div className='text-center py-8'>
                  <p className='text-muted-foreground'>
                    No hay solicitudes disponibles
                  </p>
                </div>
              ) : (
                <div className='space-y-2'>
                  {relevantSolicitudes.map(solicitud => (
                    <div
                      key={solicitud.id}
                      className='flex items-center gap-3 p-3 rounded-lg border hover:border-primary/50 transition-colors cursor-pointer'
                      onClick={() => handleSelectSolicitud(solicitud.id)}
                    >
                      <div className='flex-1 min-w-0'>
                        <div className='flex items-center justify-between'>
                          <h3 className='font-medium'>{solicitud.title}</h3>
                          <Badge variant='outline'>{solicitud.id}</Badge>
                        </div>
                        <p className='text-sm text-muted-foreground truncate'>
                          {solicitud.description}
                        </p>
                        <div className='mt-1'>
                          <Badge variant='secondary' className='text-xs'>
                            {solicitud.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Write message */}
        {step === 'message' && selectedProveedor && (
          <div className='w-full space-y-4'>
            <div className='flex items-center gap-3 p-3 rounded-lg border mb-4'>
              <Avatar className='h-12 w-12'>
                <AvatarFallback className='bg-secondary text-secondary-foreground'>
                  {proveedores
                    .find(p => p.id === selectedProveedor)
                    ?.name.substring(0, 2)
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className='flex-1 min-w-0'>
                <h3 className='font-medium'>
                  {proveedores.find(p => p.id === selectedProveedor)?.name}
                </h3>
                {selectedSolicitud && (
                  <div className='flex items-center gap-1 mt-1'>
                    <Badge variant='outline'>
                      {solicitudes.find(s => s.id === selectedSolicitud)?.id}
                    </Badge>
                    <span className='text-sm text-muted-foreground truncate'>
                      {solicitudes.find(s => s.id === selectedSolicitud)?.title}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <form
              id='message-form'
              onSubmit={handleSendMessage}
              className='space-y-4'
            >
              <div className='space-y-2'>
                <h2 className='text-sm font-medium'>Mensaje</h2>
                <Textarea
                  placeholder='Escriba su mensaje aquí...'
                  className='min-h-[200px]'
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  autoFocus
                />
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  )
}
