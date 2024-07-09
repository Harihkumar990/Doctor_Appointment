import axios from 'axios';
const AppointmentRegister = async (details) =>{
    try {
        const {data} = await axios.post("http://localhost:3000/service/appointment",details,{headers:{'Content-Type':'application/json'}})
        return data;
    } catch (error) {
        alert("Change date aur time ");
    }
}
const getappointmentlist = async (email) =>{
    try {
        const {data}  = await axios.get(`http://localhost:3000/service/userappointmentlist/${email}`);
        return data;
        
    } catch (error) {
        return "error";
    }
}
const getapprovedlist =async (details) =>{
    try {
        const {data} = await axios.get(`http://localhost:3000/service/userapprovedlist/${details}`);
        
        return data;
    } catch (error) {
        return "error";
    }
}


const notificationappoint = async (id) =>{
    try {
        const {data,statusText} = await axios.patch(`http://localhost:3000/service/usernotification/${id}`);
        if(statusText === 'Created'){
            return data;
        }
        return data;
    } catch (error) {
        console.log("erro not found approved notification list")
    }
}

export {AppointmentRegister,getappointmentlist,getapprovedlist,notificationappoint};