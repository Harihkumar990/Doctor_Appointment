import { useEffect } from "react";
import {Appointment_List, updatenotifiaction} from "./MethodDoc"
import { useAuthContext } from "../Redux/redux";
import DoctorDashboard from "./Doctor";
const DocNotification = () =>{
    const {appointmentlist,dispatch,docnotification} = useAuthContext();
    const hanlde =async (e) => {

        e.preventDefault()
        const data  = await updatenotifiaction(e.target.dataset.id);
        const list = data.filter(values => values.notification == 1);
        dispatch({
            type:"Doc_Notification",
            payload:list
        })
    }
    useEffect(()=>{
        const list = appointmentlist.filter(values => values.notification == 1);
        dispatch({
            type:"Doc_Notification",
            payload:list
        })
    },[dispatch])
    
    return (
        <>
            <DoctorDashboard/>
            {
                docnotification.length > 0 ? docnotification.map(values => <form  key={values.id} className="border rounded-md bg-gray-900 border-black m-2" >
                    <div className=" m-2 p-2" >
                        
                        <section className=" text-white flex   justify-evenly  " >
                            <div className="flex  flex-col gap-3 " >
                                <h3 className="text-xl font-semibold " >Patient Name</h3>
                                <span className="border px-2 pl-2 border-red-500 rounded-lg" >{values.firstname} {values.lastname}</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl font-semibold ">Date</h3>
                                <span className="border px-2 pl-2 border-red-500 rounded-lg">{values.date}</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl font-semibold ">Time</h3>
                                <span className="border  px-2 pl-2 border-red-500 rounded-lg">{values.time}</span>
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <h3 className="text-xl font-semibold "></h3>
                                <button onClick={hanlde}  data-id = {values.id} className="border px-2 pl-2 bg-red-500 hover:scale-105 border-red-500 rounded-lg"> REMOVE </button>
                            </div>
                        </section>
                    </div>
                </form> ) :<h1>No records found</h1>
            }            
        
        </>
    )
}

export default DocNotification;