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
        const {
            procedure,
            name,
            phone,
            email,
            country,
            city,
            preferredDate,
            preferredTime,
            message,
        } = data;

        if (!procedure || !name || !phone || !email) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Admin email template
        const adminTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Appointment Request - CLINICA</title>
        <style>body{font-family:Arial, sans-serif;color:#333}</style>
      </head>
      <body>
        <h2>New Appointment Request</h2>
        <p><strong>Procedure:</strong> ${procedure}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country || "-"}</p>
        <p><strong>City:</strong> ${city || "-"}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate || "-"}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime || "-"}</p>
        <p><strong>Message:</strong><br/>${(message || "-").replace(/\n/g, "<br/>")}</p>
        <hr />
        <p>Submitted on: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
      </body>
      </html>
    `;

        const adminMail = {
            from: process.env.NEXT_PUBLIC_FROM_EMAIL,
            to: process.env.NEXT_PUBLIC_TO_EMAIL,
            subject: `New Appointment Request: ${procedure} - ${name}`,
            html: adminTemplate,
            replyTo: email,
        };

        await transporter.sendMail(adminMail);

        // Client confirmation email
        const clientTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Your Appointment Request - CLINICA</title>
      </head>
      <body style="font-family:Arial,sans-serif;color:#333;max-width:600px;margin:0 auto;padding:20px;">
        <div style="background:linear-gradient(135deg,#815A93,#e3c19d);color:white;padding:20px;border-radius:8px;text-align:center;">
          <h1>CLINICA</h1>
          <p>Appointment Request Received</p>
        </div>
        <div style="background:#f9f9f9;padding:20px;border-radius:8px;margin-top:12px;">
          <p>Hi ${name},</p>
          <p>Thank you for requesting an appointment for <strong>${procedure}</strong>. Our team has received your request and will contact you shortly to confirm the appointment details.</p>
          <p><strong>Preferred Date:</strong> ${preferredDate || "Not specified"}</p>
          <p><strong>Preferred Time:</strong> ${preferredTime || "Not specified"}</p>
          <p>If you need immediate assistance, call us at <strong>+91 70071 45918</strong>.</p>
          <p>Regards,<br/>CLINICA Team</p>
        </div>
      </body>
      </html>
    `;

        const clientMail = {
            from: process.env.NEXT_PUBLIC_FROM_EMAIL,
            to: email,
            subject: `CLINICA - Appointment Request Received`,
            html: clientTemplate,
        };

        await transporter.sendMail(clientMail);

        return NextResponse.json({ success: true, message: "Appointment request sent." }, { status: 200 });
    } catch (error) {
        console.error("Appointment route error:", error);
        return NextResponse.json({ error: "Failed to send appointment request." }, { status: 500 });
    }
}
