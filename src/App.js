import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Ofertas } from "./Ofertas";
import { TablaOfertas } from "./TablaOfertas";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TablaOfertas />} />

        <Route path="/oferts" element={<Ofertas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
