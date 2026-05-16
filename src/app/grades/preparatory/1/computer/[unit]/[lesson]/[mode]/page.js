import Link from "next/link";
import UnitNav from "../../../UnitNav";
import InteractiveQuiz from "../../../InteractiveQuiz";
import { findLesson, findUnit, staticLessonParams } from "../../../content";

export function generateStaticParams() {
  return staticLessonParams;
}

export default async function LessonModePage({ params }) {
  const { unit, lesson, mode } = await params;
  const unitData = findUnit(unit);
  const lessonData = findLesson(unit, lesson);

  if (!unitData || !lessonData || !["explanation", "quiz"].includes(mode)) {
    return <div className="p-10 text-slate-700">الصفحة غير موجودة.</div>;
  }

  const nextMode = mode === "explanation" ? "quiz" : "explanation";
  const nextLabel = mode === "explanation" ? "انتقل إلى اختبار الدرس" : "مراجعة درس آخر";
  const nextHref = `/grades/preparatory/1/computer/${unit}/${lesson}/${nextMode}`;
  const objectives = Array.isArray(lessonData.objectives) ? lessonData.objectives : [];
  const sections = Array.isArray(lessonData.sections) ? lessonData.sections : [];
  const quizQuestions = Array.isArray(lessonData.quiz) ? lessonData.quiz : [];

  return (
    <main dir="rtl" className="min-h-screen bg-[#f4f8ff] px-6 py-10 sm:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-8 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg shadow-slate-200/60">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79] text-right">{unitData.title}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#102d55] text-right">{lessonData.title}</h1>
            <p className="text-lg leading-8 text-slate-600 text-right">{lessonData.description}</p>
          </div>

          {mode === "explanation" ? (
            <div className="space-y-8">
              {objectives.length > 0 && (
                <div className="rounded-[1.75rem] border border-slate-200 bg-[#eef6ff] p-8">
                  <p className="text-base font-semibold text-[#102d55] text-right">أهداف التعلم</p>
                  <ul className="mt-4 list-disc space-y-2 pr-5 text-slate-700 text-right">
                    {objectives.map((objective, index) => (
                      <li key={index} className="text-right">{objective}</li>
                    ))}
                  </ul>
                </div>
              )}

              {sections.length > 0 ? (
                sections.map((section) => (
                  <div key={section.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/40">
                    <h2 className="text-xl font-semibold text-[#102d55] text-right">{section.title}</h2>
                    <div className="mt-4 space-y-4 text-slate-700 text-right">
                      {section.content.split(/\n\n+/).map((paragraph, index) => (
                        <p key={index} className="text-right">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-[1.75rem] border border-slate-200 bg-[#eef6ff] p-8">
                  <p className="text-base font-semibold text-[#102d55] text-right">محتوى الدرس</p>
                  <p className="mt-3 text-slate-700 text-right">هذا الدرس متاح حالياً بنص فقط.</p>
                </div>
              )}
            </div>
          ) : (
            <InteractiveQuiz questions={quizQuestions} />
          )}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={nextHref}
              className="inline-flex rounded-full bg-[#0f3b79] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0d336f]"
            >
              {nextLabel}
            </Link>
            <Link href="/grades/preparatory/1/computer" className="text-sm font-semibold text-[#0f3b79] hover:text-[#0d336f]">
              العودة إلى لوحة تحكم الحاسب الآلي
            </Link>
          </div>
        </section>

        <UnitNav />
      </div>
    </main>
  );
}
