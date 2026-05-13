import Course from "./components/Course";
import Total from "./components/Total";

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  const total = course.parts.reduce((prev, next) => prev + next.exercises, 0);

  console.log(total);

  return (
    <div>
      <Course course={course} total={total} />
    </div>
  );
};

export default App;
