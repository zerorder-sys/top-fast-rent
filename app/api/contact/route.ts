import { NextResponse } from "next/server";

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

  // TODO: integrate with an email service or notification backend.
  // Example: send the submitted data to a business inbox, save it in a database,
  // or forward it to a webhook.

  return NextResponse.json({ success: true });
}
