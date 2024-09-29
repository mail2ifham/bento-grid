import { useState } from "react";
import "./sass/app.scss";
import Create from "./components/Create";
import Footer from "./components/Footer";
import Social from "./components/Social";
import Manage from "./components/Manage";
import Maintain from "./components/Maintain";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className="wrapper">
      <Social />
      <Manage/>
      <Maintain/>
      <Schedule/>
      {/* <Create /> */}
      <Footer />
    </div>
  );
}

export default App;
