import axios from 'axios';


const Appointment_List = async () =>{
    try {
        const {data} = await axios.get("http://localhost:3000/service/appointmentlist");
        
        return data.data;
    } catch (error) {
        console.log("error in appoint,ment list");
    }
}

const updatenotifiaction = async (id) =>{
    
    try {
        const {data} = await axios.patch(`http://localhost:3000/service/adminnotification/${id}`)
        return data[0]  
    } catch (error) {
        console.log("error to update notification");
    }
} 

const cancelappointments = async (id) =>{
    try {
        const { statusText  } = await axios.delete(`http://localhost:3000/service/cancelappointment/${id}`);
        if(statusText === 'Created'){
            return "Successfully";
        }
    } catch (error) {
        console.log('error');
    }
}
const Approved = async (id) =>{
    try {
        const {statusText} = await axios.post(`http://localhost:3000/service/approved/${id}`);
        if(statusText === 'Created'){
            return "Successfully";
        }
    } catch (error) {
        console.log("error in approved");
    }
}

const approvedlists = async () => {
    try {
        const { data , statusText } = await axios.get('http://localhost:3000/service/approvedlists');
        if(statusText === 'Created'){
            return data;
        }
    } catch (error) {
        console.log("erro in apprived list");
    }
}

export {Appointment_List,updatenotifiaction,approvedlists,cancelappointments,Approved};