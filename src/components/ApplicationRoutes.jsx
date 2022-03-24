import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Dictionary from "./Dictionary";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import NewsItem from "./NewsItem";
import PerformanceStats from "./PerformanceStats";
import store from "../redux/store";

const ApplicationRoutes = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<HomePage />} />
              <Route path="/news/:news" element={<NewsItem />} />
              <Route path="/dictionary" element={<Dictionary />} />
              <Route path="/performance" element={<PerformanceStats />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default ApplicationRoutes;
