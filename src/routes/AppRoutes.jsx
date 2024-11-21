import React from "react"; 
import { Route, Routes } from "react-router-dom";
import AboutPg from "../pages/About";
import DisplayArticles from '../components/DisplayArticles.jsx'
import ContactPg from "../pages/Contact.jsx";
import HomePg from "../pages/Home.jsx";


export default function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<DisplayArticles />} />
        <Route path="/Home" element={<HomePg />} />
        <Route path="/About" element={<AboutPg />} />
        <Route path="/Contact" element={<ContactPg />} />
      </Routes>
    );
  }
  
