import React from "react";
import { Link } from "react-router-dom";

// import React, { useEffect,useContext } from 'react'
// import noteContext from '../context/notes/noteContext'
const About = () => {
  // const a=useContext(noteContext)
  // useEffect(()=>{
  //     a.update();
  //     //eslint-disable-next-line
  // },[])
  return (
    // <div>This is about {a.state.name} and he is in class {a.state.class}</div>
    <>
      <div style={{"backgroundColor":"black","color":"white","paddingBottom":"350px"}}>
        <h2 className="mb-4" style={{ "padding-left": "100px","paddingTop":"25px" }}>
          About us
        </h2>
        <div style={{ "padding-left": "100px", "padding-right": "100px" }}>
          <h5>
            iNotebook is made from the pain of writing all the things in
            notebook which is very hectic, So we made an online web platgorm
            where you can create,edit,upload,delete your notes/information
            privately and securely without any disturbance. You can also access
            your notes from anywhere, at anytime. So don't forget to Create note
            because creating anything is always important{" "}
          </h5>
          <div className="container aboutcontainer">
            <Link to="/login">Create New Note</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
