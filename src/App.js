import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light"); //tell us whethe dark mode is enabled or not
  const [btntext, setbtntext] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setbtntext("Enable Light Mode");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#2f5593";
      setbtntext("Enable Dark Mode");
    }
  };

  return (
    <>
        <Navbar title="TextUtils" aboutUs="About" home="Home" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
          <TextForm heading="Enter your text: " mode={mode} txt={btntext} />
        </div>
    </>
  );
}

export default App;
