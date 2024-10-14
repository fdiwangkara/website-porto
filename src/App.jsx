import React from "react";
import Navbar from "./components/navbar";
import Approach from "./sections/approach";
import Projects from "./sections/projects";

function App() {
  return (
    <div className="min-h-screen relative " id="style-4">
      <Navbar />
      <Approach />
      <Projects />
    </div>
  );
}

export default App;