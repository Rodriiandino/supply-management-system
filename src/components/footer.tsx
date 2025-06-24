'use client'

import Link from 'next/link'
import { Separator } from './ui/separator'
import { Facebook, Instagram, Linkedin, Package, Twitter } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  return (
    <footer className='bg-background border-t py-12'>
      <div className='container-custom px-4 md:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <Package className='h-6 w-6 text-secondary' />
              <span className='text-xl font-bold logo-text'>SupplyConnect</span>
            </div>
            <p className='text-sm text-muted-foreground'>
              Plataforma innovadora que conecta empresas con proveedores de
              manera eficiente y transparente.
            </p>
            <div className='flex space-x-4'>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <Facebook className='h-5 w-5' />
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <Twitter className='h-5 w-5' />
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <Linkedin className='h-5 w-5' />
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <Instagram className='h-5 w-5' />
              </Link>
            </div>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Enlaces rápidos</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href={isHome ? '#features' : '/#features'}
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Características
                </Link>
              </li>
              <li>
                <Link
                  href={isHome ? '#how-it-works' : '/#how-it-works'}
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link
                  href={isHome ? '#testimonials' : '/#testimonials'}
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link
                  href={isHome ? '#about' : '/#about'}
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  href={isHome ? '#contact' : '/#contact'}
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Recursos</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Guías y tutoriales
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Soporte
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  API para desarrolladores
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Legal</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Términos de servicio
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className='my-8' />

        <div className='flex flex-col md:flex-row justify-between items-center'>
          <p className='text-sm text-muted-foreground text-center'>
            &copy; {new Date().getFullYear()} SupplyConnect. Todos los derechos
            reservados.
          </p>
          <div className='flex gap-4 mt-4 md:mt-0'>
            <Link
              href='#'
              className='text-xs text-muted-foreground hover:underline'
            >
              Términos
            </Link>
            <Link
              href='#'
              className='text-xs text-muted-foreground hover:underline'
            >
              Privacidad
            </Link>
            <Link
              href='#'
              className='text-xs text-muted-foreground hover:underline'
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
