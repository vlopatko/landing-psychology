import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Slider from '@/components/Slider'
import ContactForm from '@/components/ContactForm'

const inter = Inter({ display: 'swap', subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="flex w-full justify-between px-8">
        <div
          className={cn(
            inter.className,
            'mt-24 flex h-fit max-w-lg flex-col justify-center gap-4 text-lg'
          )}
        >
          <h3 className={cn('mb-4 text-center text-5xl font-bold')}>
            Psychology Help
          </h3>
          <p className="text-center italic">
            Цей сайт призначений для військових, їх сімей та людей які їх
            оточують, котрі відчувають що потребують допомоги зі своїм психічним
            та ментальним здоров'ям.
          </p>
          <div className="mx-auto w-[360px] border-b border-[#342E24]" />
          <p className="text-center italic">
            Сім'ям воїнів важливо розуміти, що звернення до психолога не є
            ознакою слабкості. Події, які пов'язані з війною, можуть залишити
            глибокий слід на психічному стані i внутрішньому самопочутті. Стрес,
            тривога та посттравматичний стресовий розлад можуть виникнути через
            важкі ситуації, які пережили члени сімей військовослужбовців.
          </p>
        </div>
        <div className="relative my-8 mb-8 h-[640px] w-[528px]">
          <div className="absolute right-0 z-10 box-border flex h-[583px] w-[480px] border border-[#342E24]">
            <Image
              src={'/sonBackground.png'}
              alt="son like solder in military"
              width={480}
              height={583}
            />
          </div>
          <div className="absolute left-0 top-[48px] z-0 flex h-[583px] w-[480px] bg-[#342E24]"></div>
        </div>
      </div>
      <section>
        <Slider />
        <p className="mx-8 mt-16 border border-x-[1px] border-y-[1px] border-dashed border-[#342E24] text-center text-lg italic">
          Сприймайте звернення до психолога як крок до покращення загального
          самопочуття. Звернутися за допомогою це не слабкість, a мудрість та
          здорове ставлення до власного благополуччя i здоров'я.
        </p>
      </section>
      <section className="mb-12 mt-24">
        <h3 className="mb-12 text-center text-5xl font-bold">
          Якщо Ви відчуваєте що є чим поділитись, спробуйте консультацію зі
          спеціалістом
        </h3>
        <ContactForm />
      </section>
    </>
  )
}
