import React, { createContext, useContext, useEffect } from "react";
import "./Layout.scss";

import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { ResultsContext } from "../../App";
export default function Layout({ children, results, setResults }) {
  const [resultados, setResultados] = useContext(ResultsContext);
  return (
    <div className="layout">
      <Header results={results} setResults={setResults} />
      {children}
      <Footer />
    </div>
  );
}
