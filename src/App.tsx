import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Maintenance from "./Pages/Maintenance";
import Offer from "./Pages/Offer";
import Sales from "./Pages/Sales";
import Setting from "./Pages/Setting";
import { ThemeProvider } from "@mui/material";
import { mobileTheme } from "./mobileTheme";
import Users from "./Pages/Users";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme = {mobileTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login></Login>} />
            <Route path="/dashboard" element={<Dashboard></Dashboard>} />
            <Route path="/users" element={<Users></Users>} />
            <Route path="/maintenance" element={<Maintenance></Maintenance>} />
            <Route path="/offer" element={<Offer></Offer>} />
            <Route path="/sales" element={<Sales></Sales>} />
            <Route path="/setting" element={<Setting></Setting>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
