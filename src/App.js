import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import React, { useState } from "react";
// import { useId } from "react";
// // not for map functionality as a key
// // for  to attach id to dom element

// const App = () => {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <h1 onClick={handleClick}>useid() {count}</h1>
//       <form action="">
//         <Text />
//         <Password placeholder="Password" />
//         <Password  placeholder="confirm" />
//         <button>submit</button>
//       </form>
//     </div>
//   );
// };

// function Text() {
//   return <input type="text" placeholder="enter name" id="name" />;
// }

// function Password({ placeholder }) {
//   const id = useId()
//   return <input type="password" placeholder={placeholder} id={id} />;
// }

// export default App;

// import React, { useReducer, useState } from "react";
// // usereducer is same as usestate
// // usereducer for object, scalabel, more compalex, with redux using action and reducers
// const initialState = {
//   name: "",
//   age: "",
// };
// const reducerFunction = (prev, next) => {
//   console.log("next: " , next);

//   return { ...prev, ...next };
// };
// const App = () => {
//   const [form, setForm] = useReducer(reducerFunction, initialState);

//   const handleFullname = (e) => {
//     setForm({ name: e.target.value });
//   };
//   const handleAge = (e) => {
//     setForm({ age: e.target.value });
//   };
//   const handleSubmit = (e) => {
//     console.log("data : ", { form });
//   };

//   return (
//     <div>
//       <h1>useReducer</h1>
//       <input
//         value={form.name}
//         onInput={handleFullname}
//         placeholder="enter name"
//       />
//       <input value={form.age} onInput={handleAge} placeholder="enter age" />
//       <button onClick={handleSubmit}>submit</button>
//     </div>
//   );
// };

// export default App;
