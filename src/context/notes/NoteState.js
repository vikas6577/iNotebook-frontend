import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState=(props)=>{

    // const s1={
    //     "name":"vikas",
    //     "class":"btechIIIyear"
    // }
    // const [state, setState] = useState(s1);
    // const update=()=>{
    //     setTimeout(()=>{
    //         setState({
    //             "name":"Bittu",
    //             "class":"12a"
    //         })
    //     },1000);
    // }

    const notesInitial=[
        {
          "_id": "62a87a0c6a55eac5b253978c",
          "user": "62a7188865bb03f7658e8560",
          "title": "personal routine",
          "discription": "Use mobile phone for limited time",
          "tag": "personal",
          "date": "2022-06-14T12:07:40.188Z",
          "__v": 0
        },
        {
          "_id": "62a88691c6e87badae5956d8",
          "user": "62a7188865bb03f7658e8560",
          "title": "personal routine 2",
          "discription": "Use mobile phone for limited time only",
          "tag": "general",
          "date": "2022-06-14T13:01:05.505Z",
          "__v": 0
        },
        {
          "_id": "62a88692c6e87badae5956da",
          "user": "62a7188865bb03f7658e8560",
          "title": "personal routine 2",
          "discription": "Use mobile phone for limited time only",
          "tag": "general",
          "date": "2022-06-14T13:01:06.056Z",
          "__v": 0
        },
        {
          "_id": "62a88692c6e87badae5956dc",
          "user": "62a7188865bb03f7658e8560",
          "title": "personal routine 2",
          "discription": "Use mobile phone for limited time only",
          "tag": "general",
          "date": "2022-06-14T13:01:06.662Z",
          "__v": 0
        },
        {
          "_id": "62a88692c6e87badae5956dc",
          "user": "62a7188865bb03f7658e8560",
          "title": "personal routine 2",
          "discription": "Use mobile phone for limited time only",
          "tag": "general",
          "date": "2022-06-14T13:01:06.662Z",
          "__v": 0
        },
        {
          "_id": "62a88692c6e87badae5956dc",
          "user": "62a7188865bb03f7658e8560",
          "title": "personal routine 2",
          "discription": "Use mobile phone for limited time only",
          "tag": "general",
          "date": "2022-06-14T13:01:06.662Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
    return(
        // <NoteContext.Provider value={{state,update}}>
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


// using notestate and notecontext (these both combined are known as context api we can use these context api anywhere in any file easily and directly this is the use of context api)