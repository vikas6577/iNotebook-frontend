import React, {useState} from 'react'
// import { useHistory } from 'react-router'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [credentials, setCredentials] = useState({name:"",email: "", password: "",cpassword:""}) 
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password}=credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:credentials.name, email: credentials.email, password: credentials.password})
    });
    const json = await response.json()
    console.log(json);
    if (json.success){
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken); 
        // history.push("/");
        navigate("/");

    }
    else{
        alert("Invalid credentials");
    }
}

const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group containersignup ">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name='name'
            id="name" onChange={onChange}
            aria-describedby="emailHelp"
            placeholder="Enter your Name"
          />
        </div>
        <div className="form-group containersignup">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name='email'
            id="email" onChange={onChange}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group containersignup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name='password'
            id="password" onChange={onChange}
            placeholder="Password"
            required minLength={5}
          />
          </div>
        <div className="form-group containersignup">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name='cpassword'
            id="cpassword" onChange={onChange}
            placeholder="Confirm Password"
            required minLength={5}
          />
        </div>
      
        <button type="submit" className="btn btn-primary my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
