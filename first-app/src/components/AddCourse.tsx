import { useState } from "react";

const AddCourse: React.FC = () => {
    const API_URL = "https://67a97dcf6e9548e44fc3c5fa.mockapi.io/courses";
    const [title,setTitle]= useState("");
    const [titleError, setTitleError]= useState("");
    const [descriptionError,setDescriptionError]= useState("");
    const [description,setDescription]= useState("");
    const [duration, setDuration] = useState("");
    const [fees, setFees] = useState("");
    const [message ,setMessage]= useState("");



    const handleSubmit = (e:React.FormEvent)=>{
      e.preventDefault();
      if (isFormValid()){
      addCourse();
      setMessage("");
      } else {
        setMessage("Please fill all the fields");
      }
    };


    const isFormValid = () => {
      let ValidForm: boolean = true;

      if (title.trim() == ""){
        setTitleError("Please enter a title");
        ValidForm = false;
      }else {
        setTitleError("");
      }

      if (description.trim().length == 0 ) {
        setDescriptionError("Please enter a description");
        ValidForm = false;
      } else {
        setDescriptionError("");
      }
      return ValidForm;
    };

    const addCourse = async () => {
      let requestBody= { title,description, duration, fees };
      let requestBodyJSON = JSON.stringify(requestBody);

      const request = {
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body: requestBodyJSON,
      };

      const response = await fetch(API_URL, request);
      if (response.ok) {
        console.log("Course  added ...");
        const data =  await response.json();
        console.log(data);
        setMessage ("Course added successfully");
        setTitle ("");
        setDescription("");
      }else {
        setMessage ("Error while adding course");
      }

      };

    //  setMessage ("Course added");
  
    
        
        
return (
    <div>
      {message ? (
        <div className="alert alert-success" role="alert">{message}</div>
      ) : (
        <div></div>
      )}
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
              onChange={(e) => setTitle(e.target.value)} 
              />
              { titleError ? (
                <p className="text-danger">{titleError}</p>
              ) : (
                <p></p>
              )}
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
          { descriptionError ? (
                <p className="text-danger">{descriptionError}</p>
              ) : (
                <p></p>
              )}
        </div>
        <div className="mb-2">
          <label htmlFor="durationTextBox" className="text-secondary">Duration</label>
        </div>
        <div>
          <input
            type="text"
            id="durationTextBox"
            value={duration}
            className="form-control mb-4"
            placeholder="Enter Course Duration"
            onChange={(e) => setDuration(e.target.value)} 
          />
        </div>
        <div className="mb-2">
          <label htmlFor="feesTextBox" className="text-secondary">fees</label>
        </div>
        <div>
          <input
            type="text"
            id="feesTextBox"
            value={fees}
            className="form-control mb-4"
            placeholder="Enter Course Fees"
            onChange={(e) => setFees(e.target.value)} 
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