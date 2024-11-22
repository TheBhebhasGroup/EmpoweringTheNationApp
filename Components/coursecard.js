// CourseCard.js
import React from 'react';
import Checkbox from './Components/checkbox';

const CourseCard = ({ course, onCourseSelect }) => {
  return (
    <div>
      <Checkbox
        id={course.id}
        label={course.name}
        onClick={() => onCourseSelect(course.id)} // Pass the onClick handler
      />
    </div>
  );
};
