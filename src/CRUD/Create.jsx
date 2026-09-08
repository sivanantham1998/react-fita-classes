import { useState } from "react";
import axios from "axios"
import Read from "./Read";
function Create() {
    const address = "https://6a8fcba9ff2484963a5d5cf7.mockapi.io/users";
    const [name, setname] = useState("");
    const storedata = (e) => {
        e.preventDefault();
        if (!name) {
            alert("All fields required!!")
        }
        else {
            console.log("Entered name:", name)
            axios.post(address, { name }).then((s) => {
                console.log(s)
            }).catch((err) => {
                console.log(err)
            })

            setname("")
        }
    }
    return (
        <div>
            <h1>
                Create data
            </h1>

            <form onSubmit={storedata}>
                <input type="text" placeholder="enter name here..." value={name} onChange={(e) => setname(e.target.value)} />
                <button type="submit">Save</button>
            </form>

            <Read url={address} />
        </div>
    )
}

export default Create;