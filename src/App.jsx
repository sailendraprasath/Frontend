import Contact from "./page/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Notfound from "./page/Notfound";
// import About from "./page/About";
import About2 from "./components/About2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About2" element={<About2 />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
