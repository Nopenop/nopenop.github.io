// portfolio-card.tsx
// Drop-in replacement for card.tsx
// Usage: <PortfolioCard card={cardData} />

import * as React from 'react';
import type { CardData } from './portfolio-data';

const COLOR_MAP = {
  green: 'var(--nc-accent)',
  blue:  'var(--nc-accent2)',
  pink:  'var(--nc-accent3)',
};

export default function PortfolioCard({ card }: { card: CardData }) {
  const tagColor = card.tagColor ? COLOR_MAP[card.tagColor] : 'var(--nc-accent)';

  return (
    <div className="nc-card">
      <span className="nc-card-tag" style={{ color: tagColor }}>
        {card.tag}
      </span>
      <h3 className="nc-card-title">{card.title}</h3>

      {card.bullets && card.bullets.length > 0 && (
        <ul className="nc-card-bullets">
          {card.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}

      {card.body && <p className="nc-card-body">{card.body}</p>}

      {card.date && <p className="nc-card-date">{card.date}</p>}
    </div>
  );
}
