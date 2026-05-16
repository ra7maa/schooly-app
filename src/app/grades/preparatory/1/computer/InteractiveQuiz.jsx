"use client";

import { useState } from "react";

export default function InteractiveQuiz({ questions }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelectAnswer = (questionId, answerIndex) => {
    if (!submitted) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionId]: answerIndex,
      }));
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question) => {
      if (selectedAnswers[question.id ?? question.question] === question.answer) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const totalQuestions = questions.length;
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div className="space-y-8">
      <div className="rounded-[1.75rem] border border-slate-200 bg-[#eef6ff] p-8">
        <p className="text-base font-semibold text-[#102d55] text-right">اختبار الدرس</p>
        <p className="mt-3 text-slate-600 text-right">أجب على الأسئلة أدناه لمراجعة ما تعلمته في هذا الدرس.</p>
      </div>

      {questions.length > 0 ? (
        <>
          <ol className="space-y-4 text-slate-700">
            {questions.map((question, index) => {
              const questionId = question.id ?? question.question;
              const isAnswered = selectedAnswers.hasOwnProperty(questionId);
              const selectedAnswer = selectedAnswers[questionId];
              const isCorrect = selectedAnswer === question.answer;
              const showResult = submitted && isAnswered;

              return (
                <li
                  key={questionId ?? index}
                  className={`rounded-[1.5rem] border-2 p-6 shadow-sm transition-all ${
                    showResult
                      ? isCorrect
                        ? "border-green-400 bg-green-50"
                        : "border-red-400 bg-red-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <p className="font-semibold text-slate-900 text-right">{`السؤال ${index + 1}: ${question.question}`}</p>

                  {question.type === "mcq" ? (
                    <div className="mt-4 space-y-2 text-slate-700">
                      {question.options.map((option, optionIndex) => {
                        const isSelected = selectedAnswer === optionIndex;
                        const isCorrectOption = optionIndex === question.answer;

                        let buttonStyle = "border-slate-200 bg-[#f8fbff] hover:bg-slate-50 cursor-pointer";

                        if (submitted) {
                          if (isCorrectOption) {
                            buttonStyle = "border-green-400 bg-green-100";
                          } else if (isSelected && !isCorrect) {
                            buttonStyle = "border-red-400 bg-red-100";
                          }
                        } else if (isSelected) {
                          buttonStyle = "border-[#4dadeb] bg-[#eef6ff]";
                        }

                        return (
                          <button
                            key={optionIndex}
                            onClick={() => handleSelectAnswer(questionId, optionIndex)}
                            disabled={submitted}
                            className={`w-full rounded-2xl border-2 px-4 py-3 text-right transition-all ${buttonStyle} ${
                              submitted ? "cursor-not-allowed" : ""
                            }`}
                          >
                            <span className="font-medium">.{String.fromCharCode(1571 + optionIndex)}</span> {option}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="mt-4 space-y-2 text-slate-700">
                      {["خاطئ", "صحيح"].map((label, trueIndex) => {
                        const isSelected = selectedAnswer === trueIndex;
                        const isCorrectOption = trueIndex === question.answer;

                        let buttonStyle = "border-slate-200 bg-[#f8fbff] hover:bg-slate-50 cursor-pointer";

                        if (submitted) {
                          if (isCorrectOption) {
                            buttonStyle = "border-green-400 bg-green-100";
                          } else if (isSelected && !isCorrect) {
                            buttonStyle = "border-red-400 bg-red-100";
                          }
                        } else if (isSelected) {
                          buttonStyle = "border-[#4dadeb] bg-[#eef6ff]";
                        }

                        return (
                          <button
                            key={trueIndex}
                            onClick={() => handleSelectAnswer(questionId, trueIndex)}
                            disabled={submitted}
                            className={`w-full rounded-2xl border-2 px-4 py-3 text-right transition-all ${buttonStyle} ${
                              submitted ? "cursor-not-allowed" : ""
                            }`}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {showResult && (
                    <div className={`mt-3 text-sm font-semibold ${isCorrect ? "text-green-600" : "text-red-600"} text-right`}>
                      {isCorrect ? "✓ إجابة صحيحة" : "✗ إجابة خاطئة"}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="w-full rounded-full bg-[#0f3b79] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0d336f] transition-all"
            >
              تقديم الاختبار
            </button>
          ) : (
            <>
              <div className="rounded-[1.5rem] border-2 border-[#4dadeb] bg-[#eef6ff] p-8">
                <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0f3b79]">النتيجة النهائية</p>
                  <div className="mt-4 flex items-center justify-center gap-4">
                    <div className="text-5xl font-bold text-[#0f3b79]">{score}</div>
                    <div className="text-2xl text-slate-600">/</div>
                    <div className="text-4xl font-semibold text-slate-600">{totalQuestions}</div>
                  </div>
                  <p className="mt-4 text-2xl font-bold text-[#102d55]">{percentage}%</p>
                  <p className="mt-2 text-slate-600">
                    {percentage >= 80
                      ? "ممتاز! 🎉"
                      : percentage >= 60
                      ? "جيد! 👍"
                      : percentage >= 40
                      ? "متوسط. جاول مرة أخرى!"
                      : "تحتاج لمراجعة المزيد"}
                  </p>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full rounded-full bg-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition-all"
              >
                إعادة محاولة الاختبار
              </button>
            </>
          )}
        </>
      ) : (
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 text-slate-700">
          <p className="font-semibold text-right">لا يوجد اختبار متاح لهذا الدرس حتى الآن.</p>
        </div>
      )}
    </div>
  );
}
