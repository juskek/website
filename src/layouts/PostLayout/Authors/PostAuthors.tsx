import type { Authors } from 'contentlayer/generated'
import Image from 'next/image'
import { CoreContent } from 'pliny/utils/contentlayer'
import { AuthorOccupationLinkedIn } from './AuthorOccupationLinkedIn'
import { AuthorTwitter } from './AuthorTwitter'
type Props = {
  authorDetails: CoreContent<Authors>[]
}
export const PostAuthors = ({ authorDetails }: Props) => {
  return (
    <dl className="pb-10 pt-6 xl:pt-11">
      <dt className="sr-only">Authors</dt>
      <dd>
        <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
          {authorDetails.map((author) => (
            <li className="flex items-center space-x-2" key={author.name}>
              {author.avatar && (
                <Image
                  src={author.avatar}
                  width={38}
                  height={38}
                  alt="avatar"
                  className="h-10 w-10 rounded-full"
                />
              )}
              <dl className="whitespace-nowrap text-sm font-medium leading-5">
                <dt className="sr-only">Name</dt>
                <dd className="text-gray-900 ">{author.name}</dd>
                <AuthorTwitter author={author} />
                <AuthorOccupationLinkedIn author={author} />
              </dl>
            </li>
          ))}
        </ul>
      </dd>
    </dl>
  )
}
