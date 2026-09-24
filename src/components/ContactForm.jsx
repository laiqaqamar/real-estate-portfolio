import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { CheckCircle2 } from 'lucide-react'

import Button from './Button'
import { openWhatsApp } from '../utils/whatsapp'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')

  // --------------------------------------------------
  // VALIDATION
  // --------------------------------------------------
  function validate() {
    const next = {}

    if (!form.name.trim()) {
      next.name = 'Full name is required.'
    }

    if (!form.email.trim()) {
      next.email = 'Email address is required.'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      next.email = 'Enter a valid email address.'
    }

    if (!form.phone.trim()) {
      next.phone = 'Phone number is required.'
    }

    if (!form.subject.trim()) {
      next.subject = 'Subject is required.'
    }

    if (!form.message.trim()) {
      next.message = 'Message is required.'
    }

    return next
  }

  // --------------------------------------------------
  // HANDLE INPUT CHANGE
  // --------------------------------------------------
  function handleChange(e) {
    const { name, value } = e.target

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))

    // Remove the error for this field while typing
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: '',
    }))

    // Remove previous sending error
    setSendError('')
  }

  // --------------------------------------------------
  // SEND EMAIL WITH EMAILJS
  // --------------------------------------------------
  async function handleSubmit(e) {
    e.preventDefault()

    const next = validate()

    setErrors(next)
    setSendError('')

    // Stop if validation errors exist
    if (Object.keys(next).length > 0) {
      return
    }

    setSending(true)

    try {
      // These variable names MUST match
      // the variables in your EmailJS template.
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
      }

      const response = await emailjs.send(
        'service_hxupeup',
        'template_b6msif7',
        templateParams,
        {
          publicKey: 'OAThUemlBJ5zb0uhp',
        }
      )

      console.log('EmailJS success:', response)

      // Show success message
      setSubmitted(true)

      // Clear form
      setForm(initialForm)

      // Clear validation errors
      setErrors({})
    } catch (error) {
      console.error('EmailJS error:', error)
      console.error('EmailJS status:', error?.status)
      console.error('EmailJS text:', error?.text)

      setSendError(
        error?.text ||
          'Your message could not be sent. Please check your EmailJS configuration and try again.'
      )
    } finally {
      setSending(false)
    }
  }

  // --------------------------------------------------
  // SEND MESSAGE TO WHATSAPP
  // --------------------------------------------------
  function handleSendToWhatsApp() {
    const next = validate()

    setErrors(next)
    setSendError('')

    if (Object.keys(next).length > 0) {
      return
    }

    const message = `Hello, my name is ${form.name}.

Subject: ${form.subject}

Message: ${form.message}

Contact: ${form.phone} / ${form.email}`

    openWhatsApp('custom', '', message)
  }

  // --------------------------------------------------
  // SUCCESS SCREEN
  // --------------------------------------------------
  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-md bg-white p-10 text-center shadow-soft">
        <CheckCircle2
          className="text-bronze-500"
          size={40}
        />

        <h3 className="font-display text-xl text-ink-950">
          Message sent
        </h3>

        <p className="text-sm text-slate-450">
          Thanks for reaching out — our team will get back to
          you shortly.
        </p>

        <Button
          variant="dark"
          onClick={() => {
            setSubmitted(false)
            setSendError('')
          }}
        >
          Send another message
        </Button>
      </div>
    )
  }

  // --------------------------------------------------
  // CONTACT FORM
  // --------------------------------------------------
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-4"
    >
      {/* Full Name + Email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />

        <Field
          label="Email Address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      {/* Phone + Subject */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field
          label="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <Field
          label="Subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          error={errors.subject}
        />
      </div>

      {/* Message */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink-900">
          Message
        </label>

        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          className={`w-full rounded-sm border bg-white px-4 py-3 text-sm text-ink-950 outline-none transition-colors focus:border-bronze-500 ${
            errors.message
              ? 'border-red-400'
              : 'border-ink-900/15'
          }`}
        />

        {errors.message && (
          <p className="mt-1 text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      {/* Email Sending Error */}
      {sendError && (
        <div className="rounded-sm bg-red-50 px-4 py-3 text-sm text-red-600">
          {sendError}
        </div>
      )}

      {/* Buttons */}
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <Button
          type="submit"
          variant="primary"
          disabled={sending}
        >
          {sending ? 'Sending...' : 'Send Message'}
        </Button>

        <Button
          type="button"
          variant="dark"
          onClick={handleSendToWhatsApp}
          disabled={sending}
        >
          Send via WhatsApp
        </Button>
      </div>
    </form>
  )
}

// --------------------------------------------------
// REUSABLE INPUT FIELD
// --------------------------------------------------
function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = 'text',
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-900">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full rounded-sm border bg-white px-4 py-3 text-sm text-ink-950 outline-none transition-colors focus:border-bronze-500 ${
          error
            ? 'border-red-400'
            : 'border-ink-900/15'
        }`}
      />

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}