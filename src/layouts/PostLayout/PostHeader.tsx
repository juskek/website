import PageTitle from '@/components/PageTitle'
import type { Authors } from 'contentlayer/generated'
import Image from 'next/image'
import { CoreContent } from 'pliny/utils/contentlayer'
import { PostAuthors } from './Authors/PostAuthors'

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
  authorDetails: CoreContent<Authors>[]
  readingTime: { text: string }
}

export const PostHeader = ({
  title,
  date,
  locale,
  bannerImage,
  authorDetails,
  readingTime,
}: Props) => {
  return (
    <header className="pt-6 xl:pb-6">
      <div className="space-y-1">
        <PageTitle>{title}</PageTitle>
        <div className="col-span-4 col-start-1 row-start-2">
          <div className="flex flex-row items-center justify-between">
            <PostAuthors authorDetails={authorDetails} />
            <div className="flex flex-col items-end">
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
              <div className="flex justify-center p-2 text-sm text-gray-500">
                <span>{readingTime.text}</span>
              </div>
            </div>
          </div>
        </div>

        {bannerImage && (
          <div className="w-full bg-black">
            <div className="relative aspect-[1/1] w-full sm:aspect-[1.5/1] md:aspect-[2/1] lg:aspect-[2.5/1] xl:aspect-[3/1]">
              <Image src={bannerImage} alt={title} fill className="object-cover" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
