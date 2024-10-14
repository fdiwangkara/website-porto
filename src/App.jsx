import React from "react";
import Navbar from "./components/navbar";
import Approach from "./sections/approach"; // Make sure this is the correct path
import Projects from "./sections/projects"; // Adjust the path according to your project structure

function App() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Approach />
      <Projects />
    </div>
  );
}

export default App;
