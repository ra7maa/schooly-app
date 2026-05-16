"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header dir="rtl" className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="text-xl font-semibold text-[#102d55]">
          Schooly
        </Link>

        <div className="flex items-center gap-4 sm:hidden">
          <button
            type="button"
            aria-label="تبديل القائمة"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-300 ${open ? "rotate-90 bg-slate-100" : "hover:bg-slate-50"}`}
          >
            <span className="text-xl">{open ? "×" : "≡"}</span>
          </button>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 sm:flex flex-row-reverse">
          <Link href="/" className="transition hover:text-[#0f3b79]">
            الرئيسية
          </Link>
          <Link href="/grades" className="transition hover:text-[#0f3b79]">
            الصفوف الدراسية
          </Link>
          <Link href="/#contact" className="transition hover:text-[#0f3b79]">
            تواصل معنا
          </Link>
          <Link
            href="/profile"
            className="rounded-full border border-[#4dadeb] bg-[#eef6ff] px-4 py-2 text-[#0f3b79] transition hover:bg-[#dfe9ff]"
          >
            ملف الطالب
          </Link>
        </nav>
      </div>

      <div className={`overflow-hidden border-t border-slate-200 bg-white/95 px-6 transition-all duration-300 sm:hidden ${open ? "max-h-[24rem] py-4 opacity-100" : "max-h-0 py-0 opacity-0"}`}>
        <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
          <Link href="/" className="block rounded-2xl px-4 py-3 transition hover:bg-slate-100 text-right" onClick={() => setOpen(false)}>
            الرئيسية
          </Link>
          <Link href="/grades" className="block rounded-2xl px-4 py-3 transition hover:bg-slate-100 text-right" onClick={() => setOpen(false)}>
            الصفوف الدراسية
          </Link>
          <Link href="/#contact" className="block rounded-2xl px-4 py-3 transition hover:bg-slate-100 text-right" onClick={() => setOpen(false)}>
            تواصل معنا
          </Link>
          <Link
            href="/profile"
            className="block rounded-2xl border border-[#4dadeb] bg-[#eef6ff] px-4 py-3 text-[#0f3b79] transition hover:bg-[#dfe9ff] text-right"
            onClick={() => setOpen(false)}
          >
            ملف الطالب
          </Link>
        </nav>
      </div>
    </header>
  );
}
