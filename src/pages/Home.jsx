import { Canvas } from "@react-three/fiber"
import { Suspense,useEffect,useRef,useState} from "react"
import Loader from "../components/Loader"
import Island from '../models/island'
import Sky from "../models/Sky"
import Bird from "../models/Bird"
import Plane from "../models/Plane"
import Homeinfo from "../components/Homeinfo"
import sakura from '../assets/sakura.mp3'

import { soundoff,soundon } from "../assets/icons"
const Home = () => {
  const audioRef = useRef(new Audio(sakura))
  
  audioRef.current.volume=0.4
  audioRef.current.loop= true 
  
  const[isRotating,setisRotating]=useState(false)
  const[CurrentStage,setCurrentStage]=useState(1)
  const [isplayingmusic,setisplayingmusic]=useState(false)
  useEffect(()=>{
    if(isplayingmusic){
      audioRef.current.play() 
    }
    return()=>{
      audioRef.current.pause()
    }

  },[isplayingmusic])
  const adjustIslandforScreenSize=()=>{
    let screenScale,screenPosition
   
    if(window.innerWidth < 768){
      screenScale=[0.9,0.9,0.9]
      screenPosition=[0,-6.5,-43.4]
    }else{
      screenScale=[1,1,1]
      screenPosition=[0,-6.5,-43.4]
    }
    return [screenScale,screenPosition]
  }
 const adjustPlaneforScreenSize=()=>{
    let screenScale,screenPosition
   
    if(window.innerWidth < 768){
      screenScale=[1.5,1.5,1.5]
      screenPosition=[0,-1.5,0]
    }else{
      screenScale=[3,3,3]
      screenPosition=[0,-4,-4]
    }
    return [screenScale,screenPosition]
  }
  const [planeScale,planePosition]=adjustPlaneforScreenSize()
  const [islandScale,islandPosition]=adjustIslandforScreenSize()
  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-28 left-0  right-0 z-10 flex items-center justify-center'>
        {CurrentStage && <Homeinfo CurrentStage={CurrentStage}/>}
      </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating?'cursor-grabbing':'cursor-grab'}`}
       camera={{near:0.1,far:1000}}>
        <Suspense fallback={<Loader/>}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <pointLight position={[10,5,10]} intensity={2}/>
          <spotLight position={[0,50,10]} angle={0.15} penumbra={1} intensity={2} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />
          <Sky isRotating={isRotating}/>
          <Bird/>
          <Island
             position={islandPosition}
             scale={islandScale}
             rotation={[0.1,4.7077,0]}
             isRotating={isRotating}
             setisRotating={setisRotating}
             setCurrentStage={setCurrentStage}
          /> 
          <Plane
             isRotating={isRotating}
             scale={planeScale}
             position={planePosition}
             rotation={[0,20.1,0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img src={!isplayingmusic? soundoff:soundon} alt="sounds" className="w-10 h-10 cursor-pointer object-contain"  
        onClick={()=>setisplayingmusic(!isplayingmusic)}/>
      </div>
    </section>
  )
}
export default Home
