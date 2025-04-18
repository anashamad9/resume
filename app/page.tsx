"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Briefcase,
  GraduationCap,
  Lightbulb,
  Mail,
  Moon,
  MapPin,
  Sun,
  User,
  Folder,
  Phone,
  Languages,
  Book,
} from "lucide-react"
import { Linkedin, Github, Twitter } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "../contexts/language-context"
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("about")

  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  return (
    <div
      id="about"
      className={cn(
        "min-h-screen bg-white dark:bg-black text-neutral-800 dark:text-neutral-200 p-6",
        language === "ar" && "font-arabic",
      )}
      style={language === "ar" ? { fontFamily: '"IBM Plex Sans Arabic", sans-serif' } : {}}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8">
          {/* Left Sidebar */}
          <div className="lg:sticky lg:top-6 h-fit space-y-8">
            {/* Profile Header */}
            <div className="flex items-center justify-between gap-8">
              <div className="flex items-center gap-4 group">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4D03AQG8O6QLXP-0Lg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705436353196?e=1750291200&v=beta&t=cadi9ieLU2QczqtmX-ykFFO3Cnufa7YYNN06rfnX2gg"
                  alt="Anas Hamad"
                  width={60}
                  height={60}
                  className="rounded-full transition-transform duration-300 group-hover:scale-105"
                />
                <div>
                  <h1 className="text-2xl font-mono">Anas Hamad</h1>
                  <p className="text-neutral-600 dark:text-neutral-400">{t("role")}</p>
                </div>
              </div>
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

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">{t("bio")}</p>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  className="rounded-lg transition-all duration-900 hover:bg-white hover:text-black bg-blue-700 text-white dark:bg-blue-700 dark:text-white dark:hover:bg-black"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/uc?export=download&id=1oTP0lZHacZBxPwKt5dyz_qYcWjJ5kp1_",
                      "_blank",
                    )
                  }}
                >
                  {t("downloadResume")}
                </Button>
                <Button
                  variant="outline"
                  className="rounded-lg transition-all duration-900 bg-white-600 hover:bg-blue-700 text-black hover:text-white dark:bg-black-200 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white"
                  onClick={() => {
                    window.location.href = "/blog"
                  }}
                >
                  {t("blog")}
                </Button>
              </div>
            </div>

            {/* Contact Info in Sidebar */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <Mail className="h-4 w-4" />
                <span>
                  <a
                    href="mailto:hi.anashamad@gmail.com"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100"
                  ></a>
                  hi.anashamad@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <MapPin className="h-4 w-4" />
                <span>{t("location")}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <Phone className="h-4 w-4" />
                <span>
                  {" "}
                  <a href="tel:+962795874662" className="hover:text-neutral-900 dark:hover:text-neutral-100"></a>
                  00962-795874662
                </span>
              </div>
            </div>
            {/* Keywords Section */}

            <div className="space-y-4">
              <h2 className="text-xl font-mono">{t("coreTechnologies")}</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Data Cleaning",
                  "Deep Learning",
                  "Natural Language Processing",
                  "Data Analysis",
                  "AI Model Development",
                  "LLMs",
                  "Fine Tuning",
                  "RAG",
                  "Data Manipulation",
                  "CI/CD",
                  "Cloud Computing",
                  "AWS",
                ].map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-neutral-100 text-neutral-800 text-sm font-medium px-2.5 py-0.5 rounded-md transition-colors duration-900 hover:bg-blue-700 hover:text-white dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-blue-700"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <div className="flex gap-4">
                {[
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/anas-hamad1909/",
                  },
                  { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/anashamad9" },
                  { icon: <Twitter className="w-5 h-5" />, label: "X", href: "https://x.com/its_anas9" },
                  {
                    icon: (
                      <Image
                        src="https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo-pirate.svg"
                        alt="Hugging Face"
                        width={20}
                        height={20}
                      />
                    ),
                    label: "Hugging Face",
                    href: "https://huggingface.co/anashamad",
                  },
                  {
                    icon: (
                      <Image src="https://cdn.iconscout.com/icon/free/png-256/free-kaggle-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-4-pack-logos-icons-3146903.png" alt="Kaggle" width={20} height={20} />
                    ),
                    label: "Kaggle",
                    href: "https://www.kaggle.com/anasbassam",
                  },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="transition-all duration-300 hover:scale-110 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    asChild
                  >
                    <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      {social.icon}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Experience Section */}
            <section
              id="experience"
              className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm"
            >
              <h2 className="text-2xl font-mono mb-6">{t("experience")}</h2>
              <div className="space-y-8">
                {[
                  {
                    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGPl1x6qIu9Ww/company-logo_200_200/B4DZWPKgYhGcAI-/0/1741863653569/onqoud1_logo?e=1750291200&v=beta&t=c1cICD9IeGJl5_7lezJomF6nQMwk5SIHzH9DZUlGAic",
                    role: t("aiProductDev"),
                    company: "@Onqoud",
                    period: "2024 - now",
                    description: t("aiProductDevDesc"),
                  },
                  {
                    logo: "https://framerusercontent.com/images/1tm1waPbgpItjuf1cKjZekKkYYw.jpeg",
                    role: t("aiMlInternship"),
                    company: "@ShAI for AI",
                    period: "06/2024 - 10/2024",
                    description: t("aiMlInternshipDesc"),
                  },
                  {
                    logo: "https://framerusercontent.com/images/aB7I3zGWfTnmxvFDbkJ8s5Qqf1w.jpg?scale-down-to=512",
                    role: t("pythonDevInternship"),
                    company: "@Ahli Bank",
                    period: "10/2022 - 2023/02",
                    description: t("pythonDevInternshipDesc"),
                  },
                ].map((job, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex flex-col items-start">
                      <Image
                        src={job.logo || "/placeholder.svg"}
                        alt={job.company}
                        width={48}
                        height={48}
                        className="rounded-xl border border-neutral-300 dark:border-neutral-700 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                          {job.role}
                        </h3>
                        <span className="text-neutral-500 dark:text-neutral-400 text-sm">{job.company}</span>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-2">{job.period}</p>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section
              id="education"
              className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm"
            >
              <h2 className="text-2xl font-mono mb-6">{t("education")}</h2>
              <div className="space-y-6">
                {[
                  {
                    degree: t("bachelorCompEng"),
                    university: "Balqaa Applied University",
                    period: "2020 - 2025",
                    description: t("bachelorCompEngDesc"),
                    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjN91ctlMhjwhUXgSSnWFHtUTII7PDDx0pmD7_mz0WsUUDmYj73e_CHw2QmDmP-LxugAUI44uwC9eY64c5KEPcg63kff0kiuTMyu80t-msF218uN3_b5o8E02W3WX1kRcyYHFQo3imLXBU/s1600-rw/%25D8%25AC%25D8%25A7%25D9%2585%25D8%25B9%25D8%25A9-%25D8%25A7%25D9%2584%25D8%25A8%25D9%2584%25D9%2582%25D8%25A7%25D8%25A1.jpg",
                  },
                ].map((edu, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex flex-col items-start">
                      <Image
                        src={edu.logo || "/placeholder.svg"}
                        alt={edu.university}
                        width={48}
                        height={48}
                        className="rounded-xl border border-neutral-300 dark:border-neutral-700 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                          {edu.degree}
                        </h3>
                        <span className="text-neutral-500 dark:text-neutral-400 text-sm">{edu.university}</span>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-2">{edu.period}</p>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Stack Section */}
            <section
              id="skills"
              className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-mono">{t("myStack")}</h2>
                
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Coding */}
                <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-600 dark:hover:shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">{t("coding")}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        name: "Python",
                        logo: "https://www.shareicon.net/data/2015/09/03/95038_web_512x512.png",
                        url: "https://www.python.org/",
                      },
                      {
                        name: "TensorFlow",
                        logo: "https://image.spreadshirtmedia.com/image-server/v1/compositions/T210A4PA4301PT17X56Y32D1042084122W21897H21897/views/1,width=550,height=550,appearanceId=4,backgroundColor=00224C,noPt=true/104-tensorflow-logo-mens-t-shirt.jpg",
                        url: "https://www.tensorflow.org/",
                      },
                      {
                        name: "PyTorch",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYESNrxVj4Mvlt-cEXJnNcqmItq75-kWR7g&s",
                        url: "https://pytorch.org/",
                      },

                      {
                        name: "SQL",
                        logo: "https://www.netgen.co.za/wp-content/uploads/2023/05/SQL-Database.png",
                        url: "",
                      },

                      {
                        name: "ScikitLearn",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ioErrXCaT2yZgsMaefs8irg9dRTWVk882Q&s",
                        url: "https://scikit-learn.org/stable/",
                      },

                      {
                        name: "Keras",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3G7aNWlBFrxvcqPJlFkdUqQ3mSxFokba9g&s",
                        url: "https://keras.io/",
                      },
                      {
                        name: "NumPy",
                        logo: "https://logosandtypes.com/wp-content/uploads/2024/02/NumPy.png",
                        url: "https://numpy.org/",
                      },
                      {
                        name: "Pandas",
                        logo: "https://seeklogo.com/images/P/pandas-icon-logo-BE10401BF1-seeklogo.com.png",
                        url: "https://pandas.pydata.org/",
                      },
                    ].map((tool) => (
                      <Link
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group"
                      >
                        <div className="w-12 h-12 border border-neutral-200 dark:border-neutral-700 rounded-lg mb-2 transition-all duration-300 group-hover:border-neutral-300 group-hover:shadow-sm dark:group-hover:border-neutral-600 dark:group-hover:shadow-sm overflow-hidden">
                          <Image
                            src={tool.logo || "/placeholder.svg"}
                            alt={tool.name}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                          {tool.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Tools */}
                <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-600 dark:hover:shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">{t("tools")}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        name: "Tableau",
                        logo: "https://live.staticflickr.com/979/42099499622_eca95d19b4_w.jpg",
                        url: "https://www.tableau.com/",
                      },
                      {
                        name: "PowerBI",
                        logo: "https://sc.filehippo.net/images/t_app-icon-l/p/cb69b4e3-1689-432d-9b6d-7a0f62797189/2399238384/power-bi-desktop-logo",
                        url: "https://powerbi.microsoft.com/",
                      },
                      {
                        name: "Excel",
                        logo: "https://i.pinimg.com/736x/19/92/91/1992917f382f70752f1327c6f10e0a7a.jpg",
                        url: "https://www.microsoft.com/en-us/microsoft-365/excel",
                      },
                      {
                        name: "Jupyter",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBEFAfIN6GmkRTzI_mDlRhhq67QGimI-pKFw&s",
                        url: "https://jupyter.org/",
                      },
                    ].map((tool) => (
                      <Link
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group"
                      >
                        <div className="w-12 h-12 border border-neutral-200 dark:border-neutral-700 rounded-lg mb-2 transition-all duration-300 group-hover:border-neutral-300 group-hover:shadow-sm dark:group-hover:border-neutral-600 dark:group-hover:shadow-sm overflow-hidden">
                          <Image
                            src={tool.logo || "/placeholder.svg"}
                            alt={tool.name}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                          {tool.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Deployment */}
                <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-600 dark:hover:shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">{t("deployment")}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        name: "GitHub",
                        logo: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png",
                        url: "https://github.com/",
                      },
                      {
                        name: "AWS",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR4sWGfuHCmHvYGFZVQvgRWI1CGQMSVVN2g&s",
                        url: "https://aws.amazon.com/",
                      },
                      {
                        name: "Hugging Face",
                        logo: "https://seeklogo.com/images/H/hugging-face-icon-logo-48117F3DCE-seeklogo.com.png",
                        url: "https://huggingface.co/",
                      },

                      {
                        name: "Oracle",
                        logo: "https://eu-images.contentstack.com/v3/assets/blt10e444bce2d36aa8/blte0bfa2f46eeb3f01/652652328d2fca2c26ae16f2/oracle_0.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale",
                        url: "https://www.oracle.com/jo/database/",
                      },
                    ].map((tool) => (
                      <Link
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group"
                      >
                        <div className="w-12 h-12 border border-neutral-200 dark:border-neutral-700 rounded-lg mb-2 transition-all duration-300 group-hover:border-neutral-300 group-hover:shadow-sm dark:group-hover:border-neutral-600 dark:group-hover:shadow-sm overflow-hidden">
                          <Image
                            src={tool.logo || "/placeholder.svg"}
                            alt={tool.name}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                          {tool.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-mono">{t("projects")}</h2>
                
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    name: t("onqoudProject"),
                    description: t("onqoudProjectDesc"),
                    image: "./onqoud.png",
                    link: "https://onqoud.com/",
                  },
                  {
                    name: t("ElmLLMProject"),
                    description: t("ElmLLMProjectDesc"),
                    image: "./elmllm.png",
                    link: "https://github.com/anashamad9",
                  },
                  {
                    name: t("otherProjects"),
                    description: t("otherProjectsDesc"),
                    image: "https://codeprints.dev/cdn/shop/files/2_2048x.jpg?v=1614347846",
                    link: "https://github.com/anashamad9",
                  },
                ].map((project, index) => (
                  <div
                    key={index}
                    className="relative aspect-square bg-white dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:border-neutral-300 hover:shadow-md dark:hover:border-neutral-600 dark:hover:shadow-md group"
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white dark:text-neutral-100 font-semibold mb-2">{project.name}</h3>
                      <p className="text-neutral-200 dark:text-neutral-300 text-sm mb-4">{project.description}</p>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 dark:text-blue-300 hover:text-blue-300 dark:hover:text-blue-200 transition-colors duration-300"
                      >
                        {t("viewProject")} →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certificates & Achievements Section */}
            <section className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm">
              <h2 className="text-2xl font-mono mb-6">{t("certificatesAndAchievements")}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Certificates */}
                <div>
                  <h3 className="text-neutral-500 dark:text-neutral-400 mb-4">{t("myTopCertificates")}</h3>
                  <div className="space-y-4">
                    {[
                      {
                        logo: "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/Datacamp/original.jpg?1603209616",
                        title: "Data Science & AI Track",
                        org: "DataCamp",
                        year: "2025",
                      },
                      {
                        logo: "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/Datacamp/original.jpg?1603209616",
                        title: "Machine Learning Engineering Track",
                        org: "DataCamp",
                        year: "2024",
                      },
                      {
                        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/2048px-Coursera-Logo_600x600.svg.png",
                        title: "Data Science Track",
                        org: "Coursera",
                        year: "2024",
                      },
                      {
                        logo: "https://erc-jordan.org/wp-content/uploads/2024/03/zinc.png",
                        title: "Python Fundamentals",
                        org: "Zinc",
                        year: "2022",
                      },
                    ].map((cert, index) => (
                      <div key={index} className="flex gap-3 group">
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
                          <Image
                            src={cert.logo || "/placeholder.svg"}
                            alt={cert.org}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {cert.org} - {cert.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Achievements */}
                <div>
                  <h3 className="text-neutral-500 dark:text-neutral-400 mb-4">{t("myTopAchievements")}</h3>
                  <div className="space-y-4">
                    {[
                      {
                        logo: "https://erc-jordan.org/wp-content/uploads/2024/03/psut.jpg",
                        title: t("psutProject"),
                        desc: t("psutProjectDesc"),
                      },
                      {
                        logo: "https://cdn.worldvectorlogo.com/logos/nasa-1.svg",
                        title: t("nasaCompetition"),
                        desc: t("nasaCompetitionDesc"),
                      },
                      {
                        logo: "https://irc-jordan.com/wp-content/uploads/2023/02/BIG-by-Orange.png",
                        title: t("orangeIncubator"),
                        desc: t("orangeIncubatorDesc"),
                      },
                    ].map((achievement, index) => (
                      <div key={index} className="flex gap-3 group">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
                          <Image
                            src={achievement.logo || "/placeholder.svg"}
                            alt={achievement.title}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">{achievement.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section
              id="contact"
              className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm"
            >
              <h2 className="text-2xl font-mono mb-6">{t("contact")}</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">{t("email")}</span>
                  <a
                    href="mailto:hi.anashamad@gmail.com"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100"
                  >
                    hi.anashamad@gmail.com
                  </a>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">{t("phone")}</span>
                  <a href="tel:+962795874662" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                    +962795874662
                  </a>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">{t("linkedin")}</span>
                  <a
                    href="https://www.linkedin.com/in/anas-hamad1909/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100"
                  >
                    anas-hamad1909
                  </a>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">{t("github")}</span>
                  <a
                    href="https://github.com/anashamad9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100"
                  >
                    anashamad9
                  </a>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">{t("huggingFace")}</span>
                  <a
                    href="https://huggingface.co/anashamad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100"
                  >
                    anashamad
                  </a>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">{t("twitter")}</span>
                  <a
                    href="https://x.com/its_anas9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100"
                  >
                    its_anas9
                  </a>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">{t("kaggle")}</span>
                  <a
                    href="https://www.kaggle.com/anasbassam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100"
                  >
                    anasbassam
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Fixed Navigation Bar - Fixed the RTL issues here */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full shadow-lg px-4 py-2 border border-neutral-200 dark:border-neutral-800">
        <div className={cn("flex items-center", language === "ar" ? "gap-4 rtl" : "space-x-4")}>
          {[
            { icon: <User className="w-4 h-4" />, label: t("about"), section: "about", href: "#about" },
            {
              icon: <Briefcase className="w-4 h-4" />,
              label: t("experience"),
              section: "experience",
              href: "#experience",
            },
            {
              icon: <GraduationCap className="w-4 h-4" />,
              label: t("education"),
              section: "education",
              href: "#education",
            },
            { icon: <Folder className="w-4 h-4" />, label: t("projects"), section: "projects", href: "#projects" },
            { icon: <Lightbulb className="w-4 h-4" />, label: t("techStack"), section: "skills", href: "#skills" },
            { icon: <Mail className="w-4 h-4" />, label: t("contact"), section: "contact", href: "#contact" },
            {
              icon: <Book className="w-4 h-4" />,
              label: t("blog"),
              section: "blog",
              href: "/blog",
              special: true, // Add this property to mark it as special
            },
          ].map(({ icon, label, section, href, special }) => (
            <div key={section} className="relative group">
              <button
                onClick={() => {
                  if (href.startsWith("#")) {
                    scrollToSection(section)
                  } else {
                    window.location.href = href
                  }
                }}
                className={cn(
                  "p-2 rounded-full transition-all duration-200",
                  activeSection === section
                    ? "text-white bg-neutral-800 dark:bg-neutral-700"
                    : special
                      ? "text-white bg-blue-500 hover:bg-blue-600 hover:shadow-md hover:scale-105"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100",
                )}
              >
                {icon}
                <span className="sr-only">{label}</span>
              </button>
              <span
                className={cn(
                  "absolute -top-10 left-1/2 -translate-x-1/2 bg-black dark:bg-neutral-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                  language === "ar" && "font-arabic",
                )}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
