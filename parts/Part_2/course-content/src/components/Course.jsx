import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  const total = course.parts.reduce((prev, next) => prev + next.exercises, 0);
  return (
    <div>
      <Header header={course} />
      <Content course={course} total={total} />
    </div>
  );
};

export default Course;
