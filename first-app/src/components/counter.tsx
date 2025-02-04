import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect (() =>{
    console.log( ' count updated');
    
  })

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Counter;