"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { blogPosts } from "@/data/blog-posts"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Languages, Moon, Share2, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import ReactMarkdown from "react-markdown"
import { cn } from "@/lib/utils"
import "../blog.css"

export default function BlogPostPage({ slug }: { slug: string }) {
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    if (mounted) {
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    }
  }, [language, mounted])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  if (!mounted) return null

  return (
    <div
      className={cn(
        "min-h-screen bg-white dark:bg-black text-neutral-800 dark:text-neutral-200 p-6",
        language === "ar" && "font-arabic",
      )}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-4xl mx-auto">
        {/* Navigation and controls */}
        <div className="mb-8 flex justify-between items-center">
          <Link href="/blog">
            <Button variant="ghost" className="group">
              <ArrowLeft
                className={cn(
                  "h-4 w-4 transition-transform",
                  language === "en" ? "mr-2 group-hover:-translate-x-1" : "ml-2 flip-in-rtl group-hover:translate-x-1",
                )}
              />
              {t("backToBlog")}
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleLanguage}>
              <Languages className="h-5 w-5" />
              <span className="sr-only">Toggle language</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>

        {/* Article Header */}
        <article>
          <header className={language === "ar" ? "text-right" : "text-left"}>
            <h1 className={cn("text-3xl md:text-4xl font-bold mb-4", language === "ar" && "font-arabic")}>
              {post.title[language]}
            </h1>
            <div
              className={`flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-6 ${language === "ar" ? "justify-end" : "justify-start"}`}
            >
              <div className="flex items-center gap-1 flex-row-reverse">
                <span>{new Date(post.date).toLocaleDateString(language === "en" ? "en-US" : "ar-EG")}</span>
                <Calendar className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-1 flex-row-reverse">
                <span>
                  {post.readingTime[language]} {t("minuteRead")}
                </span>
                <Clock className="h-4 w-4" />
              </div>
              <span className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-md">{post.category[language]}</span>
            </div>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-8">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title[language]}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </header>

          {/* Article Content */}
          <div
            className={cn(
              "prose dark:prose-invert max-w-none prose-headings:font-mono prose-headings:font-semibold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-xl blog-content",
              language === "ar" && "rtl-content",
            )}
          >
            <ReactMarkdown>{post.content[language]}</ReactMarkdown>
          </div>

          {/* Tags */}
          <div
            className={cn(
              "mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800",
              language === "ar" ? "text-right" : "text-left",
            )}
          >
            <div className={`flex flex-wrap gap-2 ${language === "ar" ? "justify-end" : "justify-start"}`}>
              {post.tags[language].map((tag, index) => (
                <span
                  key={index}
                  className="blog-tag bg-neutral-100 text-neutral-800 text-sm font-medium px-2.5 py-0.5 rounded-md transition-colors duration-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className={cn("mt-8", language === "ar" ? "flex justify-start" : "flex justify-end")}>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              {t("sharePost")}
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}

