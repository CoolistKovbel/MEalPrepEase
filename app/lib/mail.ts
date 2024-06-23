import nodemailer from "nodemailer";

interface SendMailProps {
  to: string;
  name: string;
  subject: string;
  content: string;
} 

export async function sendMail({ to, name, subject, content }: SendMailProps) {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {

    const test = await transport.verify();
    console.log(test, 'there is transpeort');


  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const result = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: content,
    });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
