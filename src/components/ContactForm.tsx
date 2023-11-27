'use client'

import { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

interface FormData {
  name: string
  email: string
  message: string
  phone: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    phone: '',
  })

  const notify = (mess: string) => toast(mess)

  const handleChange = (key: string, data: string) => {
    setFormData({ ...formData, [key]: data })
  }

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await axios.post('/api/sendEmail', formData)
      notify('Форма віправлена!')
    } catch (error) {
      console.error('Помилка при відправці форми:', error)
      notify('Відбулась помилка. Будь ласка, спробуйте ще раз пізніше.')
    } finally {
      setFormData({ name: '', email: '', message: '', phone: '' })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-[640px] flex-col gap-2 text-sm"
    >
      <input
        className="mb-2 box-border border-x-2 border-y-2 border-[#756c5d] border-x-transparent border-t-transparent bg-transparent placeholder:text-[#756c5d] focus:border-b-2 focus:border-l-2 focus:border-r-2 focus:border-t-2 focus:border-[#151312] focus:outline-none"
        type="text"
        name="name"
        value={formData.name}
        onChange={(e) => handleChange('name', e.target.value)}
        placeholder="Ім'я"
        required
      />
      <input
        className="mb-2 box-border border-x-2 border-y-2 border-[#756c5d] border-x-transparent border-t-transparent bg-transparent placeholder:text-[#756c5d] focus:border-b-2 focus:border-l-2 focus:border-r-2 focus:border-t-2 focus:border-[#151312] focus:outline-none"
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
        placeholder="Пошта"
        required
      />
      <textarea
        className="mb-2 box-border border-x-2 border-y-2 border-[#756c5d] border-x-transparent border-t-transparent bg-transparent placeholder:text-[#756c5d] focus:border-b-2 focus:border-[#151312] focus:outline-none"
        name="message"
        value={formData.message}
        onChange={(e) => handleChange('message', e.target.value)}
        placeholder="Повідомлення"
        disabled={false}
        required
        rows={5}
      ></textarea>
      <input
        className="mb-2 box-border border-x-2 border-y-2 border-[#756c5d] border-x-transparent border-t-transparent bg-transparent placeholder:text-[#756c5d] focus:border-b-2 focus:border-l-2 focus:border-r-2 focus:border-t-2 focus:border-[#151312] focus:outline-none"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
        placeholder="Телефон"
      />
      <button
        className="mx-auto mt-4 w-fit border-x-2 border-y-2 border-[#151312] p-2"
        type="submit"
      >
        Відправити
      </button>
    </form>
  )
}

export default ContactForm
