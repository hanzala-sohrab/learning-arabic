"use client";

import { useState } from "react";

interface FlashCardProps {
  arabic: string;
  english: string;
  transliteration: string;
}

export default function FlashCard({ arabic, english, transliteration }: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flashcard-container ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
      style={{ height: "200px" }}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <div
            style={{
              fontFamily: "var(--font-arabic)",
              fontSize: "2.25rem",
              color: "var(--accent-gold-light)",
              direction: "rtl",
              marginBottom: "0.5rem",
            }}
          >
            {arabic}
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            <span style={{ fontSize: "0.875rem" }}>↻</span> Tap to reveal
          </div>
        </div>
        <div className="flashcard-back">
          <div
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "0.25rem",
            }}
          >
            {english}
          </div>
          <div
            style={{
              fontSize: "0.875rem",
              color: "var(--accent-gold)",
              fontStyle: "italic",
              marginBottom: "0.5rem",
            }}
          >
            {transliteration}
          </div>
          <div
            style={{
              fontFamily: "var(--font-arabic)",
              fontSize: "1.5rem",
              color: "var(--text-secondary)",
              direction: "rtl",
            }}
          >
            {arabic}
          </div>
        </div>
      </div>
    </div>
  );
}
