const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;
const TABLE = 'roamly_live_visitors';
const HEARTBEAT_MS = 30_000;

const getSessionId = () => {
  const key = 'roamly-live-visitor-session';
  const existing = window.sessionStorage.getItem(key);
  if (existing) return existing;
  const id = `${crypto.randomUUID()}-${Date.now()}`;
  window.sessionStorage.setItem(key, id);
  return id;
};

const request = async (path: string, init?: RequestInit) => {
  if (!SUPABASE_URL || !SUPABASE_KEY) return null;
  return fetch(`${SUPABASE_URL}/rest/v1/${TABLE}${path}`, {
    ...init,
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
  });
};

export const sendLiveVisitorHeartbeat = async () => {
  if (document.visibilityState !== 'visible') return;
  const session_id = getSessionId();
  try {
    await request('', {
      method: 'POST',
      headers: { Prefer: 'resolution=merge-duplicates,return=minimal' },
      body: JSON.stringify({ session_id, last_seen: new Date().toISOString() }),
    });
  } catch {
    // Visitor tracking must never block the website.
  }
};

export const startLiveVisitorTracking = () => {
  if (!SUPABASE_URL || !SUPABASE_KEY) return () => undefined;

  void sendLiveVisitorHeartbeat();
  const interval = window.setInterval(() => void sendLiveVisitorHeartbeat(), HEARTBEAT_MS);
  const onVisibility = () => {
    if (document.visibilityState === 'visible') void sendLiveVisitorHeartbeat();
  };
  document.addEventListener('visibilitychange', onVisibility);

  return () => {
    window.clearInterval(interval);
    document.removeEventListener('visibilitychange', onVisibility);
  };
};

export const getLiveVisitorCount = async () => {
  if (!SUPABASE_URL || !SUPABASE_KEY) return 0;
  try {
    const response = await request('?select=session_id&last_seen=gte.now()-90s');
    if (!response?.ok) return 0;
    const rows = (await response.json()) as Array<{ session_id: string }>;
    return rows.length;
  } catch {
    return 0;
  }
};
