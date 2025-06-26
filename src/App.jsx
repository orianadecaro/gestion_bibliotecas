import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
import NotFound from "./page/404";
import SocioDashboard from "./page/socio/dashboard";
import SocioLogin from "./page/socio";
import AboutUs from "./page/about";
import LoginBibliotecario from "./page/admin";
import SocioRegister from "./page/socio/register";
import LayoutSocio from "./components/layout/layoutSocio";
import SocioProfile from "./page/socio/profile";
import UserProfile from "./page/admin/userprofile";
import SocioHistory from "./page/socio/history";

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
        <Route path="/admin" element={<LoginBibliotecario />} />
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
        <Route
          path="/admin/userprofile"
          element={
            <PrivateRoute>
              <LayoutAdmin>
                <UserProfile />{" "}
              </LayoutAdmin>
            </PrivateRoute>
          }
        />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/socio" element={<SocioLogin />} />
        <Route path="/socio/register" element={<SocioRegister />} />
        <Route
          path="/socio/dashboard"
          element={
            <LayoutSocio>
              <SocioDashboard />{" "}
            </LayoutSocio>
          }
        />
        <Route
          path="/socio/history"
          element={
            <LayoutSocio>
              <SocioHistory />{" "}
            </LayoutSocio>
          }
        />
        <Route
          path="/socio/profile"
          element={
            <LayoutSocio>
              <SocioProfile />{" "}
            </LayoutSocio>
          }
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
