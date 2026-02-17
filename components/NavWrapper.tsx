'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

export default function NavWrapper() {
  const pathname = usePathname()

  // Hide the default navbar on /b routes (Version B has its own nav)
  if (pathname.startsWith('/b')) {
    return null
  }

  return <Navbar />
}
