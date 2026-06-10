export const EMAIL_CONFIG = {
  recipient: process.env.EMAIL_TO ?? "topfastrentacar@gmail.com",
  from: process.env.FROM_EMAIL ?? process.env.SMTP_USER ?? "no-reply@topfastrentacar.com",
  smtp: {
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER ?? "",
      pass: process.env.SMTP_PASS ?? "",
    },
  },
};

export const isEmailConfigured = Boolean(
  EMAIL_CONFIG.smtp.auth.user && EMAIL_CONFIG.smtp.auth.pass
);
