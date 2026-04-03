import { useState } from 'react'
import './Guestbook.css'

const RECIPIENT = 'jerriandrodelas@gmail.com'
const MAX_MESSAGE = 300

export default function Guestbook() {
  const [form, setForm] = useState({ name: '', email: '', role: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    if (name === 'message' && value.length > MAX_MESSAGE) return
    setForm(f => ({ ...f, [name]: value }))
    setError('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Name, email, and message are required.')
      return
    }

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}${form.role ? `\nRole: ${form.role}` : ''}\n\n${form.message}`
    )

    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="guestbook" className="guestbook section">
      <div className="container">
        <h2 className="section-title">Leave a Message</h2>
        <p className="section-subtitle">
          Have something to say? Fill in the form and it'll open your email — ready to send.
        </p>

        <div className="guestbook__form-wrap">
          {submitted ? (
            <div className="guestbook__thanks">
              <p className="guestbook__thanks-icon">✉️</p>
              <p>Your email client should have opened with the message pre-filled. Just hit send!</p>
              <button className="btn btn--ghost" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', role: '', message: '' }) }}>
                Send another
              </button>
            </div>
          ) : (
            <form className="guestbook__form" onSubmit={handleSubmit} noValidate>
              <div className="guestbook__row">
                <div className="guestbook__field">
                  <label htmlFor="gb-name">Name *</label>
                  <input
                    id="gb-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    maxLength={60}
                    autoComplete="off"
                  />
                </div>
                <div className="guestbook__field">
                  <label htmlFor="gb-email">Email *</label>
                  <input
                    id="gb-email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    maxLength={100}
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="guestbook__field">
                <label htmlFor="gb-role">Role / Company <span>(optional)</span></label>
                <input
                  id="gb-role"
                  name="role"
                  type="text"
                  placeholder="e.g. Senior Engineer at Acme"
                  value={form.role}
                  onChange={handleChange}
                  maxLength={80}
                  autoComplete="off"
                />
              </div>

              <div className="guestbook__field">
                <label htmlFor="gb-message">
                  Message *
                  <span className="guestbook__count">{form.message.length}/{MAX_MESSAGE}</span>
                </label>
                <textarea
                  id="gb-message"
                  name="message"
                  rows={4}
                  placeholder="Say hello, ask about my work, or leave feedback..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              {error && <p className="guestbook__error">{error}</p>}

              <button type="submit" className="btn btn--primary">
                Open in Email Client
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
