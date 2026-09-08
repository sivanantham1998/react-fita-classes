import { useContext, useReducer, useRef } from "react";
import { demoContext } from "../App";
import { Link, useParams } from "react-router-dom";

function Rducer() {

    let id = useParams()
    console.log(id);


    const [a, b] = useReducer((state, action) => {
        if (action.type === "+") {
            return { initalState: state.initalState + 1 }
        }
        else if (action.type === "-") {
            return { initalState: state.initalState - 1 }
        }
    }, { initalState: 0 })

    let demoref = useRef();

    const handleClick = () => {
        demoref.current.focus();
    }

    let demo = useContext(demoContext);
    console.log(demo);

    return (
        <div>
            <h2>
                Usereducer
                <br />
                State value {a.initalState}
            </h2>
            <button onClick={() => b({ type: "+" })}>
                Increment
            </button>
            <button onClick={() => b({ type: "-" })}>
                Decrement
            </button>

            <input type="text" ref={demoref} />
            <button onClick={handleClick}>
                Click
            </button>

            <Link to={"/"}>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default Rducer;