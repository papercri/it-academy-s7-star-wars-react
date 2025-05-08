import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShipsListPage from "./pages/ShipsListPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SettingsPage from "./pages/SettingsPage";
import ShipDetailsPage from "./pages/ShipDetailsPage";
import ErrorPage from "./pages/ErrorPage";


function App() {

  return (
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/starships" element={<ShipsListPage/>}/>
    <Route path="/starships/:id" element={<ShipDetailsPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<SignUpPage/>}/>
    <Route path="/settings" element={<SettingsPage/>}/>
    <Route path="*" element={<ErrorPage/>}/>
   </Routes>
  )
}
export default App
