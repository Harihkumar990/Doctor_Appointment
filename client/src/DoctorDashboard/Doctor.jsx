
import { useEffect } from "react";
import { useAuthContext } from "../Redux/redux";
import DocNotification from "./Notification";
import { NavLink, useNavigate } from "react-router-dom";
const DoctorDashboard = () =>{
    const navigate = useNavigate();

    const {username,dispatch,docnotification,appointmentlist} = useAuthContext();
    
    const hanldelogout = () =>{
        localStorage.removeItem("token");
        dispatch({
            type:'Set_User',
            payload:""
        })
        dispatch({
            type:"Set_Admin",
            payload:""
        })   
    }
    useEffect(()=>{

        const list = appointmentlist.filter(values => values.notification === 1);
        dispatch({
            type:"Doc_Notification",
            payload:list
        })
    },[appointmentlist])
    return(
        <>
           <main className="   bg-slate-300" >
                <h1 className="text-center   p-5 text-xl font-bold md:text-2xl lg:text-[2.5rem] " > Welcome Doctor " { username  }   "  </h1>
                <nav className="border   p-1   w-full h-fit sm:h-fit flex items-center justify-between  border-yellow-500 rounded-lg mt-5 bg-slate-900 border-b-4   " >
                    <ul className="flex flex-col place-items-end sm:flex md:flex-row  md:m-2   gap-2" >
                    <NavLink to={"/dochome"}>    <li   className=" hover:shadow-white hover:shadow-lg bg-red-500 px-3  sm:m-1 py-1 mt-3 ml-3 rounded-md  border w-fit flex items-center  cursor-pointer font-medium " >Home</li></NavLink>
                    <NavLink to={"/doctordasboard"}>    <li  className="hover:shadow-white hover:shadow-lg bg-red-500 px-3 py-1 sm:m-1 mt-3 ml-3 rounded-md flex items-center  border  cursor-pointer w-fit font-medium">Appointments</li></NavLink>
                    </ul>
                    <div className="flex items-center" >
                    <span className="text-white " >{docnotification.length}</span>
                    <NavLink to={"/docnotification"}> <span   className=" cursor-pointer   material-symbols-outlined text-red-500 mr-3 text-[1.7rem] ">notifications</span></NavLink>
                    <button onClick={() => hanldelogout()}  className="hover:shadow-white hover:shadow-lg bg-red-500 px-3 py-1 sm:m-1 mt-3 ml-3 rounded-md flex items-center  border  cursor-pointer w-fit font-medium" >Logout</button>
                    
                    </div>
                </nav>
           </main> 
           
          
        </>
    )
}

export default DoctorDashboard;