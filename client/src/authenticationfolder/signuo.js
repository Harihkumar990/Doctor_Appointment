
import { useEffect } from "react";
import { useAuthContext } from "../Redux/redux";
import { Registration,VerifyUser } from "./Methods";

const Signup = () => {
    const {dispatch,signupdetails}  = useAuthContext();
    useEffect(() =>{
        const token = localStorage.getItem("token");
        
        const verifyuser = async () =>{
            try {
                const {username,isAdmin,email} = await VerifyUser(token);
                dispatch({
                    type:'Set_User',
                    payload:{token,username}
                })
                dispatch({
                    type:"Set_Admin",
                    payload:isAdmin
                })
                
                dispatch({
                    type:"Set_Email",
                    payload:email
                })
            } catch (error) {
                console.log("Error verify user");
            }
        }
        verifyuser();
    },[])
    const issignup = (e) => {
        e.preventDefault();
        dispatch({
            type:"Login",
            payload:""
        })
    }
    const handlesignup = (e) =>{
        dispatch({
            type:"Signup",
            payload:[e.target.name,e.target.value]
        })
    }
    const senddata = async (e) =>{
        e.preventDefault();
        const data = await  Registration(signupdetails);
        if(data === "error"){
            alert("Registration error");
            return;
        } else {
                
            const {username,token,isAdmin} = data;
            dispatch({
                type:"Set_User",
                payload:{name:username,token:token}
            })
            dispatch({
                type:"Set_Admin",
                payload:isAdmin
            })
            dispatch({
                type:'Empty_Signup',
                payload:""
            })
            
            dispatch({
                type:"Set_Email",
                payload:signupdetails.email
            })
        }
    }
    return (
        <>
            <form onSubmit={senddata}  className="gap-10 grid md:grid-cols-2 grid-cols-1     items-center md:grid md:place-content-center  lg:mt-7     " >
                
                <div className="flex justify-center md:order-first order-last relative md:top-3 top-5 " >
    
                    <img  className="rounded-md shadow-white shadow-md" src="https://imgs.search.brave.com/SRh_APp8QHvncXNFlz4c3UVYbMsCl4lfJ8lnQdw7Kls/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/dGVtcGxhdGUvMjAy/MjEyMDkvb3VybWlk/L3BuZ3RyZWUtcmVn/aXN0ZXItbm93LWlt/YWdlXzE5MjI1NjUu/anBn" alt="noimage" ></img>
    
                </div>    
                    
                    <div  className=" border   items-center sm:h-fit sm:w-fit rounded-md  shadow-white shadow-md  md:h-full lg:h-fit md:w-[20rem] relative md:top-4 border-white gap-2 flex flex-col m-3 mt-5 pt-3  ">
                            
                        <h2 className="text-center text-2xl font-bold text-white   "> Signup </h2>
                        <div className="m-2 ml-3 pb-2 flex flex-col gap-2  pl-2 pr-2  w-full   " >
                        <section className = {"flex  flex-col gap-3 m-2 "}>
                                    
                                    <h3 className="text-white text-xl " >Name </h3>
                                    <input name="name" value={signupdetails.name} onChange={handlesignup} className="ml-4 placeholder:p-3 focus:outline-none rounded-md  text-white  bg-transparent border-b-2 " type={"text"} placeholder={"Enter Name"}></input>
                                </section>
                            <section className = {"flex  flex-col gap-3 m-2 "}>
                                    
                                <h3 className="text-white text-xl " >Email </h3>
                                <input name="email" value={signupdetails.email} onChange={handlesignup}  className="ml-4 placeholder:p-3 focus:outline-none rounded-md  text-white  bg-transparent border-b-2 " type={"text"} placeholder={"Enter Email"}></input>
                            </section>
                            <section className = "flex flex-col gap-3 m-2 " >
                                    
                                <h3 className="text-white text-xl" >Phone</h3>
                                <input name="phone" value={signupdetails.phone} onChange={handlesignup} className="ml-4 placeholder:p-3  rounded-md focus:outline-none text-white bg-transparent border-b-2  " type="text" placeholder="Enter Phone"></input>
                            </section>
                            <section className = {"flex  flex-col gap-3 m-2 "}>
                                    
                                <h3 className="text-white text-xl " >Password </h3>
                                <input  name="password" value={signupdetails.password} onChange={handlesignup} className=" placeholder:p-3 ml-4 focus:outline-none rounded-md  text-white  bg-transparent border-b-2 " type={"password"} placeholder={"Enter Password"}></input>
                            </section>
                                
                            <section className = " mt-4 border-white w-full flex gap-5  justify-center   " >
                                    
                                <button   className="border border-white w-[5rem]  p-1 bg-red-400 rounded-lg hover:shadow-md hover:shadow-white font-bold sm:w-[7rem] md:w-[10rem] text-center cursor-pointer   "   >Submit</button>
                                <span onClick={issignup} className=" text-center cursor-pointer border border-white w-[7rem] sm:w-[9rem] md:w-[12rem] bg-red-400 rounded-lg hover:shadow-md font-bold hover:shadow-white " >Login</span>
                            </section>
                        </div>
                    </div>
                </form>  
        </>
    );
};

export default Signup;