'use client'

import { useEffect, useState, FC } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'

const inter = Inter({ display: 'swap', subsets: ['latin'] })

const stories = [
  {
    text: 'Я завжди переживала та увесь час підтримувала брата під час його служби, звернулася до психолога, коли почали помічати постійну тривогу та нервозність. Консультації психолога стали для мене способом знайти засоби подолання стресу. Вони допомогли мені краще розуміти ситуації та знайти шляхи зменшення тривоги, що важливо для нашого загального самопочуття.',
    author: 'Вікторія, 25 років',
  },
  {
    text: "Старша сестра, яка була для мене як опора вирішила піти медиком на війну аби допомагати нашим бійцям, з часом я не витримала і звернулася до психолога через постійний стан тривоги та напруження. Після консультацій я відчула, що навчилась краще контролювати власні емоції та знаходжу більше спокою в повсякденних ситуаціях. Це допомогло мені підтримувати стабільніше емоційне здоров'я та подолати постійну тривожність.",
    author: 'Катерина, 21 рік',
  },
  {
    text: 'Мій коханий чоловік пішов до лав ЗСУ, а мене відправив за кордон ще на самому початку війни. Кожен день в серці навертається тривога за його безпеку. Страх, що щось може трапитися, почав переважати. Одного разу я вирішила звернутися до психолога. Спілкування з ним допомогло мені зменшити тривогу, знайти способи краще контролювати стан напруження. Це допомогло мені підтримати свій емоційний стан та відчути більшу впевненість у собі, відколи я змогла краще розуміти та приймати зміни.',
    author: 'Світлана, 28 років',
  },
  {
    text: "Мій син служить на передовій, а я, як мати, постійно турбуюсь за його безпеку. Чекати на повернення дитини з війни — це завжди стан тривоги. Щодня відчувається страх та неспокій. Одного разу я звернулася до психолога. Його консультації допомогли мені знайти способи краще керувати своїми емоціями, зменшити постійний напружений стан. Це допомогло мені підтримати моє емоційне здоров'я та краще справлятися з неспокоєм за сина.",
    author: 'Надія, 49 років',
  },
]

const Slider: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleArrowLeft = () => setActiveIndex((prevState) => prevState - 1)
  const handleArrowRight = () => setActiveIndex((prevState) => prevState + 1)
  const handlePagination = (index: number) => setActiveIndex(index)

  useEffect(() => {
    if (activeIndex > stories.length - 1) {
      setActiveIndex(0)
    }

    if (activeIndex < 0) {
      setActiveIndex(stories.length - 1)
    }
  }, [activeIndex])

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex((prevState) => prevState + 1),
      5000
    )

    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <div className="w-full px-8">
      <h1 className="mb-4 text-center text-3xl font-bold">
        {'Вже звернулися і впоралися'}
      </h1>
      <div className={cn('ralative flex gap-4', inter.className)}>
        <button
          type="button"
          onClick={handleArrowLeft}
          className="order-1 flex-8 hover:bg-stone-500"
        >
          <ChevronLeft width={24} height={24} />
        </button>
        <div className="order-2 flex h-fit max-h-[320px] grow overflow-hidden">
          {stories.map((story, index) => (
            <div
              key={story.author}
              className={cn(
                'h-0 w-0 opacity-0 transition-opacity duration-300',
                {
                  'h-full w-full opacity-100': activeIndex === index,
                }
              )}
            >
              <p
                className="flex h-[120px] items-center text-center"
                key={index}
              >
                {story.text}
              </p>
              <div className="mx-auto w-[240px] border border-[#0C090A]"></div>
              <p className="mx-auto flex h-[32px] items-center justify-center text-center italic">
                {story.author}
              </p>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={handleArrowRight}
          className="order-3 flex-8 hover:bg-stone-500"
        >
          <ChevronRight width={24} height={24} />
        </button>
      </div>
      <div className="order-4 flex h-[30px] justify-center gap-4 self-start">
        {stories.map((_, index) => (
          <button
            type="button"
            aria-label="pagination-item"
            key={index}
            className={cn(
              'mt-4 h-1 w-[14px] bg-[#615745] transition-all duration-300 hover:bg-[#0C090A]',
              {
                'bg-[#0C090A]': activeIndex === index,
              }
            )}
            onClick={() => handlePagination(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
