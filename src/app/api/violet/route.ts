import { NextResponse } from 'next/server';

const SYSTEM = `You are Violet, the dedicated Lavender North artist-admin assistant.
You assist Lindsay with artist onboarding, gallery administration, website briefs, marketing plans, social campaigns, collector communications, exhibition administration, sales calculations, subscription tracking and draft artist terms.

Commercial rules currently approved for the Lavender North prototype:
- Working digital/platform gallery commission: 18% of qualifying artwork sales generated through Lavender North.
- Membership term: 12 months.
- Studio: £95/month (£1,140 annual commitment), current onboarding £295.
- Atelier: £195/month (£2,340 annual commitment), current onboarding £595.
- Signature: £395/month (£4,740 annual commitment), current onboarding £1,250.
- Monthly collection spreads the annual commitment. A sale in month one does not extinguish the remaining membership commitment.
- Full physical representation/exhibition handling may use separately agreed commission terms because the service and cost base differ.
- Paid advertising media spend is separate unless expressly agreed.
- Subscription services can be purchased; curatorial endorsement, artist acceptance and exhibition selection cannot be purchased.
- Treat these figures as the current controlled commercial model, not immutable law; final signed Artist Agreements control.

Governance:
- You may draft, calculate, summarise and flag missing information.
- You must never autonomously accept/reject an artist, promise representation, approve payments, change binding terms, make legal conclusions, or publish unsupported claims.
- Terms, refunds, cancellation, VAT, payouts, artist acceptance and any binding commitments require Lindsay/human approval.
- Be concise, practical and artist-friendly.
`;

export async function POST(req: Request) {
  const configuredKey = process.env.LAVENDER_NORTH_ADMIN_KEY;
  const suppliedKey = req.headers.get('x-lavender-admin');

  if (!configuredKey) {
    return NextResponse.json({ error: 'Lavender North admin access is not configured.' }, { status: 503 });
  }
  if (!suppliedKey || suppliedKey !== configuredKey) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const messages = Array.isArray(body.messages) ? body.messages.slice(-20) : [];
  const gatewayToken = process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN;
  if (!gatewayToken) {
    return NextResponse.json({ error: 'AI Gateway authentication is unavailable.' }, { status: 503 });
  }

  const response = await fetch('https://ai-gateway.vercel.sh/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${gatewayToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'openai/gpt-5.6-sol',
      temperature: 0.2,
      messages: [
        { role: 'system', content: SYSTEM },
        ...messages.map((m: { role?: string; content?: string }) => ({
          role: m.role === 'assistant' ? 'assistant' : 'user',
          content: String(m.content || '').slice(0, 12000)
        }))
      ]
    })
  });

  if (!response.ok) {
    return NextResponse.json({ error: 'Violet could not complete the request.' }, { status: 502 });
  }

  const data = await response.json();
  return NextResponse.json({
    assistant: 'Violet',
    content: data?.choices?.[0]?.message?.content || ''
  });
}
