import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export default async function handler(req: NextRequest) {
  const reqBody = await req.json()
  const { name, email, message, phone } = reqBody

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_password'
    }
  })

  const mailOptions = {
    from: 'your_email@gmail.com', //address from test account
    to: 'recipient_email@example.com', // address specialist
    subject: 'Запис на консультацію',
    text: `Ім'я: ${name} \n Пошта: ${email}\n Повідомлення: ${message} \n Телефон: ${phone}`
  }

  await transporter.sendMail(mailOptions)

  return NextResponse.json({});
}
