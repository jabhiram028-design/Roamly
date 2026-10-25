import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Mail, Calendar, Heart, ShieldCheck, LogOut, Compass, Crown, Inbox, Send, MessageCircle, Plus } from 'lucide-react';

type Message = {
  id: number;
  from?: string;
  to?: string;
  subject: string;
  body: string;
  date: string;
  unread?: boolean;
};

const initialIncoming: Message[] = [
  {
    id: 1,
    from: 'Roamly Support',
    subject: 'Welcome to Roamly',
    body: 'Your Roamly account is ready. You can now manage trips, bookings and messages from your profile.',
    date: 'Today, 10:30 AM',
    unread: true,
  },
];

const initialOutgoing: Message[] = [
  {
    id: 2,
    to: 'Roamly Support',
    subject: 'Booking enquiry',
    body: 'I would like to know more about my upcoming trip booking.',
    date: 'Yesterday, 4:15 PM',
  },
];

export const ProfilePage: React.FC = () => {
  const { user, logout, wishlistIds, setActiveTab } = useApp();
  const [messageTab, setMessageTab] = useState<'incoming' | 'outgoing'>('incoming');
  const [incoming, setIncoming] = useState<Message[]>(initialIncoming);
  const [outgoing, setOutgoing] = useState<Message[]>(initialOutgoing);
  const [showComposer, setShowComposer] = useState(false);
  const [recipient, setRecipient] = useState('Roamly Support');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  if (!user) {
    return (
      <div className="pt-32 pb-20 font-sans text-center max-w-md mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-[#101C35]">Not Signed In</h2>
        <p className="text-gray-500 mt-2">Please log in to view your profile and reservation history.</p>
        <button onClick={() => setActiveTab('home')} className="mt-6 bg-[#1769E8] text-white px-6 py-2.5 rounded-full font-semibold text-sm cursor-pointer">Return Home</button>
      </div>
    );
  }

  const messages = messageTab === 'incoming' ? incoming : outgoing;

  const sendMessage = () => {
    if (!subject.trim() || !body.trim()) return;
    setOutgoing((current) => [
      {
        id: Date.now(),
        to: recipient.trim() || 'Roamly Support',
        subject: subject.trim(),
        body: body.trim(),
        date: 'Just now',
      },
      ...current,
    ]);
    setSubject('');
    setBody('');
    setShowComposer(false);
    setMessageTab('outgoing');
  };

  const openIncoming = (id: number) => {
    setIncoming((current) => current.map((message) => message.id === id ? { ...message, unread: false } : message));
  };

  return (
    <div className="pt-28 pb-20 font-sans bg-[#F8F8F5] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-[#1769E8] text-white font-serif text-3xl font-bold flex items-center justify-center shadow-md">{user.name.charAt(0).toUpperCase()}</div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-serif text-3xl font-bold text-[#101C35]">{user.name}</h1>
                {user.role === 'owner' && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-700"><Crown className="w-3 h-3" /> Prime Owner</span>
                )}
              </div>
              <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-1"><Mail className="w-4 h-4 text-gray-400" /> {user.email}</p>
              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Member since {user.joinedDate}</p>
              <p className="text-xs font-semibold text-[#1769E8] mt-2">Owner of Roamly / Abhi Groups 1</p>
            </div>
          </div>
          <button onClick={logout} className="px-5 py-2.5 rounded-full border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold transition-colors cursor-pointer flex items-center gap-2"><LogOut className="w-4 h-4" /> Sign Out</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div onClick={() => setActiveTab('wishlist')} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-card transition-all cursor-pointer flex items-center justify-between">
            <div><span className="text-xs font-bold text-gray-400 uppercase">Saved Wishlist</span><h3 className="font-serif text-3xl font-bold text-[#101C35] mt-1">{wishlistIds.length} Items</h3></div>
            <Heart className="w-8 h-8 text-red-500 fill-red-500/20" />
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div><span className="text-xs font-bold text-gray-400 uppercase">Upcoming Trips</span><h3 className="font-serif text-3xl font-bold text-[#1769E8] mt-1">1 Confirmed</h3></div>
            <Compass className="w-8 h-8 text-[#1769E8]" />
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div><span className="text-xs font-bold text-gray-400 uppercase">Rewards Status</span><h3 className="font-serif text-3xl font-bold text-amber-500 mt-1">Gold Member</h3></div>
            <ShieldCheck className="w-8 h-8 text-amber-400" />
          </div>
        </div>

        <section className="bg-white rounded-3xl border border-gray-100 shadow-card overflow-hidden">
          <div className="p-6 sm:p-7 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#1769E8]" />
                <h2 className="font-serif text-2xl font-bold text-[#101C35]">Messages</h2>
              </div>
              <p className="text-sm text-gray-500 mt-1">Manage incoming and outgoing messages from your Roamly account.</p>
            </div>
            <button onClick={() => setShowComposer((value) => !value)} className="inline-flex items-center justify-center gap-2 bg-[#1769E8] hover:bg-[#1258c8] text-white px-4 py-2.5 rounded-full text-sm font-bold transition-colors cursor-pointer">
              <Plus className="w-4 h-4" /> New Message
            </button>
          </div>

          <div className="flex border-b border-gray-100 px-4 sm:px-6">
            <button onClick={() => setMessageTab('incoming')} className={`relative flex items-center gap-2 px-4 py-4 text-sm font-bold cursor-pointer ${messageTab === 'incoming' ? 'text-[#1769E8]' : 'text-gray-400 hover:text-gray-600'}`}>
              <Inbox className="w-4 h-4" /> Incoming
              {incoming.filter((message) => message.unread).length > 0 && <span className="min-w-5 h-5 px-1.5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">{incoming.filter((message) => message.unread).length}</span>}
              {messageTab === 'incoming' && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#1769E8] rounded-full" />}
            </button>
            <button onClick={() => setMessageTab('outgoing')} className={`relative flex items-center gap-2 px-4 py-4 text-sm font-bold cursor-pointer ${messageTab === 'outgoing' ? 'text-[#1769E8]' : 'text-gray-400 hover:text-gray-600'}`}>
              <Send className="w-4 h-4" /> Outgoing
              {messageTab === 'outgoing' && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#1769E8] rounded-full" />}
            </button>
          </div>

          {showComposer && (
            <div className="m-4 sm:m-6 p-5 rounded-2xl bg-[#F8F8F5] border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Send className="w-4 h-4 text-[#1769E8]" />
                <h3 className="font-bold text-[#101C35]">Compose outgoing message</h3>
              </div>
              <div className="grid gap-3">
                <input value={recipient} onChange={(event) => setRecipient(event.target.value)} placeholder="Recipient" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#1769E8]" />
                <input value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="Subject" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#1769E8]" />
                <textarea value={body} onChange={(event) => setBody(event.target.value)} placeholder="Write your message..." rows={4} className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#1769E8] resize-none" />
                <div className="flex justify-end gap-2">
                  <button onClick={() => setShowComposer(false)} className="px-4 py-2.5 rounded-full border border-gray-200 text-gray-600 text-sm font-semibold cursor-pointer">Cancel</button>
                  <button onClick={sendMessage} disabled={!subject.trim() || !body.trim()} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1769E8] text-white text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"><Send className="w-4 h-4" /> Send Message</button>
                </div>
              </div>
            </div>
          )}

          <div className="divide-y divide-gray-100">
            {messages.length === 0 ? (
              <div className="py-12 text-center text-gray-400">
                <MessageCircle className="w-10 h-10 mx-auto mb-3 opacity-40" />
                <p className="font-semibold">No {messageTab} messages yet.</p>
              </div>
            ) : messages.map((message) => (
              <button key={message.id} onClick={() => messageTab === 'incoming' && openIncoming(message.id)} className="w-full text-left p-5 sm:p-6 hover:bg-[#FAFBFD] transition-colors cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${message.unread ? 'bg-[#1769E8] text-white' : 'bg-blue-50 text-[#1769E8]'}`}>
                    {messageTab === 'incoming' ? <Inbox className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <p className="font-bold text-[#101C35] truncate">{messageTab === 'incoming' ? message.from : `To: ${message.to}`}</p>
                      <span className="text-xs text-gray-400 shrink-0">{message.date}</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-700 mt-1">{message.subject}</p>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{message.body}</p>
                  </div>
                  {message.unread && <span className="w-2.5 h-2.5 rounded-full bg-red-500 mt-2 shrink-0" aria-label="Unread" />}
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
