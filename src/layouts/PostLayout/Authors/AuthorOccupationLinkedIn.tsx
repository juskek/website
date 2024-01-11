import type { Authors } from 'contentlayer/generated'
import Link from 'next/link'
import { CoreContent } from 'pliny/utils/contentlayer'

type Props = {
  author: CoreContent<Authors>
}

export const AuthorOccupationLinkedIn = ({ author }: Props) => {
  return (
    <>
      <dt className="sr-only">Twitter</dt>
      <dd>
        {author.occupation && author.linkedin && (
          <Link href={author.linkedin} className="text-gray-500 hover:text-gray-600 ">
            {author.occupation}
          </Link>
        )}
      </dd>
    </>
  )
}
