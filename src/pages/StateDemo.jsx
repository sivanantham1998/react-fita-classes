import { useState } from "react";

function StateDemo() {

    const [num, setNum] = useState(0);
    console.log(num);

    function increment() {
        setNum(num + 3)   // setNum(1)  setNum(2)
    }

    const decrement = () => {
        setNum(num - 2)
    }
    return (
        <div>
            <h4>
                State value  {num}
            </h4>
            <button onClick={increment}>
                click to update
            </button>
            <button onClick={decrement}>
                Click to decremenet
            </button>
        </div>
    )
}

export default StateDemo;