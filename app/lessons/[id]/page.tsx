"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { lessons } from "../../data/arabicData";
import QuizCard from "../../components/QuizCard";

export default function LessonDetailPage() {
  const params = useParams();
  const lessonId = Number(params.id);
  const lesson = lessons.find((l) => l.id === lessonId);

  const [quizStarted, setQuizStarted] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  if (!lesson) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "1rem",
          }}
        >
          Lesson Not Found
        </h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
          This lesson doesn&apos;t exist yet.
        </p>
        <Link href="/lessons" className="btn-primary">
          Back to Lessons
        </Link>
      </div>
    );
  }

  const prevLesson = lessons.find((l) => l.id === lessonId - 1);
  const nextLesson = lessons.find((l) => l.id === lessonId + 1);

  const handleQuizAnswer = (correct: boolean) => {
    if (correct) setQuizScore((s) => s + 1);
    if (quizIndex + 1 >= lesson.quiz.length) {
      setTimeout(() => setQuizFinished(true), 300);
    } else {
      setTimeout(() => setQuizIndex((i) => i + 1), 300);
    }
  };

  return (
    <div>
      {/* Back nav */}
      <Link
        href="/lessons"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--text-secondary)",
          fontSize: "0.9rem",
          textDecoration: "none",
          marginBottom: "1.5rem",
          transition: "color 0.2s",
        }}
        id="back-to-lessons"
      >
        ← Back to Lessons
      </Link>

      {/* Lesson header */}
      <div className="animate-fade-in-up" style={{ marginBottom: "2.5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <div className="lesson-icon" style={{ fontSize: "2rem" }}>
            {lesson.icon}
          </div>
          <div>
            <div className="lesson-number">Lesson {lesson.id}</div>
            <h1
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              {lesson.title}
            </h1>
          </div>
        </div>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: "650px",
          }}
        >
          {lesson.description}
        </p>
      </div>

      {/* Sections */}
      {lesson.sections.map((section, i) => (
        <div
          key={i}
          className={`lesson-section animate-fade-in-up stagger-${i + 1}`}
        >
          <h2>{section.title}</h2>
          <p>{section.content}</p>
          {section.arabicExamples && section.arabicExamples.length > 0 && (
            <div className="example-list">
              {section.arabicExamples.map((ex, j) => (
                <div className="example-item" key={j}>
                  <div className="arabic">{ex.arabic}</div>
                  <div className="english">{ex.english}</div>
                  <div className="translit">{ex.transliteration}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Quiz Section */}
      <div
        className="glass-card-static animate-fade-in-up"
        style={{ padding: "2rem", marginTop: "2rem", marginBottom: "2rem" }}
      >
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--accent-gold-light)",
            marginBottom: "1rem",
          }}
        >
          📝 Lesson Quiz
        </h2>

        {!quizStarted ? (
          <div>
            <p
              style={{
                color: "var(--text-secondary)",
                marginBottom: "1.5rem",
              }}
            >
              Test what you&apos;ve learned in this lesson with a quick
              {lesson.quiz.length}-question quiz.
            </p>
            <button
              className="btn-primary"
              onClick={() => setQuizStarted(true)}
              id="start-lesson-quiz"
            >
              Start Quiz →
            </button>
          </div>
        ) : !quizFinished ? (
          <div style={{ maxWidth: "600px" }}>
            <QuizCard
              key={quizIndex}
              question={lesson.quiz[quizIndex].question}
              options={lesson.quiz[quizIndex].options}
              correctAnswer={lesson.quiz[quizIndex].correctAnswer}
              onAnswer={handleQuizAnswer}
              questionNumber={quizIndex + 1}
              totalQuestions={lesson.quiz.length}
            />
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>
              {quizScore === lesson.quiz.length ? "🌟" : quizScore >= lesson.quiz.length / 2 ? "👍" : "📖"}
            </div>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              You scored{" "}
              <strong style={{ color: "var(--accent-emerald-light)" }}>
                {quizScore}/{lesson.quiz.length}
              </strong>
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
              }}
            >
              {quizScore === lesson.quiz.length
                ? "Perfect score! You've mastered this lesson!"
                : "Review the lesson content and try again."}
            </p>
            <button
              className="btn-secondary"
              onClick={() => {
                setQuizIndex(0);
                setQuizScore(0);
                setQuizFinished(false);
              }}
              id="retry-lesson-quiz"
            >
              Retry Quiz
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
          marginTop: "1rem",
        }}
      >
        {prevLesson ? (
          <Link href={`/lessons/${prevLesson.id}`} className="btn-secondary" id="prev-lesson">
            ← {prevLesson.title}
          </Link>
        ) : (
          <div />
        )}
        {nextLesson ? (
          <Link href={`/lessons/${nextLesson.id}`} className="btn-primary" id="next-lesson">
            {nextLesson.title} →
          </Link>
        ) : (
          <Link href="/practice" className="btn-primary" id="go-practice">
            Practice What You&apos;ve Learned →
          </Link>
        )}
      </div>
    </div>
  );
}
