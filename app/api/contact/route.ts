import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { EMAIL_CONFIG, isEmailConfigured } from "@/config/email";

type ContactBody = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  comments: string;
};

function validateContact(body: Partial<ContactBody>) {
  const errors: string[] = [];

  if (!body.firstName?.trim()) {
    errors.push("First name is required.");
  }

  if (!body.lastName?.trim()) {
    errors.push("Last name is required.");
  }

  if (!body.email?.trim()) {
    errors.push("Email address is required.");
  }

  if (!body.subject?.trim()) {
    errors.push("Subject is required.");
  }

  if (!body.comments?.trim()) {
    errors.push("Comments are required.");
  }

  return errors;
}

export async function POST(request: Request) {
  const data = (await request.json()) as Partial<ContactBody>;
  const errors = validateContact(data);

  if (errors.length > 0) {
    return NextResponse.json(
      { success: false, error: errors.join(" ") },
      { status: 400 }
    );
  }

  if (!isEmailConfigured) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Email delivery is not configured. Please set SMTP_USER and SMTP_PASS.",
      },
      { status: 500 }
    );
  }

  const transporter = createTransport({
    host: EMAIL_CONFIG.smtp.host,
    port: EMAIL_CONFIG.smtp.port,
    secure: EMAIL_CONFIG.smtp.secure,
    auth: {
      user: EMAIL_CONFIG.smtp.auth.user,
      pass: EMAIL_CONFIG.smtp.auth.pass,
    },
  });

  try {
    await transporter.sendMail({
      from: `${data.firstName} ${data.lastName} <${EMAIL_CONFIG.from}>`,
      to: EMAIL_CONFIG.recipient,
      replyTo: data.email,
      subject: `[Top Fast Rent Contact] ${data.subject}`,
      text: `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nSubject: ${data.subject}\nComments:\n${data.comments}`,
      html: `
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Comments:</strong></p>
        <p>${data.comments?.replace(/\n/g, "<br />")}</p>
      `,
    });
  } catch (error) {
    console.error("Contact email send failed:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to send your message right now. Please try again later.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
