import DemoNavBar from "./Navbar";
import "./App.css"
import Conditional from "./pages/conditional";
import StateDemo from "./pages/StateDemo";
import Demoeffect from "./pages/Effect";
import Arrayfunc from "./pages/ArrayFunction";
import Forms from "./pages/Forms";
import Memocalback from "./pages/MemoCallback";
import Rducer from "./pages/Rducer";
import Other from "./pages/OtherFunctions";
import { createContext } from "react";
import Create from "./CRUD/Create";
import { Route, Routes } from "react-router-dom";

export const username = "Sivanantham";

export const demoContext = createContext("")
export const productdetails = [
  { "id": 1, "name": "Laptop", "pirce": 22000 },
  { "id": 2, "name": "Keyboard", "price": 350 },
  { "id": 3, "name": "Mouse", "price": 500 }
]

function App() {

  // console.log("hello welcome");
  // console.error("this is sample error");
  // console.warn("This is warning");

  const user = "Erode";
  let students = [
    "arun", "mathew", "max", "afril", "siva"
  ]
  return (
    <div>
      <demoContext.Provider value={students}>
        <Routes>
          <Route path="/" element={<DemoNavBar />} />
          <Route path="/if-else" element={<Conditional />} />
          <Route path="/create-operation" element={<Create />} />
          <Route path="/usestate" element={<StateDemo />} />
          <Route path="/form" element={<Forms />} />
          <Route path="/demo/:id" element={<Rducer />} />
        </Routes>
        {/* <DemoNavBar /> */}
        {/* <h2>
        hello welcome
      </h2> */}
        {/* 
      <p>
        Lorem ipsum dolor, sit amet consectetur <hr /> adipisicing elit. A, aspernatur!
      </p> */}

        {/* 
      <h1 className="footersection">
        Footer section comes here
      </h1> */}
        {/* <Conditional /> */}

        {/* <StateDemo /> */}
        {/* <Demoeffect /> */}

        {/* <Arrayfunc /> */}

        {/* <Forms /> */}

        {/* <Memocalback /> */}
        {/* <Rducer /> */}
        {/* <Other res={user} /> */}

        {/* <Create /> */}

      </demoContext.Provider>
    </div>
  )
}

export default App
