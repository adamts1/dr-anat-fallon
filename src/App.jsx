import './index.css'
import whatsappImg from './assets/whatsapp.png'
import scheduleImg from './assets/schedule.png'

function App() {
  return (
    <div className="min-h-screen bg-white text-stone-800" dir="rtl">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-50/40 via-transparent to-transparent" />
        <span className="absolute top-6 right-6 text-sm font-medium text-stone-400" dir="rtl">בס״ד</span>
        <nav className="relative mx-auto flex max-w-6xl items-center justify-end px-6 py-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a href="https://tsityat.com/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold tracking-tight text-stone-800 transition hover:text-[#c9a962]">
              tsityat.com
            </a>
            <span className="h-4 w-px bg-stone-300" aria-hidden="true" />
            <a href="https://www.instagram.com/aiboutiqueagency/" target="_blank" rel="noopener noreferrer" className="text-stone-500 transition hover:text-[#c9a962]" aria-label="Instagram">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </nav>
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-12 text-center lg:px-8 lg:pt-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c9a962]">TSITYAT · AI Boutique Agency</p>
          <h1 className="mx-auto mt-3 max-w-4xl text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Digital AI Clinic Manager
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
            מערכת AI מתקדמת המותאמת לקליניקה של ד&quot;ר ענת פאלון. מענה VIP מיידי, תיאום תורים חכם וסנכרון מלא ליומן 24/7.
          </p>
        </div>
      </header>

      {/* Problem Section - The Gap */}
      <section className="border-t border-stone-100 bg-stone-50/50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-stone-800 sm:text-3xl">
            הפער שכדאי לסגור
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-stone-600 leading-relaxed">
            קליניקה עמוסה לא תמיד יכולה לענות מיד. לידים נשארים ללא מענה אחרי שעות העבודה, 
            והתכתבות אינסופית בוואטסאפ לתיאום תורים גוזלת מזמן יקר שאפשר להקדיש לטיפול.
          </p>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="border-t border-stone-100 bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-stone-900 sm:text-3xl lg:text-4xl">
            המסלול האוטומטי של המטופלת שלך
          </h2>
          <div className="mt-16 space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-stone-100 bg-stone-50/30 p-8 transition hover:border-[#c9a962]/30 hover:shadow-md md:flex-row md:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#c9a962]/15">
                <svg className="h-8 w-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900">שלב הקליטה (Lead Intake)</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">ברגע שמטופלת מתעניינת באתר או בוואטסאפ, המערכת מזהה אותה מיידית.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-stone-100 bg-stone-50/30 p-8 transition hover:border-[#c9a962]/30 hover:shadow-md md:flex-row md:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#c9a962]/15">
                <svg className="h-8 w-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900">ניהול חכם (CRM Integration)</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">הפרטים נרשמים אוטומטית במערכת הניהול שלך. שום ליד לא הולך לאיבוד, הכל מתועד ומאורגן.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-stone-100 bg-stone-50/30 p-8 transition hover:border-[#c9a962]/30 hover:shadow-md md:flex-row md:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#c9a962]/15">
                <svg className="h-8 w-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900">המכירה (AI Sales Chat)</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">צ'אט אינטליגנטי מדבר עם המטופלת בשפה שלך, נותן מענה לכל השאלות הרלוונטיות לפי המידע שיש לעסק, בשפה אדיבה, מקצועית ואנושית, ומניע אותה לסגירת טיפול.</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-stone-100 bg-stone-50/30 p-8 transition hover:border-[#c9a962]/30 hover:shadow-md md:flex-row md:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#c9a962]/15">
                <svg className="h-8 w-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900">שריון תור (Smart Booking)</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">המטופלת בוחרת זמן שנוח לה מתוך היומן שסונכרן מראש, ללא צורך בשיחת טלפון.</p>
              </div>
            </div>
            {/* Step 5 */}
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-stone-100 bg-stone-50/30 p-8 transition hover:border-[#c9a962]/30 hover:shadow-md md:flex-row md:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#c9a962]/15">
                <svg className="h-8 w-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900">הבטחת הגעה (Payment & Security)</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">מעבר אוטומטי לדף סליקה מאובטח לתשלום מקדמה/דמי רצינות כדי שכל תור ביומן יהיה תור משולם.</p>
              </div>
            </div>
            {/* Step 6 */}
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-stone-100 bg-stone-50/30 p-8 transition hover:border-[#c9a962]/30 hover:shadow-md md:flex-row md:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#c9a962]/15">
                <svg className="h-8 w-8 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900">ליווי אישי (Automated Follow-up)</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">המערכת שולחת תזכורות בוואטסאפ יום לפני, והודעת 'איך היה?' יום אחרי הטיפול.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After Section */}
      <section className="border-t border-stone-100 bg-stone-50/50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-stone-900 sm:text-3xl">
            לפני ואחרי, כמה זמן את חוסכת?
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-red-100 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">לפני</span>
              </div>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  שעות של תכתובות בוואטסאפ לתיאום תור
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  לידים שנעלמים כי אין מענה אחרי שעות
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  ביטולי תורים ברגע האחרון
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  זמן יקר על ניהול במקום על טיפול
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-[#c9a962]/40 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-full bg-[#c9a962]/20 px-3 py-1 text-sm font-medium text-[#a68b4a]">אחרי</span>
              </div>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a962]" />
                  המטופלת קובעת תור לבד, אפס שיחות
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a962]" />
                  מענה 24/7, אף ליד לא הולך לאיבוד
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a962]" />
                  מקדמה משולמת, תורים רציניים בלבד
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a962]" />
                  יותר זמן להקדיש למה שבאמת חשוב
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - The Digital Clinic Manager */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-stone-900 sm:text-3xl">
            הפתרון: מנהל הקליניקה הדיגיטלי
          </h2>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-100 bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c9a962]/10">
                <svg className="h-6 w-6 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stone-900">מענה אנושי מבוסס AI</h3>
              <p className="mt-3 text-stone-600 leading-relaxed">
                הצ׳אט נותן מענה לכל השאלות הרלוונטיות לפי המידע שיש לעסק, בשפה אדיבה, מקצועית ואנושית.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-100 bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c9a962]/10">
                <svg className="h-6 w-6 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stone-900">תיאום תורים אוטונומי</h3>
              <p className="mt-3 text-stone-600 leading-relaxed">
                סנכרון מלא למערכת התורים הקיימת. המטופלת קובעת לבד רק מתי שבאמת פנוי.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-100 bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c9a962]/10">
                <svg className="h-6 w-6 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stone-900">שימור לקוחות ופולו-אפ</h3>
              <p className="mt-3 text-stone-600 leading-relaxed">
                שליחת תזכורות ואישורי הגעה באופן אוטומטי בוואטסאפ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demonstration Section */}
      <section className="border-t border-stone-100 bg-stone-50/50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-stone-900 sm:text-3xl">
            הדגמה
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg">
              <div className="border-b border-stone-100 bg-stone-50 px-6 py-3">
                <span className="text-sm font-medium text-stone-600">ממשק צ'אט בוואטסאפ</span>
              </div>
              <img src={whatsappImg} alt="הדגמת צ'אט AI בוואטסאפ" className="mx-auto w-[60%] object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg">
              <div className="border-b border-stone-100 bg-stone-50 px-6 py-3">
                <span className="text-sm font-medium text-stone-600">לוח תורים חכם</span>
              </div>
              <img src={scheduleImg} alt="הדגמת לוח תורים" className="mx-auto w-[60%] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Upsells */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-stone-900 sm:text-3xl">
            אינטגרציה מלאה למערכת הקיימת
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="flex items-start gap-4 rounded-xl border border-stone-100 bg-white p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c9a962]/10">
                <svg className="h-5 w-5 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">אינטגרציה מלאה</h3>
                <p className="mt-1 text-sm text-stone-600">ל-CRM וליומן Google/Outlook</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-stone-100 bg-white p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c9a962]/10">
                <svg className="h-5 w-5 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">סליקת תשלומים</h3>
                <p className="mt-1 text-sm text-stone-600">מקדמות מובנית למניעת ביטולים</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-stone-100 bg-white p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c9a962]/10">
                <svg className="h-5 w-5 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">דשבורד ניהול</h3>
                <p className="mt-1 text-sm text-stone-600">לראות את כל הלידים והתורים במקום אחד</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-100 py-8">
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
            <span className="text-sm text-stone-400">© Digital AI Clinic Manager</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
