// app/blog/[slug]/page.tsx
import BlogPostPage from "./BlogPostPage"

interface PageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return [
    { slug: "first-post" },
    { slug: "second-post" },
    // or dynamically load from your data source
  ]
}

export default function Page({ params }: PageProps) {
  return <BlogPostPage slug={params.slug} />
}
