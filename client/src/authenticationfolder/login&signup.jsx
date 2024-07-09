import Signup from "./signuo";
import { LoginUser } from "./Methods";
import { useAuthContext } from "../Redux/redux";
const LoginSignup = () =>{
    const {islogin,logindetails,dispatch} = useAuthContext();
    const hanldelogin = (e) =>{
        e.preventDefault();
  
        dispatch({
            type:"Login",
            payload: ""
        });
    }
    const handleuserinput = (e) => {
        dispatch({
            type:"UserLogin",
            payload:[e.target.name,e.target.value]
        })
    }
   
    const checkdata = async (e) => {
        e.preventDefault();
        try {
            const data = await LoginUser(logindetails);
            if(data === 'error'){
                alert("Some Error Ocuured sending data");
                return;
            }
            const {token,username,isAdmin} = data;
            dispatch({
                type:"Set_User",
                payload:{username,token}
            })
            dispatch({
                type:"Empty_Login",
                payload:""
            })
            dispatch({
                type:"Set_Admin",
                payload:isAdmin
            })
            dispatch({
                type:"Set_Email",
                payload:logindetails.email
            })
        } catch (error) {
            console.log("Some Error Occurred");
        }
        
       
       
    }
    
    return(
        <>
        <h1 className="text-4xl relative top-2 border-b-2 p-1 shadow shadow-orange-400 text-center  text-white font-bold   " > Welcome  </h1>
            { islogin ?  <form  onSubmit= {checkdata} className="    items-center md:grid md:place-content-center  lg:mt-7   sm:flex flex-col   " >
                <div  className=" border   items-center sm:h-fit sm:w-fit rounded-md  shadow-white shadow-md  md:h-fit lg:h-[20rem] md:w-[20rem]  border-white gap-2 flex flex-col m-3 mt-5 pt-3  ">
                        
                    <h2 className="text-center text-2xl font-bold text-white   "> Login </h2>
                    <div className="m-2 ml-3 pb-2 flex flex-col gap-2  pl-2 pr-2  w-full   " >
                        <section className = {"flex  flex-col gap-3 m-2 "}>
                                
                            <h3 className="text-white text-xl " >Email </h3>
                            <input   name="email" value={logindetails.email} onChange={handleuserinput} className="ml-4 focus:outline-none rounded-md placeholder:p-3  text-white  bg-transparent border-b-2 " type={"text"} placeholder={"Enter Email"}></input>
                        </section>
                        <section className = "flex flex-col gap-3 m-2 " >
                                
                            <h3 className="text-white text-xl" >Password</h3>
                            <input value={logindetails.password} name="password" onChange={handleuserinput} className="ml-4 placeholder:p-3 rounded-md focus:outline-none text-white bg-transparent border-b-2  " type="password" placeholder="Enter Password"></input>
                        </section>
                            
                        <section className = " mt-4 border-white w-full flex gap-5  justify-center   " >
                                
                            <button   className="border border-white w-[5rem]  p-1 bg-red-400 rounded-lg hover:shadow-md hover:shadow-white font-bold sm:w-[7rem] md:w-[10rem]   "   >Submit</button>
                            <span  onClick={hanldelogin} className=" text-center cursor-pointer border border-white w-[7rem] sm:w-[9rem] md:w-[12rem] bg-red-400 rounded-lg hover:shadow-md font-bold hover:shadow-white   ">Signup</span>
                        </section>
                    </div>
                </div>
                <div className="flex justify-center mt-7 " >

                    <img  src="https://imgs.search.brave.com/X6iEVKq0jJCl_I6gENbZzY07u-OIK3NK6jKsi_azplY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMTYxMzYvMTYx/MzYwODYucG5n" alt="noimage" ></img>

                </div>    
            </form> :
            <Signup></Signup>}
        </>
    )
}

export default LoginSignup;