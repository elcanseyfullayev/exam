import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Basket from "./components/Basket";
import './assets/_reset.scss'
import Details from "./pages/Details";
import './assets/mediaquery.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/add" element={<Add></Add>} />
          <Route path="/basket" element={<Basket></Basket>} />
          <Route path="/details/:id" element={<Details></Details>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
