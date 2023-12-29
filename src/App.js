import Navbar from "./components/Navbar";
import PersonInfo from "./components/Home/PersonInfo";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Furniture from "./components/Furniture/Furniture";
import Clothes from "./components/Clothes/Clothes";
import Software from "./components/Software/Software";
import About from "./components/About/About";
function App() {
  return (
    <div>
      <BrowserRouter basename="/d-club">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<PersonInfo />} />
          <Route path="/furniture" exact element={<Furniture />} />
          <Route path="/clothes" exact element={<Clothes />} />
          <Route path="/software" exact element={<Software />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
