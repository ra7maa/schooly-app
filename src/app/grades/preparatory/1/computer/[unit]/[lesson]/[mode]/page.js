import Link from "next/link";
import UnitNav from "../../../UnitNav";
import { findLesson, findUnit, staticLessonParams } from "../../../content";

export function generateStaticParams() {
  return staticLessonParams;
}

export default async function LessonModePage({ params }) {
  const { unit, lesson, mode } = await params;
  const unitData = findUnit(unit);
  const lessonData = findLesson(unit, lesson);

  if (!unitData || !lessonData || !["explanation", "quiz"].includes(mode)) {
    return <div className="p-10 text-slate-700">Page not found.</div>;
  }

  const nextMode = mode === "explanation" ? "quiz" : "explanation";
  const nextLabel = mode === "explanation" ? "Go to Lesson Quiz" : "Review another lesson";
  const nextHref = `/grades/preparatory/1/computer/${unit}/${lesson}/${nextMode}`;
  const objectives = Array.isArray(lessonData.objectives) ? lessonData.objectives : [];
  const sections = Array.isArray(lessonData.sections) ? lessonData.sections : [];
  const quizQuestions = Array.isArray(lessonData.quiz) ? lessonData.quiz : [];

  return (
    <main className="min-h-screen bg-[#f4f8ff] px-6 py-10 sm:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-8 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg shadow-slate-200/60">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">{unitData.title}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#102d55]">{lessonData.title}</h1>
            <p className="text-lg leading-8 text-slate-600">{lessonData.description}</p>
          </div>

          {mode === "explanation" ? (
            <div className="space-y-8">
              {objectives.length > 0 && (
                <div className="rounded-[1.75rem] border border-slate-200 bg-[#eef6ff] p-8">
                  <p className="text-base font-semibold text-[#102d55]">Learning Objectives</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                    {objectives.map((objective, index) => (
                      <li key={index}>{objective}</li>
                    ))}
                  </ul>
                </div>
              )}

              {sections.length > 0 ? (
                sections.map((section) => (
                  <div key={section.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/40">
                    <h2 className="text-xl font-semibold text-[#102d55]">{section.title}</h2>
                    <div className="mt-4 space-y-4 text-slate-700">
                      {section.content.split(/\n\n+/).map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-[1.75rem] border border-slate-200 bg-[#eef6ff] p-8">
                  <p className="text-base font-semibold text-[#102d55]">Lesson content</p>
                  <p className="mt-3 text-slate-700">This lesson is currently available with text only.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-8">
              <div className="rounded-[1.75rem] border border-slate-200 bg-[#eef6ff] p-8">
                <p className="text-base font-semibold text-[#102d55]">Lesson Quiz</p>
                <p className="mt-3 text-slate-600">Answer the questions below to review what you learned in this lesson.</p>
              </div>

              {quizQuestions.length > 0 ? (
                <ol className="space-y-4 text-slate-700">
                  {quizQuestions.map((question, index) => (
                    <li key={question.id ?? index} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
                      <p className="font-semibold text-slate-900">{`Question ${index + 1}: ${question.question}`}</p>
                      {question.type === "mcq" ? (
                        <div className="mt-4 space-y-2 text-slate-700">
                          {question.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="rounded-2xl border border-slate-200 bg-[#f8fbff] px-4 py-3">
                              <span className="font-medium">{String.fromCharCode(65 + optionIndex)}.</span> {option}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="mt-4 rounded-2xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-slate-700">
                          True / False
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 text-slate-700">
                  <p className="font-semibold">No quiz available for this lesson yet.</p>
                </div>
              )}
            </div>
          )}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={nextHref}
              className="inline-flex rounded-full bg-[#0f3b79] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0d336f]"
            >
              {nextLabel}
            </Link>
            <Link href="/grades/preparatory/1/computer" className="text-sm font-semibold text-[#0f3b79] hover:text-[#0d336f]">
              Back to Computer dashboard
            </Link>
          </div>
        </section>

        <UnitNav />
      </div>
    </main>
  );
}
