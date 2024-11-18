import React from "react"; 
import { Route, Routes } from "react-router-dom";
import AboutPg from "../pages/About";
import MenuItems from "../pages/MenuItems";
import DisplayArticles from '../components/DisplayArticles.jsx'


export default function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<DisplayArticles />} />
        <Route path="/about" element={<AboutPg />} />
        {/* Add other routes here */}
      </Routes>
    );
  }
  
