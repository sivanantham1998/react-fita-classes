import { useContext, useState } from "react";
import { demoContext } from "../App";

function Other({ res }) {
    console.log(res);

    let datas = useContext(demoContext);
    console.log(datas);

    const [name, setname] = useState("")

    const save = (e) => {
        e.preventDefault();
        localStorage.setItem("user", name);
        sessionStorage.setItem("u", name);
        alert("stored!!")
    }
    return (
        <div>
            <h3>
                welcome user {res}
            </h3>
            <h1>Users list</h1>
            <ol>
                {
                    datas.map((value, index) => {
                        return (
                            <li key={index}>
                                {value}
                            </li>
                        )
                    })
                }
            </ol>

            <form action="" onSubmit={save}>
                <input type="text" placeholder="Enter name..." value={name} onChange={(e) => setname(e.target.value)} />
                <button type="submit">Store</button>
                <button onClick={() => {
                    sessionStorage.removeItem("u");
                    localStorage.removeItem("user");
                }}>Clear</button>
            </form>
        </div>
    )
}

export default Other;