"use client";

import { useState, useMemo } from "react";
import { vocabulary, vocabularyCategories } from "../data/arabicData";
import FlashCard from "../components/FlashCard";

export default function VocabularyPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Greetings");

  const words = useMemo(
    () => vocabulary.filter((w) => w.category === activeCategory),
    [activeCategory]
  );

  return (
    <div>
      <div className="page-header animate-fade-in-up">
        <h1>Vocabulary</h1>
        <p>
          Build your Arabic word bank. Tap a card to flip and reveal the
          translation.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="tabs animate-fade-in-up stagger-1">
        {vocabularyCategories.map((cat) => (
          <button
            key={cat}
            className={`tab ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
            id={`tab-${cat.toLowerCase().replace(/ /g, "-")}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Word count */}
      <div
        className="animate-fade-in-up stagger-2"
        style={{
          marginBottom: "1.5rem",
          fontSize: "0.85rem",
          color: "var(--text-muted)",
        }}
      >
        {words.length} words in this category
      </div>

      {/* Flashcard Grid */}
      <div className="flashcard-grid animate-fade-in-up stagger-3">
        {words.map((word, i) => (
          <FlashCard
            key={`${activeCategory}-${i}`}
            arabic={word.arabic}
            english={word.english}
            transliteration={word.transliteration}
          />
        ))}
      </div>
    </div>
  );
}
