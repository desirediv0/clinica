import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    },
});

export async function POST(request: NextRequest) {
    try {
        if (
            !process.env.NEXT_PUBLIC_SMTP_HOST ||
            !process.env.NEXT_PUBLIC_SMTP_USER ||
            !process.env.NEXT_PUBLIC_SMTP_PASSWORD
        ) {
            console.error("Missing SMTP environment variables");
            return NextResponse.json(
                { error: "Email service configuration error" },
                { status: 500 }
            );
        }

        const data = await request.json();
        const { procedure, name, phone, email, preferredDate, preferredTime, message } = data;

        if (!procedure || !name || !phone || !email) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const adminTemplate = `
      <h2>New India Appointment Request</h2>
      <p><strong>Procedure:</strong> ${procedure}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Preferred Date:</strong> ${preferredDate || '-'} </p>
      <p><strong>Preferred Time:</strong> ${preferredTime || '-'} </p>
      <p><strong>Message:</strong><br/>${(message || '-').replace(/\n/g, '<br/>')}</p>
    `;

        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_FROM_EMAIL,
            to: process.env.NEXT_PUBLIC_TO_EMAIL,
            subject: `India Appointment Request: ${procedure} - ${name}`,
            html: adminTemplate,
            replyTo: email,
        });

        const clientTemplate = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8" />
                    <title>CLINICA - Appointment Request Received</title>
                    <style>
                        body { font-family: Arial, sans-serif; color: #333; }
                        .header { background: linear-gradient(135deg,#815A93,#e3c19d); color: white; padding: 24px; text-align:center; border-radius:8px 8px 0 0 }
                        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
                        .field { margin-bottom: 12px; }
                        .field-label { font-weight: bold; color: #815A93; }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>CLINICA</h1>
                        <p>Appointment Request Received</p>
                    </div>
                    <div class="content">
                        <p>Hi ${name},</p>
                        <p>Thanks for requesting an appointment for <strong>${procedure}</strong>. We have received your request and will contact you shortly to confirm your appointment details.</p>
                        <div class="field"><div class="field-label">Preferred Date:</div><div>${preferredDate || '-'}</div></div>
                        <div class="field"><div class="field-label">Preferred Time:</div><div>${preferredTime || '-'}</div></div>
                        <div class="field"><div class="field-label">Message:</div><div>${(message || '-').replace(/\n/g, '<br/>')}</div></div>
                        <p>If you need immediate assistance, call us at <strong>+91 70071 45918</strong>.</p>
                        <p>Regards,<br/>CLINICA Team</p>
                    </div>
                </body>
                </html>
            `;

        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_FROM_EMAIL,
            to: email,
            subject: `CLINICA - Appointment Request Received`,
            html: clientTemplate,
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        console.error('appointment-india error', err);
        return NextResponse.json({ error: 'Failed to send appointment request' }, { status: 500 });
    }
}
