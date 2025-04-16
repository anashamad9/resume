"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { blogPosts } from "@/data/blog-posts"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Languages, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import "./blog.css"

export default function BlogPage() {
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // After mounting, we have access to the language
  React.useEffect(() => setMounted(true), [])

  // Set the document direction based on language
  React.useEffect(() => {
    if (mounted) {
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    }
  }, [language, mounted])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  if (!mounted) {
    return null
  }

  return (
    <div
      className={cn(
        "min-h-screen bg-white dark:bg-black text-neutral-800 dark:text-neutral-200 p-6",
        language === "ar" && "font-arabic",
      )}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header with language and theme toggles */}
        <div className="mb-12">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ArrowLeft className={cn("h-5 w-5", language === "ar" && "flip-in-rtl")} />
                  <span className="sr-only">{t("backToHome")}</span>
                </Button>
              </Link>
              <h1 className={cn("text-4xl font-mono", language === "ar" && "font-arabic")}>{t("myBlog")}</h1>
            </div>
            <div className="flex gap-2 flex-row">
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
          <p
            className={cn(
              "text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl",
              language === "ar" ? "text-right" : "text-left",
            )}
          >
            {t("blogIntro")}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <div className="blog-card border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-neutral-300 hover:shadow-md dark:hover:border-neutral-700 dark:hover:shadow-md h-full flex flex-col">
                <div className="relative aspect-video w-full">
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title[language]}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div
                    className={`flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-3 ${language === "ar" ? "justify-end" : "justify-start"} flex-wrap`}
                  >
                    <span className="blog-tag bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-md">
                      {post.category[language]}
                    </span>
                    <div className="flex items-center gap-1 flex-row-reverse">
                      <span>{new Date(post.date).toLocaleDateString(language === "en" ? "en-US" : "ar-EG")}</span>
                      <Calendar className="h-3 w-3" />
                    </div>
                    <div className="flex items-center gap-1 flex-row-reverse">
                      <span>
                        {post.readingTime[language]} {t("minuteRead")}
                      </span>
                      <Clock className="h-3 w-3" />
                    </div>
                  </div>
                  <h2
                    className={cn(
                      "text-xl font-semibold mb-2 group-hover:text-neutral-900 dark:group-hover:text-neutral-100",
                      language === "ar" ? "text-right" : "text-left",
                    )}
                  >
                    {post.title[language]}
                  </h2>
                  <p
                    className={`text-neutral-600 dark:text-neutral-400 mb-4 flex-1 ${language === "ar" ? "text-right" : "text-left"}`}
                  >
                    {post.excerpt[language]}
                  </p>
                  <div
                    className={`text-neutral-900 dark:text-neutral-100 font-medium group-hover:underline flex items-center ${language === "ar" ? "justify-end" : "justify-start"}`}
                  >
                    {language === "en" ? (
                      <>
                        {t("readMore")} <span className="blog-arrow ml-1">→</span>
                      </>
                    ) : (
                      <>
                        <span className="blog-arrow mr-1">←</span> {t("readMore")}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
