'use client'
import { Package } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  return (
    <header className='w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50'>
      <div className='container-custom flex h-16 items-center justify-between'>
        <Link className='flex items-center gap-2' href='/'>
          <Package className='h-6 w-6 text-secondary' />
          <span className='text-lg md:text-xl font-bold logo-text'>
            SupplyConnect
          </span>
        </Link>
        <nav className='hidden lg:flex items-center gap-6'>
          <Link
            href={isHome ? '#features' : '/#features'}
            className='text-sm font-medium hover:text-primary/80 transition-colors'
          >
            Características
          </Link>
          <Link
            href={isHome ? '#how-it-works' : '/#how-it-works'}
            className='text-sm font-medium hover:text-primary/80 transition-colors'
          >
            Cómo funciona
          </Link>
          <Link
            href={isHome ? '#testimonials' : '/#testimonials'}
            className='text-sm font-medium hover:text-primary/80 transition-colors'
          >
            Testimonios
          </Link>
          <Link
            href={isHome ? '#about' : '/#about'}
            className='text-sm font-medium hover:text-primary/80 transition-colors'
          >
            Nosotros
          </Link>
          <Link
            href={isHome ? '#contact' : '/#contact'}
            className='text-sm font-medium hover:text-primary/80 transition-colors'
          >
            Contacto
          </Link>
        </nav>
        <div className='flex items-center gap-1 sm:gap-2 md:gap-4'>
          <Link href='/login'>
            <Button
              variant='outline'
              size={'sm'}
              className='text-xs px-2 sm:px-3 md:text-sm'
            >
              <span className='hidden sm:inline'>Iniciar sesión</span>
              <span className='inline sm:hidden'>Entrar</span>
            </Button>
          </Link>
          <Link href='/register'>
            <Button size={'sm'} className='text-xs px-2 sm:px-3 md:text-sm'>
              <span className='hidden sm:inline'>Registrarse</span>
              <span className='inline sm:hidden'>Registro</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
