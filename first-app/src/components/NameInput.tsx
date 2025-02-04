import { useState } from "react"

const NameInput = () =>{
    const [name, setName] = useState("");{
        return(
            <div>
            <input 
            type="enter your name" 
            value={name} 
            onChange={(event)=> setName (event.target.value)}
             />
             <p> your name : {name}</p>
            </div>
        )


    }
}
export default NameInput;