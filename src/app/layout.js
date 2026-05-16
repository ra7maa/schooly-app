import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Schooly",
  description: "A modern educational platform for primary, preparatory, and secondary students.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ direction: "rtl", textAlign: "right" }}
    >
      <head>
        <style>{`
          html, body, * {
            direction: rtl !important;
          }
          body {
            text-align: right;
          }
        `}</style>
      </head>
      <body className="min-h-full bg-[#f4f8ff] text-slate-900 font-sans" dir="rtl" style={{ direction: "rtl" }}>
        <Header />

        <div className="flex min-h-[calc(100vh-128px)] flex-col" dir="rtl">{children}</div>

        <footer className="border-t border-slate-200 bg-white/95 py-10" dir="rtl">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-10 lg:flex-row lg:justify-between">
            <div className="max-w-2xl text-right">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">Schooly</p>
              <p className="mt-4 text-slate-600">
                منصة تعليمية حديثة للطلاب من المرحلة الابتدائية والإعدادية والثانوية. كل شيء مصمم لسهولة الوصول إلى الدروس والتقدم الواضح وثقة الطالب.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 text-right">
              <div>
                <p className="font-semibold text-[#102d55]">تواصل معنا</p>
                <p className="mt-2 text-slate-600">البريد الإلكتروني: hello@schooly.edu</p>
                <p className="text-slate-600">الهاتف: +1 (800) 123-4567</p>
              </div>
              <div>
                <p className="font-semibold text-[#102d55]">روابط سريعة</p>
                <p className="mt-2 text-slate-600">مركز الدعم</p>
                <p className="text-slate-600">سياسة الخصوصية</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
