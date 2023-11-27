'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AlignJustify, HeartHandshake } from 'lucide-react'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({ display: 'swap', subsets: ['latin'] })

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const literature = [
    {
      name: 'Мами',
      author: 'Марія Матіос',
    },
    {
      name: '1984',
      author: 'Джордж Оруєл',
    },
    {
      name: 'Батьки 24/7',
      author: 'Марія Малихіна',
    },
  ]

  return (
    <div className="sticky left-0 top-0 z-50 flex items-center justify-between bg-[#898A60] px-8 py-4 text-xl">
      <div className="mr-4">
        <Link href="/">
          <HeartHandshake className="h-8 w-8" />
        </Link>
      </div>

      <nav className="flex flex-grow justify-center text-2xl">
        <Link href="/" className="mx-4">
          Головна
        </Link>
        <Link href="/articles" className="mx-4">
          Статі
        </Link>
      </nav>

      <button className="block focus:outline-none" onClick={toggleMenu}>
        <AlignJustify className="h-6 w-6" />
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-full w-72 transform flex-col items-start justify-between border-b border-r border-t border-[#0C090A] bg-[#A9A494] transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 px-6 py-4">
          <h2 className="mb-4 w-full border-b border-[#0C090A] pb-2 text-2xl font-bold">
            Меню
          </h2>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="mx-4">
              Головна
            </Link>
            <Link href="/articles" className="mx-4">
              Статі
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-6 px-6 py-4">
          <h2 className="mb-4 w-full border-b border-[#0C090A] pb-2 text-2xl font-bold">
            Рекомендована Література
          </h2>
          <div
            className={cn(
              inter.className,
              'flex flex-col items-start gap-4 px-6'
            )}
          >
            {literature.map(({ name, author }) => (
              <>
                <div key={name} className="mx-4 text-base italic">
                  <p>{`"${name}"`}</p>
                  <p>{author}</p>
                </div>
                <div className="mx-auto w-full border-b border-[#342E24] px-8" />
              </>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Header
