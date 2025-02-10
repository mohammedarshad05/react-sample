import { useState } from "react";

const AddCourse: React.FC = () => {
    const API_URL = "https://67a97dcf6e9548e44fc3c5fa.mockapi.io/courses";
    const [title,setTitle]= useState("");
    const [description,setDescription]= useState("");
    const [message ,setMessage]= useState("");

    const handleSubmit = (e:React.FormEvent)=>{
      e.preventDefault();

      addUser();
    };

    const addUser = async () => {
      let requestBody= { title,description};
      let requestBodyJSON = JSON.stringify(requestBody);

      const request = {
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body: requestBodyJSON,
      };

      const response = await fetch(API_URL, request);
      if (response.ok) {
        setMessage("Course added Sucessfully...");
        const data = response.json();
        console.log(data);
      }
    };
    //  setMessage ("Course added");
  
    
        
        
return (
    <div>
      <h2>Add Course</h2>
      <form className="border p-3 shadow-lg rounded" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2">
            <label htmlFor="titleTextBox" className="text-secondary">Title</label>
          </div>
          <div>
            <input
              type="text"
              id="titleTextBox"
              value={title}
              className="form-control mb-4"
              placeholder="Enter Course Title"
              onChange={(e) => setTitle(e.target.value)} />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="descriptionTextBox" className="text-secondary">Description</label>
        </div>
        <div>
          <input
            type="text"
            id="descriptionTextBox"
            value={description}
            className="form-control mb-4"
            placeholder="Enter Course Description"
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
        <div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}; 

        
export default AddCourse;