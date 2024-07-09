const browserReducer = (state,{type,payload}) =>{
    switch(type){
        case "Login":
            return{
                ...state,
                islogin: !state.islogin
            }
        case "Signup":
            return{
                ...state,
                signupdetails:{
                    ...state.signupdetails,
                    [payload[0]] : payload[1]
                }
            }
        case "Empty_Signup":
            return{
                ...state,
                signupdetails:{
                    name:"",
                    email:"",
                    phone:"",
                    password:""
                }
            }
        case "Set_User":
            localStorage.setItem("token",payload.token);
            return{
                ...state,
                username:payload.username
            }
        case "Set_Email":
            return{
                ...state,
                Email:payload
            }
        case 'Empty_Login':
            return{
                ...state,
                logindetails:{
                    email:"",
                    password:""
                }
            }
        case 'Set_Admin':
            return{
                ...state,
                isAdmin:payload  
            }
        case "UserLogin":
            return{
                ...state,
                logindetails:{
                    ...state.logindetails,
                    [payload[0]]:payload[1]
                }
            }
        case "UpdateTime":
            return{
                ...state,
                datetime:{
                    ...state.datetime,
                    currtime:payload.time,
                    currdate:payload.date,
                    currmonth:payload.month,
                    curryear:payload.year
                }
            }
        case "List_Of_Appointment":
            return{
                ...state,
                listappointment:payload
            }
        case "List_Of_Approved":
            return{
                ...state,
                listapproved:payload
            }
        case "Set_Appointment":
            return{
                ...state,
                appointment:{
                    ...state.appointment,
                    [payload[0]]:payload[1]
                }
            }
        case "Empty_Appointment":
            return{
                ...state,
                appointment:{
                    firstname:"",
                    lastname:"",
                    phone:"",
                    email:"",
                    date:"",
                    time:"",
                    reason:"",
                    description:""
                }
            }
        case "Store_Message":
            return{
                ...state,
                appointmentms:payload
            }
        case "Handle_Radio":
            return{
                ...state,
                ischecked:payload
            }
        case "Notification":
            return{
                ...state,
                notification:payload
            } 
            
        case "Doc_List":
            return{
                ...state,
                appointmentlist:payload
            }
        case "Doc_Notification":
            return{
                ...state,
                docnotification : payload
            }
        case "Handle_Notification":
            return{
                ...state,
                docnotific:!state.docnotific
            }
        case "Approved_List":
            return{
                ...state,
                approvedlist:payload
            }
        case "Active":
            return{
                ...state,
                home:!state.home,
                appo:!state.appo,
                notify:!state.notify,
                status:!state.status
            }
        default:
            return state
    }
}

export default browserReducer;