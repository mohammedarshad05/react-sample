interface Course {
  id: number;
  duration: string;
  title: string;
  description: string;
}

interface Props {
  coursesprops: Course[];
}

function Course(props: Props) {
  return (
    <div>
      <h2>Course List</h2>
      <ul className="list-group">
        {props.coursesprops.map((course) => (
          <li  className="list-group-item"key={course.id}>
            {course.duration} - {course.description} - {course.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Course;
