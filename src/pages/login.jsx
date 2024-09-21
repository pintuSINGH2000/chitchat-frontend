import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { data } from "autoprefixer";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";

function login() {
  const router = useRouter();
  const [{},dispatch] = useStateProvider();
   const handelLogin = async () => {
     const provider = new GoogleAuthProvider();
     const {user:{displayName:name,email,photoUrl:profileImage}} = await signInWithPopup(firebaseAuth,provider);
     try{
      console.log(email);
         if(email){
           const {data} = await axios.post(CHECK_USER_ROUTE,{email});
           console.log(data);
          if(!data.status){
            dispatch({type:reducerCases.SET_NEW_USER,newUser:true})
               dispatch({
                type:reducerCases.SET_USER_INFO,userInfo:{
                  name,email,profileImage,status:"",
                }
               })
               router.push("/onboarding");
          }
         }
     }catch(err){

     }
   }

  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image src="/chitchat1.png" alt="chitchat" height={300} width={400} className="growLogo"/>
        <span className="text-7xl">ChitChat</span>
      </div>
      <button className=" flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg" onClick={handelLogin}>
        <FcGoogle className="text-4xl"/>
        <span className="text-white text-2xl">Login with Google</span>
      </button>
    </div>
  );
}

export default login;
