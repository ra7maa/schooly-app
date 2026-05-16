import Link from "next/link";

const navItems = [
  { id: "unit-1", label: "الوحدة الأولى" },
  { id: "unit-2", label: "الوحدة الثانية" },
];

export default function UnitNav() {
  return (
    <aside dir="rtl" className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
      <h2 className="text-base font-semibold text-[#102d55] text-right">انتقل إلى الوحدة</h2>
      <nav className="mt-6 space-y-3 text-sm text-slate-700">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={`/grades/preparatory/1/computer/${item.id}`}
            className="block rounded-2xl border border-slate-200 bg-[#f8fbff] px-4 py-3 transition hover:border-[#4dadeb] hover:bg-[#eef6ff] text-right"
          >
            {item.label}
          </Link>
        ))}
        <div className="mt-4 border-t border-slate-200 pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0f3b79] text-right">الامتحانات النهائية</p>
          {navItems.map((item) => (
            <Link
              key={`${item.id}-exam`}
              href={`/grades/preparatory/1/computer/${item.id}/final-exam`}
              className="mt-2 block rounded-2xl border border-slate-200 bg-[#e9f4ff] px-4 py-3 text-[#0f3b79] transition hover:border-[#4dadeb] hover:bg-[#dfe9ff] text-right"
            >
              {item.label} - الاختبار النهائي
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}
