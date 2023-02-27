import React, { useEffect, useState, CSSProperties } from "react";
import { Dashboard } from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import BuildPage from "./pages/Builder";
import ClipLoader from "react-spinners/ClipLoader";
import { Resumes } from "./pages/Resumes";
function App() {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "purple",
    position: "absolute",
    left: "50%",
    top: "50%",
  };

  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <ClipLoader cssOverride={override} loading={loading} size={100} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/resume/:id" element={<Resumes />}></Route>
            <Route path="/" element={<Dashboard />} />
            <Route path="/build" element={<BuildPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
