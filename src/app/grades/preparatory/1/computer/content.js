export const computerUnits = [
  {
    id: "unit-1",
    title: "الوحدة الأولى",
    subtitle: "أساسيات الكمبيوتر ونظم التشغيل",
    lessons: [
      {
        id: "lesson-1",
        title: "أساسيات نظام الكمبيوتر",
        description: "مقدمة عن جهاز الكمبيوتر ومكونات النظام.",
        sections: [
          { title: "الكمبيوتر - تعريف ومقدمة", content: `الكمبيوتر (Computer): هو جهاز إلكتروني يقوم بتخزين البيانات ومعالجتها للوصول إلى نتائج محددة (المعلومات)، وذلك عن طريق القيام بإجراء العمليات الحسابية والمنطقية مستخدماً سلسلة من التعليمات المرتبة منطقياً يطلق عليها البرنامج.

أشكال أجهزة الكمبيوتر الحديثة:
• الكمبيوتر المكتبي (Desktop)
• الكمبيوتر المحمول (Laptop)
• الأجهزة الذكية (Smart Devices)` },
          { title: "العناصر الأساسية لنظام الكمبيوتر", content: `يتكون نظام الكمبيوتر من أربعة عناصر أساسية:
1. البيانات والمعلومات (Data & Information)
2. المكونات المادية (Hardware)
3. البرمجيات (Software)
4. العنصر البشري (Humanware)` },
          { title: "البيانات والمعلومات", content: `البيانات (Data): هي مجموعة من الحقائق التي يمكن الحصول عليها عن طريق المشاهدة أو الملاحظة، قد تكون نصوص، صور، أو أصوات.

المعلومات (Information): هي البيانات التي تمّ معالجتها بتصنيفها وتنظيمها وتحليلها بحيث يصبح لها معنى.` },
        ],
        quiz: [
          { id: 1, type: "mcq", question: "شاشة اللمس من وحدات:", options: ["الإدخال فقط", "الإدخال والإخراج معاً", "الإخراج فقط", "لا شيء مما سبق"], answer: 1 },
          { id: 2, type: "mcq", question: "من وحدات الإخراج:", options: ["الطابعة", "الفأرة", "لوحة المفاتيح", "الميكروفون"], answer: 0 },
          { id: 3, type: "tf", question: "ذاكرة ROM دائمة وتحتفظ بمحتواها عند انقطاع التيار.", answer: true },
        ],
      },
      {
        id: "lesson-2",
        title: "المكونات المادية (Hardware)",
        description: "وحدات الإدخال والإخراج ووحدة النظام واللوحة الأم.",
        sections: [
          { title: "وحدات الإدخال والإخراج", content: "وحدات الإدخال: لوحة المفاتيح، الفأرة، الميكروفون.\nوحدات الإخراج: الشاشة، الطابعة." },
          { title: "وحدة النظام واللوحة الأم", content: "تحتوي وحدة النظام على المعالج، الذاكرة، واللوحة الأم التي توصل جميع المكونات." },
        ],
        quiz: [
          { id: 1, type: "mcq", question: "أي مما يلي جزء من وحدة النظام؟", options: ["الشاشة", "اللوحة الأم", "الطابعة", "الفأرة"], answer: 1 },
        ],
      },
      {
        id: "lesson-3",
        title: "الذاكرة ووحدات القياس",
        description: "أنواع الذاكرة ووحدات قياس السعة وسرعة المعالج.",
        sections: [
          { title: "الذاكرة RAM و ROM", content: "RAM ذاكرة مؤقتة تفقد محتواها عند إيقاف التشغيل.\nROM ذاكرة ثابتة تحمل برامج الإقلاع." },
          { title: "وحدات القياس", content: "بت، بايت، كيلو بايت، ميجا بايت، جيجا بايت، تيرا بايت." },
        ],
        quiz: [
          { id: 1, type: "tf", question: "RAM تفقد محتواها عند انقطاع التيار.", answer: true },
        ],
      },
      {
        id: "lesson-4",
        title: "ممارسات تشغيل آمنة ومشاركة الملفات",
        description: "تعليمات تشغيل آمنة ومشاركة الملفات عبر الشبكات المحلية.",
        sections: [
          { title: "تشغيل وإيقاف الجهاز بأمان", content: "إتباع خطوات الإغلاق والفتح الآمن لتجنب فقدان البيانات." },
          { title: "مشاركة الملفات", content: "طرق مشاركة الملفات عبر الشبكات المحلية ومشاركة طابعة." },
        ],
        quiz: [
          { id: 1, type: "mcq", question: "لماذا نحفظ العمل بانتظام؟", options: ["لتوفير المساحة", "لمنع فقدان العمل عند انقطاع الكهرباء", "لتسريع الجهاز", "لتغيير الصيغة"], answer: 1 },
        ],
      },
    ],
  },
  {
    id: "unit-2",
    title: "الوحدة الثانية",
    subtitle: "إنشاء ومعالجة الصور",
    lessons: [
      {
        id: "lesson-1",
        title: "مقدمة لأساسيات إنشاء ومعالجة الصور",
        description: "تعريف برامج معالجة الصور وGIMP وواجهة المستخدم.",
        quiz: [
          { id: 1, type: "mcq", question: "برنامج GIMP هو:", options: ["مغلق المصدر", "مفتوح المصدر مجاني", "نظام تشغيل", "برنامج مكتبي"], answer: 1 },
        ],
      },
      { id: "lesson-2", title: "تصميم وإنشاء رسومات جديدة", description: "إنشاء صورة جديدة واستخدام أدوات الرسم الأساسية.", quiz: [{ id: 1, type: "mcq", question: "لإنشاء صورة جديدة: نختار", options: ["File > Open", "File > New", "File > Save", "File > Export"], answer: 1 }] },
      { id: "lesson-3", title: "أدوات الرسم", description: "أدوات الرسم والاختيارات في برامج المعالجة.", quiz: [{ id: 1, type: "mcq", question: "أداة القلم ترسم خطوطاً", options: ["ناعمة", "صلبة", "متقطعة", "متموجة"], answer: 1 }] },
      { id: "lesson-4", title: "أدوات النقل والتحجيم", description: "نقل وتحجيم وقص العناصر داخل الصورة.", quiz: [{ id: 1, type: "mcq", question: "اختصار أمر القص هو", options: ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+S"], answer: 2 }] },
      { id: "lesson-5", title: "الطبقات", description: "مفهوم الطبقات وكيفية إدارتها ودمجها.", quiz: [{ id: 1, type: "mcq", question: "لدمج كل الطبقات نستخدم", options: ["Layer > New", "Layer > Delete", "Layer > Flatten Image", "Layer > Duplicate"], answer: 2 }] },
      { id: "lesson-6", title: "تعديلات الألوان والمرشحات", description: "تعديل السطوع والتباين والمرشحات الأساسية.", quiz: [{ id: 1, type: "mcq", question: "قائمة تعديل الألوان توجد في", options: ["File", "Edit", "Colors", "Filters"], answer: 2 }] },
      { id: "lesson-7", title: "أنواع الصور وصيغها", description: "الفرق بين الصور النقطية والمتجهية وصيغ الصور الشائعة.", quiz: [{ id: 1, type: "mcq", question: "الصور النقطية تتكون من", options: ["معادلات", "بكسلات", "طبقات", "نص"], answer: 1 }] },
      { id: "lesson-8", title: "مشروع عملي بسيط", description: "تطبيق عملي لتصميم وحفظ وتصدير مشروع بسيط.", quiz: [{ id: 1, type: "mcq", question: "أولى مراحل المشروع هي", options: ["التنفيذ", "التخطيط", "الحفظ", "المراجعة"], answer: 1 }] },
    ],
  },
];

export function findUnit(unitId) {
  return computerUnits.find((u) => u.id === unitId);
}

export function findLesson(unitId, lessonId) {
  const unit = findUnit(unitId);
  return unit?.lessons.find((l) => l.id === lessonId);
}

export const staticLessonParams = computerUnits.flatMap((unit) =>
  unit.lessons.flatMap((lesson) => [
    { unit: unit.id, lesson: lesson.id, mode: "explanation" },
    { unit: unit.id, lesson: lesson.id, mode: "quiz" },
  ])
);

export const staticUnitParams = computerUnits.map((unit) => ({ unit: unit.id }));
