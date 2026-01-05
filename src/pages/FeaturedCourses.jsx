import React from "react";
import { useNavigate } from "react-router-dom";
import courses from "../data/courses.json";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const goToCourse = () => {
    if (course.path) navigate(course.path);
  };

  return (
    <div
      onClick={goToCourse}
      className="cursor-pointer rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition"
    >
      {/* Image area */}
      <div className={`${course.bg}`}>
        <div className="relative h-40 w-full overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span>{course.students}</span>
          <span>{course.duration}</span>
        </div>

        <h3 className="mt-3 text-[15px] font-extrabold text-slate-900 leading-snug">
          {course.title}
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-extrabold text-slate-900">{course.price}</p>

          {/* Open Course Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // card click conflict বন্ধ
              goToCourse();
            }}
            disabled={!course.path}
            className={`px-4 py-2 rounded-lg text-xs font-extrabold transition
              ${
                course.path
                  ? "bg-indigo-600 text-white hover:bg-indigo-500"
                  : "bg-slate-200 text-slate-500 cursor-not-allowed"
              }`}
            title={course.path ? "Open course" : "No page linked yet"}
            type="button"
          >
            {course.path ? "Open" : "Coming"}
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedCourses = () => {
  return (
    <div className="min-h-screen bg-sky-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Featured <span className="text-emerald-600">Course</span>
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm sm:text-[15px] text-slate-500">
            Choose a course and start learning with videos, notes, and homework.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button
            className="px-6 py-3 rounded-xl font-extrabold text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition shadow-sm"
            type="button"
          >
            Explore courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
