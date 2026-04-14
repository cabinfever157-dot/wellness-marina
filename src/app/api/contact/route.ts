import sgMail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(req: NextRequest) {
  try {
    const { name, email, organization, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    await sgMail.send({
      to: "info@wellnessmarina.com",
      from: "info@wellnessmarina.com",
      replyTo: email,
      subject: `Partnership Inquiry from ${name}${organization ? ` — ${organization}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nOrganization: ${organization || "N/A"}\n\n${message}`,
      html: `
        <h2>New Partnership Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization || "N/A"}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("SendGrid error:", error?.response?.body || error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}