import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg shadow-slate-200/60">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">Student Profile</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#102d55]">Welcome back, Lina</h1>
              <p className="mt-4 text-slate-600">
                Your profile page shows your grade, current course, and progress for each unit.
              </p>
            </div>
            <div className="rounded-full bg-[#eef6ff] px-6 py-4 text-sm font-semibold text-[#0f3b79]">
              Grade 3 • Preparatory
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { label: "Current Subject", value: "Social Studies" },
              { label: "Next Lesson", value: "Unit 1 Lesson 1" },
              { label: "Practice Exams Completed", value: "2 / 16" },
              { label: "Study Streak", value: "5 days" },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-slate-200 bg-[#f8fbff] p-6">
                <p className="text-sm font-semibold text-[#0f3b79]">{item.label}</p>
                <p className="mt-3 text-xl font-semibold text-[#102d55]">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-[#eef6ff] p-8">
            <p className="text-base font-semibold text-[#102d55]">Student summary</p>
            <p className="mt-4 text-slate-600">
              You can explore your progress, revisit lesson explanations, and continue to the next practice exam. This is a simple placeholder profile page for Schooly.
            </p>
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-md shadow-slate-200/60">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">Quick links</p>
              <p className="mt-3 text-slate-600">Jump back into your course or see the full grade dashboard.</p>
            </div>
            <Link
              href="/grades/preparatory/3"
              className="inline-flex rounded-full bg-[#0f3b79] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0d336f]"
            >
              Go to my grade dashboard
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
