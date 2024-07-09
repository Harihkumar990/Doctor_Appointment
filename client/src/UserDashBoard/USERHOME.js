
import {useNavigate} from 'react-router-dom'

import { useAuthContext } from '../Redux/redux';
import UserDashboard from './User';
const Home = () =>{
    const {listapproved} = useAuthContext();
    const navigate = useNavigate();
   
    
  
    return(
        <>
          <UserDashboard/>
          {
            listapproved.length  > 0  ?  listapproved.map(values =>
                <form key={values.id}  className="border rounded-md  bg-gray-900 border-black m-3" >
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
                            <span className="border px-2 pl-2 border-red-500 rounded-lg">{values.time}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl font-semibold ">Reason</h3>
                            <span className="border px-2 pl-2 border-red-500 rounded-lg">{values.reason}</span>
                        </div>
                        <div className="flex flex-col gap-3 ">
                            <h3 className="text-xl font-semibold ">Appointment Status</h3>
                            <button className="border px-2 pl-2 bg-red-500 hover:scale-105 border-red-500 rounded-lg">Pending </button>
                        </div>
                    </section>
                </div>
                <div className='px-10' >
                        
                <button onClick={() => navigate('/userdashboard',{replace:true})} className=' bg-red-600 font-bold text-[1.2rem] hover:scale-105 text-white w-full border border-white rounded-md  p-1    mt-6 mb-4 ' >Home</button>
                </div>
            </form>             
            ) 
            : <h1 className='text-xl sm:text-3xl md:text-4xl' >No Records Found</h1>
  
        }
    
        </>
    )
}

export default Home;
