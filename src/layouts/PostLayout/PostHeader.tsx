import PageTitle from '@/components/PageTitle'
import Image from 'next/image'
import Bleed from 'pliny/ui/Bleed'

type Props = {
  title: string
  date: string
  locale: string
  bannerImage?: string
}

export const PostHeader = ({ title, date, locale, bannerImage }: Props) => {
  return (
    <header className="pt-6 xl:pb-6">
      <div className="space-y-1 text-center">
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
      </div>
    </header>
  )
}
