import axios from "axios"
import { useEffect, useState } from "react";
function Read({ url }) {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get(url).then((s) => {
            setdata(s.data)
            // s.data.map((value, index) => {
            //     console.log(value.name)
            // })
        }).catch((err) => {
            console.log(err)
        })
    }, [data])

    const del = (id) => {
        console.log(id)
        console.log(url + "/" + id)
        axios.delete(`${url}/${id}`).then(() => {
            alert("Data removed!!!");
        }).catch((err) => {
            console.log(err)
        })
    }

    const update = (value) => {
        console.log(value);
        let uname = prompt("Enter uname:")

        axios.put(`${url}/${value.id}`, { name: uname }).then((s) => {
            alert("data updated!!")
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Operation</th>
                </tr>
                {
                    data.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>
                                    <button onClick={() => del(value.id)}>Remove</button>
                                    <button onClick={() => update(value)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Read;