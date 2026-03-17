"use client";

import { useState, useMemo, useCallback } from "react";
import { vocabulary, arabicAlphabet } from "../data/arabicData";
import QuizCard from "../components/QuizCard";

type QuizType = "word-to-english" | "english-to-word" | "letter-id";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateQuestions(type: QuizType, count: number): QuizQuestion[] {
  const questions: QuizQuestion[] = [];

  if (type === "word-to-english") {
    const words = shuffle(vocabulary).slice(0, count);
    for (const word of words) {
      const others = vocabulary
        .filter((w) => w.english !== word.english)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((w) => w.english);
      const options = shuffle([word.english, ...others]);
      questions.push({
        question: `What does "${word.arabic}" mean?`,
        options,
        correctAnswer: options.indexOf(word.english),
      });
    }
  } else if (type === "english-to-word") {
    const words = shuffle(vocabulary).slice(0, count);
    for (const word of words) {
      const others = vocabulary
        .filter((w) => w.arabic !== word.arabic)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((w) => w.arabic);
      const options = shuffle([word.arabic, ...others]);
      questions.push({
        question: `How do you say "${word.english}" in Arabic?`,
        options,
        correctAnswer: options.indexOf(word.arabic),
      });
    }
  } else {
    const letters = shuffle(arabicAlphabet).slice(0, count);
    for (const letter of letters) {
      const others = arabicAlphabet
        .filter((l) => l.name !== letter.name)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((l) => l.name);
      const options = shuffle([letter.name, ...others]);
      questions.push({
        question: `What is the name of this letter: ${letter.isolated} ?`,
        options,
        correctAnswer: options.indexOf(letter.name),
      });
    }
  }

  return questions;
}

const QUIZ_COUNT = 10;

export default function PracticePage() {
  const [quizType, setQuizType] = useState<QuizType>("word-to-english");
  const [questions, setQuestions] = useState<QuizQuestion[]>(() =>
    generateQuestions("word-to-english", QUIZ_COUNT)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [finished, setFinished] = useState(false);

  const startQuiz = useCallback(
    (type: QuizType) => {
      setQuizType(type);
      setQuestions(generateQuestions(type, QUIZ_COUNT));
      setCurrentIndex(0);
      setScore(0);
      setStreak(0);
      setFinished(false);
    },
    []
  );

  const handleAnswer = useCallback(
    (correct: boolean) => {
      if (correct) {
        setScore((s) => s + 1);
        setStreak((s) => s + 1);
      } else {
        setStreak(0);
      }

      if (currentIndex + 1 >= questions.length) {
        setTimeout(() => setFinished(true), 300);
      } else {
        setTimeout(() => setCurrentIndex((i) => i + 1), 300);
      }
    },
    [currentIndex, questions.length]
  );

  const currentQuestion = questions[currentIndex];

  return (
    <div>
      <div className="page-header animate-fade-in-up">
        <h1>Practice & Quiz</h1>
        <p>Test your Arabic knowledge with interactive quizzes.</p>
      </div>

      {/* Quiz type selector */}
      <div className="tabs animate-fade-in-up stagger-1">
        {(
          [
            { type: "word-to-english" as QuizType, label: "Arabic → English" },
            { type: "english-to-word" as QuizType, label: "English → Arabic" },
            { type: "letter-id" as QuizType, label: "Letter Identification" },
          ] as const
        ).map(({ type, label }) => (
          <button
            key={type}
            className={`tab ${quizType === type ? "active" : ""}`}
            onClick={() => startQuiz(type)}
            id={`quiz-${type}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Score & Streak */}
      <div
        className="animate-fade-in-up stagger-2"
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <div className="score-badge">
          🏆 Score: {score}/{questions.length}
        </div>
        {streak >= 2 && (
          <div
            className="score-badge"
            style={{
              background: "rgba(245, 166, 35, 0.15)",
              borderColor: "rgba(245, 166, 35, 0.3)",
              color: "var(--accent-gold-light)",
            }}
          >
            🔥 Streak: {streak}
          </div>
        )}
      </div>

      {/* Quiz Content */}
      {!finished && currentQuestion ? (
        <div style={{ maxWidth: "600px" }}>
          <QuizCard
            key={`${quizType}-${currentIndex}`}
            question={currentQuestion.question}
            options={currentQuestion.options}
            correctAnswer={currentQuestion.correctAnswer}
            onAnswer={handleAnswer}
            questionNumber={currentIndex + 1}
            totalQuestions={questions.length}
          />
        </div>
      ) : finished ? (
        <div
          className="glass-card animate-fade-in-up"
          style={{
            padding: "3rem",
            textAlign: "center",
            maxWidth: "500px",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            {score >= questions.length * 0.8
              ? "🎉"
              : score >= questions.length * 0.5
                ? "👏"
                : "💪"}
          </div>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
              color: "var(--text-primary)",
            }}
          >
            Quiz Complete!
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              marginBottom: "0.5rem",
            }}
          >
            You scored{" "}
            <span
              style={{
                color:
                  score >= questions.length * 0.8
                    ? "var(--accent-emerald-light)"
                    : "var(--accent-gold-light)",
                fontWeight: 700,
              }}
            >
              {score}/{questions.length}
            </span>
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              marginBottom: "2rem",
            }}
          >
            {score >= questions.length * 0.8
              ? "Excellent! You're mastering Arabic! 🌟"
              : score >= questions.length * 0.5
                ? "Good job! Keep practicing to improve."
                : "Don't give up! Practice makes perfect."}
          </p>
          <button
            className="btn-primary"
            onClick={() => startQuiz(quizType)}
            id="retry-quiz"
          >
            Try Again →
          </button>
        </div>
      ) : null}
    </div>
  );
}
