function Conditional() {
    let a = 12;
    let ans;
    let ar = ["html", "css", "js", "react"];
    let obj = {
        "name": "erode",
        "qualification": "bsc",
        "location": "erode"
    }
    console.log(ar[0])
    console.log(obj["location"])
    console.log(obj.name);

    function age() {
        console.log("Function working")
    }
    if (a >= 18) {
        ans = "eligible";
    }
    else {
        ans = ("not eligible")
    }

    function dbldemo() {
        alert("Hello welcome")
    }

    const task = () => {
        console.log("arrow function");

    }
    return (
        <div>
            <h1 onDoubleClick={dbldemo} onMouseOver={dbldemo} onMouseLeave={function () {
                alert("Mouse leaving")
            }}>
                {ans}
            </h1>

            <button onClick={task}>
                Click
            </button>
        </div>
    )
}

export default Conditional