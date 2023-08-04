import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Werfa from "./pages/Werfa";
import Insert_payment from "./pages/insert_payment";

// import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Werfa />} />
          <Route path="Insert_payment" element={<Insert_payment />} />
         

         
                  </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
