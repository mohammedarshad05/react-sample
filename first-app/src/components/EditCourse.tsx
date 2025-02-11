import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditCourse: React.FC = () => {

  const { id } = useParams<{ id: string }>();


  const API_URL = `https://67a97dcf6e9548e44fc3c5fa.mockapi.io/courses/${id}`;
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTitle(data.title);
      setDescription(data.description);
    };

    fetchCourse();
  }, [API_URL]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      updateCourse();
      setMessage("");
    } else {
      setMessage("Please fill all the fields");
    }
  };

  const isFormValid = () => {
    let ValidForm: boolean = true;

    if (title.trim() === "") {
      setTitleError("Please enter a title");
      ValidForm = false;
    } else {
      setTitleError("");
    }

    if (description.trim().length === 0) {
      setDescriptionError("Please enter a description");
      ValidForm = false;
    } else {
      setDescriptionError("");
    }
    return ValidForm;
  };

  const updateCourse = async () => {
    let requestBody = { title, description };
    let requestBodyJSON = JSON.stringify(requestBody);

    const request = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: requestBodyJSON,
    };

    const response = await fetch(API_URL, request);
    if (response.ok) {
      console.log("Course updated ...");
      const data = await response.json();
      console.log(data);
      setMessage("Course updated successfully");
    } else {
      setMessage("Error while updating course");
    }
  };

  return (
    <div className="container mt-4">
      <h2>✍️ Edit Course</h2>
      <form className="border p-3 shadow-lg rounded" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2">
            <label htmlFor="titleTextBox" className="text-secondary">
              Title
            </label>
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
            {titleError ? <p className="text-danger">{titleError}</p> : <p></p>}
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="descriptionTextBox" className="text-secondary">
            Description
          </label>
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
          {descriptionError ? (
            <p className="text-danger">{descriptionError}</p>
          ) : (
            <p></p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Update Course
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
