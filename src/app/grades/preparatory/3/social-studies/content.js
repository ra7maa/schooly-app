export const socialStudiesUnits = [
  {
    id: "unit-1",
    title: "Unit 1: National Heritage",
    subtitle: "Explore local history, community stories, and the people around us.",
    lessons: [
      {
        id: "lesson-1",
        title: "Introducing Social Studies",
        description: "Learn what Social Studies means and why it matters in our world.",
      },
      {
        id: "lesson-2",
        title: "Heritage and Community",
        description: "Discover how history and traditions shape our neighborhoods.",
      },
      {
        id: "lesson-3",
        title: "Local Traditions",
        description: "Study local celebrations, stories, and special places.",
      },
      {
        id: "lesson-4",
        title: "Important Landmarks",
        description: "Meet the shared places that help define our community.",
      },
    ],
  },
  {
    id: "unit-2",
    title: "Unit 2: Geography and Citizenship",
    subtitle: "Understand maps, regions, and our role in the community.",
    lessons: [
      {
        id: "lesson-1",
        title: "Maps and Directions",
        description: "Practice reading simple maps and identifying places.",
      },
      {
        id: "lesson-2",
        title: "Our Region",
        description: "Study the land, weather, and people around us.",
      },
      {
        id: "lesson-3",
        title: "Good Citizens",
        description: "Learn about helpful actions and rules in the community.",
      },
      {
        id: "lesson-4",
        title: "Community Helpers",
        description: "Meet the people who support our school and city.",
      },
      {
        id: "lesson-5",
        title: "Working Together",
        description: "Discover how cooperation makes communities stronger.",
      },
    ],
  },
  {
    id: "unit-3",
    title: "Unit 3: Modern Society",
    subtitle: "Learn how families, technology, and today’s world connect.",
    lessons: [
      {
        id: "lesson-1",
        title: "Families and Rules",
        description: "Explore how families create habits and good behavior.",
      },
      {
        id: "lesson-2",
        title: "Community Services",
        description: "Find out how schools, hospitals, and libraries help everyone.",
      },
      {
        id: "lesson-3",
        title: "Technology in Life",
        description: "See how technology changes the way we learn and play.",
      },
      {
        id: "lesson-4",
        title: "Caring for the Environment",
        description: "Learn easy ways to protect our parks, water, and animals.",
      },
      {
        id: "lesson-5",
        title: "Global Connections",
        description: "Discover how people in different places are connected.",
      },
    ],
  },
  {
    id: "unit-4",
    title: "Unit 4: Our Future and Choices",
    subtitle: "Focus on goals, decisions, and the next steps for young citizens.",
    lessons: [
      {
        id: "lesson-1",
        title: "Planning for Tomorrow",
        description: "Talk about goals, dreams, and how to make smart choices.",
      },
      {
        id: "lesson-2",
        title: "Good Choices",
        description: "Learn how kind decisions help others and yourself.",
      },
    ],
  },
];

export function findUnit(unitId) {
  return socialStudiesUnits.find((unit) => unit.id === unitId);
}

export function findLesson(unitId, lessonId) {
  const unit = findUnit(unitId);
  return unit?.lessons.find((lesson) => lesson.id === lessonId);
}

export function getLessonLabel(unitId, lessonId) {
  const lesson = findLesson(unitId, lessonId);
  return lesson ? lesson.title : "Lesson";
}

export function getSubjectOverview() {
  return {
    title: "Preparatory Grade 3 — Social Studies",
    description: "A student-friendly Social Studies path with four units, lesson explanations, and practice exams.",
  };
}

export const staticLessonParams = socialStudiesUnits.flatMap((unit) =>
  unit.lessons.flatMap((lesson) => [
    { unit: unit.id, lesson: lesson.id, mode: "explanation" },
    { unit: unit.id, lesson: lesson.id, mode: "exam" },
  ])
);

export const staticUnitParams = socialStudiesUnits.map((unit) => ({ unit: unit.id }));
