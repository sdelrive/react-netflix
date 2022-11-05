import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Movie from "./pages/Movie/Movie";
import Register from "./pages/Register/Register";

export const ResultsContext = createContext();
function App() {
  const [resultados, setResultados] = useState(null);

  useEffect(() => {
    console.log("Desde app: ", resultados);
  }, [resultados]);

  return (
    <ResultsContext.Provider value={[resultados, setResultados]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ResultsContext.Provider>
  );
}

export default App;
