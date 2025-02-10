import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Course{
    id: string;
    title: string;
    description: string;
    duration: string;
    fees : number ;
    image : string;
}
function Courses(){
    const API_URL = "https://67a97dcf6e9548e44fc3c5fa.mockapi.io/courses";

    const [courses,setCourses]= useState<Course[]>([]);

    const fetchCourses = async() => {
        const respose = await fetch(API_URL);
        const data = await respose.json();
        setCourses(data);
    };
    useEffect (() =>{
        fetchCourses();
    },[]);

    return (
        <>
        <div>
            <Link to="/add-course" className="btn btn-outline-success mb-3">➕ Add Course</Link>
        </div>
        <h2>Course List</h2>
            <div className="row">
                {courses.map((course) => (
                    <div className="col-md-4 mb-4" key={course.id}>
                        <div className="card h-100">
                            <img src={course.image} className="card-img-top img-thumbnail" alt="Course Image" />
                            <div className="card-body">
                                <h5 className="card-title">{course.title}</h5>
                                <p className="card-text">{course.description}</p>
                                <p className="card-text"><strong>Duration:</strong> {course.duration}</p>
                                <p className="card-text"><strong>Fees:</strong> ${course.fees}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
);
}
export default Courses;