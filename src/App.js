import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import Loader from "./Components/Loader";
import Homepage from "./Pages/Homepagefull/Homepage";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showLoader && <Loader />}
      {!showLoader && <Homepage />}
    </div>
  );
}

export default App;
