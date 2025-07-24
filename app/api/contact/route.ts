import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp-relay.brevo.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || "7a3825001@smtp-brevo.com",
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Email template
    const emailTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission - CLINICA</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #815A93, #e3c19d);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
          }
          .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .field {
            margin-bottom: 20px;
          }
          .field-label {
            font-weight: bold;
            color: #815A93;
            margin-bottom: 5px;
          }
          .field-value {
            background: white;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #e3c19d;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🦷 CLINICA</h1>
          <p>New Contact Form Submission</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="field-label">👤 Name:</div>
            <div class="field-value">${name}</div>
          </div>
          
          <div class="field">
            <div class="field-label">📧 Email:</div>
            <div class="field-value">${email}</div>
          </div>
          
          <div class="field">
            <div class="field-label">📝 Subject:</div>
            <div class="field-value">${subject}</div>
          </div>
          
          <div class="field">
            <div class="field-label">💬 Message:</div>
            <div class="field-value">${message.replace(/\n/g, "<br>")}</div>
          </div>
          
          <div class="footer">
            <p>This message was sent from the CLINICA website contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email
    const mailOptions = {
      from: process.env.FROM_EMAIL || "codeshorts007@gmail.com",
      to: "codeshorts007@gmail.com", // Admin email
      subject: `New Contact Form Submission: ${subject}`,
      html: emailTemplate,
      replyTo: email, // So admin can reply directly to the sender
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully! We will get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
