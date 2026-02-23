import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amthal from "./components/Amthal";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import ServicesModal from "./components/ServicesModal";
import Loader from "./components/Loader";

function Root() {
  const [loading, setLoading] = useState(true);

  const handleLoaderDone = () => {
    setTimeout(() => setLoading(false), 400);
  };

  return (
    <>
      {loading ? (
        <Loader onComplete={handleLoaderDone} />
      ) : (
        <div style={{ opacity: 1, transition: "opacity 0.5s ease" }}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route exact path="/" element={<App />} />
              <Route path="/amthal" element={<Amthal />} />
              <Route path="/Technologies" element={<Technologies />} />
              <Route path="/ServicesModal" element={<ServicesModal />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);

