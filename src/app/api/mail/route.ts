import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function POST() {
  try {
    // const { sender } = await req.json();
    // const transport = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.MAIL_USER,
    //     pass: process.env.MAIL_PASSWORD,
    //   },
    // } as SMTPTransport.Options);

    // await transport.sendMail({
    //   from: "your-email@example.com",
    //   to: "hello@fetchlab.in",
    //   subject: "New Contact Form Submission",
    //   html: `Sender: ${sender}`,
    // });
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export const runtime = "edge";
