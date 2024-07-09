
import { useAuthContext } from '../Redux/redux';
import UserDashboard from './User';
import { notificationappoint } from './MethodsUser';
const UserNotification = () =>{
    const {notification} = useAuthContext();
    const hanldenotification = async (e) =>{
        e.preventDefault();
        try {
            const data = await notificationappoint(e.target.dataset.id);
            console.log(data);
        } catch (error) {
            console.log("Error in hanlde notification");
        }
    }
    return(
        <>
            <UserDashboard/>
            {
            notification.length  > 0  ?  notification.map(values =>
                <form key={values.id}  className="border rounded-md  bg-gray-900 border-black m-3" >
                <div className=" m-2 p-2" >
                    <section className=" text-white flex justify-evenly  " >
                        <div className="flex  flex-col gap-3 " >
                            <h3 className="text-xl font-semibold " >Patient Name</h3>
                            <span className="border px-2 pl-2 border-red-500 rounded-lg" >{ values.firstname } { values.lastname }</span>
                        </div>
                        
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl font-semibold ">Reason</h3>
                            <span className="border px-2 pl-2 border-red-500 rounded-lg">{ values.reason }</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl font-semibold ">Time</h3>
                            <span className="border px-2 pl-2 border-red-500 rounded-lg">{values.time}</span>
                        </div>
                        
                        <div className="flex flex-col gap-3 ">
                            <h3 className="text-xl font-semibold ">Appointment Status</h3>
                            <button className="border px-2 pl-2 bg-red-500 hover:scale-105 border-red-500 rounded-lg"> Approved </button>
                        </div>
                    </section>
                </div>
                <div className='px-10' >
                        
                <button onClick={hanldenotification}  data-id = {values.id} className=' bg-red-600 font-bold text-[1.2rem] hover:scale-105 text-white w-full border border-white rounded-md  p-1    mt-6 mb-4 ' >Delete</button>
                </div>
            </form>             
            ) 
            : <h1 className='text-xl sm:text-3xl md:text-4xl' >No Records Found</h1>
  
        }
        </>
    )
}

export default UserNotification;