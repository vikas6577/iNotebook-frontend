import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState=(props)=>{

   const host="http://localhost:5000"

    const notesInitial=[]
      const [notes, setNotes] = useState(notesInitial)

      //Get all notes
      const getNotes=async()=>{
        // api will be called here
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhNzE4ODg2NWJiMDNmNzY1OGU4NTYwIn0sImlhdCI6MTY1NTEyNDY3N30.Z0XVYfGRcSSwbK3vWKTxMuCz28HgO9edgQpaujyWqBM"
          }
        });
          const json=await response.json();
          console.log(json);
          setNotes(json);
        }


        // add note

      const addNote=async(title,discription,tag)=>{
        // api will be called here
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhNzE4ODg2NWJiMDNmNzY1OGU4NTYwIn0sImlhdCI6MTY1NTEyNDY3N30.Z0XVYfGRcSSwbK3vWKTxMuCz28HgO9edgQpaujyWqBM"
          },
          body: JSON.stringify({title,discription,tag}) 
        });
        const note=await response.json();
        setNotes(notes.concat(note))
      }
      // delete a note
      const deleteNote=async(id)=>{

        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhNzE4ODg2NWJiMDNmNzY1OGU4NTYwIn0sImlhdCI6MTY1NTEyNDY3N30.Z0XVYfGRcSSwbK3vWKTxMuCz28HgO9edgQpaujyWqBM"
          },
        });
        const json=response.json();
        console.log(json)

        // deleting on client side
        console.log("Deleting a note with id "+(id));
        const newNotes=notes.filter((note)=>{return note._id!==id});
        setNotes(newNotes);
      }
      //edit a note
      const  editNote=async(id,title,discription,tag)=>{
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhNzE4ODg2NWJiMDNmNzY1OGU4NTYwIn0sImlhdCI6MTY1NTEyNDY3N30.Z0XVYfGRcSSwbK3vWKTxMuCz28HgO9edgQpaujyWqBM"
          },
          body: JSON.stringify({title,discription,tag}) 
        });
        // const json=response.json();
        const json=await response.json();
        console.log(json);
       let newNotes=JSON.parse(JSON.stringify(notes))
        //client side function
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if(element._id===id){
            newNotes[index].title=title;
            newNotes[index].discription=discription;
            newNotes[index].tag=tag;
            break;
          }
        }
        setNotes(newNotes);
      }
    return(
        // <NoteContext.Provider value={{state,update}}>
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


// using notestate and notecontext (these both combined are known as context api we can use these context api anywhere in any file easily and directly this is the use of context api)