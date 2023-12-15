import { allBlogs } from 'contentlayer/generated'
import { HomePage } from 'features/HomePage/HomePage'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <HomePage posts={posts} />
}
