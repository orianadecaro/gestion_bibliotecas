import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page";
import LayoutMain from "./components/layoutMain";
import Dashboard from "./page/admin/dashboard";
import LayoutAdmin from "./components/layoutAdmin";
import UserList from "./page/admin/user";
import BookList from "./page/admin/book";
import LendingList from "./page/admin/lending";
import SocioList from "./page/admin/socio";
import ProfileList from "./page/admin/profile";

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
        <Route
          path="/admin/dashboard"
          element={
            <LayoutAdmin>
              <Dashboard />{" "}
            </LayoutAdmin>
          }
        />
        <Route
          path="/admin/user"
          element={
            <LayoutAdmin>
              <UserList />{" "}
            </LayoutAdmin>
          }
        />
        <Route
          path="/admin/book"
          element={
            <LayoutAdmin>
              <BookList />{" "}
            </LayoutAdmin>
          }
        />
        <Route
          path="/admin/lending"
          element={
            <LayoutAdmin>
              <LendingList />{" "}
            </LayoutAdmin>
          }
        />
        <Route
          path="/admin/socio"
          element={
            <LayoutAdmin>
              <SocioList />{" "}
            </LayoutAdmin>
          }
        />
        <Route
          path="/admin/profile"
          element={
            <LayoutAdmin>
              <ProfileList />{" "}
            </LayoutAdmin>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
