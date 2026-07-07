'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Mail } from 'lucide-react';

const subjects = [
  { value: 'vraag', label: 'Algemene vraag' },
  { value: 'tip', label: 'Tip: een bijzondere plek' },
  { value: 'samenwerking', label: 'Samenwerken of adverteren' },
  { value: 'pers', label: 'Pers & media' },
  { value: 'feedback', label: 'Feedback over de website' },
  { value: 'anders', label: 'Iets anders' },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  place: string;
  message: string;
  newsletter: boolean;
}

const emptyForm: FormState = {
  name: '',
  email: '',
  subject: 'vraag',
  place: '',
  message: '',
  newsletter: false,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const showPlaceField = form.subject === 'tip';

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) {
      next.name = 'Vul je naam in, dan weten we wie we mogen bedanken.';
    }
    if (!form.email.trim()) {
      next.email = 'Zonder e-mailadres kunnen we je niet terugmailen.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Dit e-mailadres ziet er niet helemaal goed uit.';
    }
    if (form.message.trim().length < 10) {
      next.message = 'Vertel ons iets meer — minimaal 10 tekens.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      setSent(true);
    }
  };

  if (sent) {
    return (
      <div className="contact-form-card text-center" role="status">
        <div className="w-16 h-16 grid place-items-center mx-auto mb-5 rounded-[22px] bg-soft text-primary">
          <CheckCircle2 width={34} height={34} strokeWidth={2} />
        </div>
        <h3 className="text-2xl font-extrabold mb-3">Bedankt, {form.name.split(' ')[0]}! 🌙</h3>
        <p className="text-muted max-w-[420px] mx-auto mb-6">
          Je bericht is verstuurd. We lezen alles persoonlijk en reageren
          meestal binnen twee werkdagen op <strong className="text-ink">{form.email}</strong>.
        </p>
        <button
          type="button"
          className="button button-secondary"
          onClick={() => {
            setForm(emptyForm);
            setSent(false);
          }}
        >
          Nog een bericht sturen
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form-card" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="contact-field">
          <label htmlFor="contactName">Je naam</label>
          <input
            id="contactName"
            type="text"
            autoComplete="name"
            placeholder="bijv. Sam de Dromer"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="contact-error">{errors.name}</p>}
        </div>
        <div className="contact-field">
          <label htmlFor="contactEmail">E-mailadres</label>
          <input
            id="contactEmail"
            type="email"
            autoComplete="email"
            placeholder="jij@voorbeeld.nl"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="contact-error">{errors.email}</p>}
        </div>
      </div>

      <div className="contact-field mt-5">
        <label htmlFor="contactSubject">Waar gaat je bericht over?</label>
        <div className="contact-select-wrap">
          <select
            id="contactSubject"
            value={form.subject}
            onChange={(e) => update('subject', e.target.value)}
          >
            {subjects.map((subject) => (
              <option key={subject.value} value={subject.value}>
                {subject.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {showPlaceField && (
        <div className="contact-field mt-5">
          <label htmlFor="contactPlace">Naam of link van de plek (optioneel)</label>
          <input
            id="contactPlace"
            type="text"
            placeholder="bijv. Boomhut De Uil, Drenthe — of een websitelink"
            value={form.place}
            onChange={(e) => update('place', e.target.value)}
          />
        </div>
      )}

      <div className="contact-field mt-5">
        <label htmlFor="contactMessage">Je bericht</label>
        <textarea
          id="contactMessage"
          rows={6}
          placeholder="Vertel ons waar je van droomt, wat je opviel of wat we kunnen verbeteren…"
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="contact-error">{errors.message}</p>}
      </div>

      <label className="contact-checkbox mt-5">
        <input
          type="checkbox"
          checked={form.newsletter}
          onChange={(e) => update('newsletter', e.target.checked)}
        />
        <span>Houd me op de hoogte van nieuwe bijzondere plekken (max. 1 mail per maand)</span>
      </label>

      <div className="flex flex-wrap items-center gap-4 mt-7">
        <button type="submit" className="button button-primary">
          <Send width={18} height={18} strokeWidth={2.2} />
          Verstuur bericht
        </button>
        <a className="contact-mail-fallback" href="mailto:hallo@bijzondernachtje.nl">
          <Mail width={16} height={16} strokeWidth={2.2} />
          Liever direct mailen? hallo@bijzondernachtje.nl
        </a>
      </div>
    </form>
  );
}
