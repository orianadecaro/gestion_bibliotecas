import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page";
import LayoutMain from "./components/layoutMain";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutMain>
              <HomePage />{" "}
            </LayoutMain>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
