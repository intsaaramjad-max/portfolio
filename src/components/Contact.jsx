import { useState, useRef, useEffect } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const subjectInputRef = useRef(null);
  const messageInputRef = useRef(null);

  // Field validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length > 0 ? '' : 'Full Name is required.';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ''
          : 'Please enter a valid email address.';
      case 'subject':
        return value.trim().length > 0 ? '' : 'Subject is required.';
      case 'message':
        return value.trim().length > 0 ? '' : 'Message content cannot be blank.';
      default:
        return '';
    }
  };

  // Handle changes and validate dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  // Validate on blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateField('name', formState.name),
      email: validateField('email', formState.email),
      subject: validateField('subject', formState.subject),
      message: validateField('message', formState.message),
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const isFormValid = !Object.values(newErrors).some((err) => err !== '');

    if (!isFormValid) {
      // Focus the first invalid field for accessibility
      if (newErrors.name) {
        nameInputRef.current?.focus();
      } else if (newErrors.email) {
        emailInputRef.current?.focus();
      } else if (newErrors.subject) {
        subjectInputRef.current?.focus();
      } else if (newErrors.message) {
        messageInputRef.current?.focus();
      }
      return;
    }

    // Mock asynchronous backend request (1.5 seconds)
    setSubmitting(true);
    setStatusMessage({ text: '', type: '' });

    setTimeout(() => {
      setSubmitting(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTouched({ name: false, email: false, subject: false, message: false });
      setErrors({ name: '', email: '', subject: '', message: '' });

      // Show success feedback
      setStatusMessage({
        text: 'Thank you, Intsaar has received your message! I will respond to you shortly.',
        type: 'success',
      });
    }, 1500);
  };

  // Auto-hide success toast after 8 seconds
  useEffect(() => {
    if (statusMessage.text && statusMessage.type === 'success') {
      const timer = setTimeout(() => {
        setStatusMessage({ text: '', type: '' });
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="header-line"></div>
        </div>

        <div className="contact-grid">
          {/* Info Details */}
          <div className="contact-info reveal-on-scroll">
            <h3>Let's Build Something Together</h3>
            <p>
              Have an open role, internship opportunity, or a collaborative project in mind? Reach
              out using the contact form, or connect with me via my email and social profiles.
            </p>

            <ul className="contact-list">
              <li>
                <div className="contact-icon-wrap" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="20"
                    height="20"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <a href="mailto:intsaar.amjad@gmail.com" className="contact-value">
                    intsaar.amjad@gmail.com
                  </a>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrap" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="20"
                    height="20"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <a
                    href="https://linkedin.com/in/intsaar-amjad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    linkedin.com/in/intsaar-amjad
                  </a>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrap" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="20"
                    height="20"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div>
                  <span className="contact-label">GitHub</span>
                  <a
                    href="https://github.com/intsaar-amjad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    github.com/intsaar-amjad
                  </a>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrap" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="20"
                    height="20"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Lahore, Pakistan</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card reveal-on-scroll delay-1">
            <form id="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                  <label htmlFor="form-name">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formState.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    ref={nameInputRef}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  <span className="error-msg" id="name-error" aria-live="polite">
                    {errors.name}
                  </span>
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="form-email">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    ref={emailInputRef}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  <span className="error-msg" id="email-error" aria-live="polite">
                    {errors.email}
                  </span>
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                  <label htmlFor="form-subject">
                    Subject <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="form-subject"
                    name="subject"
                    required
                    placeholder="What are you writing about?"
                    value={formState.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    ref={subjectInputRef}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  <span className="error-msg" id="subject-error" aria-live="polite">
                    {errors.subject}
                  </span>
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                  <label htmlFor="form-message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Write your message here..."
                    value={formState.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    ref={messageInputRef}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  <span className="error-msg" id="message-error" aria-live="polite">
                    {errors.message}
                  </span>
                </div>
              </div>

              {/* Form Submission Feedback */}
              {statusMessage.text && (
                <div
                  id="form-status"
                  className={`form-status ${statusMessage.type}`}
                  aria-live="polite"
                >
                  {statusMessage.text}
                </div>
              )}

              <button
                type="submit"
                className={`btn btn-primary btn-submit ${submitting ? 'loading' : ''}`}
                disabled={submitting}
              >
                {!submitting && <span>Send Message</span>}
                {!submitting && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
