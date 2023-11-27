import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import ContactForm from '@/components/ContactForm'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/Accordion'
import { tenRules } from '@/lib/ten-rules'
import AccordionSection from '@/components/AccordionSection'

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
        {/* <Slider /> */}
        <p className="mx-8 mb-8 border border-x-[1px] border-y-[1px] border-dashed border-[#342E24] text-center text-lg italic">
          Сприймайте звернення до психолога як крок до покращення загального
          самопочуття. Звернутися за допомогою це не слабкість, a мудрість та
          здорове ставлення до власного благополуччя i здоров'я.
        </p>
        <p
          className={cn(
            inter.className,
            'h-fit px-16 text-center text-lg italic'
          )}
        >
          Пережиття втрати є одним з найбільш сумних і болісних випробувань на
          дорозі життя. Ми не можемо обійти цих випробувань, як і не можемо
          зробити біль втрати меншим - бо цей біль є виявом любові до тих, хто
          дорогий нашому серцю і кого уже нема з нами. Втім ми потребуємо
          підтримки рідних і близьких, щоб розділити цей біль, потребуємо
          зв'язку з нашими ресурсами і цінностями - щоби віднайти сили далі
          творити життя, бережучи в серці пам'ять про тих, кого любимо і хто
          відійшов з цього світу...
        </p>
        <div className="mx-auto my-8 w-[840px] border-b border-[#342E24]" />
        <p
          className={cn(
            inter.className,
            'h-fit px-16 text-center text-lg italic'
          )}
        >
          Через повномасштабне вторгнення з втратою рідних зіштовхнулися багато
          українських родин. За словами психотерапевтів, загибель близької
          людини — особиста трагедія і горе, яке потребує часу та внутрішніх
          ресурсів.
        </p>
        <div className="mx-auto my-8 w-[840px] border-b border-[#342E24]" />
      </section>
      <AccordionSection />
      <section className="mb-12 flex flex-col gap-12">
        <h3 className="text-center text-5xl font-bold">
          Якщо Ви відчуваєте що є чим поділитись, спробуйте консультацію зі
          спеціалістом
        </h3>
        <ContactForm />
      </section>
    </>
  )
}
