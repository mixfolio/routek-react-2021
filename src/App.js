import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar"
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import ManualModal from "./components/ManualModal";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false)
  // function showManual() {
  //   setIsModalVisible(isModalVisible === true)
  // }

    // setTimeout(function() {
    //   setIsModalVisible(true)
    // }, 3000)

  return (
    <BrowserRouter>
      <Navbar visible={isMenuVisible} setVisible={setMenuVisible}/>
      <AppRouter/>
      <Footer/>
      <ManualModal visible={isModalVisible} setVisible={setIsModalVisible}/>
    </BrowserRouter>
  );
}

export default App;
