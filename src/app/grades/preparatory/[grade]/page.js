import Link from "next/link";

const subjects = ["Arabic", "English", "German", "French", "Math", "Science", "Social Studies", "Computer", "Religion"];

export default async function PreparatoryGradePage({ params }) {
  const { grade } = await params;
  const gradeNum = Number(grade);
  const isGradeThree = gradeNum === 3;
  const isGradeOne = gradeNum === 1;

  return (
    <main className="min-h-screen bg-[#f4f8ff] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg shadow-slate-200/60">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">Preparatory Grade {grade}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#102d55]">Subject Dashboard</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Explore subjects for Preparatory Grade {grade}. Ready subjects are highlighted below.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {subjects.map((subject) => {
            const active = (isGradeThree && subject === "Social Studies") || (isGradeOne && subject === "Computer");
            const href = subject === "Social Studies" ? "/grades/preparatory/3/social-studies" : "/grades/preparatory/1/computer";
            const card = (
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40 transition hover:border-[#4dadeb] hover:shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold text-[#102d55]">{subject}</h2>
                  {active && <span className="rounded-full bg-[#d4e9ff] px-3 py-1 text-xs font-semibold text-[#0f3b79]">Ready</span>}
                </div>
                <p className="mt-3 text-slate-600">
                  {active ? "Access the full Computer course content now." : "Coming soon for this grade and subject."}
                </p>
                {active ? (
                  <div className="mt-6 inline-flex rounded-full bg-[#0f3b79] px-4 py-2 text-sm font-semibold text-white">Open {subject} content</div>
                ) : (
                  <div className="mt-6 text-sm font-semibold text-[#5f7da2]">Subject in development</div>
                )}
              </div>
            );
            return active ? (
              <Link key={subject} href={href} className="group">
                {card}
              </Link>
            ) : (
              <div key={subject}>{card}</div>
            );
          })}
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-[#eef6ff] p-6 text-slate-700">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">Tip</p>
          <p className="mt-3 text-base leading-7">
            For Grade 1, Computer is ready and accessible now. For Grade 3, Social Studies is also available with lesson and exam content.
          </p>
        </div>
      </div>
    </main>
  );
}
