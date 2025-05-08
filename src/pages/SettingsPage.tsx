
import { Navigate } from "react-router-dom";
import Navbar from "../components/layout/navbar/Navbar";
import {  useState } from "react";
function SettingsPage() {

  const [hasAccess, setHasAccess] = useState(true);

  if(!hasAccess) return <Navigate to="/404" replace={true} />
  return (
    <>
    <Navbar></Navbar>
    <div>Settings</div>
  </>
  )
}

export default SettingsPage