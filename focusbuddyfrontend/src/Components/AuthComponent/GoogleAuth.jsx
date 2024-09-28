import { FaGoogle } from "react-icons/fa";


export default function GoogleAuth(){
    
    function googleLogin(){
        window.open(`${import.meta.env.VITE_BACKEND_PRO_URL}/auth/google`, "_self");
      }
  
      
    return(
        <button className="max-w-md w-full flex gap-4 items-center justify-center text-md xl:text-lg p-3.5 mx-auto text-white bg-textcolor hover:bg-darkbrown rounded-lg text-center cursor-pointer" onClick={googleLogin}><FaGoogle/>Continue with Google</button>
    )
}