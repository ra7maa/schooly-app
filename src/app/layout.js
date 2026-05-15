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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f4f8ff] text-slate-900 font-sans">
        <Header />

        <div className="flex min-h-[calc(100vh-128px)] flex-col">{children}</div>

        <footer className="border-t border-slate-200 bg-white/95 py-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-10 lg:flex-row lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">Schooly</p>
              <p className="mt-4 text-slate-600">
                A clean LMS for Primary, Preparatory, and Secondary learners. Everything is designed for easy lesson access, clear progress, and student confidence.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="font-semibold text-[#102d55]">Contact</p>
                <p className="mt-2 text-slate-600">Email: hello@schooly.edu</p>
                <p className="text-slate-600">Phone: +1 (800) 123-4567</p>
              </div>
              <div>
                <p className="font-semibold text-[#102d55]">Quick links</p>
                <p className="mt-2 text-slate-600">Support Center</p>
                <p className="text-slate-600">Privacy Policy</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
