import { useState } from "react"
import onimg from "../assets/on.jpg";
import offimg from "../assets/off.jpg";

const Toggle = () => {
    const [ isOn, setIsOn] = useState(false);
return (
    <div>
        <h2>Status :{isOn ? "ON ":"OFF"}</h2>
        <img src={isOn ? onimg : offimg} alt="status" />
        <button type="button" className="btn btn-danger" onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
)
}
export default Toggle; 
