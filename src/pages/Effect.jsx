import { useEffect, useLayoutEffect, useState } from "react";
function Demoeffect() {
    const [num, setnum] = useState(0);
    const [device, setdevice] = useState("")
    const increment = () => {
        setnum(num + 1)
    }
    useEffect(function () {
        document.title = "Button clicked:" + num;
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }, [num])
    function task() {
        if (window.innerWidth <= 400) {
            console.log('mobile view size');
            setdevice('mobile device')
        }
        else {
            console.log("laptop view size")
            setdevice('laptop device')
        }
    }
    useLayoutEffect(() => {
        task();

        window.addEventListener("resize", task)

        return () => window.removeEventListener("resize", task)
    }, [])
    return (
        <div>
            <button onClick={increment}>
                Increment
            </button>
            <h1>
                {device}
            </h1>
        </div>
    )
}

export default Demoeffect;