import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page";
import Dashboard from "./page/admin/dashboard";
import UserList from "./page/admin/user";
import BookList from "./page/admin/book";
import LendingList from "./page/admin/lending";
import SocioList from "./page/admin/socio";
import ProfileList from "./page/admin/profile";
import LayoutMain from "./components/layout/layoutMain";
import LayoutAdmin from "./components/layout/layoutAdmin";
import PrivateRoute from "./routes/PrivateRoute";

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
            <PrivateRoute>
              <LayoutAdmin>
                <Dashboard />{" "}
              </LayoutAdmin>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/user"
          element={
            <PrivateRoute>
              <LayoutAdmin>
                <UserList />{" "}
              </LayoutAdmin>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/book"
          element={
            <PrivateRoute>
              <LayoutAdmin>
                <BookList />{" "}
              </LayoutAdmin>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/lending"
          element={
            <PrivateRoute>
              <LayoutAdmin>
                <LendingList />{" "}
              </LayoutAdmin>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/socio"
          element={
            <PrivateRoute>
              <LayoutAdmin>
                <SocioList />{" "}
              </LayoutAdmin>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/profile"
          element={
            <PrivateRoute>
              <LayoutAdmin>
                <ProfileList />{" "}
              </LayoutAdmin>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
