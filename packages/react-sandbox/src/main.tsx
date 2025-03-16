import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./routes/Home";
import Debounce from "./routes/Debounce";
import Throttle from "./routes/Throttle";
import { URL_PATH } from "./constants/urlPath";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={URL_PATH.debounce} element={<Debounce />} />
        <Route path={URL_PATH.throttle} element={<Throttle />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
