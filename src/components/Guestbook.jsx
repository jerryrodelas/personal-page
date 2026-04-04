import { useForm, ValidationError } from '@formspree/react'
import './Guestbook.css'

const MAX_MESSAGE = 300

export default function Guestbook() {
  const [state, handleSubmit] = useForm('xpqoybza')

  return (
    <section id="guestbook" className="guestbook section">
      <div className="container">
        <h2 className="section-title">Leave a Message</h2>
        <p className="section-subtitle">
          Have something to say? I'd love to hear from you — messages go straight to my inbox.
        </p>

        <div className="guestbook__form-wrap">
          {state.succeeded ? (
            <div className="guestbook__thanks">
              <p className="guestbook__thanks-icon">✉️</p>
              <p>Message sent! I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="guestbook__form" onSubmit={handleSubmit} noValidate>
              <div className="guestbook__row">
                <div className="guestbook__field">
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    maxLength={60}
                    required
                  />
                  <ValidationError field="name" prefix="Name" errors={state.errors} className="guestbook__error" />
                </div>
                <div className="guestbook__field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    maxLength={100}
                    required
                  />
                  <ValidationError field="email" prefix="Email" errors={state.errors} className="guestbook__error" />
                </div>
              </div>

              <div className="guestbook__field">
                <label htmlFor="role">Role / Company <span>(optional)</span></label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  placeholder="e.g. Senior Engineer at Acme"
                  maxLength={80}
                />
              </div>

              <div className="guestbook__field">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Say hello, ask about my work, or leave feedback..."
                  maxLength={MAX_MESSAGE}
                  required
                />
                <ValidationError field="message" prefix="Message" errors={state.errors} className="guestbook__error" />
              </div>

              <button type="submit" className="btn btn--primary" disabled={state.submitting}>
                {state.submitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
