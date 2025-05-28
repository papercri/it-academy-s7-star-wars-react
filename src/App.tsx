import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ScaleLoader from "react-spinners/ScaleLoader";

import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ShipDetailsPage from "./pages/ShipDetailsPage";
import ErrorPage from "./pages/ErrorPage";

const StarshipsList = lazy(() => import("./components/ships/starshipsList/starshipsList.tsx"));
const Login = lazy(() => import("./components/auth/SignIn"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <ScaleLoader color="#FFE81F" height={40} width={4} />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route element={<AppLayout />}>
              <Route
                path="/starships"
                element={
                  <ProtectedRoute>
                    <StarshipsList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/starships/:id"
                element={
                  <ProtectedRoute>
                    <ShipDetailsPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
