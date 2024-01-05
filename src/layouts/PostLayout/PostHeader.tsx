import PageTitle from '@/components/PageTitle'
import Image from 'next/image'
import Bleed from 'pliny/ui/Bleed'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

type Props = {
  title: string
  date: string
  locale: string
  bannerImage?: string
  readingTime: { text: string }
}

export const PostHeader = ({ title, date, locale, bannerImage, readingTime }: Props) => {
  return (
    <header className="pt-6 xl:pb-6">
      <div className="space-y-1 text-center">
        <dl className="space-y-10">
          <div>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 ">
              <time dateTime={date}>
                {new Date(date).toLocaleDateString(locale, postDateTemplate)}
              </time>
            </dd>
          </div>
        </dl>
        {bannerImage && (
          <div className="w-full">
            <Bleed>
              <div className="relative aspect-[1/1] w-full sm:aspect-[1.5/1] md:aspect-[2/1] lg:aspect-[2.5/1] xl:aspect-[3/1]">
                <Image src={bannerImage} alt={title} fill className="object-contain" />
              </div>
            </Bleed>
          </div>
        )}
        <div>
          <PageTitle>{title}</PageTitle>
        </div>
        <div className="flex justify-center p-2 text-sm text-gray-500">
          <span>{readingTime.text}</span>
        </div>
      </div>
    </header>
  )
}
