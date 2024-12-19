// The root component of the whole project
// App -> index.js -> public/index.html (root)
import { useState } from "react";


// Use useState to implement a counter
function App() {
  // 1. call useState to add a state variable
  // count -> state variable
  // setCount -> the method to modify the count
  const [count, setCount] = useState(0);

  // 2. click event
  const handleClick = () => {
    // 1. passing new value to modify count
    // 2. using new count to render UI again
    setCount(count+1);
  }
  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
export default App;
