import React, { useEffect, useState } from 'react';
import { BarChart3, CalendarDays, ChevronRight, CircleUserRound, Eye, FileText, Inbox, LayoutDashboard, MessageSquare, Package, Settings, ShieldCheck, Users, Wifi } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const [liveVisitors, setLiveVisitors] = useState('—');
  const [activeSection, setActiveSection] = useState('Overview');

  useEffect(() => {
    const refresh = async () => {
      try {
        const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
        const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;
        if (!url || !key) return;
        const cutoff = new Date(Date.now() - 90000).toISOString();
        const response = await fetch(`${url}/rest/v1/roamly_live_visitors?select=session_id&last_seen=gt.${encodeURIComponent(cutoff)}`, {
          headers: { apikey: key, Authorization: `Bearer ${key}` }, cache: 'no-store'
        });
        if (response.ok) setLiveVisitors(String((await response.json()).length));
      } catch { /* keep dashboard usable */ }
    };
    void refresh();
    const timer = window.setInterval(refresh, 30000);
    return () => window.clearInterval(timer);
  }, []);

  const menu = [
    ['Overview', LayoutDashboard], ['Live Visitors', Eye], ['Bookings', CalendarDays], ['Incoming Messages', Inbox], ['Outgoing Messages', MessageSquare],
    ['Holiday Packages', Package], ['Itineraries', FileText], ['Customers', Users], ['Analytics', BarChart3], ['Team Access', ShieldCheck], ['Profile', CircleUserRound], ['Settings', Settings]
  ] as const;

  const cards = [
    { label: 'Live visitors', value: liveVisitors, icon: Wifi, detail: 'Real active sessions' },
    { label: 'Bookings', value: '0', icon: CalendarDays, detail: 'Manage booking requests' },
    { label: 'Incoming messages', value: '0', icon: Inbox, detail: 'Customer conversations' },
    { label: 'Customers', value: '0', icon: Users, detail: 'Customer records' },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] pt-24 pb-12 text-[#101C35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="lg:w-64 shrink-0 bg-white rounded-3xl border border-gray-100 shadow-sm p-4 h-fit lg:sticky lg:top-24">
            <div className="px-3 py-3 mb-2 border-b border-gray-100">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1769E8]">Roamly Admin</p>
              <h2 className="mt-1 text-lg font-bold">Prime Owner</h2>
              <p className="text-xs text-gray-500">Full dashboard access</p>
            </div>
            <nav className="space-y-1">
              {menu.map(([label, Icon]) => (
                <button key={label} onClick={() => setActiveSection(label)} className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${activeSection === label ? 'bg-[#1769E8] text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-[#101C35]'}`}>
                  <Icon className="w-4 h-4" /> <span>{label}</span>
                  {activeSection === label && <ChevronRight className="w-4 h-4 ml-auto" />}
                </button>
              ))}
            </nav>
          </aside>

          <main className="flex-1 min-w-0">
            <div className="bg-gradient-to-br from-[#0d1b35] to-[#1769E8] rounded-3xl p-6 sm:p-8 text-white shadow-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold"><ShieldCheck className="w-3.5 h-3.5" /> Prime Owner access</div>
              <h1 className="text-3xl sm:text-4xl font-bold mt-4">{activeSection}</h1>
              <p className="text-white/75 mt-2">Control Roamly from one dashboard.</p>
            </div>

            {activeSection === 'Overview' ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
                  {cards.map(({ label, value, icon: Icon, detail }) => (
                    <div key={label} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                      <div className="flex items-center justify-between"><div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1769E8] flex items-center justify-center"><Icon className="w-5 h-5" /></div><span className="text-2xl font-bold">{value}</span></div>
                      <p className="font-semibold mt-4">{label}</p><p className="text-xs text-gray-500 mt-1">{detail}</p>
                    </div>
                  ))}
                </div>
                <div className="grid lg:grid-cols-2 gap-5 mt-5">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"><h3 className="font-bold text-lg">Quick controls</h3><div className="grid sm:grid-cols-2 gap-3 mt-4">{['Bookings','Incoming Messages','Outgoing Messages','Holiday Packages','Itineraries','Customers'].map(item => <button key={item} onClick={() => setActiveSection(item)} className="text-left p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/40 transition"><span className="text-sm font-semibold">Manage {item}</span><ChevronRight className="w-4 h-4 text-gray-400 float-right mt-0.5" /></button>)}</div></div>
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"><h3 className="font-bold text-lg">Owner permissions</h3><div className="mt-4 space-y-3 text-sm text-gray-600">{['View live visitor analytics','Manage bookings and customer requests','Manage incoming and outgoing messages','Edit holiday packages and itineraries','Manage customer records','Access analytics and settings','Manage team access'].map(item => <div key={item} className="flex gap-3 items-start"><ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />{item}</div>)}</div></div>
                </div>
              </>
            ) : (
              <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 min-h-[360px] flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1769E8] flex items-center justify-center"><Settings className="w-7 h-7" /></div>
                <h2 className="text-2xl font-bold mt-5">{activeSection}</h2>
                <p className="text-gray-500 mt-2 max-w-lg">This section is available from your Prime Owner dashboard. The management controls can be connected to the corresponding Roamly data.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
