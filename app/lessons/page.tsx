import Link from "next/link";
import { lessons } from "../data/arabicData";

export default function LessonsPage() {
  return (
    <div>
      <div className="page-header animate-fade-in-up">
        <h1>Lessons</h1>
        <p>
          Follow our structured curriculum — from the basics of Arabic script
          to everyday conversations.
        </p>
      </div>

      <div className="lesson-list">
        {lessons.map((lesson, i) => (
          <Link
            key={lesson.id}
            href={`/lessons/${lesson.id}`}
            className={`lesson-card animate-fade-in-up stagger-${i + 1}`}
            id={`lesson-${lesson.id}`}
          >
            <div className="lesson-icon">{lesson.icon}</div>
            <div className="lesson-info">
              <div className="lesson-number">Lesson {lesson.id}</div>
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
            </div>
            <span className="lesson-arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
