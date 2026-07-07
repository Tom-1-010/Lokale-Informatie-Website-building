'use client';

import { useState } from 'react';
import { Check, Mail } from 'lucide-react';

const perks = ['Nieuwe plekjes', 'Inspiratie & tips', 'Exclusieve acties'];

export default function NewsletterCard() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setSent(true);
    }
  };

  return (
    <div className="newsletter-card">
      <div className="newsletter-card-icon" aria-hidden="true">
        <Mail width={26} height={26} strokeWidth={2} />
      </div>
      <h3>Droom weg met inspiratie</h3>
      <p>Ontvang de mooiste bijzondere plekjes direct in je mailbox.</p>
      {sent ? (
        <p className="newsletter-card-success" role="status">
          <Check width={16} height={16} strokeWidth={2.6} aria-hidden="true" />
          Gelukt! Je ontvangt binnenkort de eerste inspiratie.
        </p>
      ) : (
        <form className="newsletter-card-form" onSubmit={handleSubmit}>
          <label className="visually-hidden" htmlFor="newsletterEmail">E-mailadres</label>
          <input
            id="newsletterEmail"
            type="email"
            placeholder="jouw e-mail"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="button button-accent" type="submit">Aanmelden</button>
        </form>
      )}
      <ul className="newsletter-card-perks">
        {perks.map((perk) => (
          <li key={perk}>
            <Check width={14} height={14} strokeWidth={3} aria-hidden="true" />
            {perk}
          </li>
        ))}
      </ul>
    </div>
  );
}
