import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import PageCard from "./pages/pageCard";
import Header from "./components/header";
import "./UI/res.css";
function App() {
    const [value, setValue] = useState("");
    // console.log(value);
    return (
        <div className="wrapper">
                <Header value={value} setValue={setValue} />
            <div className="pages">
                <Routes>
                    <Route path="/" element={<Home value={value} setValue={setValue} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route
                        path="/pagecard"
                        element={<PageCard value="123" />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
