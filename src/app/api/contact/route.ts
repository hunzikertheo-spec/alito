import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, forfait, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Alito Contact <onboarding@resend.dev>',
      to: 'alito.theo@gmail.com',
      replyTo: email,
      subject: `Nouveau message de ${name} — ${forfait || 'Forfait non précisé'}`,
      html: `
        <h2>Nouveau message via alito.ch</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Forfait souhaité :</strong> ${forfait || 'Non précisé'}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Erreur envoi email' }, { status: 500 });
  }
}
