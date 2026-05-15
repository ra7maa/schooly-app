import Link from "next/link";
import UnitNav from "../../../UnitNav";
import {
  findLesson,
  findUnit,
  getLessonLabel,
  socialStudiesUnits,
  staticLessonParams,
} from "../../../content";

export function generateStaticParams() {
  return staticLessonParams;
}

export default async function LessonModePage({ params }) {
  const { unit, lesson, mode } = await params;
  const unitData = findUnit(unit);
  const lessonData = findLesson(unit, lesson);

  if (!unitData || !lessonData || !["explanation", "exam"].includes(mode)) {
    return <div className="p-10 text-slate-700">Page not found.</div>;
  }

  const stepTitle = mode === "explanation" ? "Explanation" : "Practice Exam";
  const nextMode = mode === "explanation" ? "exam" : "explanation";
  const nextLabel = mode === "explanation" ? "Go to Practice Exam" : "Review another lesson";
  const nextHref = `/grades/preparatory/3/social-studies/${unit}/${lesson}/${nextMode}`;

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
            <div className="space-y-6">
              <div className="rounded-[1.75rem] border border-slate-200 bg-[#eef6ff] p-8">
                {/* VIDEO PLACEHOLDER: Replace with lesson video or animation */}
                <div className="h-72 rounded-[1.5rem] border border-dashed border-[#4dadeb] bg-[#f8fbff] flex items-center justify-center text-slate-500">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em]">Video Placeholder</span>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  "Key concept summary",
                  "Real student example",
                  "What to remember",
                ].map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
                    <p className="text-sm font-semibold text-[#0f3b79]">{item}</p>
                    <p className="mt-3 text-slate-600">Use this section to check the main idea and practice reading the content clearly.</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="rounded-[1.75rem] border border-slate-200 bg-[#eef6ff] p-8">
                <p className="text-base font-semibold text-[#102d55]">Practice Exam</p>
                <p className="mt-3 text-slate-600">Answer a few short questions to test your learning from this lesson.</p>
              </div>
              <ol className="space-y-4 text-slate-700">
                {[
                  `Question 1: What is the main idea of ${lessonData.title.toLowerCase()}?`,
                  "Question 2: Name one example mentioned in the lesson.",
                  "Question 3: Why is this idea important for your community?",
                ].map((question, index) => (
                  <li key={index} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
                    <p className="font-semibold text-slate-900">{question}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={nextHref}
              className="inline-flex rounded-full bg-[#0f3b79] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0d336f]"
            >
              {nextLabel}
            </Link>
            <Link href="/grades/preparatory/3/social-studies" className="text-sm font-semibold text-[#0f3b79] hover:text-[#0d336f]">
              Back to Social Studies dashboard
            </Link>
          </div>
        </section>

        <UnitNav />
      </div>
    </main>
  );
}
