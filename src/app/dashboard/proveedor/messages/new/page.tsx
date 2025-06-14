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

export default function NewMessagePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const companyParam = searchParams.get('company')
  const solicitudParam = searchParams.get('solicitud')

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null)
  const [selectedSolicitud, setSelectedSolicitud] = useState<string | null>(
    null
  )
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [step, setStep] = useState<'company' | 'solicitud' | 'message'>(
    'company'
  )

  // Mock companies data
  const companies = [
    {
      id: 'empresa-abc',
      name: 'Empresa ABC',
      avatar: null,
      description: 'Tecnología y servicios informáticos',
      solicitudes: ['SOL-1234', 'SOL-1235', 'SOL-1236']
    },
    {
      id: 'empresa-xyz',
      name: 'Empresa XYZ',
      avatar: null,
      description: 'Manufactura y distribución',
      solicitudes: ['SOL-1233', 'SOL-1237']
    },
    {
      id: 'corporacion-123',
      name: 'Corporación 123',
      avatar: null,
      description: 'Servicios financieros',
      solicitudes: ['SOL-1232', 'SOL-1238']
    },
    {
      id: 'empresa-def',
      name: 'Empresa DEF',
      avatar: null,
      description: 'Retail y comercio electrónico',
      solicitudes: ['SOL-1231', 'SOL-1239']
    },
    {
      id: 'tech-solutions',
      name: 'Tech Solutions',
      avatar: null,
      description: 'Consultoría tecnológica',
      solicitudes: ['SOL-1230', 'SOL-1240']
    }
  ]

  // Mock solicitudes data
  const solicitudes = [
    {
      id: 'SOL-1234',
      title: 'Materiales de oficina',
      description: 'Papel, bolígrafos, carpetas y otros insumos de oficina',
      company: 'empresa-abc'
    },
    {
      id: 'SOL-1235',
      title: 'Equipos informáticos',
      description:
        'Laptops, monitores y periféricos para el departamento de TI',
      company: 'empresa-abc'
    },
    {
      id: 'SOL-1236',
      title: 'Servicios de limpieza',
      description: 'Servicios de limpieza para oficinas corporativas',
      company: 'empresa-abc'
    },
    {
      id: 'SOL-1233',
      title: 'Mobiliario de oficina',
      description: 'Sillas ergonómicas y escritorios para la nueva área',
      company: 'empresa-xyz'
    },
    {
      id: 'SOL-1237',
      title: 'Material promocional',
      description: 'Folletos, tarjetas y material promocional para feria',
      company: 'empresa-xyz'
    },
    {
      id: 'SOL-1232',
      title: 'Servicios de catering',
      description: 'Servicio de catering para evento corporativo',
      company: 'corporacion-123'
    },
    {
      id: 'SOL-1238',
      title: 'Consultoría financiera',
      description:
        'Servicios de consultoría para optimización de procesos financieros',
      company: 'corporacion-123'
    }
  ]

  // Filter companies based on search query
  const filteredCompanies = companies.filter(
    company =>
      searchQuery === '' ||
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Get solicitudes for selected company
  const companySolicitudes = solicitudes.filter(
    solicitud => solicitud.company === selectedCompany
  )

  // Handle company selection
  const handleSelectCompany = (companyId: string) => {
    setSelectedCompany(companyId)
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
      router.push('/dashboard/proveedor/messages')
    }, 1000)
  }

  // Handle skip solicitud selection
  const handleSkipSolicitud = () => {
    setSelectedSolicitud(null)
    setStep('message')
  }

  // Set initial state based on URL params
  useEffect(() => {
    if (companyParam) {
      const company = companies.find(c => c.id === companyParam)
      if (company) {
        setSelectedCompany(company.id)

        if (solicitudParam) {
          const solicitud = solicitudes.find(
            s => s.id === solicitudParam && s.company === company.id
          )
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
  }, [companyParam, solicitudParam, companies, solicitudes])

  return (
    <div className='flex flex-col min-h-screen bg-background'>
      {/* Header */}
      <header className='container-custom sticky top-0 z-50 flex items-center gap-2 p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <Button
          variant='ghost'
          size='icon'
          onClick={() => {
            if (step === 'message' && selectedSolicitud) {
              setStep('solicitud')
            } else if (step === 'solicitud') {
              setStep('company')
              setSelectedCompany(null)
            } else {
              router.back()
            }
          }}
        >
          <ArrowLeft className='h-5 w-5' />
        </Button>
        <h1 className='text-xl font-bold flex-1'>
          {step === 'company'
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
      <main className='flex-1 container-custom max-w-2xl py-4 px-4'>
        {/* Step 1: Select company */}
        {step === 'company' && (
          <div className='w-full space-y-4'>
            <div className='w-full relative'>
              <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
              <Input
                type='search'
                placeholder='Buscar empresa...'
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
              <h2 className='text-sm font-medium'>Seleccione una empresa</h2>
              {filteredCompanies.length === 0 ? (
                <div className='text-center py-8'>
                  <p className='text-muted-foreground'>
                    No se encontraron empresas
                  </p>
                </div>
              ) : (
                <div className='space-y-2'>
                  {filteredCompanies.map(company => (
                    <div
                      key={company.id}
                      className='flex items-center gap-3 p-3 rounded-lg border hover:border-primary/50 transition-colors cursor-pointer'
                      onClick={() => handleSelectCompany(company.id)}
                    >
                      <Avatar className='h-12 w-12'>
                        {company.avatar ? (
                          <AvatarImage
                            src={company.avatar}
                            alt={company.name}
                          />
                        ) : (
                          <AvatarFallback className='bg-primary text-primary-foreground'>
                            {company.name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div className='flex-1 min-w-0'>
                        <h3 className='font-medium'>{company.name}</h3>
                        <p className='text-sm text-muted-foreground truncate'>
                          {company.description}
                        </p>
                        <div className='flex items-center gap-1 mt-1'>
                          <Badge variant='outline' className='text-xs'>
                            {company.solicitudes.length} solicitudes
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

        {/* Step 2: Select solicitud */}
        {step === 'solicitud' && selectedCompany && (
          <div className='w-full space-y-4'>
            <div className='flex items-center gap-3 p-3 rounded-lg border mb-4'>
              <Avatar className='h-12 w-12'>
                <AvatarFallback className='bg-primary text-primary-foreground'>
                  {companies
                    .find(c => c.id === selectedCompany)
                    ?.name.substring(0, 2)
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className='flex-1 min-w-0'>
                <h3 className='font-medium'>
                  {companies.find(c => c.id === selectedCompany)?.name}
                </h3>
                <p className='text-sm text-muted-foreground truncate'>
                  {companies.find(c => c.id === selectedCompany)?.description}
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

              {companySolicitudes.length === 0 ? (
                <div className='text-center py-8'>
                  <p className='text-muted-foreground'>
                    No hay solicitudes disponibles
                  </p>
                </div>
              ) : (
                <div className='space-y-2'>
                  {companySolicitudes.map(solicitud => (
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
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Write message */}
        {step === 'message' && selectedCompany && (
          <div className='w-full space-y-4'>
            <div className='flex items-center gap-3 p-3 rounded-lg border mb-4'>
              <Avatar className='h-12 w-12'>
                <AvatarFallback className='bg-primary text-primary-foreground'>
                  {companies
                    .find(c => c.id === selectedCompany)
                    ?.name.substring(0, 2)
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className='flex-1 min-w-0'>
                <h3 className='font-medium'>
                  {companies.find(c => c.id === selectedCompany)?.name}
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
