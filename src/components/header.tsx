import { Package } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className='w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50'>
      <div className='container-custom flex h-16 items-center justify-between'>
        <Link className='flex items-center gap-2' href='/'>
          <Package className='h-6 w-6 text-secondary' />
          <span className='text-xl font-bold logo-text'>SupplyConnect</span>
        </Link>
        <nav className='hidden md:flex items-center gap-6'>
          <Link
            href='#features'
            className='text-sm font-medium hover:text-primary/80 transition-colors'
          >
            Características
          </Link>
          <Link
            href='#how-it-works'
            className='text-sm font-medium hover:text-primary/80 transition-colors'
          >
            Cómo funciona
          </Link>
          <Link
            href='#testimonials'
            className='text-sm font-medium hover:text-primary/80 transition-colors'
          >
            Testimonios
          </Link>
          <Link
            href='#about'
            className='text-sm font-medium hover:text-primary/80 transition-colors'
          >
            Nosotros
          </Link>
          <Link
            href='#contact'
            className='text-sm font-medium hover:text-primary/80 transition-colors'
          >
            Contacto
          </Link>
        </nav>
        <div className='flex items-center gap-4'>
          <Link href='/login'>
            <Button variant='outline'>Iniciar sesión</Button>
          </Link>
          <Link href='/register'>
            <Button>Registrarse</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
