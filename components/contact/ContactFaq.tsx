'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Kan ik via BijzonderNachtje boeken?',
    answer:
      'Nee, wij zijn een inspiratieplatform. Je boekt altijd rechtstreeks bij onze vertrouwde partners of bij de accommodatie zelf. Zo krijg je altijd de actuele prijzen en beschikbaarheid.',
  },
  {
    question: 'Ik heb een bijzondere plek gespot — kan ik die tippen?',
    answer:
      'Graag zelfs! Kies in het formulier het onderwerp "Tip: een bijzondere plek" en vertel ons waar we moeten kijken. Elke tip bekijken we persoonlijk voordat hij op de site komt.',
  },
  {
    question: 'Ik verhuur zelf een bijzondere accommodatie. Hoe kom ik op de site?',
    answer:
      'Leuk! Stuur ons een bericht via het onderwerp "Samenwerken of adverteren" met een korte beschrijving en foto\'s van je plek. We selecteren handmatig, dus we kunnen niet alles plaatsen — maar bijzonder valt op.',
  },
  {
    question: 'Hoe snel krijg ik antwoord?',
    answer:
      'We reageren meestal binnen twee werkdagen. In drukke periodes (denk: iedereen wil tegelijk een hottub in de herfst) kan het iets langer duren.',
  },
  {
    question: 'Er klopt iets niet op de site. Waar meld ik dat?',
    answer:
      'Kies het onderwerp "Feedback over de website" en beschrijf wat je zag. Prijzen en beschikbaarheid komen van onze partners en kunnen soms afwijken — we passen het zo snel mogelijk aan.',
  },
  {
    question: 'Wat doen jullie met mijn gegevens?',
    answer:
      'We gebruiken je naam en e-mailadres alleen om je bericht te beantwoorden. Geen spam, geen doorverkoop — alleen als je je aanmeldt voor inspiratie sturen we je maximaal één mail per maand.',
  },
];

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list" id="faq">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question} className={`faq-item${isOpen ? ' open' : ''}`}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{faq.question}</span>
              <ChevronDown
                width={20}
                height={20}
                strokeWidth={2.2}
                className={`faq-chevron${isOpen ? ' rotated' : ''}`}
              />
            </button>
            {isOpen && <p className="faq-answer">{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
