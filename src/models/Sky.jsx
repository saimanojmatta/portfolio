import { useGLTF } from "@react-three/drei"
import skyScenc from '../assets/3d/sky.glb'
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"


const Sky = ({isRotating}) => {
    const sky=useGLTF(skyScenc)
    const skyref=useRef()
    useFrame((_,delta)=>{
      if(isRotating){
        skyref.current.rotation.y+=0.25*delta
      }
    })
  return (
    <mesh ref={skyref}>
        <primitive object={sky.scene}/>

    </mesh>
  )
}
export default Sky