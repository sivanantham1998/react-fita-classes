import { Link } from "react-router-dom";
import { productdetails, username } from "./App";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slicer";

function DemoNavBar() {
    // let , var,const
    let a = 20.89;
    let b = 15;
    console.log(a + b);
    const user = "User";
    console.log(typeof (a))
    console.log(typeof (user))
    const ans = false;
    console.log(typeof (ans))

    console.log(productdetails)

    for (let i in productdetails) {
        console.log(productdetails[i].name)
    }

    const ab = useSelector((state) => state.slicer.count)
    console.log(ab)
    let dispatch = useDispatch()
    return (
        <div>
            <h1>Welcome {user}</h1>
            <h1 id="navhead">Nav bar section statred</h1>
            <p className="para">
                The addition value is:{a + b}
            </p>
            {username}

            <div className="btn">
                <Link to={"/form"}>
                    <button>
                        Forms
                    </button>
                </Link>

                <Link to={"/create-operation"}>
                    <p>
                        Create page
                    </p>
                </Link>
                <Link to={`/demo/${b}`}>
                    <button>use reducer page</button>
                </Link>
            </div>

            <h1>
                {ab}
            </h1>
            <button onClick={() => dispatch(increment())}>
                Add
            </button>
            <button onClick={() => dispatch(decrement())}>
                Minus
            </button>
        </div>
    )
}

export default DemoNavBar