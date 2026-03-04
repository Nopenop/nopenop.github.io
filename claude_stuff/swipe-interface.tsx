import * as React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import type { SwiperClass } from 'swiper/react';

import PortfolioCard from './portfolio-card';
import {
  heroData,
  experienceCards,
  cloudCards,
  mlCards,
  skillSections,
  awards,
  type Chip,
} from './portfolio-data';

import './portfolio.css';   // ← add the new CSS file (provided separately)

// ─────────────────────────────────────────────
// Small reusable pieces
// ─────────────────────────────────────────────

function SlideHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="nc-slide-label">
      <span>{index} — {label}</span>
    </div>
  );
}

function SlideTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="nc-slide-title">{children}</h2>;
}

function ChipEl({ chip }: { chip: Chip }) {
  return (
    <span className={`nc-chip${chip.color ? ' nc-chip--' + chip.color : ''}`}>
      {chip.label}
    </span>
  );
}

// ─────────────────────────────────────────────
// Sidebar nav button — must live inside <Swiper>
// ─────────────────────────────────────────────

function SidebarNav({ activeIndex }: { activeIndex: number }) {
  const swiper = useSwiper();
  const items = [
    'Home', 'Experience', 'Cloud / DevOps', 'ML / AI', 'Skills', 'About',
  ];
  return (
    <aside className="nc-sidebar">
      <div className="nc-sidebar-name">Noah<br />Campise</div>
      <div className="nc-sidebar-subtitle">// CS @ Florida Poly</div>
      <div className="nc-gpa-badge">★ 3.95 GPA</div>

      <div className="nc-nav-section">Navigate</div>
      {items.map((label, i) => (
        <button
          key={i}
          className={`nc-nav-btn${activeIndex === i ? ' active' : ''}`}
          onClick={() => swiper.slideTo(i)}
        >
          {label}
        </button>
      ))}

      <div className="nc-sidebar-footer">
        <a className="nc-contact-link" href="mailto:campisenoah1@gmail.com">
          ✉ campisenoah1@gmail.com
        </a>
        <a className="nc-contact-link" href="tel:+17242058325">
          ✆ +1 (724) 205-8325
        </a>
      </div>
    </aside>
  );
}

// ─────────────────────────────────────────────
// Individual slides
// ─────────────────────────────────────────────

function HeroSlide() {
  const swiper = useSwiper();
  return (
    <div className="nc-slide nc-slide--hero">
      <p className="nc-hero-eyebrow">{heroData.eyebrow}</p>
      <h1 className="nc-hero-name">
        <span>{heroData.line1}</span>
        <span className="nc-accent">{heroData.line2}</span>
      </h1>
      <p className="nc-hero-desc">{heroData.description}</p>
      <div className="nc-hero-stats">
        {heroData.stats.map((s) => (
          <div key={s.label} className="nc-stat">
            <span className="nc-stat-num">{s.num}</span>
            <span className="nc-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="nc-hero-cta">
        <button className="nc-btn-primary" onClick={() => swiper.slideNext()}>
          View Experience →
        </button>
        <button className="nc-btn-secondary" onClick={() => swiper.slideTo(4)}>
          Skills
        </button>
      </div>
    </div>
  );
}

function ExperienceSlide() {
  return (
    <div className="nc-slide">
      <SlideHeader index="01" label="Work" />
      <SlideTitle>Work <em>Experience</em></SlideTitle>
      <div className="nc-card-grid nc-card-grid--1">
        {experienceCards.map((c, i) => <PortfolioCard key={i} card={c} />)}
      </div>
    </div>
  );
}

function CloudSlide() {
  return (
    <div className="nc-slide">
      <SlideHeader index="02" label="Infrastructure" />
      <SlideTitle>Cloud &amp; <em>DevOps</em></SlideTitle>
      <div className="nc-card-grid nc-card-grid--2">
        {cloudCards.map((c, i) => <PortfolioCard key={i} card={c} />)}
      </div>
    </div>
  );
}

function MLSlide() {
  return (
    <div className="nc-slide">
      <SlideHeader index="03" label="AI / ML" />
      <SlideTitle>Machine <em>Learning</em></SlideTitle>
      <div className="nc-card-grid nc-card-grid--2">
        {mlCards.map((c, i) => <PortfolioCard key={i} card={c} />)}
      </div>
    </div>
  );
}

function SkillsSlide() {
  return (
    <div className="nc-slide">
      <SlideHeader index="04" label="Stack" />
      <SlideTitle>Skills &amp; <em>Awards</em></SlideTitle>

      {skillSections.map((section) => (
        <div key={section.heading} className="nc-skill-section">
          <div className="nc-skill-heading">{section.heading}</div>
          <div className="nc-chips">
            {section.chips.map((chip) => <ChipEl key={chip.label} chip={chip} />)}
          </div>
        </div>
      ))}

      <div className="nc-skill-section">
        <div className="nc-skill-heading">Awards &amp; Certifications</div>
        <div className="nc-awards">
          {awards.map((a) => (
            <span key={a.label} className={`nc-award-tag nc-award-tag--${a.color}`}>
              {a.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutSlide() {
  return (
    <div className="nc-slide nc-slide--center">
      <SlideHeader index="05" label="About" />
      <SlideTitle>Let's <em>Connect</em></SlideTitle>
      <div className="nc-card-grid nc-card-grid--1 nc-card-grid--narrow">
        <PortfolioCard
          card={{
            tag: 'Education',
            tagColor: 'green',
            title: 'Florida Polytechnic University',
            body: 'B.S. Computer Science — Expected May 2026\nCumulative GPA: 3.95 / 4.0\n\nRelevant Coursework: Natural Language Processing, Autonomous Programming, UI/UX, Database I, Data Structures, Machine Learning, OS Concepts, OOP',
          }}
        />
        <PortfolioCard
          card={{
            tag: 'Contact',
            tagColor: 'blue',
            title: 'Get in Touch',
            bullets: [
              '✉ campisenoah1@gmail.com',
              '✆ +1 (724) 205-8325',
              '📍 Irwin, Pennsylvania',
            ],
          }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Root export — matches your existing API:
//   <SwiperInterface input={1} />
// ─────────────────────────────────────────────

export default function SwiperInterface() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="nc-root">
      <Swiper
        modules={[Keyboard, Mousewheel, Pagination]}
        slidesPerView={1}
        speed={600}
        keyboard={{ enabled: true }}
        mousewheel={{ forceToAxis: true, thresholdDelta: 30 }}
        pagination={{ clickable: true, el: '.nc-pagination' }}
        onSlideChange={(s: SwiperClass) => setActiveIndex(s.activeIndex)}
      >
        {/* Sidebar lives inside Swiper so it can call useSwiper() */}
        <SidebarNav activeIndex={activeIndex} />

        <SwiperSlide><HeroSlide /></SwiperSlide>
        <SwiperSlide><ExperienceSlide /></SwiperSlide>
        <SwiperSlide><CloudSlide /></SwiperSlide>
        <SwiperSlide><MLSlide /></SwiperSlide>
        <SwiperSlide><SkillsSlide /></SwiperSlide>
        <SwiperSlide><AboutSlide /></SwiperSlide>
      </Swiper>

      {/* Vertical pagination dots on the right */}
      <div className="nc-pagination" />

      {/* Slide counter */}
      <div className="nc-counter">
        {String(activeIndex + 1).padStart(2, '0')} / 06
      </div>

      {/* Keyboard hint */}
      <div className="nc-kbd-hint">
        <kbd>←</kbd><kbd>→</kbd> or scroll to navigate
      </div>
    </div>
  );
}
