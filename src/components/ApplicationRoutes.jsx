import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import HomePage from "./HomePage";

const ApplicationRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ApplicationRoutes;
