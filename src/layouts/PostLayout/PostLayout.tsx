import Comments from '@/components/Comments'
import Link from '@/components/Link'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'
import siteMetadata, { locale } from '@/data/siteMetadata'
import type { Authors, Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import { ReactNode } from 'react'
import { PostAuthors } from './Authors/PostAuthors'
import { NextPost } from './NextPost'
import { PostHeader } from './PostHeader'
import { PreviousPost } from './PreviousPost'
import { TableOfContents } from './TableOfContents/TableOfContents'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

interface LayoutProps {
  content: CoreContent<Blog>
  headings: unknown
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({
  content,
  headings,
  authorDetails,
  next,
  prev,
  children,
}: LayoutProps) {
  const { filePath, path, slug, date, title, tags, bannerImage, readingTime } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="md: md:divide-y md:divide-gray-200">
          <PostHeader
            title={title}
            date={date}
            locale={siteMetadata.locale}
            bannerImage={bannerImage}
          />
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
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8  md:grid md:grid-cols-6 md:gap-x-6 md:divide-y-0">
            <div className="top-0 self-start  p-2 md:sticky md:col-span-2 md:col-start-5 md:row-span-full md:row-start-1">
              <div className="rounded-xl border border-solid">
                <div className="p-2">
                  <TableOfContents nodes={headings} />
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-200  md:col-span-4 md:row-span-2 md:pb-0">
              <div className="prose max-w-none pb-8 pt-10 ">{children}</div>
              <div className="flex flex-row items-center justify-between py-4 md:py-8">
                {tags && (
                  <div>
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 ">Tags</h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                <Link
                  href={`/${basePath}`}
                  className="text-primary-500 hover:text-primary-600 "
                  aria-label="Back to the blog"
                >
                  &larr; Back to the blog
                </Link>
              </div>
              <div className="divide-gray-200 text-sm font-medium leading-5  md:col-start-1 md:row-start-2 md:divide-y">
                {(next || prev) && (
                  <div className="flex flex-row justify-between py-4 md:block md:space-y-8 md:py-8">
                    <PreviousPost prev={prev} />
                    <NextPost next={next} />
                  </div>
                )}
              </div>
              <div className="pb-6 pt-6 text-sm text-gray-700 ">
                <Link href={discussUrl(path)} rel="nofollow">
                  Discuss on Twitter
                </Link>
                {` • `}
                <Link href={editUrl(filePath)}>View on GitHub</Link>
              </div>
              {siteMetadata.comments && (
                <div className="pb-6 pt-6 text-center text-gray-700 " id="comment">
                  <Comments slug={slug} />
                </div>
              )}
            </div>

            <footer></footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
