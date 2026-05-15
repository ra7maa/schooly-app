import Link from "next/link";
import UnitNav from "../UnitNav";
import { findUnit } from "../content";

const unit = findUnit("unit-3");

export default function UnitThreePage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] px-6 py-10 sm:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-8 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg shadow-slate-200/60">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">{unit.title}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#102d55]">Social Studies Unit 3</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">{unit.subtitle}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {unit.lessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/grades/preparatory/3/social-studies/unit-3/${lesson.id}/explanation`}
                className="rounded-[1.5rem] border border-slate-200 bg-[#f8fbff] p-6 transition hover:border-[#4dadeb] hover:bg-[#eef6ff]"
              >
                <p className="text-sm font-semibold text-[#0f3b79]">{lesson.id.replace("lesson-", "Lesson ")}</p>
                <h2 className="mt-3 text-2xl font-semibold text-[#102d55]">{lesson.title}</h2>
                <p className="mt-3 text-slate-600">{lesson.description}</p>
              </Link>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-[#4dadeb] bg-[#e8f2ff] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0f3b79]">Unit final exam</p>
            <p className="mt-3 text-slate-700">Take the Unit 3 final exam to check your understanding of modern society topics.</p>
            <Link
              href="/grades/preparatory/3/social-studies/unit-3/final-exam"
              className="mt-5 inline-flex rounded-full bg-[#0f3b79] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0d336f]"
            >
              Go to Unit 3 Final Exam
            </Link>
          </div>
        </section>

        <UnitNav />
      </div>
    </main>
  );
}
