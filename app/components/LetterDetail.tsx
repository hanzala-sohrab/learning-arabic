"use client";

import type { ArabicLetter } from "../data/arabicData";

interface LetterDetailProps {
  letter: ArabicLetter;
  onClose: () => void;
}

export default function LetterDetail({ letter, onClose }: LetterDetailProps) {
  return (
    <div className="glass-card letter-detail animate-fade-in-up">
      {/* Close button */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={onClose}
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-full)",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-secondary)",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "all 0.2s ease",
          }}
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      {/* Header */}
      <div className="letter-detail-header">
        <div className="large-letter">{letter.isolated}</div>
        <div className="letter-name">{letter.name}</div>
        <div className="transliteration">{letter.transliteration}</div>
      </div>

      {/* Four forms */}
      <h4
        style={{
          fontSize: "0.8rem",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "var(--text-muted)",
          marginBottom: "0.75rem",
        }}
      >
        Letter Forms
      </h4>
      <div className="forms-grid">
        {[
          { label: "Isolated", value: letter.isolated },
          { label: "Initial", value: letter.initial },
          { label: "Medial", value: letter.medial },
          { label: "Final", value: letter.final },
        ].map((form) => (
          <div className="form-card" key={form.label}>
            <div className="form-label">{form.label}</div>
            <div className="form-letter">{form.value}</div>
          </div>
        ))}
      </div>

      {/* Pronunciation */}
      <div
        style={{
          padding: "1rem",
          background: "var(--bg-card)",
          borderRadius: "var(--radius-md)",
          marginBottom: "1.5rem",
          border: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
            marginBottom: "0.35rem",
          }}
        >
          Pronunciation
        </div>
        <div style={{ color: "var(--text-primary)", fontSize: "0.95rem" }}>
          {letter.pronunciation}
        </div>
      </div>

      {/* Example */}
      <div
        style={{
          padding: "1rem",
          background: "rgba(245, 166, 35, 0.05)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--border-accent)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
            marginBottom: "0.5rem",
          }}
        >
          Example Word
        </div>
        <div
          style={{
            fontFamily: "var(--font-arabic)",
            fontSize: "2rem",
            color: "var(--accent-gold-light)",
            direction: "rtl",
          }}
        >
          {letter.exampleWord}
        </div>
        <div
          style={{
            color: "var(--text-primary)",
            fontWeight: 500,
            marginTop: "0.25rem",
          }}
        >
          {letter.exampleTranslation}
        </div>
        <div
          style={{
            color: "var(--text-muted)",
            fontSize: "0.85rem",
            fontStyle: "italic",
          }}
        >
          {letter.exampleTransliteration}
        </div>
      </div>
    </div>
  );
}
