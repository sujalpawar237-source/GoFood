import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://backend-tv4w.onrender.com/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail", json.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  };
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div
          className="card shadow-lg p-4 bg-dark text-light"
          style={{ width: "400px" }}
        >
          <h2 className="text-center text-success mb-4">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                value={credentials.email}
                onChange={onChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={credentials.password}
                onChange={onChange}
                placeholder="Enter your password"
              />
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-success">
                Login
              </button>

              <Link to="/createuser" className="btn btn-outline-danger mt-2">
                I'm a New User
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
