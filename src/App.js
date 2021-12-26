// import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar"
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";

function App() {
  // const [state, setState] = useState(false)
  // setState(!state)
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
