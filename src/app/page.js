import Link from "next/link";

const featureItems = [
  {
    title: "Structured learning journeys",
    description: "Clear grade and subject flow helps learners stay confident and organized.",
  },
  {
    title: "Practice exams for every lesson",
    description: "Build exam confidence with review questions after each concept.",
  },
  {
    title: "Student-friendly navigation",
    description: "Easy access to grades, subjects, and units with clear page paths.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eef6ff] px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <section className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0f3b79] via-[#23569d] to-[#4dadeb] p-8 text-white shadow-[0_25px_80px_rgba(15,59,121,0.15)] sm:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
                Learning made simple for every student
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
                Schooly brings lessons, practice, and progress together in one bright space.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/85">
                A clean LMS crafted for Primary, Preparatory, and Secondary students with easy grade navigation, subject dashboards, and structured Social Studies learning.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/grades"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0f3b79] transition hover:bg-slate-100"
                >
                  Start learning
                </Link>
                <Link
                  href="/profile"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  View student profile
                </Link>
              </div>
            </div>

            <div className="relative rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl shadow-slate-950/10 backdrop-blur-sm sm:p-8">
              {/* IMAGE PLACEHOLDER: Replace with hero illustration */}
              <div className="flex h-full min-h-[22rem] items-center justify-center rounded-[1.75rem] border border-dashed border-white/40 bg-white/10 text-center text-white/90">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/90">Hero Illustration Placeholder</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white">Primary-friendly learning</p>
                  <p className="mt-2 text-sm text-white/75">Designed for younger readers and confident progression.</p>
                </div>
                <div className="rounded-[1.5rem] bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white">Prep Grade focus</p>
                  <p className="mt-2 text-sm text-white/75">A complete Grade 3 Social Studies path with lessons and exams.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-10 shadow-lg shadow-slate-200/50">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">Why Schooly</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#102d55]">An LMS with clarity, structure, and student comfort.</h2>
              </div>
              <div className="rounded-full bg-[#eef6ff] px-4 py-3 text-sm font-semibold text-[#0f3b79]">
                100% student-friendly design
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {featureItems.map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-xl font-semibold text-[#102d55]">{item.title}</p>
                  <p className="mt-3 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#f8fcff] p-10 shadow-sm shadow-slate-200/40">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">How it works</p>
            <div className="mt-8 space-y-6">
              {[
                {
                  step: "1",
                  title: "Choose your grade",
                  description: "Select Primary, Preparatory, or Secondary to find the right course path.",
                },
                {
                  step: "2",
                  title: "Open your subject hub",
                  description: "Browse subjects like Social Studies, Math, Science, and languages.",
                },
                {
                  step: "3",
                  title: "Study lessons and practice",
                  description: "Use explanation pages and practice exams to reinforce learning.",
                },
              ].map((item) => (
                <div key={item.step} className="rounded-[1.75rem] border border-slate-200 bg-white p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f3b79] text-sm font-semibold text-white">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#102d55]">{item.title}</h3>
                      <p className="mt-2 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="rounded-[2rem] bg-white p-10 shadow-lg shadow-slate-200/50">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">Contact us</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#102d55]">Need support or have a question?</h2>
              <p className="mt-4 max-w-2xl text-slate-600">
                Reach out to Schooly's student support team. We're here to help learners, parents, and educators get the most out of the platform.
              </p>
            </div>
            <div className="rounded-[2rem] bg-[#eef6ff] p-8">
              <p className="text-base font-semibold text-[#0f3b79]">Contact details</p>
              <div className="mt-4 space-y-3 text-slate-600">
                <p>Email: support@schooly.edu</p>
                <p>Phone: +1 (555) 789-0123</p>
                <p>Office: 123 Learning Lane, Education City</p>
              </div>
              <p className="mt-6 rounded-3xl bg-white px-4 py-3 text-sm text-slate-700">
                For quick responses, mention your grade and subject in the message.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
