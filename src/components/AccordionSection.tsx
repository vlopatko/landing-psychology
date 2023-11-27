'use client'

import { tenRules } from '@/lib/ten-rules'
import { FC } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'

const inter = Inter({ display: 'swap', subsets: ['latin'] })

const AccordionSection: FC = () => {
  return (
    <section className="mb-12 flex flex-col items-center px-24 text-lg">
      <h2 className="mb-6 text-center text-2xl italic">
        {
          '10 порад, що можуть допомогти більш безпечно для ментального здоровʼя пережиту втрату.'
        }
      </h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl">
        {tenRules.map(({ title, description }, index) => (
          <AccordionItem
            key={title}
            value={title}
            className="min-w-full max-w-3xl border-[#342E24]"
          >
            <AccordionTrigger>{`${index + 1}. ${title}`}</AccordionTrigger>
            <AccordionContent className={cn(inter.className, 'max-w-2xl')}>
              <p className="text-base italic">{description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default AccordionSection
