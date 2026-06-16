import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = React.useState({name: "", email: "", password: "",geolocation: ""});
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch('https://backend-tv4w.onrender.com/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation
      }),
    });
      const json = await response.json();
      console.log(json);

      if (!json.success) {
  alert("Enter valid credentials");
} else {
  alert("Signup Successful!");
  navigate("/login");
}
    }
    const onChange = (event) => {
      setCredentials({...credentials, [event.target.name]: event.target.value})
    };
  
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
  <div
    className="card shadow-lg p-4 bg-dark text-light"
    style={{ width: "450px", borderRadius: "15px" }}
  >
    <h2 className="text-center text-success mb-4">Create Account</h2>

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={credentials.name}
          onChange={onChange}
          placeholder="Enter your name"
        />
      </div>

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
        <div id="emailHelp" className="form-text text-secondary">
          We'll never share your email with anyone else.
        </div>
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
          placeholder="Enter password"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputGeolocation" className="form-label">
          Location
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputGeolocation"
          name="geolocation"
          value={credentials.geolocation}
          onChange={onChange}
          placeholder="Enter your location"
        />
      </div>

      <div className="d-grid gap-2 mt-4">
        <button type="submit" className="btn btn-success">
          Create Account
        </button>

        <Link to="/login" className="btn btn-outline-danger mt-2">
          Already have an account? Login
        </Link>
      </div>
    </form>
  </div>
</div>
    </>
  );
}

export default Signup;
