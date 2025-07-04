'use client'

import type React from 'react'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Building2, Truck } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('empresa')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      if (activeTab === 'proveedor') {
        router.push('/dashboard/proveedor')
      } else {
        router.push('/dashboard')
      }
    }, 1000)
  }

  return (
    <>
      <Header />
      <main className='container-custom flex w-full flex-col justify-baseline items-center'>
        <div className='h-[calc(100vh-64px)] mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Bienvenido de nuevo
            </h1>
            <p className='text-sm text-muted-foreground'>
              Ingrese sus credenciales para acceder a su cuenta
            </p>
          </div>

          <Tabs
            defaultValue='empresa'
            value={activeTab}
            onValueChange={setActiveTab}
            className='w-full'
          >
            <TabsList className='grid w-full grid-cols-2'>
              <TabsTrigger value='empresa' className='flex items-center gap-2'>
                <Building2 className='h-4 w-4' />
                Empresa
              </TabsTrigger>
              <TabsTrigger
                value='proveedor'
                className='flex items-center gap-2'
              >
                <Truck className='h-4 w-4' />
                Proveedor
              </TabsTrigger>
            </TabsList>

            <TabsContent value='empresa'>
              <Card>
                <CardHeader>
                  <CardTitle>Empresa</CardTitle>
                  <CardDescription>
                    Acceda a su cuenta para gestionar solicitudes de insumos
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                  <CardContent className='space-y-4 pb-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='email-empresa'>Correo electrónico</Label>
                      <Input
                        id='email-empresa'
                        type='email'
                        placeholder='nombre@empresa.com'
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <div className='flex items-center justify-between'>
                        <Label htmlFor='password-empresa'>Contraseña</Label>
                        <Link
                          href='/forgot-password'
                          className='text-xs text-muted-foreground hover:text-primary'
                        >
                          ¿Olvidó su contraseña?
                        </Link>
                      </div>
                      <Input id='password-empresa' type='password' required />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      type='submit'
                      className='w-full'
                      disabled={isLoading}
                    >
                      {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value='proveedor'>
              <Card>
                <CardHeader>
                  <CardTitle>Proveedor</CardTitle>
                  <CardDescription>
                    Acceda a su cuenta para ver solicitudes y realizar ofertas
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                  <CardContent className='space-y-4 pb-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='email-proveedor'>
                        Correo electrónico
                      </Label>
                      <Input
                        id='email-proveedor'
                        type='email'
                        placeholder='nombre@proveedor.com'
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <div className='flex items-center justify-between'>
                        <Label htmlFor='password-proveedor'>Contraseña</Label>
                        <Link
                          href='/forgot-password'
                          className='text-xs text-muted-foreground hover:text-primary'
                        >
                          ¿Olvidó su contraseña?
                        </Link>
                      </div>
                      <Input id='password-proveedor' type='password' required />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      type='submit'
                      className='w-full'
                      disabled={isLoading}
                    >
                      {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>

          <div className='text-center text-sm'>
            ¿No tiene una cuenta?{' '}
            <Link href='/register' className='underline hover:text-primary'>
              Regístrese
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
