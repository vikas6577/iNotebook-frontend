import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState=(props)=>{
    const s1={
        "name":"vikas",
        "class":"btechIIIyear"
    }
    const [state, setState] = useState(s1);
    const update=()=>{
        setTimeout(()=>{
            setState({
                "name":"Bittu",
                "class":"12a"
            })
        },1000);
    }
    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


// using notestate and notecontext (these both combined are known as context api we can use these context api anywhere in any file easily and directly this is the use of context api)