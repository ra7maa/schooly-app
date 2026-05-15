import Link from "next/link";

const subjects = ["Arabic", "English", "German", "French", "Math", "Science", "Social Studies", "Computer", "Religion"];

export default function SecondaryGradePage({ params }) {
  return (
    <main className="min-h-screen bg-[#f4f8ff] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg shadow-slate-200/60">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">Secondary Grade {params.grade}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#102d55]">Subject Dashboard</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Discover subject options for Secondary students. The Social Studies path for Preparatory Grade 3 is currently the most complete experience.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {subjects.map((subject) => (
            <div key={subject} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
              <h2 className="text-xl font-semibold text-[#102d55]">{subject}</h2>
              <p className="mt-3 text-slate-600">Lessons coming soon for Grade {params.grade}.</p>
              <div className="mt-6">
                <Link href="/grades" className="text-sm font-semibold text-[#0f3b79] hover:text-[#0d336f]">
                  Back to grade selection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
