import { useEffect } from "react";
import DoctorDashboard from "./Doctor";
import { useAuthContext } from "../Redux/redux";
import { Appointment_List, Approved, cancelappointments } from "./MethodDoc";
const Appointments = () => {
    const {appointmentlist,dispatch,docnotific} = useAuthContext();
    useEffect(() =>{
        
        const getlist = async () =>{
            try {
                const data = await Appointment_List();
                dispatch({
                    type:"Doc_List",
                    payload:data
                })
            } catch (error) {
                console.log("data not found");
            }
        }
        getlist();
    },[])
    const cancelappointment = async (id) =>{
         const data = await cancelappointments(id)   
        if(data === 'Successfully'){
            alert(" Cancel ");
            const  appoint = await  Appointment_List()
            dispatch({
                type:"Doc_List",
                payload:appoint
            })
        }
    }
    const approvedApoint = async (id) =>{
        try {
            const data = await Approved(id);
            if(data === 'Successfully'){
                alert(" Approved ");
                const  appoint = await  Appointment_List()
                dispatch({
                    type:"Doc_List",
                    payload:appoint
                })
            }
        } catch (error) {
            console.log("Error");
        }
    }
    return(
        <>
            <DoctorDashboard/>
            {
                appointmentlist.length > 0  && !docnotific ? appointmentlist.map(values =>  
                    <main  key={values.id} className="border rounded-md bg-gray-900 border-black m-2" >
                        <div className=" m-2 p-2" >
                            <section className=" text-white flex justify-evenly  " >
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
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-xl font-semibold ">Reason</h3>
                                    <span className="border    px-2 pl-2 border-red-500 rounded-lg">{values.reason}</span>
                                </div>
                                <div className="flex flex-col gap-3 ">
                                    <h3 className="text-xl font-semibold ">Appointment Status</h3>
                                    <div  className="flex gap-3">
                                        <button onClick={() => cancelappointment(values.id)} className="border px-2 pl-2 bg-red-500 hover:scale-105 border-red-500 rounded-lg"> Cancel  </button>
                                                
                                        <button onClick={() => approvedApoint(values.id)} className="border px-2 pl-2 bg-red-500 hover:scale-105 border-red-500 rounded-lg"> pending </button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>) : <h1>No Records Found </h1>
            }

        </>
    )
}

export default Appointments;