import LoginSignup from "./authenticationfolder/login&signup";
import { useAuthContext } from "./Redux/redux";
import { Route, Routes } from "react-router-dom";
import Status from "./UserDashBoard/StatusPage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./UserDashBoard/USERHOME";

import Appoint from "./UserDashBoard/Appointment";
import Appointments from "./DoctorDashboard/DocAppointment";
import HomeDoc from "./DoctorDashboard/DocHome";
import DocNotification from "./DoctorDashboard/Notification";
import Notifica from "./UserDashBoard/Notification";
import UserNotification from "./UserDashBoard/Notification";
const App = () =>{
  const navigate = useNavigate();
  const {isAdmin} = useAuthContext();
  useEffect(() => {
    isAdmin === 0  ? navigate("/userdashboard",{replace:true}) : isAdmin === 1 ? navigate("/doctordasboard",{replace:true})   :navigate("/",{replace:true}) 
  },[isAdmin])

  return(

    <main className="bg-slate-700 overflow-x-hidden h-screen w-screen" >
        
        <Routes>
          <Route  path={"/"} element = {<LoginSignup/>}   >  </Route>
          <Route path="/userdashboard" element = {<Appoint/>}></Route>
          <Route path="/doctordasboard" element = {<Appointments/>}></Route>
          <Route path="/status"  element = {<Status></Status>} ></Route>
          <Route path="/home" element = {<Home/>}></Route>
          <Route path="/dochome" element = {<HomeDoc/>}></Route>
          <Route path="/docnotification" element ={<DocNotification/>}></Route>
          <Route path="/usernotification" element = {<UserNotification/>}></Route>
        </Routes>
    </main>
  )
  
}

export default App;