"use client";

import { useState, useMemo } from "react";
import { arabicAlphabet } from "../data/arabicData";
import LetterDetail from "../components/LetterDetail";

export default function AlphabetPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return arabicAlphabet;
    const q = search.toLowerCase();
    return arabicAlphabet.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.transliteration.toLowerCase().includes(q) ||
        l.isolated.includes(q)
    );
  }, [search]);

  const selectedLetter = arabicAlphabet.find((l) => l.id === selectedId);

  return (
    <div>
      <div className="page-header animate-fade-in-up">
        <h1>Arabic Alphabet</h1>
        <p>
          Explore all 28 letters. Click any letter to see its four forms,
          pronunciation, and example word.
        </p>
      </div>

      {/* Search */}
      <div
        className="animate-fade-in-up stagger-1"
        style={{ marginBottom: "1.5rem" }}
      >
        <input
          id="alphabet-search"
          type="text"
          placeholder="Search by letter name or transliteration..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "0.75rem 1rem",
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-full)",
            color: "var(--text-primary)",
            fontSize: "0.9rem",
            outline: "none",
            transition: "border-color 0.2s ease",
          }}
          onFocus={(e) =>
            (e.target.style.borderColor = "var(--accent-gold)")
          }
          onBlur={(e) =>
            (e.target.style.borderColor = "var(--border-subtle)")
          }
        />
      </div>

      {/* Letter Grid */}
      <div className="letter-grid animate-fade-in-up stagger-2">
        {filtered.map((letter) => (
          <div
            key={letter.id}
            className={`letter-card ${selectedId === letter.id ? "selected" : ""}`}
            onClick={() =>
              setSelectedId(selectedId === letter.id ? null : letter.id)
            }
            id={`letter-${letter.name.toLowerCase()}`}
          >
            <span className="arabic">{letter.isolated}</span>
            <span className="name">{letter.name}</span>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "3rem",
            color: "var(--text-muted)",
          }}
        >
          No letters match your search.
        </div>
      )}

      {/* Detail Panel */}
      {selectedLetter && (
        <LetterDetail
          letter={selectedLetter}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  );
}
