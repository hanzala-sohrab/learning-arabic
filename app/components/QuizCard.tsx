"use client";

import { useState } from "react";

interface QuizCardProps {
  question: string;
  options: string[];
  correctAnswer: number;
  onAnswer: (correct: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
}

export default function QuizCard({
  question,
  options,
  correctAnswer,
  onAnswer,
  questionNumber,
  totalQuestions,
}: QuizCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    setTimeout(() => {
      onAnswer(index === correctAnswer);
    }, 1200);
  };

  return (
    <div className="animate-fade-in-up">
      {/* Progress */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "0.75rem",
        }}
      >
        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
          Question {questionNumber} of {totalQuestions}
        </span>
        <div className="progress-bar" style={{ width: "120px" }}>
          <div
            className="progress-bar-fill"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div
        className="glass-card-static"
        style={{ padding: "2rem", marginBottom: "1.25rem" }}
      >
        <h3
          style={{
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            lineHeight: 1.6,
          }}
        >
          <div dangerouslySetInnerHTML={{__html: question}} />
        </h3>
      </div>

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {options.map((option, index) => {
          let className = "quiz-option";
          if (answered) {
            className += " disabled";
            if (index === correctAnswer) className += " correct";
            else if (index === selected && index !== correctAnswer)
              className += " incorrect";
          }

          return (
            <button
              key={index}
              className={className}
              onClick={() => handleSelect(index)}
              style={{ textAlign: "left", width: "100%" }}
            >
              <span
                style={{
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "var(--radius-full)",
                  background: "var(--bg-card-hover)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span
                style={{
                  fontFamily: /[\u0600-\u06FF]/.test(option)
                    ? "var(--font-arabic)"
                    : "inherit",
                  fontSize: /[\u0600-\u06FF]/.test(option) ? "1.25rem" : "1rem",
                  direction: /[\u0600-\u06FF]/.test(option) ? "rtl" : "ltr",
                }}
              >
                {option}
              </span>
              {answered && index === correctAnswer && (
                <span style={{ marginLeft: "auto", fontSize: "1.1rem" }}>✓</span>
              )}
              {answered &&
                index === selected &&
                index !== correctAnswer && (
                  <span style={{ marginLeft: "auto", fontSize: "1.1rem" }}>✗</span>
                )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
