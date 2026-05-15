import Link from "next/link";
import UnitNav from "./UnitNav";
import { socialStudiesUnits, getSubjectOverview } from "./content";

export default function SocialStudiesHub() {
  const overview = getSubjectOverview();

  return (
    <main className="min-h-screen bg-[#f4f8ff] px-6 py-10 sm:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-8 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg shadow-slate-200/60">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">Social Studies</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#102d55]">{overview.title}</h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">{overview.description}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {[
              "Arabic",
              "English",
              "German",
              "French",
              "Math",
              "Science",
              "Social Studies",
              "Computer",
              "Religion",
            ].map((subject) => (
              <div key={subject} className={`rounded-[1.75rem] border border-slate-200 p-6 ${subject === "Social Studies" ? "bg-[#e8f2ff]" : "bg-[#f8fbff]"}`}>
                <h2 className="text-xl font-semibold text-[#102d55]">{subject}</h2>
                <p className="mt-3 text-slate-600">{subject === "Social Studies" ? "Full course path available here." : "Coming soon for this grade."}</p>
                {subject === "Social Studies" ? (
                  <Link href="/grades/preparatory/3/social-studies/unit-1" className="mt-5 inline-flex rounded-full bg-[#0f3b79] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0d336f]">
                    Start Unit 1
                  </Link>
                ) : (
                  <div className="mt-5 text-sm font-semibold text-[#5f7da2]">Available soon</div>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-[#eef6ff] p-6">
            <h2 className="text-xl font-semibold text-[#0f3b79]">Course pathway</h2>
            <p className="mt-3 text-slate-700">Complete each unit with lesson explanations, then review with a practice exam. Use the unit navigation to jump directly to the section you need.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {socialStudiesUnits.map((unit) => (
              <Link
                key={unit.id}
                href={`/grades/preparatory/3/social-studies/${unit.id}`}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 transition hover:border-[#4dadeb] hover:bg-[#eef6ff]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0f3b79]">{unit.id.replace("unit-", "Unit ")}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[#102d55]">{unit.title.replace("Unit ", "")}</h3>
                <p className="mt-3 text-slate-600">{unit.subtitle}</p>
              </Link>
            ))}
          </div>
        </section>

        <UnitNav />
      </div>
    </main>
  );
}
