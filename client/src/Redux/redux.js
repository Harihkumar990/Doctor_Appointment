import { useContext,createContext,useReducer } from "react";
import browserReducer from "./control";

const initialValue = {
    islogin:false,
    logindetails:{
        email:"",
        password:""
    },
    signupdetails:{
        name:"",
        email:"",
        phone:"",
        password:""
    },
    datetime:{
        currtime:"",
        currdate:"",
        currmonth:"",
        curryear:""
    },
    username:"",
    isAdmin:"",
    appointment:{
        firstname:"",
        email:"",
        phone:"",
        
        date:"",
        time:"",
        reason:"",
        description:"",
        lastname:"",
    },
    ischecked:[{ r1: true, r2: false, r3: false, r4: false }],
    listappointment:[],
    listapproved:[],
    notification:[],
    appointmentlist:[],
    docnotification:[],
    docnotific:false,
    approvedlist:[],
    home :false,
    appo : true,
    notify : false,
    status  :false,
    Email:""
}


const AuthContext = createContext(initialValue);

const AuthProvider = ({children}) => {
    const [{docnotification,islogin,home,appo,notify,Email,status,signupdetails,approvedlist,appointment,docnotific,appointmentlist,listapproved,listappointment,notification,ischecked,logindetails,datetime,username,isAdmin},dispatch] = useReducer(browserReducer,initialValue);

    return (
        <AuthContext.Provider value={{docnotification,home,Email,appo,notify,status,logindetails,approvedlist,ischecked,docnotific,appointmentlist,listapproved,listappointment,notification,appointment,islogin,datetime,isAdmin,username,signupdetails,dispatch}} >
            {children}
        </AuthContext.Provider>
    )
}

const useAuthContext = () => {
    const useHook = useContext(AuthContext);
    if(!useHook){
        alert("Error in reducer");
    }
    return useHook;
}

export {useAuthContext,AuthProvider};