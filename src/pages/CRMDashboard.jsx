import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Search,
  Plus,
  Bell,
  Users,
  CalendarCheck,
  TrendingUp,
  Wallet,
} from 'lucide-react'
import { crmTranslations, getLeadsForLang, getStatusConfig } from '../crmTranslations'

export default function CRMDashboard() {
  const { lang = 'en' } = useParams()
  const effectiveLang = lang === 'fr' ? 'fr' : lang === 'he' ? 'he' : 'en'
  const t = crmTranslations[effectiveLang] || crmTranslations.en

  const [search, setSearch] = useState('')
  const leads = useMemo(() => getLeadsForLang(effectiveLang), [effectiveLang])
  const statusConfig = useMemo(() => getStatusConfig(effectiveLang), [effectiveLang])

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
  const formattedRevenue = effectiveLang === 'fr'
    ? `${stats.expectedRevenue.toLocaleString('fr-FR')} €`
    : effectiveLang === 'he'
      ? `${stats.expectedRevenue.toLocaleString('he-IL')} ₪`
      : `${stats.expectedRevenue.toLocaleString('en-US')} ₪`

  const isRtl = effectiveLang === 'he'

  return (
    <div className="min-h-screen bg-stone-50" dir={isRtl ? 'rtl' : 'ltr'} style={{ fontFamily: "'Assistant', 'Heebo', sans-serif" }}>
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-stone-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8" dir="ltr">
          <div className="flex flex-1 items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400 ${isRtl ? 'right-3 left-auto' : 'left-3'}`} />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`w-full rounded-lg border border-stone-200 bg-stone-50 py-2.5 text-sm text-stone-800 placeholder-stone-400 focus:border-[#A3B18A] focus:outline-none focus:ring-1 focus:ring-[#A3B18A] ${isRtl ? 'pr-10 pl-4' : 'pl-10 pr-4'}`}
              />
            </div>
            <button className="flex shrink-0 items-center gap-2 rounded-lg bg-[#A3B18A] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#8fa378]">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">{t.addLead}</span>
            </button>
            <button className="relative rounded-lg border border-stone-200 p-2.5 text-stone-500 transition hover:bg-stone-100 hover:text-stone-700">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-white">
                3
              </span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold text-stone-800 sm:text-xl">{t.title}</h1>
            {/* Language Switcher */}
            <div className="flex items-center gap-1 rounded-lg border border-stone-200 bg-white p-1 shadow-sm">
              <Link
                to="/en/crm"
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${effectiveLang === 'en' ? 'bg-[#A3B18A] text-white' : 'text-stone-600 hover:bg-stone-100'}`}
              >
                EN
              </Link>
              <Link
                to="/fr/crm"
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${effectiveLang === 'fr' ? 'bg-[#A3B18A] text-white' : 'text-stone-600 hover:bg-stone-100'}`}
              >
                FR
              </Link>
              <Link
                to="/he/crm"
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${effectiveLang === 'he' ? 'bg-[#A3B18A] text-white' : 'text-stone-600 hover:bg-stone-100'}`}
              >
                עב
              </Link>
            </div>
          </div>
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
                <p className="text-sm text-stone-500">{t.totalLeads}</p>
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
                <p className="text-sm text-stone-500">{t.consultations}</p>
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
                <p className="text-sm text-stone-500">{t.conversionRate}</p>
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
                <p className="text-sm text-stone-500">{t.expectedRevenue}</p>
                <p className="text-2xl font-bold text-stone-800">{formattedRevenue}</p>
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
                  <th className="px-4 py-3 text-start font-semibold text-stone-600">{t.clientName}</th>
                  <th className="px-4 py-3 text-start font-semibold text-stone-600">{t.phone}</th>
                  <th className="px-4 py-3 text-start font-semibold text-stone-600">{t.status}</th>
                  <th className="px-4 py-3 text-start font-semibold text-stone-600">{t.treatmentType}</th>
                  <th className="px-4 py-3 text-start font-semibold text-stone-600">{t.source}</th>
                  <th className="px-4 py-3 text-start font-semibold text-stone-600">{t.contactDate}</th>
                  <th className="px-4 py-3 text-start font-semibold text-stone-600">{t.lastNote}</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => {
                  const statusStyle = statusConfig[lead.status] || statusConfig[t.statusIrrelevant]
                  return (
                    <tr
                      key={lead.id}
                      className="border-b border-stone-100 transition hover:bg-[#A3B18A]/5"
                    >
                      <td className="px-4 py-3 font-medium text-stone-800">{lead.name}</td>
                      <td className="px-4 py-3 text-stone-600" dir="ltr">{lead.phone}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyle?.bg || 'bg-stone-200'} ${statusStyle?.text || 'text-stone-600'}`}
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
