import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Amthal from "./components/Amthal";
import Header from "./components/Header";
// import Gallery from "./components/Gallery";
import Technologies from "./components/Technologies";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter>
<Header/>
<Routes>
<Route exact path="/" element= {<App/>}/>
<Route path="/amthal" element= {<Amthal/>}/>
<Route path="/Technologies" element= {<Technologies/>}/>
</Routes>
</BrowserRouter>);
