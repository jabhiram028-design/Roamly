const SUPABASE_URL = process.env.SUPABASE_URL || 'https://lqdyosgevaoghvjzclyl.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

type Request = { method?: string };
type Response = { status: (code: number) => Response; json: (body: unknown) => void };

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'GET') return res.status(405).json({ ok: false, message: 'Method not allowed' });
  if (!SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(503).json({ ok: false, message: 'Customer data service is not configured.' });
  }

  try {
    const url = `${SUPABASE_URL}/rest/v1/contact_messages?select=id,name,email,created_at&order=created_at.desc`;
    const response = await fetch(url, {
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      },
    });
    if (!response.ok) {
      console.error('Supabase customer query failed:', await response.text());
      return res.status(502).json({ ok: false, message: 'Unable to load customer records.' });
    }

    const rows = await response.json() as Array<{ id: string; name: string; email: string; created_at: string }>;
    const customers = new Map<string, { id: string; name: string; email: string; created_at: string; messages: number }>();
    for (const row of rows) {
      const email = String(row.email || '').trim().toLowerCase();
      if (!email) continue;
      const existing = customers.get(email);
      if (existing) existing.messages += 1;
      else customers.set(email, { id: row.id, name: row.name || 'Customer', email: row.email, created_at: row.created_at, messages: 1 });
    }

    return res.status(200).json({ ok: true, customers: Array.from(customers.values()) });
  } catch (error) {
    console.error('Customer API failed:', error);
    return res.status(500).json({ ok: false, message: 'Customer service is temporarily unavailable.' });
  }
}
