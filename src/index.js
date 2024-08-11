import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import UserProvider from "./contexts/Context";
import { BrowserRouter } from "react-router-dom";
import SearchProvider from "./contexts/SearchContext";
import { UserAuthContextProvider } from "./contexts/AuthContext";
import { DetailsContextProvider } from "./contexts/DescriptionContext";
// import Layout from "./components/Layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
          <UserProvider>
            <SearchProvider>
              <App />
            </SearchProvider>
          </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();
