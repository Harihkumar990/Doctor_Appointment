

import { NavLink} from 'react-router-dom';
import { useAuthContext } from "../Redux/redux";
const UserDashboard = () =>{
    const {dispatch,username} = useAuthContext();
    
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
    
    const {notification} = useAuthContext();
    return(
        <>
           <main className="h-fit   bg-slate-300" >
                <h1 className="text-center  m-2 p-5 text-xl font-bold md:text-2xl lg:text-[2.5rem] " > Welcome  "  {username}  " </h1>
                <nav className="border   p-1   w-full h-fit sm:h-fit flex items-center justify-between  border-yellow-500 rounded-lg mt-5 bg-slate-900 border-b-4   " >
                    <ul className="flex flex-col place-items-end sm:flex md:flex-row  md:m-2   gap-2" >
                       <NavLink  to={'/home'} > <li  className=" hover:shadow-white hover:shadow-lg bg-red-500 px-3  sm:m-1 py-1 mt-3 ml-3 rounded-md  border w-fit flex items-center  cursor-pointer font-medium " >Home</li></NavLink>
                      <NavLink to={'/userdashboard'} >  <li className="hover:shadow-white hover:shadow-lg bg-red-500 px-3 py-1 sm:m-1 mt-3 ml-3 rounded-md flex items-center  border  cursor-pointer w-fit font-medium">Appointment</li></NavLink>
                      <NavLink  to={'/status'} >  <li  className="hover:shadow-white hover:shadow-lg bg-red-500  px-2  flex sm:m-1 items-center p-1  cursor-pointer sm:px-4  mt-3 ml-3 font-medium rounded-md  border w-fit">Status</li></NavLink>
                        <li  className="hover:shadow-white hover:shadow-lg bg-red-500 py-1 md:ml-3 mt-3 sm:m-1 md:mr-2 flex items-center sm:px-4 cursor-pointer rounded-md  border w-fit font-medium">Update Appointment</li>
                    </ul>
                    <div className="flex items-center ">
                    <span   className="text-white z-100  relative right-3 bottom-2 " >{notification.length}</span>
                     <NavLink to={'/usernotification'} >   <span className="material-symbols-outlined relative z-50 cursor-pointer text-red-500 mr-3 text-[1.7rem] ">notifications</span></NavLink>
                        
                        <button onClick={() => hanldelogout()}  className="hover:shadow-white hover:shadow-lg bg-red-500 px-3 py-1 sm:m-1 mt-3 ml-3 rounded-md flex items-center  border  cursor-pointer w-fit font-medium" >Logout</button>
                    </div>
                    
                </nav>
                
           </main> 
        </>
    )
}

export default UserDashboard;