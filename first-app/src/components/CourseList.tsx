import Course from "../Models/course";
interface CourseProps{
  CourseList: Course[];
}
const CourseList = (props:CourseProps)=>{
  if (props.CourseList.length == 0 ){
    return (
    <div>
     <h2 className="text-primary">Course List</h2>
     <h6 className="text-denger"> No course Available</h6>
   </div>
    );
}
  return (
    <div>
      <h2 className="text-danger">course list</h2>
      <ul className="list-group">
        {props.CourseList.map((course)=>(
          <li className="list-group-item" key={course.id}>
            {course.title}-{course.duration}-{course.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CourseList;
