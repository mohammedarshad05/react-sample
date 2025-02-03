import React from "react";

function LoginStatus() {
    const isLoggedIn = true;
  return (

    <div>
      <h2 className="text-primary">Login Status</h2>
      <p className="text-light">{isLoggedIn ? "welcome user":"please login"}</p>
      <p className="text-success">You are logged in</p>
    </div>
    
  );
}
export default LoginStatus;