import { useCallback, useMemo, useState } from "react";

function Memocalback() {
    const [num, setnum] = useState(0)
    const [name, setname] = useState("")

    const names = [
        "Arun",
        "Karthik",
        "Suresh",
        "Vijay",
        "Prakash",
        "Rahul",
        "Ramesh",
        "Dinesh",
        "Manoj",
        "Santhosh",
        "Kumar",
        "Ajay",
        "Surya",
        "Naveen",
        "Mohan",
        "Vignesh",
        "Hari",
        "Gokul",
        "Sathish",
        "Aravind",
        "Anand",
        "Bala",
        "Deepak",
        "Ravi",
        "Ganesh",
        "Lokesh",
        "Jeeva",
        "Kishore",
        "Vasanth",
        "Sanjay",
        "Divya",
        "Priya",
        "Kavya",
        "Anitha",
        "Keerthana",
        "Swetha",
        "Pooja",
        "Nandhini",
        "Harini",
        "Sneha",
        "Aishwarya",
        "Deepa",
        "Meena",
        "Sangeetha",
        "Lakshmi",
        "Shalini",
        "Pavithra",
        "Dharani",
        "Ramya",
        "Monika"
    ];

    const increment = () => {
        setnum(num + 1)
    }

    let memovalue = useMemo(() => {
        return num * 3687786786576;
    }, [num])

    let filteredvalue = useMemo(() => {
        return names.filter((value) => {
            return value.toLowerCase().includes(name.toLowerCase());
        })
    }, [name])

    let callback = useCallback((n1) => {
        return num * n1;
    }, [num])
    return (
        <div>
            <h3>
                Number {num} <br />
                Memo value {memovalue}
                <br />
                call back value {callback(2)}
            </h3>
            <button onClick={increment}>
                Increment
            </button>
            <input type="text" placeholder="Enter name to filter...." value={name} onChange={(e) => {
                setname(e.target.value)
            }} />
            <h1>
                search value {name ? filteredvalue : "-"}
            </h1>

        </div>
    )
}

export default Memocalback;