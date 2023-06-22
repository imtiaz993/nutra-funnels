import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../Pages/Home/Landing";

const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRoutes;
