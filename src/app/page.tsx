import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { HomePage } from 'src/features/HomePage/HomePage'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const visiblePosts = sortedPosts.filter((blog) => blog.hidden !== true)
  const posts = allCoreContent(visiblePosts)
  return <HomePage posts={posts} />
}
