import React from "react";
import { useInView } from 'react-intersection-observer';
import CourseCard from "../Common/CourseCard";
import Title from "../Common/Title";
import "./Courses.scss";

const Courses = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={ref} className="courses_container">
      <CourseCard overlayClass={inView && "easyInFromLeft"} title="Full Stack Web Development" subtitle="Web Development">
        A new approach to learning how to build web applications by doing. No
        boring theory, no complicated concepts, no bulky books that only explain
        how to setup a development environment. We teach you how to build web
        apps from start to finish using the industry's best tools.
      </CourseCard>
      <CourseCard overlayClass={inView && "easyInFromRight"} title="Software Testing" subtitle="Web Testing" commingSoon={true}>
        We designed our course to help you learn and retain the skills required
        for Software QA Testing. Our curriculum is constantly being
        reviewed and updated to ensure that it's aligned with the latest testing
        trends, so you'll be one step ahead of your competition!
      </CourseCard>
    </div>
  );
};

export default Courses;
