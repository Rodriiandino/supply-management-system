'use client'

import type React from 'react'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import DashboardLayout from '@/components/layout/dashboard-layout'

export default function NuevaSolicitudPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      router.push('/dashboard/solicitudes')
    }, 1000)
  }

  return (
    <DashboardLayout>
      <div className='w-full flex flex-col gap-4 md:gap-8'>
        <div className='flex items-center gap-2'>
          <Link href='/dashboard/solicitudes'>
            <Button variant='ghost' size='icon'>
              <ArrowLeft className='h-4 w-4' />
              <span className='sr-only'>Volver</span>
            </Button>
          </Link>
          <div>
            <h1 className='text-3xl font-bold tracking-tight'>
              Nueva solicitud
            </h1>
            <p className='text-muted-foreground'>
              Cree una nueva solicitud de insumos
            </p>
          </div>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Detalles de la solicitud</CardTitle>
              <CardDescription>
                Complete la información sobre los insumos que necesita
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6 pb-4'>
              <div className='space-y-2'>
                <Label htmlFor='titulo'>Título</Label>
                <Input
                  id='titulo'
                  placeholder='Ej: Materiales de oficina'
                  required
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='descripcion'>Descripción</Label>
                <Textarea
                  id='descripcion'
                  placeholder='Describa detalladamente los insumos que necesita'
                  rows={4}
                  required
                />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='categoria'>Categoría</Label>
                  <Select required>
                    <SelectTrigger id='categoria'>
                      <SelectValue placeholder='Seleccione una categoría' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='oficina'>
                        Materiales de oficina
                      </SelectItem>
                      <SelectItem value='tecnologia'>Tecnología</SelectItem>
                      <SelectItem value='mobiliario'>Mobiliario</SelectItem>
                      <SelectItem value='limpieza'>
                        Artículos de limpieza
                      </SelectItem>
                      <SelectItem value='cafeteria'>
                        Insumos de cafetería
                      </SelectItem>
                      <SelectItem value='otros'>Otros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='prioridad'>Prioridad</Label>
                  <Select required>
                    <SelectTrigger id='prioridad'>
                      <SelectValue placeholder='Seleccione la prioridad' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='alta'>Alta</SelectItem>
                      <SelectItem value='media'>Media</SelectItem>
                      <SelectItem value='baja'>Baja</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='cantidad'>Cantidad</Label>
                  <Input id='cantidad' type='number' min='1' required />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='unidad'>Unidad de medida</Label>
                  <Select required>
                    <SelectTrigger id='unidad'>
                      <SelectValue placeholder='Seleccione' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='unidades'>Unidades</SelectItem>
                      <SelectItem value='cajas'>Cajas</SelectItem>
                      <SelectItem value='kg'>Kilogramos</SelectItem>
                      <SelectItem value='litros'>Litros</SelectItem>
                      <SelectItem value='metros'>Metros</SelectItem>
                      <SelectItem value='otros'>Otros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='area'>Área solicitante</Label>
                  <Select required>
                    <SelectTrigger id='area'>
                      <SelectValue placeholder='Seleccione' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='administracion'>
                        Administración
                      </SelectItem>
                      <SelectItem value='rrhh'>Recursos Humanos</SelectItem>
                      <SelectItem value='finanzas'>Finanzas</SelectItem>
                      <SelectItem value='ti'>Tecnología</SelectItem>
                      <SelectItem value='marketing'>Marketing</SelectItem>
                      <SelectItem value='ventas'>Ventas</SelectItem>
                      <SelectItem value='operaciones'>Operaciones</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='fecha-limite'>Fecha límite</Label>
                <Input id='fecha-limite' type='date' required />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='observaciones'>Observaciones adicionales</Label>
                <Textarea
                  id='observaciones'
                  placeholder='Información adicional relevante para los proveedores'
                  rows={3}
                />
              </div>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <Button
                variant='outline'
                type='button'
                onClick={() => router.back()}
              >
                Cancelar
              </Button>
              <Button type='submit' disabled={isLoading}>
                {isLoading ? 'Publicando...' : 'Publicar solicitud'}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  )
}
