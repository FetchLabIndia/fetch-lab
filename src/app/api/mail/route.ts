import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
const transport = nodemailer.createTransport({
  service: "gmail",
  //   secure: process.env.NODE_ENV !== "development",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
} as SMTPTransport.Options);

export async function POST(req: NextRequest) {
  try {
    const { sender } = await req.json();
    await transport.sendMail({
      from: "your-email@example.com",
      to: "hello@fetchlab.in",
      subject: "New Contact Form Submission",
      html: `Sender: ${sender}`,
    });
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
