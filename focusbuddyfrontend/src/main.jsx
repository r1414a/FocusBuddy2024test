// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import ReactDOM from 'react-dom';
import App from "./App";
import ScrollToTop from "./Components/OnLoadScrollToTop/ScrollToTop.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
   <GoogleOAuthProvider clientId="307656055156-c1o2b86ohnfu1903i0kildj7vrkupspp.apps.googleusercontent.com">
{/*   <GoogleOAuthProvider clientId={`${import.meta.env.VITE_CLIENT_ID}`}> */}
    <BrowserRouter>
      {/* <React.StrictMode> */}
        <ScrollToTop />
        <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </GoogleOAuthProvider>
);
