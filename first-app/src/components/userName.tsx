import { useState } from "react";

const userName = () => {
  const [user, setUser] = useState({ name: "", age: "" , email:""});
  return (
    <div>
      <h2 className="text-danger"> enter your Name and Age</h2>
      <input
        type="text"
        placeholder="enter bName"
        value={user.name}
        onChange={(e) =>
          setUser({
            ...user,
            name:e.target.value,
          })
        }
      />{" "}
      <br />
      <input
        type="text"
        placeholder="enter  Age"
        value={user.age}
        onChange={(e) => setUser({ 
          ...user, 
          age: e.target.value,
          email: user.email,})}
      />
      <input
        type="text"
        placeholder="enter  EMAIL"
        value={user.email}
        onChange={(e) => setUser({ 
          ...user, 
          age: user.age,
          email: e.target.value,})}
      />
      <p>
        Name:{user.name} Age:{user.age} Email:{user.email}
      </p>
      {/* <button>submit </button> */}
    </div>
  );
};
export default userName;
