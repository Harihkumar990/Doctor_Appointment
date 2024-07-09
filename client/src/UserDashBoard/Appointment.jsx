import { useEffect } from "react";
import { useAuthContext } from "../Redux/redux";
import {AppointmentRegister, getapprovedlist} from "./MethodsUser";
import UserDashboard from "./User";
const Appoint = () =>{
    const {ischecked,dispatch,Email,datetime,appointment,logindetails,listapproved} = useAuthContext();
    
    const today = new Date();
    useEffect(()=>{
        dispatch({
            type:"UpdateTime",
            payload:{
                time:"",
                date:(today.getDate()/10 >= 1 ? today.getDate() : `0${today.getDate()}`),
                month:(today.getMonth()+1)/10 >= 1 ? today.getMonth()+1 : `0${today.getMonth()+1}`  ,
                year:today.getFullYear()
                
            }
        })
        const getlist =async () =>{
            const data = await getapprovedlist(logindetails.email);
            if(data === "error"){
                return;
            }
            dispatch({
                type:"List_Of_Approved",
                payload:data.data
              })
            
        }
        getlist();

    },[dispatch,logindetails])
    useEffect(()=>{
        const list = listapproved.filter(values => values.notification === 0);
        dispatch({
            type:"Notification",
            payload:list
        })
    },[])
    const appointmentform = (e) =>{
        const data = e.target.value;
        dispatch({
            type:"Set_Appointment",
            payload:[e.target.name,`${data}`]
        })

    }
    const handleradiobutton = (e) =>{
        const num = e.target.dataset.value;
        for (let prop in ischecked[0]) {
            if (ischecked[0].hasOwnProperty(prop)) {
                // Set the specified key to true and all others to false
                ischecked[0][prop] = prop === num;
            }
        }
        dispatch({
            type:"Handle_Radio",
            payload:ischecked
        })
        const reason = e.target.dataset.id;
        dispatch({
            type:'Set_Appointment',
            payload:[e.target.name,reason]
        })
        
        
    }
    const hanldeappointmnet = async (e) =>{
        e.preventDefault();
        await AppointmentRegister(appointment);
        dispatch({
            type:'Empty_Appointment',
            payload:""
        })
        alert("Successfully Submit");
    }
    return(
        
        <>
        <UserDashboard/>
            <form   onSubmit={hanldeappointmnet} className="border m-2  h-fit   bg-slate-300 border-black " >
                <section   className="m-3 flex flex-col gap-5  sm:m-4" >
                    <div className="flex flex-col gap-2" >
                        <label htmlFor="name" >Full Name</label>
                        <div className="flex gap-3 border justify-between" >
                            <input onChange={appointmentform}  value={appointment.firstname} name="firstname" className="w-full border-black border rounded-sm placeholder:p-2 "  id="name" type="text" placeholder="First Name" ></input>
                            <input onChange={appointmentform}  value={appointment.lastname} name="lastname" className="w-full border-black border rounded-sm placeholder:p-2  " id="name" type="text" placeholder="Last Name" ></input>
                        </div>
                    </div>
                    <div className="flex flex-col   gap-2" >
                        <label htmlFor = "phone" >Contact Number</label>
                        <input onChange={appointmentform} value={appointment.phone} name="phone" className=" border-black border rounded-sm placeholder:p-2" id="phone" type="text" placeholder="## ## ## ##"></input>
                    </div>
                    <div className="flex flex-col   gap-2">
                        <label htmlFor="email" >Email Address</label>
                        <input readOnly name="email" value={Email} className=" border-black border rounded-sm placeholder:p-2" id="email"  type="text" ></input> 
                    </div>
                    <section className="flex  m-1  justify-between" >
                        <div className="flex flex-col gap-3 " >
                            <label htmlFor="datetime" >Preferred Appointment Date</label>
                            <input onChange={appointmentform}  name="date" className="bg-transparent" id="datetime" type="date" min={`${datetime.curryear}-${datetime.currmonth}-${datetime.currdate}`}   value={ appointment.date ? appointment.date :  `${datetime.curryear}-${datetime.currmonth}-${datetime.currdate}`}    ></input>
                        </div>
                        <time className="flex flex-col gap-3 "   >
                            <label htmlFor="time  " >Time</label>
                            <input onChange={appointmentform} value={appointment.time} name="time" type="time" className="bg-transparent"  id="time"  ></input> 
                        </time>
                    </section>
                    <div className="flex flex-col gap-3 " >
                        <span className="border-b-2 border-black p-1"  >Reason for Appointment</span>
                        <div className="flex flex-col gap-3 " >
                            <label   className="border flex justify-evenly"  >Annual CheckUp  <input data-id = "Annual CheckUp" onChange={handleradiobutton} className="relative" type="radio"  data-value = {"r1"} name="reason" checked={ischecked[0].r1}  ></input></label>
                            <label  className="border flex justify-evenly">Pregency Consulting  <input data-id="Pregency Consulting"  onChange={handleradiobutton} className="relative right-[0.6rem]" data-value = {"r2"} name="reason" checked ={ischecked[0].r2} type="radio"    ></input></label>
                            <label  className="border flex justify-evenly"> Gynecological issue  <input data-id="Gynecological issue" onChange={handleradiobutton}  className="relative right-[0.4rem]" type="radio" data-value = {"r3"} name="reason" checked ={ischecked[0].r3}    ></input></label>
                            <label  className="border flex justify-evenly">Others  <input data-id="Others" onChange={handleradiobutton} className="relative left-[1.5rem]" type="radio"  data-value = {"r4"} checked ={ischecked[0].r4}  name="reason" ></input></label>
                        </div>
                    </div>
                    <div className="flex flex-col border-t-2 gap-4   border-black p-1 " >
                        <span>Please describe the symptoms or concerns that you would like to discuss during your telehealth appointment</span>
                        <textarea onChange={appointmentform} name="description" value={appointment.description} className=" h-5rem px-1 py-1  sm:h-[7rem]  md:h-[10rem]   border-black border rounded-sm " type="text" ></textarea>
                    
                    </div>
                    <button className="w-full rounded-lg border-black border-2 bg-red-500" >Submit</button>
                </section>
            </form>
        </>
    )
}

export default Appoint;