import { useState } from "react"

const useAlert = () => {
    const[alert,setalert]=useState({show:false,text:'',type:'danger'})
    const showalert=({text,type='danger'})=>{
        setalert({show:true,text,type})
    }
    const hidealert=()=>{
        setalert({show:false,text:'',type:'danger'})
    }

  return {alert,showalert,hidealert}
   
  
}
export default useAlert