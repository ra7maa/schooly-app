import Link from "next/link";
import UnitNav from "../../UnitNav";
import { findUnit, socialStudiesUnits, staticUnitParams } from "../../content";

export function generateStaticParams() {
  return staticUnitParams;
}

export default async function FinalExamPage({ params }) {
  const { unit } = await params;
  const unitData = findUnit(unit);

  if (!unitData) {
    return <div className="p-10 text-slate-700">Page not found.</div>;
  }

  return (
    <main className="min-h-screen bg-[#f4f8ff] px-6 py-10 sm:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-8 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg shadow-slate-200/60">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">{unitData.title}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#102d55]">Unit Final Exam</h1>
            <p className="text-lg leading-8 text-slate-600">Complete this final exam to review the lessons from {unitData.title}.</p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-[#eef6ff] p-8">
            <p className="text-base font-semibold text-[#102d55]">Final Review Questions</p>
            <p className="mt-3 text-slate-600">Answer the questions below to prove your understanding of the unit.</p>
          </div>

          <ol className="space-y-4 text-slate-700">
            {unitData.lessons.map((lesson, index) => (
              <li key={lesson.id} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
                <p className="font-semibold text-slate-900">Question {index + 1}: What did you learn from "{lesson.title}"?</p>
              </li>
            ))}
            <li className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
              <p className="font-semibold text-slate-900">Question {unitData.lessons.length + 1}: Why is the unit important for your community?</p>
            </li>
          </ol>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={`/grades/preparatory/3/social-studies/${unit}`}
              className="inline-flex rounded-full bg-[#0f3b79] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0d336f]"
            >
              Back to Unit Overview
            </Link>
            <Link href="/grades/preparatory/3/social-studies" className="text-sm font-semibold text-[#0f3b79] hover:text-[#0d336f]">
              Return to Social Studies dashboard
            </Link>
          </div>
        </section>

        <UnitNav />
      </div>
    </main>
  );
}
