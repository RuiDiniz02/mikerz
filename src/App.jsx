import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound"; // cria este ficheiro

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota principal */}
        <Route path="/" element={<Homepage />} />

        {/* Qualquer rota não encontrada cai aqui */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;