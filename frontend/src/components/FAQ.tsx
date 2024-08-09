"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is AcademiaPlus?",
      answer:
        "AcademiaPlus is a comprehensive academic management system designed to streamline and enhance the educational experience for students, teachers, and administrators.",
    },
    {
      question: "How do I access my course materials?",
      answer:
        "You can access your course materials by logging into your AcademiaPlus account, navigating to your enrolled courses, and selecting the relevant course to view the materials.",
    },
    {
      question: "Can I track my attendance through AcademiaPlus?",
      answer:
        "Yes, AcademiaPlus allows students to track their attendance, view attendance history, and stay updated on their participation in classes.",
    },
    {
      question: "How do teachers manage class schedules?",
      answer:
        "Teachers can manage their class schedules using AcademiaPlus's routine management feature, which allows them to set and update class timings and availability.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-gray-100 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all"
            >
              <div
                className="flex justify-between items-center cursor-pointer transition-all"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-100">
                  {faq.question}
                </h3>
                <div
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <FaChevronDown size={20} className="text-gray-100" />
                </div>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-100 text-lg text-justify">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
