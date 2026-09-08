import { useState } from "react";
import { ToastContainer, Bounce, toast } from "react-toastify"
function Forms() {

    const [name, setname] = useState("");
    const [error, seterror] = useState("");
    const save = (e) => {
        e.preventDefault();
        if (!name) {
            seterror("Please enter name field")
            toast.error("Please enter details")
            toast.warn("Done")
        }
        else {
            console.log(name)
            setname("")
            seterror("")
            toast.success("All filed in console")
        }
    }

    const cancel = () => {
        console.clear();
        alert("Form reset");
    }
    return (
        <div>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />

            <h1>
                React forms
            </h1>

            <form action=""
                onSubmit={save}
                onReset={cancel}>
                <input type="text" placeholder="Enter name here..." value={name} onChange={
                    (e) => setname(e.target.value)
                } /> <span>
                    {error}
                </span>
                <button type="submit">Save</button>
                <button type="reset">Cancel</button>
            </form>

        </div>
    )
}

export default Forms;