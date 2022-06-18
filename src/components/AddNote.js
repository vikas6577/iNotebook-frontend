import React,{useContext,useState} from "react";
import noteContext from "../context/notes/noteContext";


const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title:"",discription:"",tag:"default"})
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.discription,note.tag)
    }
    const onChange=(e)=>{
            setNote({...note,[e.target.name]:e.target.value})
            // wriiting like this it will set the note to setnote and with that the property writeen after it should be overwritten/updated like if we write anything in tag or discription whatever we take than then take the target value and copy/update it to the input with the name which we have used here
    }
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="discription" className="form-label">
            Discripition
          </label>
          <input
            type="text"
            className="form-control"
            id="discription"
            name="discription"
            onChange={onChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
