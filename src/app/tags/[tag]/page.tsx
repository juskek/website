import siteMetadata from '@/data/siteMetadata'
import { allBlogs } from 'contentlayer/generated'
import { slug } from 'github-slugger'
import { Metadata } from 'next'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'src/app/seo'
import tagData from 'src/app/tag-data.json'
import ListLayout from 'src/layouts/ListLayoutWithTags'

export async function generateMetadata(props: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const params = await props.params
  const tag = decodeURI(params.tag)
  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  })
}

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const paths = tagKeys.map((tag) => ({
    tag: encodeURI(tag),
  }))
  return paths
}

export default async function TagPage(props: { params: Promise<{ tag: string }> }) {
  const params = await props.params
  const tag = decodeURI(params.tag)
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const visiblePosts = allBlogs.filter((blog) => blog.hidden !== true)
  const sortedPosts = sortPosts(
    visiblePosts.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag))
  )
  const filteredPosts = allCoreContent(sortedPosts)
  return <ListLayout posts={filteredPosts} title={title} />
}
