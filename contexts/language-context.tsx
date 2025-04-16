"use client"

import React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    role: "AI & Machine Learning Engineer",
    bio: "AI & Machine Learning Engineer with expertise in data manipulation, preprocessing, and model development. Skilled in building and fine-tuning machine learning models, including RAG and LLMs.",
    downloadResume: "Download My Resume",
    location: "Amman, Jordan",

    // Navigation
    about: "About",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    techStack: "Tech Stack",
    contact: "Contact",
    blog: "Blog",

    // Section Titles
    coreTechnologies: "Core Technologies",
    myStack: "My Stack",
    coding: "Coding",
    tools: "Tools",
    deployment: "Deployment",
    viewAllTools: "View all tools",
    viewAllProjects: "View all projects",
    viewProject: "View Project",
    certificatesAndAchievements: "Certificates & Achievements",
    myTopCertificates: "My Top Certificates",
    myTopAchievements: "My Top Achievements",

    // Contact
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    github: "Github",
    huggingFace: "Hugging Face",
    twitter: "X (Twitter)",
    kaggle: "Kaggle",

    // Experience
    aiProductDev: "AI Product development",
    aiProductDevDesc:
      "I led the development of Onqoud, a smart SaaS platform that uses AI insights to help restaurants predict future sales and streamline their operations with ease! I focused on designing innovative machine learning models, real-time data analytics that deliver instant results, and integrating flexible, scalable solutions using AWS to provide restaurants with a practical and intelligent experience!",
    aiMlInternship: "AI & Machine Learning Internship",
    aiMlInternshipDesc:
      "I'm always focused on data processing, feature engineering, and training models using Python, TensorFlow, and Pandas to get the best results! I've gained awesome experience in predictive analytics, natural language processing, and data visualization in a way that blends precision with creativity. I also designed ensemble classifiers (Random Forest - Scikit-learn) to predict customer behavior, achieving 89% accuracy even with imbalanced datasets by using techniques like SMOTE and class weighting. Using Pandas and NumPy, I cleaned and transformed raw data like a pro, handling missing values with KNN, and tackling outliers and skewed distributions smoothly!",
    pythonDevInternship: "Python Developer Internship",
    pythonDevInternshipDesc:
      "designed custom data structures in Python to speed up in-memory processing of large financial datasets, cutting transaction batch runtime by 40%! I also built a serverless data pipeline on AWS Lambda to ingest, clean, and store data seamlessly. I've gained awesome experience in managing structured data, AWS cloud solutions, and database design in a smart way. I worked on data processing and automation tasks using Python, contributing to cloud data infrastructure projects to help build strong and efficient systems!",

    // Education
    bachelorCompEng: "Bachelor's of Computer Engineering",
    bachelorCompEngDesc:
      "I earned my Bachelor's in Computer Engineering, specializing in AI, Machine Learning, and Data Science, and I was so excited working on my graduation project where I developed an advanced Arabic LLM! I also gained great hands-on experience through internships, and I’m proud to have a strong letter of recommendation from my professors who saw my work and dedication in the field.",

    // Projects
    onqoudProject: "Onqoud - AI Product",
    onqoudProjectDesc: "Developed a BI product with features like future forecasting and insight for restaurants.",
    ElmLLMProject: "ElmLLM",
    ElmLLMProjectDesc:
      "ElmLLM is a Arabic LLM trained on data from our culture. It is designed to understand and generate Arabic text, making it a valuable tool for various applications.",
    otherProjects: "Other",
    otherProjectsDesc: "See my other projects.",

    // Achievements
    psutProject: "PSUT best project",
    psutProjectDesc: "Award for winning the best startup idea",
    nasaCompetition: "First place NASA AI competition",
    nasaCompetitionDesc: "First place in NASA competition for best project in artificial intelligence.",
    orangeIncubator: "Orange Incubator",
    orangeIncubatorDesc: "6-month journey at Orange Incubator learning AI startup product development.",

    // Blog
    myBlog: "My Blog",
    readMore: "Read More",
    backToHome: "Back to Home",
    backToBlog: "Back to Blog",
    publishedOn: "Published on",
    minuteRead: "min read",
    recentPosts: "Recent Posts",
    allPosts: "All Posts",
    blogIntro: "Sharing my thoughts on AI, machine learning, and technology",
    searchPlaceholder: "Search articles...",
    noResults: "No articles found",
    categories: "Categories",
    tags: "Tags",
    sharePost: "Share this post",
  },
  ar: {
    // Header
    role: "مهندس ذكاء إصطناعي وتعلم آلة",
    bio:" أنا مهندس ذكاء اصطناعي وتعلم آلة، شغوف بتحويل البيانات إلى قصص ذكية! عندي خبرة في تهيئة البيانات وبناء النماذج اللي تتعلم وتتطور، وخاصة في بناء وتطويع نماذج تعلم الآلة، أيضاً عندي مهارات بناء النماذج اللغوية الكبيرة واستخدام تقنيات الـRAG أو Fine-tuning، واكيد عندي مهارات كبيرة في تنظيف البيانات وعرضها.",
    downloadResume: "تحميل السيرة الذاتية",
    location: "عمان، الأردن",
    

    // Navigation
    about: "مين أنا",
    experience: "خبراتي",
    education: "التعليم",
    projects: "المشاريع",
    techStack: "المهارات التقنية",
    contact: "تواصل معي",
    blog: "مقالاتي الشخصية",

    // Section Titles
    coreTechnologies: "التقنيات الأساسية",
    myStack: "مهاراتي التقنية",
    coding: "اللغات اللي أكتبها",
    tools: "الأدوات",
    deployment: "أدوات أخرى",
    viewAllTools: "عرض كل الأدوات",
    viewAllProjects: "عرض كل المشاريع",
    viewProject: "عرض المشروع",
    certificatesAndAchievements: "الشهادات والإنجازات",
    myTopCertificates: "أهم شهاداتي",
    myTopAchievements: "أهم إنجازاتي",

    // Contact
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    linkedin: "لينكد إن",
    github: "جيت هاب",
    huggingFace: "هاجينج فيس",
    twitter: "إكس (تويتر)",
    kaggle: "كاجل",

    // Experience
    aiProductDev: "مهندس تطوير وبناء منتج ذكاء اصطناعي",
    aiProductDevDesc:
      "قدت تطوير عنقود، منتج ذكي يعتمد على الذكاء الاصطناعي عشان يساعد المطاعم بانها تتوقع مبيعاتها المستقبلية وتطور عملياتها بكل سلاسة! ركّزت على تصميم نماذج تعلم آلة مبتكرة، وتحليل بيانات لحظي يعطي نتائج فورية، ودمج حلول مرنة وقابلة للتوسع باستخدام AWS، عشان نقدم تجربة عملية وذكية للمطاعم!",
    aiMlInternship: "تدريب في الذكاء الاصطناعي وتعلم الآلة",
    aiMlInternshipDesc:
      "أنا مركّز دايماً على معالجة البيانات  وتدريب النماذج باستخدام Python و TensorFlow و Pandas، عشان أطلّع أفضل النتائج! اكتسبت خبرة حلوة في التحليلات التنبؤية ومعالجة اللغة الطبيعية وتصور البيانات بطريقة تجمع بين الدقة والإبداع.  كمان، قمت بتصميم مصنفات تجميعية (Random Forest - Scikit-learn) عشان أتنبأ بسلوك العملاء، ووصلت لدقة 89% حتى مع البيانات غير المتوازنة، واستخدمت تقنية SMOTE وتوزيع الأوزان عشان أحقق التوازن. وباستخدام Pandas و NumPy، نظفت وعدّلت البيانات الخام بكل احترافية، تعاملت مع القيم الناقصة باستخدام KNN، وحليت مشاكل القيم المتطرفة والتوزيعات المائلة بسلاسة!",
    pythonDevInternship: "تدريب كمطور بايثون",
    pythonDevInternshipDesc:
      "قمت بتصميم هياكل بيانات مخصصة باستخدام Python لتسريع معالجة البيانات المالية الكبيرة في الذاكرة، ونجحت في تقليل وقت تشغيل دفعات المعاملات بنسبة 40%! كمان، صممت خط بيانات بدون سيرفر على AWS Lambda لاستقبال البيانات وتنظيفها وتخزينها بكل سلاسة. اكتسبت خبرة رائعة في إدارة البيانات المنظمة وحلول AWS السحابية، بالإضافة لتصميم قواعد البيانات بطريقة ذكية. اشتغلت على معالجة البيانات ومهام الأتمتة باستخدام Python، وساهمت في مشاريع بنية تحتية للبيانات السحابية، عشان أساعد في بناء أنظمة قوية وفعّالة! ",

    // Education
    bachelorCompEng: "بكالوريوس هندسة الحاسوب",
    bachelorCompEngDesc:
      "حصلت على بكالوريوس في هندسة الحاسوب وتعمقت بشدة في مجال الذكاء الاصطناعي وتعلم الآلة وعلوم البيانات، وكنت مبسوط جدًا وأنا أشتغل على مشروع تخرجي اللي كان تطوير نموذج LLM عربي متطور! كمان، جمعت خبرة عملية حلوة من خلال تدريباتي، وأفتخر إن عندي رسالة توصية قوية من أساتذتي اللي شافوا شغلي وتفاني في المجال!",

    // Projects
    onqoudProject: "عنقود - منتج ذكاء اصطناعي",
    onqoudProjectDesc: "طورت منتج ذكاء أعمال مع ميزات مثل التنبؤ المستقبلي والرؤى للمطاعم.",
    ElmLLMProject: "ElmLLM - نموذج لغوي عربي الهوية",
    ElmLLMProjectDesc:
      "علم هو نموذج لغوي ضخم متدرب على بينانات من ثقافتنا العربية.",
    otherProjects: "مشاريع أخرى",
    otherProjectsDesc: "اطلع على مشاريعي الأخرى.",

    // Achievements
    psutProject: "أفضل مشروع في جامعة الأميرة سمية للتكنولوجيا",
    psutProjectDesc: "جائزة الفوز بأفضل فكرة شركة ناشئة",
    nasaCompetition: "المركز الأول في مسابقة ناسا للذكاء الاصطناعي",
    nasaCompetitionDesc: "المركز الأول في مسابقة ناسا لأفضل مشروع في الذكاء الاصطناعي",
    orangeIncubator: "حاضنة أورانج",
    orangeIncubatorDesc: "رحلة 6 أشهر في حاضنة أورانج لتعلم تطوير منتجات الذكاء الاصطناعي للشركات الناشئة",

    // Blog
    myBlog: "مقالاتي التقنية",
    readMore: "قراءة المزيد",
    backToHome: "العودة إلى الرئيسية",
    backToBlog: "العودة إلى المدونة",
    publishedOn: "نُشر في",
    minuteRead: "دقائق قراءة",
    recentPosts: "أحدث المقالات",
    allPosts: "جميع المقالات",
    blogIntro: "أشارك أفكاري حول الذكاء الاصطناعي وتعلم الآلة والتكنولوجيا",
    searchPlaceholder: "البحث في المقالات...",
    noResults: "لم يتم العثور على مقالات",
    categories: "التصنيفات",
    tags: "الوسوم",
    sharePost: "مشاركة هذا المقال",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Initialize language from localStorage if available, otherwise default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    // This will only run on the client side
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      return savedLanguage === "ar" ? "ar" : "en"
    }
    return "en"
  })

  // Update localStorage when language changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  // Apply language settings to document
  useEffect(() => {
    // Set dir attribute on document for RTL support
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"

    // Add language class to body for additional styling
    if (language === "ar") {
      document.body.classList.add("font-arabic")
      document.documentElement.classList.add("font-arabic")
      document.documentElement.style.fontFamily = '"IBM Plex Sans Arabic", sans-serif'
    } else {
      document.body.classList.remove("font-arabic")
      document.documentElement.classList.remove("font-arabic")
      document.documentElement.style.fontFamily = ""
    }
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
