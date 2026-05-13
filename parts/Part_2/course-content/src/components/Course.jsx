const Course = ({ course, total }) => {
  return (
    <div>
      <h1> {course.name}</h1>
      <p>
        {course.parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
        <b>{`total of ${total} exercises`}</b>
      </p>
    </div>
  );
};

export default Course;
