import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import './index.css'
import whatsappImg from './assets/whatsapp.png'
import whatsappImgFr from './assets/whatsapp-fr.png'
import scheduleImg from './assets/schedule.png'
import scheduleImgFr from './assets/schedualer-fr.png'
import crmImg from './assets/crm.png'
import crmImgFr from './assets/crm-fr.png'
import { translations } from './translations'

// EmailJS config – add your template ID and public key from https://dashboard.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_hj77wbm'
const EMAILJS_TEMPLATE_ID = 'template_4xrje7n' // e.g. template_abc123
const EMAILJS_PUBLIC_KEY = '8WUpHfYP9_IBLCf4M'  // e.g. abc123xyz
// WhatsApp contact – use international format without + (e.g. 972501234567)
const WHATSAPP_NUMBER = '+972533807804'

function App() {
  const { pathname } = useLocation()
  const lang = pathname === '/fr' ? 'fr' : pathname === '/he' ? 'he' : 'en'
  const t = translations[lang] || translations.en
  const isLtr = lang !== 'he'
  const navigate = useNavigate()
  const flags = { en: '🇺🇸', fr: '🇫🇷', he: '🇮🇱' }
  const langOrder = ['en', 'fr', 'he']
  const nextLang = langOrder[(langOrder.indexOf(lang) + 1) % 3]

  const prefersReducedMotion = useReducedMotion()
  const [a11yOpen, setA11yOpen] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [formStatus, setFormStatus] = useState(null) // 'loading' | 'success' | 'error'
  const formRef = useRef(null)
  const [largeFont, setLargeFont] = useState(false)
  const [underlineLinks, setUnderlineLinks] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isLtr ? 'ltr' : 'rtl'
  }, [lang, isLtr])

  const handleContactSubmit = (e) => {
    e.preventDefault()
    setFormStatus('loading')
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setFormStatus('success')
        formRef.current?.reset()
      })
      .catch(() => setFormStatus('error'))
  }

  useEffect(() => {
    document.body.classList.toggle('a11y-high-contrast', highContrast)
    document.body.classList.toggle('a11y-large-font', largeFont)
    document.body.classList.toggle('a11y-underline-links', underlineLinks)
    document.body.classList.toggle('a11y-dark-mode', darkMode)
  }, [highContrast, largeFont, underlineLinks, darkMode])

  return (
    <div className={`min-h-screen bg-white text-stone-800 ${isLtr ? '' : 'rtl'}`} dir={isLtr ? 'ltr' : 'rtl'}>
      {/* Floating accessibility button - bottom left */}
      <motion.div
        className="a11y-widget fixed bottom-6 left-6 z-50"
        dir="ltr"
        initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.4 }}
      >
        <button
          type="button"
          onClick={() => setA11yOpen(!a11yOpen)}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md transition hover:bg-emerald-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          aria-label={t.a11yTitle}
          aria-expanded={a11yOpen}
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
          </svg>
        </button>
        {a11yOpen && (
          <>
            <div className="fixed inset-0 z-40" aria-hidden onClick={() => setA11yOpen(false)} />
            <div className="absolute bottom-14 left-0 z-50 min-w-[220px] rounded-xl border border-stone-200 bg-white p-4 shadow-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500">{t.a11yTitle}</p>
              <label className="flex cursor-pointer items-center gap-2 py-2 text-sm hover:bg-stone-50">
                <input type="checkbox" checked={highContrast} onChange={(e) => setHighContrast(e.target.checked)} className="rounded" />
                {t.a11yContrast}
              </label>
              <label className="flex cursor-pointer items-center gap-2 py-2 text-sm hover:bg-stone-50">
                <input type="checkbox" checked={largeFont} onChange={(e) => setLargeFont(e.target.checked)} className="rounded" />
                {t.a11yFont}
              </label>
              <label className="flex cursor-pointer items-center gap-2 py-2 text-sm hover:bg-stone-50">
                <input type="checkbox" checked={underlineLinks} onChange={(e) => setUnderlineLinks(e.target.checked)} className="rounded" />
                {t.a11yUnderline}
              </label>
              <label className="flex cursor-pointer items-center gap-2 py-2 text-sm hover:bg-stone-50">
                <input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} className="rounded" />
                {t.a11yDark}
              </label>
            </div>
          </>
        )}
      </motion.div>

      {/* Floating language switcher - same position, stays on scroll */}
      <motion.div
        className="fixed right-6 top-6 z-50"
        dir="ltr"
        initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.3 }}
      >
        <button
          type="button"
          onClick={() => navigate(`/${nextLang}`)}
          className="flex h-6 items-center justify-center px-2 text-[1.1rem] transition hover:opacity-70"
          aria-label={`Switch to ${nextLang === 'en' ? 'English' : nextLang === 'fr' ? 'Français' : 'עברית'}`}
        >
          {flags[lang]}
        </button>
      </motion.div>
      {/* Hero Section - 100vh, minimalist */}
      <header className="relative flex min-h-screen flex-col items-center justify-center bg-white px-6 py-20" dir={isLtr ? 'ltr' : 'rtl'}>
        <motion.div
          className="absolute left-6 top-6 flex items-center gap-5"
          dir="ltr"
        initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
        >
          <a href="https://tsityat.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-stone-600 transition hover:text-stone-900">
            tsityat.com
          </a>
          <span className="h-4 w-px bg-stone-300" aria-hidden="true" />
          <a href="https://www.instagram.com/aiboutiqueagency/" target="_blank" rel="noopener noreferrer" className="text-stone-500 transition hover:text-stone-800" aria-label="Instagram">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </motion.div>
        <motion.div
          className="mx-auto max-w-2xl -translate-y-12 space-y-6 text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12, delayChildren: prefersReducedMotion ? 0 : 0.1 }
            }
          }}
        >
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.25em] text-stone-400"
            variants={{
              hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.tagline}
          </motion.p>
          <motion.h1
            className="text-3xl font-semibold leading-tight text-stone-900 sm:text-4xl lg:text-5xl"
            variants={{
              hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.title}
          </motion.h1>
          <motion.p
            className="text-base leading-relaxed text-stone-500 sm:text-lg"
            variants={{
              hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.subtitle}
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-stone-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              {t.heroCTA}
            </a>
          </motion.div>
        </motion.div>
      </header>

      {/* Problem Section - The Gap */}
      <motion.section
        id="consultation"
        className="bg-white py-12"
        dir={isLtr ? undefined : 'rtl'}
        initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {t.problemTitle && (
            <h2 className="text-center text-2xl font-semibold text-stone-800 sm:text-3xl">
              {t.problemTitle}
            </h2>
          )}
          {t.problemBullets?.length ? (
            <div className="mt-8 space-y-10">
              <ul className="list-disc list-inside space-y-4 text-start font-semibold text-stone-700 leading-relaxed [&>li]:ms-2">
                {t.problemBullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {t.problemSolutionTitle && (
                <div className="space-y-5 border-t border-stone-200 pt-8">
                  <h3 className="text-xl font-semibold text-stone-900">{t.problemSolutionTitle}</h3>
                  <p className="text-stone-600 leading-relaxed">{t.problemSolutionIntro}</p>
                  <div className="space-y-4 ps-4">
                    {t.problemSolution1 && <p className="text-stone-600 leading-relaxed">{t.problemSolution1}</p>}
                    {t.problemSolution2 && <p className="text-stone-600 leading-relaxed">{t.problemSolution2}</p>}
                    {t.problemSolution3 && <p className="text-stone-600 leading-relaxed">{t.problemSolution3}</p>}
                  </div>
                  <p className="text-stone-700 leading-relaxed font-medium">{t.problemSolutionClosing}</p>
                </div>
              )}
            </div>
          ) : (
            <p className="mx-auto mt-6 max-w-2xl text-center text-stone-600 leading-relaxed whitespace-pre-line">
              {t.problemText}
            </p>
          )}
        </div>
      </motion.section>

      {/* Process Flow Section */}
      <motion.section
        className="bg-stone-50/50 py-14"
        dir={isLtr ? undefined : 'rtl'}
        initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-stone-900 sm:text-3xl lg:text-4xl">
            {t.processTitle}
          </h2>
          <div className="mt-10 space-y-5">
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-stone-100 bg-stone-50/30 p-8 transition hover:border-[#c9a962]/30 hover:shadow-md md:flex-row md:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#c9a962]/15">
                <svg className="h-8 w-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900">{t.step1Title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{t.step1Text}</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-stone-100 bg-stone-50/30 p-8 transition hover:border-[#c9a962]/30 hover:shadow-md md:flex-row md:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#c9a962]/15">
                <svg className="h-8 w-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900">{t.step2Title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{t.step2Text}</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-stone-100 bg-stone-50/30 p-8 transition hover:border-[#c9a962]/30 hover:shadow-md md:flex-row md:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#c9a962]/15">
                <svg className="h-8 w-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900">{t.step3Title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{t.step3Text}</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-stone-100 bg-stone-50/30 p-8 transition hover:border-[#c9a962]/30 hover:shadow-md md:flex-row md:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#c9a962]/15">
                <svg className="h-8 w-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900">{t.step4Title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{t.step4Text}</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-stone-100 bg-stone-50/30 p-8 transition hover:border-[#c9a962]/30 hover:shadow-md md:flex-row md:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#c9a962]/15">
                <svg className="h-8 w-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900">{t.step5Title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{t.step5Text}</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-stone-100 bg-stone-50/30 p-8 transition hover:border-[#c9a962]/30 hover:shadow-md md:flex-row md:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#c9a962]/15">
                <svg className="h-8 w-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900">{t.step6Title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{t.step6Text}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Before vs After Section */}
      <motion.section
        className="bg-white py-14"
        dir={isLtr ? undefined : 'rtl'}
        initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-stone-900 sm:text-3xl">
            {t.beforeAfterTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-red-100 bg-red-50/30 p-8 shadow-md transition hover:shadow-lg hover:border-red-200">
              <div className="mb-6 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                  <svg className="h-4 w-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <span className="text-base font-semibold text-red-700">{t.before}</span>
              </div>
              <ul className="space-y-4 text-stone-600" dir={isLtr ? undefined : 'rtl'}>
                <li className="flex items-start gap-3 text-start">
                  <span className="mt-0.5 shrink-0"><svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></span>
                  {t.before1}
                </li>
                <li className="flex items-start gap-3 text-start">
                  <span className="mt-0.5 shrink-0"><svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></span>
                  {t.before2}
                </li>
                <li className="flex items-start gap-3 text-start">
                  <span className="mt-0.5 shrink-0"><svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></span>
                  {t.before3}
                </li>
                <li className="flex items-start gap-3 text-start">
                  <span className="mt-0.5 shrink-0"><svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></span>
                  {t.before4}
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/40 p-8 shadow-md transition hover:shadow-lg hover:border-emerald-300">
              <div className="mb-6 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                  <svg className="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-base font-semibold text-emerald-700">{t.after}</span>
              </div>
              <ul className="space-y-4 text-stone-600" dir={isLtr ? undefined : 'rtl'}>
                <li className="flex items-start gap-3 text-start">
                  <span className="mt-0.5 shrink-0"><svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>
                  {t.after1}
                </li>
                <li className="flex items-start gap-3 text-start">
                  <span className="mt-0.5 shrink-0"><svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>
                  {t.after2}
                </li>
                <li className="flex items-start gap-3 text-start">
                  <span className="mt-0.5 shrink-0"><svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>
                  {t.after3}
                </li>
                <li className="flex items-start gap-3 text-start">
                  <span className="mt-0.5 shrink-0"><svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>
                  {t.after4}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Demonstration Section */}
      <motion.section
        className="bg-white py-14"
        dir={isLtr ? undefined : 'rtl'}
        initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-stone-900 sm:text-3xl">
            {t.demoTitle}
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg">
              <div className="border-b border-stone-100 bg-stone-50 px-6 py-3">
                <span className="text-sm font-medium text-stone-600">{t.demoWhatsapp}</span>
              </div>
              <div className="flex justify-center p-8">
                <div className="relative flex h-[520px] w-[260px] shrink-0 items-center justify-center rounded-[2.25rem] border-[2px] border-stone-800 bg-stone-800 p-1.5 shadow-2xl">
                  <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-stone-800" />
                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[1.25rem] bg-white">
                    <img src={lang === 'fr' ? whatsappImgFr : whatsappImg} alt={t.demoWhatsapp} className="h-full w-full scale-[1.02] object-contain" />
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg">
              <div className="border-b border-stone-100 bg-stone-50 px-6 py-3">
                <span className="text-sm font-medium text-stone-600">{t.demoSchedule}</span>
              </div>
              <div className="flex justify-center p-8">
                <div className="relative flex h-[520px] w-[260px] shrink-0 items-center justify-center rounded-[2.25rem] border-[2px] border-stone-800 bg-stone-800 p-1.5 shadow-2xl">
                  <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-stone-800" />
                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[1.25rem] bg-white">
                    <img src={lang === 'fr' ? scheduleImgFr : scheduleImg} alt={t.demoSchedule} className="h-full w-full scale-[1.02] object-contain" />
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg lg:col-span-3">
              <div className="border-b border-stone-100 bg-stone-50 px-6 py-3">
                <span className="text-sm font-medium text-stone-600">{t.demoCRM}</span>
              </div>
              <div className="flex justify-center bg-stone-100 p-8">
                <div className="w-full max-w-4xl overflow-hidden rounded-lg border-[2px] border-stone-300 bg-stone-800 shadow-2xl">
                  <div className="flex items-center gap-2 border-b border-stone-600 bg-stone-800 px-4 py-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  </div>
                  <div className="overflow-hidden bg-white">
                    <img src={lang === 'fr' ? crmImgFr : crmImg} alt={t.demoCRM} className="w-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Technical Upsells */}
      <motion.section
        className="bg-stone-50/50 py-14"
        dir={isLtr ? undefined : 'rtl'}
        initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-stone-900 sm:text-3xl">
            {t.integrationTitle}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="flex items-start gap-4 rounded-xl border border-stone-100 bg-white p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c9a962]/10">
                <svg className="h-5 w-5 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">{t.integration1Title}</h3>
                <p className="mt-1 text-sm text-stone-600">{t.integration1Text}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-stone-100 bg-white p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c9a962]/10">
                <svg className="h-5 w-5 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">{t.integration2Title}</h3>
                <p className="mt-1 text-sm text-stone-600">{t.integration2Text}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-stone-100 bg-white p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c9a962]/10">
                <svg className="h-5 w-5 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">{t.integration3Title}</h3>
                <p className="mt-1 text-sm text-stone-600">{t.integration3Text}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        id="contact"
        className="border-t border-stone-200 bg-stone-50/50 py-14"
        dir={isLtr ? undefined : 'rtl'}
        initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-stone-900 sm:text-3xl">
            {t.contactTitle}
          </h2>
          <p className="mt-3 text-center text-stone-600">
            {t.contactSubtitle}
          </p>
          <form
            ref={formRef}
            onSubmit={handleContactSubmit}
            className="mt-8 space-y-5"
          >
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-stone-700">
                {t.contactName}
              </label>
              <input
                id="contact-name"
                type="text"
                name="from_name"
                required
                className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-stone-800 shadow-sm transition focus:border-[#c9a962] focus:outline-none focus:ring-2 focus:ring-[#c9a962]/20"
                placeholder={t.contactName}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-stone-700">
                {t.contactEmail}
              </label>
              <input
                id="contact-email"
                type="email"
                name="from_email"
                required
                className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-stone-800 shadow-sm transition focus:border-[#c9a962] focus:outline-none focus:ring-2 focus:ring-[#c9a962]/20"
                placeholder={t.contactEmail}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-stone-700">
                {t.contactMessage}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="w-full resize-y rounded-lg border border-stone-200 bg-white px-4 py-3 text-stone-800 shadow-sm transition focus:border-[#c9a962] focus:outline-none focus:ring-2 focus:ring-[#c9a962]/20"
                placeholder={t.contactMessage}
              />
            </div>
            {formStatus === 'success' && (
              <p className="rounded-lg bg-emerald-50 p-4 text-sm font-medium text-emerald-700">
                {t.contactSuccess}
              </p>
            )}
            {formStatus === 'error' && (
              <p className="rounded-lg bg-red-50 p-4 text-sm font-medium text-red-700">
                {t.contactError}
              </p>
            )}
            <button
              type="submit"
              disabled={formStatus === 'loading'}
              className="w-full rounded-lg bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
            >
              {formStatus === 'loading' ? '...' : t.contactSubmit}
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#20BD5A] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
            >
              <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t.contactWhatsapp}
            </a>
          </form>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-6 sm:order-2">
              <a href="https://tsityat.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-stone-600 transition hover:text-[#c9a962]">
                tsityat.com
              </a>
              <span className="h-4 w-px bg-stone-300" aria-hidden="true" />
              <a href="https://www.instagram.com/aiboutiqueagency/" target="_blank" rel="noopener noreferrer" className="text-stone-500 transition hover:text-[#c9a962]" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <span className="text-sm text-stone-400">{t.footer}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
