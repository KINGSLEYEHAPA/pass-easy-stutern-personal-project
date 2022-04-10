import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Dictionary from "./Dictionary";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import NewsItem from "./NewsItem";
import PerformanceStats from "./PerformanceStats";
import { store, persistor } from "../redux/store";
import QuizPlatform from "./QuizPlatform";
import { PersistGate } from "redux-persist/integration/react";
import Welcome from "./Welcome";

const ApplicationRoutes = () => {
  return (
    <div className="relative max-w-7xl mx-auto">
      <Welcome />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="/news/:news" element={<NewsItem />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/quiz" element={<QuizPlatform />} />
                <Route path="/performance" element={<PerformanceStats />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default ApplicationRoutes;
