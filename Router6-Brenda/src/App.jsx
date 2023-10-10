import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Error404 } from "./components/Error404";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />}></Route>
          <Route path="/about" element={<Navigate to="/acerca" />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>

          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
