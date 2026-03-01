import { useState } from 'react'
import {
  Search,
  Plus,
  Bell,
  Users,
  CalendarCheck,
  TrendingUp,
  Wallet,
} from 'lucide-react'

const STATUS_CONFIG = {
  חדש: { bg: 'bg-blue-100', text: 'text-blue-800' },
  'נקבע ייעוץ': { bg: 'bg-purple-100', text: 'text-purple-800' },
  'ממתין לתשלום': { bg: 'bg-amber-100', text: 'text-amber-800' },
  'טיפול פעיל': { bg: 'bg-emerald-100', text: 'text-emerald-800' },
  'לא רלוונטי': { bg: 'bg-stone-200', text: 'text-stone-600' },
}

const LEADS_DATA = [
  { id: 1, name: 'מיכל כהן', status: 'חדש', treatment: 'הזרקות (בוטוקס/חומצה)', source: 'אינסטגרם', date: '28/02/25', note: 'מפחדת ממחטים, רוצה הסבר מפורט' },
  { id: 2, name: 'עידו לוי', status: 'נקבע ייעוץ', treatment: 'טיפול פנים Hydra-Glow', source: 'המלצה', date: '27/02/25', note: 'ביקש תור בשעות הערב' },
  { id: 3, name: 'נועה אברהם', status: 'ממתין לתשלום', treatment: 'הסרת שיער בלייזר', source: 'פייסבוק', date: '26/02/25', note: 'מחכה לאישור תשלום מקדמה' },
  { id: 4, name: 'שירן מזרחי', status: 'טיפול פעיל', treatment: 'פיגמנטציה', source: 'אתר', date: '25/02/25', note: 'באמצע סדרת טיפולים' },
  { id: 5, name: 'דנה ברק', status: 'חדש', treatment: 'מזותרפיה', source: 'טיקטוק', date: '28/02/25', note: 'שאלה על מחירים' },
  { id: 6, name: 'רונית גולן', status: 'נקבע ייעוץ', treatment: 'הזרקות (בוטוקס/חומצה)', source: 'המלצה', date: '27/02/25', note: 'ביקשה לחזור ביום ראשון' },
  { id: 7, name: 'יעל ששון', status: 'לא רלוונטי', treatment: 'טיפול פנים Hydra-Glow', source: 'אינסטגרם', date: '20/02/25', note: 'החליטה לדחות' },
  { id: 8, name: 'תמר דוד', status: 'חדש', treatment: 'הסרת שיער בלייזר', source: 'פייסבוק', date: '28/02/25', note: 'רוצה סדרת טיפולים' },
  { id: 9, name: 'ליאור בן דוד', status: 'ממתין לתשלום', treatment: 'פיגמנטציה', source: 'אתר', date: '26/02/25', note: 'מחכה לאישור מהבנק' },
  { id: 10, name: 'שרה לוי', status: 'טיפול פעיל', treatment: 'מזותרפיה', source: 'המלצה', date: '24/02/25', note: 'טיפול 3 מתוך 6' },
  { id: 11, name: 'מור כץ', status: 'חדש', treatment: 'הזרקות (בוטוקס/חומצה)', source: 'אינסטגרם', date: '27/02/25', note: 'מעוניינת בייעוץ ראשוני' },
  { id: 12, name: 'אורי גרינברג', status: 'נקבע ייעוץ', treatment: 'הסרת שיער בלייזר', source: 'טיקטוק', date: '27/02/25', note: 'שאלות על רגישות עור' },
  { id: 13, name: 'נעמי פלדמן', status: 'טיפול פעיל', treatment: 'טיפול פנים Hydra-Glow', source: 'פייסבוק', date: '22/02/25', note: 'ממליצה לחברות' },
  { id: 14, name: 'קרן רוזן', status: 'ממתין לתשלום', treatment: 'הזרקות (בוטוקס/חומצה)', source: 'אתר', date: '26/02/25', note: 'ביקשה לחלק לתשלומים' },
  { id: 15, name: 'עמית הראל', status: 'חדש', treatment: 'פיגמנטציה', source: 'המלצה', date: '28/02/25', note: 'רוצה להבין את התהליך' },
  { id: 16, name: 'רונית אלון', status: 'לא רלוונטי', treatment: 'מזותרפיה', source: 'פייסבוק', date: '18/02/25', note: 'לא ענתה להמשך' },
  { id: 17, name: 'דני שטרית', status: 'נקבע ייעוץ', treatment: 'הסרת שיער בלייזר', source: 'אינסטגרם', date: '27/02/25', note: 'תור ראשון ביום חמישי' },
  { id: 18, name: 'מיכל גולדשטיין', status: 'טיפול פעיל', treatment: 'הזרקות (בוטוקס/חומצה)', source: 'המלצה', date: '15/02/25', note: 'לקוחה קבועה' },
  { id: 19, name: 'נועם פרץ', status: 'חדש', treatment: 'טיפול פנים Hydra-Glow', source: 'טיקטוק', date: '28/02/25', note: 'שאלה על תוצאות' },
  { id: 20, name: 'יעל ברנע', status: 'ממתין לתשלום', treatment: 'פיגמנטציה', source: 'אתר', date: '25/02/25', note: 'מחכה לאישור' },
]

const PHONE_NUMBERS = [
  '050-1234567', '052-9876543', '054-5551234', '053-7778899', '050-3334455',
  '052-1112233', '054-6667788', '053-9990011', '050-4445566', '052-2223344',
  '054-8889900', '053-1112234', '050-5556677', '052-3334455', '054-7778899',
  '053-9991122', '050-6667788', '052-4445566', '054-2223344', '053-8889900',
]

const leadsWithPhones = LEADS_DATA.map((lead, i) => ({
  ...lead,
  phone: PHONE_NUMBERS[i],
}))

export default function CRMDashboard() {
  const [search, setSearch] = useState('')
  const [leads] = useState(leadsWithPhones)

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone.includes(search) ||
      lead.note.toLowerCase().includes(search.toLowerCase())
  )

  const stats = {
    totalLeads: 47,
    consultations: 12,
    conversionRate: 24,
    expectedRevenue: 28400,
  }

  return (
    <div className="min-h-screen bg-stone-50" dir="rtl" style={{ fontFamily: "'Assistant', 'Heebo', sans-serif" }}>
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-stone-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="חיפוש ליד..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-stone-200 bg-stone-50 py-2.5 pr-10 pl-4 text-sm text-stone-800 placeholder-stone-400 focus:border-[#A3B18A] focus:outline-none focus:ring-1 focus:ring-[#A3B18A]"
              />
            </div>
            <button className="flex shrink-0 items-center gap-2 rounded-lg bg-[#A3B18A] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#8fa378]">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">הוספת ליד חדש</span>
            </button>
            <button className="relative rounded-lg border border-stone-200 p-2.5 text-stone-500 transition hover:bg-stone-100 hover:text-stone-700">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-0.5 -left-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-white">
                3
              </span>
            </button>
          </div>
          <h1 className="text-lg font-semibold text-stone-800 sm:text-xl">לוח בקרה · קליניקה אסתטית</h1>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#A3B18A]/20">
                <Users className="h-5 w-5 text-[#A3B18A]" />
              </div>
              <div>
                <p className="text-sm text-stone-500">סה״כ לידים החודש</p>
                <p className="text-2xl font-bold text-stone-800">{stats.totalLeads}</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                <CalendarCheck className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-stone-500">ייעוצים שנקבעו</p>
                <p className="text-2xl font-bold text-stone-800">{stats.consultations}</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                <TrendingUp className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-stone-500">אחוז המרה</p>
                <p className="text-2xl font-bold text-stone-800">{stats.conversionRate}%</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                <Wallet className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-stone-500">הכנסה צפויה</p>
                <p className="text-2xl font-bold text-stone-800">{stats.expectedRevenue.toLocaleString('he-IL')} ₪</p>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-sm">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50">
                  <th className="px-4 py-3 text-right font-semibold text-stone-600">שם הלקוח/ה</th>
                  <th className="px-4 py-3 text-right font-semibold text-stone-600">טלפון</th>
                  <th className="px-4 py-3 text-right font-semibold text-stone-600">סטטוס</th>
                  <th className="px-4 py-3 text-right font-semibold text-stone-600">סוג טיפול</th>
                  <th className="px-4 py-3 text-right font-semibold text-stone-600">מקור הגעה</th>
                  <th className="px-4 py-3 text-right font-semibold text-stone-600">תאריך פנייה</th>
                  <th className="px-4 py-3 text-right font-semibold text-stone-600">הערה אחרונה</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => {
                  const statusStyle = STATUS_CONFIG[lead.status] || STATUS_CONFIG['לא רלוונטי']
                  return (
                    <tr
                      key={lead.id}
                      className="border-b border-stone-100 transition hover:bg-[#A3B18A]/5"
                    >
                      <td className="px-4 py-3 font-medium text-stone-800">{lead.name}</td>
                      <td className="px-4 py-3 text-stone-600" dir="ltr">{lead.phone}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyle.bg} ${statusStyle.text}`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-stone-600">{lead.treatment}</td>
                      <td className="px-4 py-3 text-stone-600">{lead.source}</td>
                      <td className="px-4 py-3 text-stone-600">{lead.date}</td>
                      <td className="max-w-[180px] px-4 py-3 text-stone-500">{lead.note}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
