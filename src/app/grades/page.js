import Link from "next/link";

const gradeSets = [
  {
    label: "Primary",
    description: "Grades 1–6 curriculum hub.",
    grades: [1, 2, 3, 4, 5, 6],
    href: "/grades/primary/1",
    accent: "bg-[#dce9ff] text-[#0f3b79]",
  },
  {
    label: "Preparatory",
    description: "Grades 1–3 with focused subjects.",
    grades: [1, 2, 3],
    href: "/grades/preparatory/3",
    accent: "bg-[#e8f7ff] text-[#0f3b79]",
  },
  {
    label: "Secondary",
    description: "Grades 1–3 with advanced topics.",
    grades: [1, 2, 3],
    href: "/grades/secondary/1",
    accent: "bg-[#e2efff] text-[#0f3b79]",
  },
];

export default function Grades() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg shadow-slate-200/60">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">Choose your grade</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#102d55]">Select your grade level to begin</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Start with the right age group and access subject dashboards tailored for each Primary, Preparatory, and Secondary grade.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {gradeSets.map((group) => (
            <section key={group.label} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/40">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${group.accent}`}>{group.label}</p>
                  <p className="mt-4 text-slate-600">{group.description}</p>
                </div>
                <div className="rounded-3xl bg-[#eef6ff] p-4 text-[#0f3b79]">Grades {group.grades[0]}-{group.grades[group.grades.length - 1]}</div>
              </div>
              <div className="mt-6 grid gap-3">
                {group.grades.map((grade) => (
                  <Link
                    key={grade}
                    href={`${group.href.replace(/\d+$/, grade.toString())}`}
                    className="rounded-3xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-sm font-medium text-slate-900 transition hover:border-[#4dadeb] hover:bg-[#eef6ff]"
                  >
                    {group.label} Grade {grade}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
