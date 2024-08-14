import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Cricket from "./Components/Cricket";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cricket" element={<Cricket />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
