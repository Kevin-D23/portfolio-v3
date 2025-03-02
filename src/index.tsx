import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";
import { BrowserRouter } from "react-router-dom";


const supabase = createClient(
  String(process.env.REACT_APP_DBURL),
  String(process.env.REACT_APP_DBAPI)
);


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <SessionContextProvider supabaseClient={supabase}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SessionContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
