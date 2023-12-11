import { useState,useRef, Suspense } from "react"
import emailjs from "@emailjs/browser"
import { Canvas } from "@react-three/fiber"
import Fox from '../models/Fox'
import Loader from '../components/Loader'
import useAlert from "../Hook/useAlert"
import Alert from "../components/Alert"
const Contact = () => {
  const formRef=useRef(null)
  const[form,setform]=useState({name:'',email:'',message:''})
  const[isLoading,setisLoading]=useState(false)
  const[currentAnimation,setCurrentAnimation]=useState('idle')
  const{alert,showalert,hidealert}=useAlert()
  const handlechange=(e)=>{
    setform({...form,[e.target.name]: e.target.value})
  }
  const handlefocus=()=>setCurrentAnimation('walk')
  const handleblur=()=>setCurrentAnimation('idle')
  const handlesubmit=(e)=>{
    e.preventDefault()
    setisLoading(true)
    setCurrentAnimation('hit')
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name:form.name,
        to_name:'Manoj',
        from_email:form.email,
        to_email:'saimanoj14433@gmail.com',
        message:form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(()=>{
      setisLoading(false)
      showalert({show:true,text:'Thank You for your message😍!',type:'Success'})
      setTimeout(()=>{
        hidealert()
        setCurrentAnimation('idle')
        setform({name:'',email:'',message:''})
      },[3000])
    }).catch((error)=>{
      setisLoading(false)
      setCurrentAnimation('idle')
      console.error(error)
      showalert({show:true,text:"I didn't receive your message❌",type:'WARNG'})
    })

  }
  return (
    <section className="relative flex lg:flex-row flex-col max-container ">
      {alert.show && <Alert {...alert}/>}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form  className="flex flex-col gap-7 mt-14" onSubmit={handlesubmit}>
          <label className="text-black-500 font-semibold">
            Name
            <input className="input" type="text" name='name' placeholder="vicky" 
              required value={form.name} onChange={handlechange}
              onFocus={handlefocus} onBlur={handleblur}
              />
          </label>
           <label className="text-black-500 font-semibold">
            Email
            <input className="input" type="email" name='email' placeholder="vicky!12@gmail.com" 
              required value={form.email} onChange={handlechange}
              onFocus={handlefocus} onBlur={handleblur}
              />
          </label>
          
           <label className="text-black-500 font-semibold">
            Your Message
            <textarea  rows='4' className="textarea"  name='message' placeholder="Write Your thougths here..." 
              required value={form.message} onChange={handlechange}
              onFocus={handlefocus} onBlur={handleblur}
              />
          </label>
          <button type='submit' className="btn"  disabled = {isLoading} onFocus={handlefocus} onBlur={handleblur} >
            {isLoading?'Sending....':'Submit'}
          </button>

        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position:[0,0,5],
            fov:75,
            near:0.1,
            far:1000,
          }}
        >
          <ambientLight intensity={1}/>
          <directionalLight intensity={2.5} position={[0,0,1]}/>
          <Suspense fallback={<Loader/>}>
            <Fox position={[0.5,0.35,0]} rotation={[12.6,-0.6,0]} 
            scale={[0.5,0.5,0.5]} currentAnimation={currentAnimation}/>
          </Suspense>
        </Canvas>

      </div>

    </section>
  )
}
export default Contact