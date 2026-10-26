const SUPABASE_URL = 'https://lqdyosgevaoghvjzclyl.supabase.co';
const SUPABASE_KEY = 'sb_publishable__PzT7pLqCXvcnpYtyHxRkA_jXKmt6OL';
const TABLE = 'roamly_live_visitors';
const ACTIVE_WINDOW_SECONDS = 90;

const sessionId = (() => {
  const key = 'roamly-live-session-id';
  const existing = window.localStorage.getItem(key);
  if (existing) return existing;
  const created = crypto.randomUUID();
  window.localStorage.setItem(key, created);
  return created;
})();

const api = `${SUPABASE_URL}/rest/v1/${TABLE}`;

function headers() {
  return {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json',
  };
}

function renderShell() {
  if (document.getElementById('roamly-live-visitors')) return;
  const style = document.createElement('style');
  style.textContent = `
    #roamly-live-visitors{position:fixed;right:22px;bottom:22px;z-index:70;width:300px;border-radius:26px;padding:22px 22px 20px;background:linear-gradient(145deg,#06130b,#0a2b13 58%,#0c5b24);border:1px solid rgba(93,255,132,.24);box-shadow:0 24px 70px rgba(0,0,0,.42),0 0 50px rgba(25,205,76,.2);color:#fff;font-family:Inter,ui-sans-serif,system-ui,sans-serif;overflow:hidden}
    #roamly-live-visitors:before{content:"";position:absolute;inset:-45% -25%;background:radial-gradient(circle,rgba(49,255,102,.28),transparent 55%);pointer-events:none}
    .rv-head,.rv-value,.rv-label,.rv-bars{position:relative;z-index:1}
    .rv-head{display:flex;align-items:center;justify-content:space-between;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#b9f7c9;font-weight:800}
    .rv-dot{width:8px;height:8px;border-radius:50%;background:#39ff70;box-shadow:0 0 14px #39ff70;display:inline-block;margin-right:7px;animation:rvpulse 1.6s infinite}
    .rv-value{font-size:48px;line-height:1;font-weight:800;letter-spacing:-.05em;margin-top:20px}
    .rv-label{font-size:13px;color:#a9c8b1;margin-top:8px}
    .rv-bars{height:58px;display:flex;align-items:end;gap:7px;margin-top:18px}
    .rv-bar{flex:1;min-width:0;border-radius:7px 7px 3px 3px;background:linear-gradient(to top,rgba(39,255,93,.35),rgba(190,255,205,.82));opacity:.78;transition:height .4s ease}
    @keyframes rvpulse{50%{opacity:.45;transform:scale(.78)}}
    @media(max-width:640px){#roamly-live-visitors{right:12px;bottom:12px;width:calc(100vw - 24px);max-width:300px;padding:18px}.rv-value{font-size:40px}}
  `;
  document.head.appendChild(style);
  const card = document.createElement('div');
  card.id = 'roamly-live-visitors';
  card.innerHTML = `
    <div class="rv-head"><span><span class="rv-dot"></span>Live visitors</span><span>Now</span></div>
    <div class="rv-value" id="rv-count">—</div>
    <div class="rv-label">Real active visitors on Roamly</div>
    <div class="rv-bars" id="rv-bars"></div>
  `;
  document.body.appendChild(card);
  const bars = document.getElementById('rv-bars');
  if (bars) {
    for (let i = 0; i < 12; i += 1) {
      const bar = document.createElement('span');
      bar.className = 'rv-bar';
      bar.style.height = `${18 + Math.round(Math.random() * 34)}px`;
      bars.appendChild(bar);
    }
  }
}

async function upsertSession() {
  await fetch(`${api}?on_conflict=session_id`, {
    method: 'POST',
    headers: { ...headers(), Prefer: 'resolution=merge-duplicates,return=minimal' },
    body: JSON.stringify({ session_id: sessionId, last_seen: new Date().toISOString() }),
    keepalive: true,
  }).catch(() => undefined);
}

async function heartbeat() {
  await fetch(`${api}?session_id=eq.${encodeURIComponent(sessionId)}`, {
    method: 'PATCH',
    headers: { ...headers(), Prefer: 'return=minimal' },
    body: JSON.stringify({ last_seen: new Date().toISOString() }),
    keepalive: true,
  }).catch(() => undefined);
}

async function refreshCount() {
  const countEl = document.getElementById('rv-count');
  if (!countEl) return;
  const cutoff = new Date(Date.now() - ACTIVE_WINDOW_SECONDS * 1000).toISOString();
  try {
    const response = await fetch(`${api}?select=session_id&last_seen=gt.${encodeURIComponent(cutoff)}`, {
      headers: headers(),
      cache: 'no-store',
    });
    if (!response.ok) throw new Error('visitor count request failed');
    const rows = (await response.json()) as Array<{ session_id: string }>;
    countEl.textContent = String(rows.length);
    const bars = document.querySelectorAll<HTMLElement>('#rv-bars .rv-bar');
    bars.forEach((bar, index) => {
      const base = Math.max(18, Math.min(56, 20 + rows.length * 4));
      const variance = (index * 13 + rows.length * 7) % 24;
      bar.style.height = `${Math.min(56, base + variance)}px`;
    });
  } catch {
    countEl.textContent = '—';
  }
}

renderShell();
void upsertSession().then(refreshCount);
setInterval(() => { void heartbeat(); void refreshCount(); }, 30000);
window.addEventListener('beforeunload', () => { void heartbeat(); });
