
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShipsListPage from "./pages/ShipsListPage";
import LogInPage from "./pages/LoginPage";
import ShipDetailsPage from "./pages/ShipDetailsPage";
import ErrorPage from "./pages/ErrorPage";


function App() {

  return (
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/starships" element={<ShipsListPage/>}/>
    <Route path="/starships/:id" element={<ShipDetailsPage/>}/>
    <Route path="/login" element={<LogInPage/>}/>
    <Route path="*" element={<ErrorPage/>}/>
   </Routes>
  )
}
export default App
