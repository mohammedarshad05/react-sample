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


    const deleteCourse = async (id: string) => {
        const request = {
            method: 'DELETE',
        };
        const response = await fetch(`${API_URL}/${id}`, request);
        const data = await response.json();
        console.log(data);
        
        
        const updatedCourses = courses.filter((course) => course.id != id);
        setCourses(updatedCourses);
    };

    useEffect (() =>{
        fetchCourses();
    },[]);


    return (
        <>
        <style>
            {`
                .card-hover:hover {
                    transform: scale(1.05);
                    transition: transform 0.2s;
                }
            `}
        </style>
        <div>
            <Link to="/add-course" className="btn btn-outline-success mb-3">➕ Add Course</Link>
        </div>
        <h2>Course List</h2>
        <div className="row">
            {courses.map((course) => (
                <div className="col-md-4 mb-4" key={course.id}>
                    <div className="card h-100 card-hover">
                        <img src={course.image} className="card-img-top img-thumbnail" alt="Course Image" />
                        <div className="card-body">
                            <h5 className="card-title">{course.title}</h5>
                            <p className="card-text">{course.description}</p>
                            <p className="card-text"><strong>Duration:</strong> {course.duration}</p>
                            <p className="card-text"><strong>Fees:</strong> {course.fees}</p>
                            <button className="btn btn-danger" onClick={() => deleteCourse(course.id)}>🗑️ Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
);
}

export default Courses;