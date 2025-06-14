'use client'

import type React from 'react'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
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
import { Checkbox } from '@/components/ui/checkbox'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function RegisterPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const typeParam = searchParams.get('type')
  const [isLoading, setIsLoading] = useState(false)

  const defaultTab = typeParam === 'proveedor' ? 'proveedor' : 'empresa'

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      router.push('/dashboard')
    }, 1000)
  }

  return (
    <main className='container-custom flex w-full flex-col justify-baseline items-center'>
      <Header />

      <div className='h-[calc(100vh-64px)] mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]'>
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'>
            Crear una cuenta
          </h1>
          <p className='text-sm text-muted-foreground'>
            Regístrese para comenzar a utilizar SupplyConnect
          </p>
        </div>

        <Tabs defaultValue={defaultTab} className='w-full'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='empresa' className='flex items-center gap-2'>
              <Building2 className='h-4 w-4' />
              Empresa
            </TabsTrigger>
            <TabsTrigger value='proveedor' className='flex items-center gap-2'>
              <Truck className='h-4 w-4' />
              Proveedor
            </TabsTrigger>
          </TabsList>

          <TabsContent value='empresa'>
            <Card>
              <CardHeader>
                <CardTitle>Registro de Empresa</CardTitle>
                <CardDescription>
                  Cree una cuenta para publicar solicitudes de insumos
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleRegister}>
                <CardContent className='space-y-4 pb-4'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='nombre-empresa'>
                        Nombre de la empresa
                      </Label>
                      <Input
                        id='nombre-empresa'
                        placeholder='Empresa S.A.'
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='rut-empresa'>RUT/NIT</Label>
                      <Input
                        id='rut-empresa'
                        placeholder='12.345.678-9'
                        required
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='email-empresa'>Correo electrónico</Label>
                    <Input
                      id='email-empresa'
                      type='email'
                      placeholder='contacto@empresa.com'
                      required
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='password-empresa'>Contraseña</Label>
                      <Input id='password-empresa' type='password' required />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='confirm-password-empresa'>
                        Confirmar contraseña
                      </Label>
                      <Input
                        id='confirm-password-empresa'
                        type='password'
                        required
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='direccion-empresa'>Dirección</Label>
                    <Input
                      id='direccion-empresa'
                      placeholder='Calle Principal 123'
                      required
                    />
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Checkbox id='terms-empresa' required />
                    <label
                      htmlFor='terms-empresa'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Acepto los{' '}
                      <Link
                        href='/terms'
                        className='text-primary hover:underline'
                      >
                        términos y condiciones
                      </Link>
                    </label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type='submit' className='w-full' disabled={isLoading}>
                    {isLoading ? 'Registrando...' : 'Registrarse'}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value='proveedor'>
            <Card>
              <CardHeader>
                <CardTitle>Registro de Proveedor</CardTitle>
                <CardDescription>
                  Cree una cuenta para ofrecer sus productos y servicios
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleRegister}>
                <CardContent className='space-y-4 pb-4'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='nombre-proveedor'>
                        Nombre de la empresa
                      </Label>
                      <Input
                        id='nombre-proveedor'
                        placeholder='Proveedor S.A.'
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='rut-proveedor'>RUT/NIT</Label>
                      <Input
                        id='rut-proveedor'
                        placeholder='12.345.678-9'
                        required
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='email-proveedor'>Correo electrónico</Label>
                    <Input
                      id='email-proveedor'
                      type='email'
                      placeholder='contacto@proveedor.com'
                      required
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='password-proveedor'>Contraseña</Label>
                      <Input id='password-proveedor' type='password' required />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='confirm-password-proveedor'>
                        Confirmar contraseña
                      </Label>
                      <Input
                        id='confirm-password-proveedor'
                        type='password'
                        required
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='categoria-proveedor'>
                      Categoría de productos/servicios
                    </Label>
                    <Input
                      id='categoria-proveedor'
                      placeholder='Ej: Materiales de oficina, Tecnología'
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='direccion-proveedor'>Dirección</Label>
                    <Input
                      id='direccion-proveedor'
                      placeholder='Calle Principal 123'
                      required
                    />
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Checkbox id='terms-proveedor' required />
                    <label
                      htmlFor='terms-proveedor'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Acepto los{' '}
                      <Link
                        href='/terms'
                        className='text-primary hover:underline'
                      >
                        términos y condiciones
                      </Link>
                    </label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type='submit' className='w-full' disabled={isLoading}>
                    {isLoading ? 'Registrando...' : 'Registrarse'}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>

        <div className='text-center text-sm'>
          ¿Ya tiene una cuenta?{' '}
          <Link href='/login' className='underline hover:text-primary'>
            Inicie sesión
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
