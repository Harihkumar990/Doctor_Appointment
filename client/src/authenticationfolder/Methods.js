import axios from 'axios';
const Registration = async (details) => {
    
    try {
        const {data,statusText} = await axios.post('http://localhost:3000/user/signup',details);
        
        if(statusText === 'Created') {
            return data;
        }
        return "error";
    } catch (error) {
        alert("Fill Carefully ")
    }
}
const LoginUser = async (details) =>{

    try {
        const {data,statusText} = await axios.post('http://localhost:3000/user/login',details);
        
        if(statusText === 'Created'){
            return data;
        }
        return "error";
        
    } catch (error) {
        alert("User Not Found ");
        return "error"
        
    }
}

const VerifyUser = async (token) =>{
    try {
        const {data,statusText} = await axios.get("http://localhost:3000/user/user",{headers:{'Authorization':token}});
        
        
        if(statusText === 'Created'){
            return data.userdata[0];
        }
        
    } catch (error) {
        alert("user have to login first");
    }
}
export  {Registration ,LoginUser, VerifyUser};