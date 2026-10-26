import React, { useEffect, useState } from 'react';
import { BarChart3, CalendarDays, ChevronRight, FileText, Inbox, LayoutDashboard, MessageSquare, Moon, Package, Settings, ShieldCheck, Sun, Users } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Overview');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('roamly-theme');
    const dark = saved === 'dark';
    setIsDark(dark);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    window.localStorage.setItem('roamly-theme', next ? 'dark' : 'light');
  };

  const menu = [
    ['Overview', LayoutDashboard], ['Bookings', CalendarDays], ['Incoming Messages', Inbox], ['Outgoing Messages', MessageSquare],
    ['Holiday Packages', Package], ['Itineraries', FileText], ['Customers', Users], ['Analytics', BarChart3], ['Team Access', ShieldCheck], ['Settings', Settings]
  ] as const;

  const cards = [
    { label: 'Bookings', value: '0', icon: CalendarDays, detail: 'Booking requests' },
    { label: 'Incoming messages', value: '0', icon: Inbox, detail: 'Customer messages' },
    { label: 'Customers', value: '0', icon: Users, detail: 'Customer records' },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] dark:bg-[#071226] pt-24 pb-8 text-[#101C35]">
      <div className="max-w-6xl mx-auto px-3 sm:px-5">
        <div className="flex flex-col lg:flex-row gap-4">
          <aside className="lg:w-52 shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm p-2.5 h-fit lg:sticky lg:top-24">
            <div className="px-2.5 py-2 mb-1.5 border-b border-gray-100">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#1769E8]">Roamly Admin</p>
              <h2 className="mt-0.5 text-sm font-bold">Prime Owner</h2>
              <p className="text-[10px] text-gray-500">Full dashboard access</p>
            </div>
            <nav className="space-y-0.5">
              {menu.map(([label, Icon]) => (
                <button key={label} onClick={() => setActiveSection(label)} className={`w-full flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium transition ${activeSection === label ? 'bg-[#1769E8] text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-[#101C35]'}`}>
                  <Icon className="w-3.5 h-3.5" /> <span>{label}</span>
                  {activeSection === label && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
                </button>
              ))}
            </nav>
          </aside>

          <main className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.14em] font-bold text-[#1769E8]">Owner Dashboard</p>
                <h1 className="text-xl sm:text-2xl font-bold mt-0.5">{activeSection}</h1>
              </div>
              <button type="button" onClick={toggleTheme} className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold shadow-sm hover:shadow-md transition" aria-label={isDark ? 'Switch to day mode' : 'Switch to night mode'}>
                {isDark ? <Moon className="w-3.5 h-3.5 text-indigo-500" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
                {isDark ? 'Night' : 'Day'}
              </button>
            </div>

            {activeSection === 'Overview' ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {cards.map(({ label, value, icon: Icon, detail }) => (
                    <div key={label} className="bg-white rounded-xl border border-gray-100 p-3 shadow-sm">
                      <div className="flex items-center justify-between gap-2"><div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1769E8] flex items-center justify-center"><Icon className="w-4 h-4" /></div><span className="text-lg font-bold">{value}</span></div>
                      <p className="font-semibold text-xs mt-2.5">{label}</p><p className="text-[10px] text-gray-500 mt-0.5">{detail}</p>
                    </div>
                  ))}
                </div>
                <div className="grid lg:grid-cols-2 gap-3 mt-3">
                  <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm"><h3 className="font-bold text-sm">Quick controls</h3><div className="grid sm:grid-cols-2 gap-2 mt-3">{['Bookings','Incoming Messages','Outgoing Messages','Holiday Packages','Itineraries','Customers'].map(item => <button key={item} onClick={() => setActiveSection(item)} className="text-left p-2.5 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/40 transition"><span className="text-[11px] font-semibold">Manage {item}</span><ChevronRight className="w-3.5 h-3.5 text-gray-400 float-right mt-0.5" /></button>)}</div></div>
                  <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm"><h3 className="font-bold text-sm">Owner permissions</h3><div className="mt-3 space-y-2 text-[11px] text-gray-600">{['Manage bookings and requests','Manage incoming and outgoing messages','Edit holiday packages and itineraries','Manage customer records','Access analytics and settings','Manage team access'].map(item => <div key={item} className="flex gap-2 items-start"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />{item}</div>)}</div></div>
                </div>
              </>
            ) : (
              <div className="mt-3 bg-white rounded-xl border border-gray-100 shadow-sm p-6 min-h-[280px] flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1769E8] flex items-center justify-center"><Settings className="w-5 h-5" /></div>
                <h2 className="text-lg font-bold mt-3">{activeSection}</h2>
                <p className="text-xs text-gray-500 mt-1.5 max-w-md">This section is available from your Prime Owner dashboard. Its management controls can be connected to the corresponding Roamly data.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
