/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import {
  Building2,
  Truck,
  BarChart3,
  CheckCircle,
  MessageSquare,
  Search,
  Heart,
  Clock,
  Globe,
  Mail,
  ChevronRight,
  ArrowRight,
  Star,
  Instagram,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Footer from '@/components/footer'
import Header from '@/components/header'

export const metadata: Metadata = {
  title:
    'SupplyConnect - Conectando Empresas con Proveedores de Manera Eficiente',
  description:
    'Plataforma innovadora que facilita la gestión de abastecimiento, permitiendo a las empresas publicar sus necesidades y a los proveedores realizar ofertas competitivas.',
  keywords:
    'abastecimiento, proveedores, empresas, insumos, ofertas, gestión de compras, plataforma B2B'
}

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen justify-center items-center'>
      <Header />

      {/* Hero Section */}
      <section className='w-full relative py-20 md:py-28 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-0'></div>
        <div className='container-custom px-4 md:px-6 relative z-10'>
          <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
            <div className='flex flex-col justify-center space-y-4'>
              <div className='space-y-2'>
                <Badge className='mb-2' variant='secondary'>
                  Plataforma de Abastecimiento B2B
                </Badge>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
                  Revolucionando la gestión de abastecimiento empresarial
                </h1>
                <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  SupplyConnect conecta empresas con proveedores en una
                  plataforma intuitiva inspirada en redes sociales,
                  simplificando el proceso de abastecimiento y maximizando la
                  eficiencia.
                </p>
              </div>
              <div className='flex flex-col gap-2 md:flex-row'>
                <Link href='/register?type=empresa'>
                  <Button size='lg' className='w-full'>
                    Registrarse como Empresa
                  </Button>
                </Link>
                <Link href='/register?type=proveedor'>
                  <Button size='lg' variant='outline' className='w-full'>
                    Registrarse como Proveedor
                  </Button>
                </Link>
              </div>
              <div className='w-full flex items-center space-x-4 text-sm text-muted-foreground flex-wrap'>
                <div className='flex items-center'>
                  <CheckCircle className='mr-1 h-4 w-4 text-secondary' />
                  <span>Registro gratuito</span>
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='mr-1 h-4 w-4 text-secondary' />
                  <span>Interfaz intuitiva</span>
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='mr-1 h-4 w-4 text-secondary' />
                  <span>Soporte 24/7</span>
                </div>
              </div>
            </div>
            <div className='mx-auto lg:mx-0 lg:flex-1 flex justify-center'>
              <div className='relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden shadow-2xl'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-10'></div>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='w-4/5 h-4/5 bg-card rounded-lg shadow-lg p-4 flex flex-col'>
                    <div className='flex items-center gap-2 mb-3'>
                      <div className='w-8 h-8 rounded-full bg-secondary'></div>
                      <div className='text-sm font-medium'>Empresa ABC</div>
                    </div>
                    <div className='bg-muted rounded-md h-40 mb-3'></div>
                    <div className='text-sm font-medium'>
                      Solicitud: Materiales de oficina
                    </div>
                    <div className='text-xs text-muted-foreground mb-3'>
                      Cantidad: 100 unidades
                    </div>
                    <div className='mt-auto flex justify-between items-center'>
                      <div className='text-xs text-muted-foreground'>
                        3 ofertas
                      </div>
                      <Button size='sm' variant='secondary'>
                        Ver detalles
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 bg-background/80 backdrop-blur-sm rounded-lg p-6 border'>
            <div className='flex flex-col items-center text-center'>
              <span className='text-3xl font-bold text-primary'>500+</span>
              <span className='text-sm text-muted-foreground'>
                Empresas registradas
              </span>
            </div>
            <div className='flex flex-col items-center text-center'>
              <span className='text-3xl font-bold text-primary'>1,200+</span>
              <span className='text-sm text-muted-foreground'>
                Proveedores activos
              </span>
            </div>
            <div className='flex flex-col items-center text-center'>
              <span className='text-3xl font-bold text-primary'>5,000+</span>
              <span className='text-sm text-muted-foreground'>
                Solicitudes procesadas
              </span>
            </div>
            <div className='flex flex-col items-center text-center'>
              <span className='text-3xl font-bold text-primary'>$2M+</span>
              <span className='text-sm text-muted-foreground'>
                En transacciones
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id='features' className='w-full py-16 bg-muted'>
        <div className='container-custom px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <Badge variant='outline' className='mb-2'>
              Características principales
            </Badge>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Una plataforma completa para todas sus necesidades
              </h2>
              <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                SupplyConnect ofrece herramientas innovadoras para optimizar el
                proceso de abastecimiento, conectando empresas y proveedores de
                manera eficiente.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
            <Card className='bg-background hover:shadow-lg transition-shadow'>
              <CardContent className='p-6 space-y-4 flex flex-col justify-between h-full'>
                <div className='rounded-full bg-secondary/20 p-3 w-12 h-12 flex items-center justify-center'>
                  <Building2 className='h-6 w-6 text-secondary-dark' />
                </div>
                <h3 className='text-xl font-bold'>Gestión de Solicitudes</h3>
                <p className='text-muted-foreground'>
                  Las empresas pueden crear, publicar y gestionar solicitudes de
                  insumos con detalles específicos, plazos y requisitos
                  personalizados.
                </p>
                <div className='pt-4'>
                  <Link
                    href='/register?type=empresa'
                    className='text-primary font-medium flex items-center hover:underline'
                  >
                    Crear solicitud <ChevronRight className='h-4 w-4 ml-1' />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className='bg-background hover:shadow-lg transition-shadow'>
              <CardContent className='p-6 space-y-4 flex flex-col justify-between h-full'>
                <div className='rounded-full bg-secondary/20 p-3 w-12 h-12 flex items-center justify-center'>
                  <Truck className='h-6 w-6 text-secondary-dark' />
                </div>
                <h3 className='text-xl font-bold'>Ofertas Competitivas</h3>
                <p className='text-muted-foreground'>
                  Los proveedores pueden explorar solicitudes, enviar ofertas
                  competitivas y destacar sus productos o servicios a través de
                  una interfaz intuitiva.
                </p>
                <div className='pt-4'>
                  <Link
                    href='/register?type=proveedor'
                    className='text-primary font-medium flex items-center hover:underline'
                  >
                    Hacer ofertas <ChevronRight className='h-4 w-4 ml-1' />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className='bg-background hover:shadow-lg transition-shadow'>
              <CardContent className='p-6 space-y-4 flex flex-col justify-between h-full'>
                <div className='rounded-full bg-secondary/20 p-3 w-12 h-12 flex items-center justify-center'>
                  <MessageSquare className='h-6 w-6 text-secondary-dark' />
                </div>
                <h3 className='text-xl font-bold'>Mensajería en Tiempo Real</h3>
                <p className='text-muted-foreground'>
                  Sistema de mensajería integrado que permite una comunicación
                  fluida entre empresas y proveedores para negociar detalles y
                  resolver dudas.
                </p>
                <div className='pt-4'>
                  <Link
                    href='#how-it-works'
                    className='text-primary font-medium flex items-center hover:underline'
                  >
                    Conocer más <ChevronRight className='h-4 w-4 ml-1' />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className='bg-background hover:shadow-lg transition-shadow'>
              <CardContent className='p-6 space-y-4 flex flex-col justify-between h-full'>
                <div className='rounded-full bg-secondary/20 p-3 w-12 h-12 flex items-center justify-center'>
                  <Search className='h-6 w-6 text-secondary-dark' />
                </div>
                <h3 className='text-xl font-bold'>Búsqueda Avanzada</h3>
                <p className='text-muted-foreground'>
                  Potentes herramientas de búsqueda y filtrado que permiten
                  encontrar rápidamente solicitudes o proveedores según
                  categorías, ubicación y otros criterios.
                </p>
                <div className='pt-4'>
                  <Link
                    href='#how-it-works'
                    className='text-primary font-medium flex items-center hover:underline'
                  >
                    Explorar <ChevronRight className='h-4 w-4 ml-1' />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className='bg-background hover:shadow-lg transition-shadow'>
              <CardContent className='p-6 space-y-4 flex flex-col justify-between h-full'>
                <div className='rounded-full bg-secondary/20 p-3 w-12 h-12 flex items-center justify-center'>
                  <Heart className='h-6 w-6 text-secondary-dark' />
                </div>
                <h3 className='text-xl font-bold'>Interfaz Intuitiva</h3>
                <p className='text-muted-foreground'>
                  Diseño inspirado en redes sociales que facilita la navegación,
                  interacción y gestión de solicitudes y ofertas de manera
                  sencilla e intuitiva.
                </p>
                <div className='pt-4'>
                  <Link
                    href='/login'
                    className='text-primary font-medium flex items-center hover:underline'
                  >
                    Probar ahora <ChevronRight className='h-4 w-4 ml-1' />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className='bg-background hover:shadow-lg transition-shadow'>
              <CardContent className='p-6 space-y-4 flex flex-col justify-between h-full'>
                <div className='rounded-full bg-secondary/20 p-3 w-12 h-12 flex items-center justify-center'>
                  <BarChart3 className='h-6 w-6 text-secondary-dark' />
                </div>
                <h3 className='text-xl font-bold'>Análisis y Estadísticas</h3>
                <p className='text-muted-foreground'>
                  Paneles de control con estadísticas detalladas sobre
                  solicitudes, ofertas y transacciones para tomar decisiones
                  informadas y optimizar procesos.
                </p>
                <div className='pt-4'>
                  <Link
                    href='#how-it-works'
                    className='text-primary font-medium flex items-center hover:underline'
                  >
                    Ver estadísticas <ChevronRight className='h-4 w-4 ml-1' />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id='how-it-works' className='py-16 bg-background'>
        <div className='container-custom px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <Badge variant='outline' className='mb-2'>
              Proceso simplificado
            </Badge>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Cómo funciona SupplyConnect
              </h2>
              <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Un proceso simple y eficiente para conectar empresas con
                proveedores, optimizando cada etapa del ciclo de abastecimiento.
              </p>
            </div>
          </div>

          <div className='relative mt-16'>
            {/* Timeline connector - only visible on desktop */}
            <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-muted hidden md:block'></div>

            {/* Steps */}
            <div className='space-y-8 md:space-y-12 relative'>
              {/* Step 1 */}
              <div className='flex flex-col md:flex-row items-center'>
                <div className='w-full md:w-1/2 md:pr-12 md:text-right'>
                  <Badge variant='secondary' className='mb-2'>
                    Paso 1
                  </Badge>
                  <h3 className='text-xl md:text-2xl font-bold mb-2'>
                    Creación de Solicitud
                  </h3>
                  <p className='text-muted-foreground text-sm md:text-base'>
                    Las empresas crean solicitudes detalladas especificando sus
                    necesidades, cantidades, plazos y otros requisitos
                    relevantes.
                  </p>
                </div>
                <div className='hidden md:flex mx-auto md:mx-0 my-4 md:my-0 z-10 items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground'>
                  1
                </div>
                <div className='w-full md:w-1/2 md:pl-12 md:text-left mt-4 md:mt-0'>
                  <div className='bg-muted rounded-lg p-4'>
                    <div className='flex items-center gap-2 mb-2'>
                      <Building2 className='h-5 w-5 text-primary' />
                      <span className='font-medium'>Empresa</span>
                    </div>
                    <ul className='space-y-1 text-sm'>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-secondary mr-2' />
                        Definir especificaciones claras
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-secondary mr-2' />
                        Establecer plazos de entrega
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-secondary mr-2' />
                        Adjuntar documentos relevantes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className='flex flex-col md:flex-row items-center'>
                <div className='w-full md:w-1/2 md:pr-12 md:text-right order-1 md:order-1'>
                  <div className='bg-muted rounded-lg p-4 mt-4 md:mt-0'>
                    <div className='flex items-center gap-2 mb-2'>
                      <Truck className='h-5 w-5 text-primary' />
                      <span className='font-medium'>Proveedor</span>
                    </div>
                    <ul className='space-y-1 text-sm'>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-secondary mr-2' />
                        Explorar solicitudes relevantes
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-secondary mr-2' />
                        Analizar requisitos y plazos
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-secondary mr-2' />
                        Preparar oferta competitiva
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='hidden md:flex mx-auto md:mx-0 my-4 md:my-0 z-10 items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground order-0 md:order-2'>
                  2
                </div>
                <div className='w-full md:w-1/2 md:pl-12 md:text-left order-0 md:order-3'>
                  <Badge variant='secondary' className='mb-2'>
                    Paso 2
                  </Badge>
                  <h3 className='text-xl md:text-2xl font-bold mb-2'>
                    Presentación de Ofertas
                  </h3>
                  <p className='text-muted-foreground text-sm md:text-base'>
                    Los proveedores revisan las solicitudes y presentan sus
                    ofertas detallando precios, condiciones, plazos de entrega y
                    valor agregado.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className='flex flex-col md:flex-row items-center'>
                <div className='w-full md:w-1/2 md:pr-12 md:text-right'>
                  <Badge variant='secondary' className='mb-2'>
                    Paso 3
                  </Badge>
                  <h3 className='text-xl md:text-2xl font-bold mb-2'>
                    Comunicación y Negociación
                  </h3>
                  <p className='text-muted-foreground text-sm md:text-base'>
                    Empresas y proveedores utilizan el sistema de mensajería
                    integrado para aclarar dudas, negociar términos y afinar
                    detalles.
                  </p>
                </div>
                <div className='hidden md:flex mx-auto md:mx-0 my-4 md:my-0 z-10 items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground'>
                  3
                </div>
                <div className='w-full md:w-1/2 md:pl-12 md:text-left mt-4 md:mt-0'>
                  <div className='bg-muted rounded-lg p-4'>
                    <div className='flex items-center gap-2 mb-2'>
                      <MessageSquare className='h-5 w-5 text-primary' />
                      <span className='font-medium'>Interacción</span>
                    </div>
                    <ul className='space-y-1 text-sm'>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-secondary mr-2' />
                        Mensajería en tiempo real
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-secondary mr-2' />
                        Intercambio de documentación
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-secondary mr-2' />
                        Ajuste de condiciones
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className='flex flex-col md:flex-row items-center'>
                <div className='w-full md:w-1/2 md:pr-12 md:text-right order-1 md:order-1'>
                  <div className='bg-muted rounded-lg p-4 mt-4 md:mt-0'>
                    <div className='flex items-center gap-2 mb-2'>
                      <Building2 className='h-5 w-5 text-primary' />
                      <span className='font-medium'>Empresa</span>
                    </div>
                    <ul className='space-y-1 text-sm'>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-secondary mr-2' />
                        Evaluar ofertas recibidas
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-secondary mr-2' />
                        Comparar precios y condiciones
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-secondary mr-2' />
                        Seleccionar mejor propuesta
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='hidden md:flex mx-auto md:mx-0 my-4 md:my-0 z-10 items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground order-0 md:order-2'>
                  4
                </div>
                <div className='w-full md:w-1/2 md:pl-12 md:text-left order-0 md:order-3'>
                  <Badge variant='secondary' className='mb-2'>
                    Paso 4
                  </Badge>
                  <h3 className='text-xl md:text-2xl font-bold mb-2'>
                    Selección de Oferta
                  </h3>
                  <p className='text-muted-foreground text-sm md:text-base'>
                    La empresa evalúa todas las ofertas recibidas y selecciona
                    la que mejor se adapta a sus necesidades, considerando
                    precio, calidad y plazos.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className='flex flex-col md:flex-row items-center'>
                <div className='w-full md:w-1/2 md:pr-12 md:text-right'>
                  <Badge variant='secondary' className='mb-2'>
                    Paso 5
                  </Badge>
                  <h3 className='text-xl md:text-2xl font-bold mb-2'>
                    Entrega y Confirmación
                  </h3>
                  <p className='text-muted-foreground text-sm md:text-base'>
                    El proveedor realiza la entrega según lo acordado y la
                    empresa confirma la recepción, evaluando el servicio y
                    cerrando el ciclo.
                  </p>
                </div>
                <div className='hidden md:flex mx-auto md:mx-0 my-4 md:my-0 z-10 items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground'>
                  5
                </div>
                <div className='w-full md:w-1/2 md:pl-12 md:text-left mt-4 md:mt-0'>
                  <div className='bg-muted rounded-lg p-4'>
                    <div className='flex items-center gap-2 mb-2'>
                      <Star className='h-5 w-5 text-primary' />
                      <span className='font-medium'>Finalización</span>
                    </div>
                    <ul className='space-y-1 text-sm'>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-secondary mr-2' />
                        Entrega de productos/servicios
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-secondary mr-2' />
                        Confirmación de recepción
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-secondary mr-2' />
                        Valoración y retroalimentación
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <Link href='/register'>
              <Button size='lg' className='px-8'>
                Comenzar ahora
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id='testimonials' className='w-full py-16 bg-muted/50'>
        <div className='container-custom px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <Badge variant='outline' className='mb-2'>
              Testimonios
            </Badge>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Lo que dicen nuestros usuarios
              </h2>
              <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Descubra cómo SupplyConnect ha transformado los procesos de
                abastecimiento de empresas y proveedores.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
            {/* Testimonial 1 */}
            <Card className='bg-background hover:shadow-md transition-shadow'>
              <CardContent className='p-6 space-y-4'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12 border-2 border-secondary'>
                    <AvatarImage
                      src='/placeholder.svg?height=100&width=100'
                      alt='María Rodríguez'
                    />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className='font-semibold'>María Rodríguez</h4>
                    <p className='text-sm text-muted-foreground'>
                      Gerente de Compras, TechSolutions
                    </p>
                  </div>
                </div>
                <div className='flex space-x-1'>
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star
                      key={star}
                      className='h-4 w-4 fill-secondary text-secondary'
                    />
                  ))}
                </div>
                <p className='italic text-muted-foreground'>
                  &quot;SupplyConnect ha revolucionado nuestra forma de
                  gestionar las compras. Hemos reducido los tiempos de
                  adquisición en un 40% y encontrado proveedores de mayor
                  calidad. La interfaz intuitiva hace que todo el proceso sea
                  extremadamente sencillo.&quot;
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className='bg-background hover:shadow-md transition-shadow'>
              <CardContent className='p-6 space-y-4'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12 border-2 border-secondary'>
                    <AvatarImage
                      src='/placeholder.svg?height=100&width=100'
                      alt='Carlos Méndez'
                    />
                    <AvatarFallback>CM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className='font-semibold'>Carlos Méndez</h4>
                    <p className='text-sm text-muted-foreground'>
                      Director, Suministros Industriales
                    </p>
                  </div>
                </div>
                <div className='flex space-x-1'>
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star
                      key={star}
                      className='h-4 w-4 fill-secondary text-secondary'
                    />
                  ))}
                </div>
                <p className='italic text-muted-foreground'>
                  &quot;Como proveedor, SupplyConnect nos ha abierto puertas a
                  nuevos clientes que no habríamos encontrado por otros medios.
                  La plataforma nos permite mostrar nuestros productos de manera
                  efectiva y comunicarnos directamente con las empresas
                  interesadas.&quot;
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className='bg-background hover:shadow-md transition-shadow'>
              <CardContent className='p-6 space-y-4'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12 border-2 border-secondary'>
                    <AvatarImage
                      src='/placeholder.svg?height=100&width=100'
                      alt='Ana Gómez'
                    />
                    <AvatarFallback>AG</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className='font-semibold'>Ana Gómez</h4>
                    <p className='text-sm text-muted-foreground'>
                      CEO, Global Enterprises
                    </p>
                  </div>
                </div>
                <div className='flex space-x-1'>
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star
                      key={star}
                      className='h-4 w-4 fill-secondary text-secondary'
                    />
                  ))}
                </div>
                <p className='italic text-muted-foreground'>
                  &quot;Implementar SupplyConnect en nuestra empresa ha sido una
                  de las mejores decisiones estratégicas. Hemos optimizado
                  nuestro proceso de abastecimiento, reducido costos y mejorado
                  la calidad de nuestros proveedores. Totalmente
                  recomendado.&quot;
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16'>
            <div className='bg-background rounded-lg p-6 border text-center'>
              <div className='text-4xl font-bold text-primary mb-2'>98%</div>
              <p className='text-muted-foreground'>
                de satisfacción de usuarios
              </p>
            </div>
            <div className='bg-background rounded-lg p-6 border text-center'>
              <div className='text-4xl font-bold text-primary mb-2'>30%</div>
              <p className='text-muted-foreground'>
                de reducción en tiempos de adquisición
              </p>
            </div>
            <div className='bg-background rounded-lg p-6 border text-center'>
              <div className='text-4xl font-bold text-primary mb-2'>25%</div>
              <p className='text-muted-foreground'>
                de ahorro promedio en costos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id='about' className='py-16 bg-background'>
        <div className='container-custom px-4 md:px-6'>
          <div className='flex flex-col lg:flex-row gap-12 items-center'>
            <div className='lg:w-1/2'>
              <Badge variant='outline' className='mb-2'>
                Sobre nosotros
              </Badge>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-4'>
                Transformando el abastecimiento empresarial
              </h2>
              <p className='text-muted-foreground mb-6'>
                SupplyConnect nació en 2025 con una misión clara: revolucionar
                la forma en que las empresas y proveedores se conectan y
                realizan transacciones. Identificamos que los procesos
                tradicionales de abastecimiento eran ineficientes, costosos y
                carecían de transparencia.
              </p>
              <p className='text-muted-foreground mb-6'>
                Nuestra plataforma combina la potencia de la tecnología moderna
                con una interfaz inspirada en redes sociales para crear una
                experiencia intuitiva y eficiente. Estamos comprometidos con la
                innovación continua y la satisfacción de nuestros usuarios.
              </p>

              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <div className='rounded-full bg-secondary/20 p-1 mt-1'>
                    <CheckCircle className='h-5 w-5 text-secondary' />
                  </div>
                  <div>
                    <h4 className='font-semibold'>Nuestra Misión</h4>
                    <p className='text-sm text-muted-foreground'>
                      Simplificar y optimizar los procesos de abastecimiento
                      empresarial, conectando empresas y proveedores de manera
                      eficiente y transparente.
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='rounded-full bg-secondary/20 p-1 mt-1'>
                    <CheckCircle className='h-5 w-5 text-secondary' />
                  </div>
                  <div>
                    <h4 className='font-semibold'>Nuestra Visión</h4>
                    <p className='text-sm text-muted-foreground'>
                      Convertirnos en la plataforma líder de abastecimiento B2B
                      a nivel global, transformando la manera en que las
                      empresas gestionan sus cadenas de suministro.
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='rounded-full bg-secondary/20 p-1 mt-1'>
                    <CheckCircle className='h-5 w-5 text-secondary' />
                  </div>
                  <div>
                    <h4 className='font-semibold'>Nuestros Valores</h4>
                    <p className='text-sm text-muted-foreground'>
                      Innovación, transparencia, eficiencia, colaboración y
                      compromiso con la excelencia en cada aspecto de nuestra
                      plataforma y servicio.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:w-1/2'>
              <div className='relative'>
                <div className='absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-lg'></div>
                <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg'></div>
                <div className='relative z-10 rounded-lg overflow-hidden border shadow-lg'>
                  <img
                    src='/placeholder.svg?height=600&width=800'
                    alt='Equipo de SupplyConnect'
                    className='w-full h-auto'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full py-16 bg-primary text-primary-foreground'>
        <div className='container-custom px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <Badge variant='secondary' className='mb-2'>
              Comience hoy
            </Badge>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Optimice su proceso de abastecimiento
              </h2>
              <p className='max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Únase a SupplyConnect y experimente una nueva forma de gestionar
                sus insumos y conectar con empresas y proveedores de calidad.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row mt-6'>
              <Link href='/register'>
                <Button size='lg' variant='secondary' className='w-full'>
                  Registrarse gratis
                </Button>
              </Link>
              <Link href='#contact'>
                <Button
                  size='lg'
                  variant='outline'
                  className='w-full border-primary-foreground hover:bg-primary-foreground hover:text-primary'
                >
                  Contactar ventas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-16 bg-background'>
        <div className='container-custom px-4 md:px-6'>
          <div className='flex flex-col md:flex-row gap-12'>
            <div className='md:w-1/2'>
              <Badge variant='outline' className='mb-2'>
                Contacto
              </Badge>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-4'>
                ¿Necesita más información?
              </h2>
              <p className='text-muted-foreground mb-6'>
                Estamos aquí para responder todas sus preguntas y ayudarle a
                aprovechar al máximo nuestra plataforma. Contáctenos y un
                representante se comunicará con usted a la brevedad.
              </p>

              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='rounded-full bg-secondary/20 p-2'>
                    <Mail className='h-5 w-5 text-secondary' />
                  </div>
                  <div>
                    <h4 className='font-semibold'>Correo electrónico</h4>
                    <p className='text-sm text-muted-foreground'>
                      info@supplyconnect.com
                    </p>
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <div className='rounded-full bg-secondary/20 p-2'>
                    <Globe className='h-5 w-5 text-secondary' />
                  </div>
                  <div>
                    <h4 className='font-semibold'>Sitio web</h4>
                    <p className='text-sm text-muted-foreground'>
                      www.supplyconnect.com
                    </p>
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <div className='rounded-full bg-secondary/20 p-2'>
                    <Clock className='h-5 w-5 text-secondary' />
                  </div>
                  <div>
                    <h4 className='font-semibold'>Horario de atención</h4>
                    <p className='text-sm text-muted-foreground'>
                      Lunes a Viernes: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-8'>
                <h4 className='font-semibold mb-3'>
                  Síguenos en redes sociales
                </h4>
                <div className='flex space-x-4'>
                  <Link
                    href='#'
                    className='rounded-full bg-muted p-2 hover:bg-muted/80 transition-colors'
                  >
                    <Facebook className='h-5 w-5' />
                  </Link>
                  <Link
                    href='#'
                    className='rounded-full bg-muted p-2 hover:bg-muted/80 transition-colors'
                  >
                    <Twitter className='h-5 w-5' />
                  </Link>
                  <Link
                    href='#'
                    className='rounded-full bg-muted p-2 hover:bg-muted/80 transition-colors'
                  >
                    <Linkedin className='h-5 w-5' />
                  </Link>
                  <Link
                    href='#'
                    className='rounded-full bg-muted p-2 hover:bg-muted/80 transition-colors'
                  >
                    <Instagram className='h-5 w-5' />
                  </Link>
                </div>
              </div>
            </div>

            <div className='md:w-1/2'>
              <Card>
                <CardContent className='p-6'>
                  <form className='space-y-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div className='space-y-2'>
                        <label htmlFor='name' className='text-sm font-medium'>
                          Nombre completo
                        </label>
                        <Input id='name' placeholder='Ingrese su nombre' />
                      </div>
                      <div className='space-y-2'>
                        <label
                          htmlFor='company'
                          className='text-sm font-medium'
                        >
                          Empresa
                        </label>
                        <Input
                          id='company'
                          placeholder='Nombre de su empresa'
                        />
                      </div>
                    </div>

                    <div className='space-y-2'>
                      <label htmlFor='email' className='text-sm font-medium'>
                        Correo electrónico
                      </label>
                      <Input
                        id='email'
                        type='email'
                        placeholder='correo@ejemplo.com'
                      />
                    </div>

                    <div className='space-y-2'>
                      <label htmlFor='subject' className='text-sm font-medium'>
                        Asunto
                      </label>
                      <Input
                        id='subject'
                        placeholder='¿En qué podemos ayudarle?'
                      />
                    </div>

                    <div className='space-y-2'>
                      <label htmlFor='message' className='text-sm font-medium'>
                        Mensaje
                      </label>
                      <textarea
                        id='message'
                        className='w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                        placeholder='Escriba su mensaje aquí...'
                      ></textarea>
                    </div>

                    <Button type='submit' className='w-full'>
                      Enviar mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='w-full py-12 bg-muted'>
        <div className='container-custom px-4 md:px-6'>
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            <div className='md:w-2/3'>
              <h3 className='text-2xl font-bold mb-2'>
                Suscríbase a nuestro boletín
              </h3>
              <p className='text-muted-foreground'>
                Reciba las últimas noticias, actualizaciones y consejos sobre
                gestión de abastecimiento.
              </p>
            </div>
            <div className='md:w-1/3 w-full'>
              <form className='flex space-x-2'>
                <Input placeholder='correo@ejemplo.com' className='flex-1' />
                <Button type='submit'>Suscribirse</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
