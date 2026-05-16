import Link from "next/link";
import Image from "next/image";

const featureItems = [
  {
    title: "رحلات تعلم منظمة",
    description: "تدفق الصف والموضوع الواضح يساعد المتعلمين على البقاء واثقين ومنظمين.",
  },
  {
    title: "اختبارات الممارسة لكل درس",
    description: "بناء ثقة الاختبار من خلال أسئلة المراجعة بعد كل مفهوم.",
  },
  {
    title: "التنقل الودود للطالب",
    description: "الوصول السهل إلى الصفوف والمواد والوحدات مع مسارات الصفحة الواضحة.",
  },
];

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#eef6ff] px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <section className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0f3b79] via-[#23569d] to-[#4dadeb] p-8 text-white shadow-[0_25px_80px_rgba(15,59,121,0.15)] sm:p-16" dir="rtl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur flex-row-reverse">
                <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
                التعلم أصبح بسيطاً لكل طالب
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl text-right">
                Schooly يجمع الدروس والممارسة والتقدم معاً في مكان واحد مشرق.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/85 text-right">
                منصة تعليمية نظيفة مصممة لطلاب المرحلة الابتدائية والإعدادية والثانوية مع التنقل السهل بين الصفوف ولوحات تحكم المواد والتعلم المنظم للدراسات الاجتماعية.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row flex-row-reverse">
                <Link
                  href="/grades"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0f3b79] transition hover:bg-slate-100"
                >
                  ابدأ التعلم
                </Link>
                <Link
                  href="/profile"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  عرض ملف الطالب
                </Link>
              </div>
            </div>

            <div className="relative rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl shadow-slate-950/10 backdrop-blur-sm sm:p-8">
              {/* صورة بطل الصفحة */}
              <div className="flex h-full min-h-[22rem] items-center justify-center rounded-[1.75rem] overflow-hidden">
                <img
                  src="/download.jpeg"
                  alt="صورة توضيحية"
                  className="w-full h-full object-cover rounded-[1.75rem]"
                />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white text-right">التعلم الودود للمرحلة الابتدائية</p>
                  <p className="mt-2 text-sm text-white/75 text-right">مصممة للقراء الأصغر والتقدم الواثق.</p>
                </div>
                <div className="rounded-[1.5rem] bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white text-right">تركيز الصف الإعدادي</p>
                  <p className="mt-2 text-sm text-white/75 text-right">مسار اجتماعيات كامل للصف الثالث مع دروس واختبارات.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-10 shadow-lg shadow-slate-200/50" dir="rtl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between flex-row-reverse">
              <div className="text-right">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">لماذا Schooly</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#102d55]">منصة تعليمية بالوضوح والهيكل وراحة الطالب.</h2>
              </div>
              <div className="rounded-full bg-[#eef6ff] px-4 py-3 text-sm font-semibold text-[#0f3b79] text-right">
                تصميم 100% ودود للطالب
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {featureItems.map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-xl font-semibold text-[#102d55] text-right">{item.title}</p>
                  <p className="mt-3 text-slate-600 text-right">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#f8fcff] p-10 shadow-sm shadow-slate-200/40" dir="rtl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79] text-right">كيفية العمل</p>
            <div className="mt-8 space-y-6">
              {[
                {
                  step: "1",
                  title: "اختر صفك",
                  description: "اختر المرحلة الابتدائية أو الإعدادية أو الثانوية للعثور على مسار الدورة المناسب.",
                },
                {
                  step: "2",
                  title: "افتح لوحة تحكم المادة",
                  description: "استعرض المواد مثل الدراسات الاجتماعية والرياضيات والعلوم واللغات.",
                },
                {
                  step: "3",
                  title: "ادرس الدروس وتدرب",
                  description: "استخدم صفحات الشرح واختبارات الممارسة لتعزيز التعلم.",
                },
              ].map((item) => (
                <div key={item.step} className="rounded-[1.75rem] border border-slate-200 bg-white p-6">
                  <div className="flex items-center gap-4 flex-row-reverse">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f3b79] text-sm font-semibold text-white">
                      {item.step}
                    </div>
                    <div className="text-right">
                      <h3 className="text-lg font-semibold text-[#102d55]">{item.title}</h3>
                      <p className="mt-2 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="rounded-[2rem] bg-white p-10 shadow-lg shadow-slate-200/50" dir="rtl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div className="text-right">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f3b79]">تواصل معنا</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#102d55]">هل تحتاج إلى الدعم أو لديك سؤال؟</h2>
              <p className="mt-4 max-w-2xl text-slate-600">
                تواصل مع فريق دعم Schooly. نحن هنا لمساعدة الطلاب والآباء والمعلمين على الاستفادة القصوى من المنصة.
              </p>
            </div>
            <div className="rounded-[2rem] bg-[#eef6ff] p-8">
              <p className="text-base font-semibold text-[#0f3b79] text-right">تفاصيل الاتصال</p>
              <div className="mt-4 space-y-3 text-slate-600 text-right">
                <p>البريد الإلكتروني: support@schooly.edu</p>
                <p>الهاتف: +1 (555) 789-0123</p>
                <p>المكتب: 123 Learning Lane, Education City</p>
              </div>
              <p className="mt-6 rounded-3xl bg-white px-4 py-3 text-sm text-slate-700 text-right">
                للحصول على ردود سريعة، اذكر صفك والمادة في الرسالة.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
