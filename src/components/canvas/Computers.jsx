import { Suspense,useEffect,useState } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {

  const computer=useGLTF('./desktop_pc/scene.gltf')



  return (
   <mesh>
    <hemisphereLight intensity={0.4}
    groundColor="black"/>
    <pointLight intensity={0.2}/>
    <spotLight
    position={[-20,50,10]}
    angle={0.11}
    penumbra={1}
    intensity={0.9}
    castShadow
    shadow-mapsize={1024}/>
    <primitive 
    scale={isMobile ? 0.5:0.75}
    position={isMobile ?[0,-2.5,-0.9]:[0,-3.25,-1.3]}
    rotation={[-0.01,-0.2,-0.1]}
    object={computer.scene}/>
   </mesh>
  )
}

const ComputersCanvas=()=>{
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{

    const mediaQuery=window.matchMedia('(max-width:500px)');


    // set the initial value"ismobile" state variable
    setIsMobile(mediaQuery.matches);


    //define a call back function to handle changes to the media query
    const handleMediaQuerychanges=(event)=>{
      setIsMobile(event.matches)
    }

    //add the call back funtion as a listener for changes to the media query
    mediaQuery.addEventListener('change',handleMediaQuerychanges);
 
    //remove the listener when the componenet is umounted
    return()=>{
      mediaQuery.removeEventListener('change',handleMediaQuerychanges);
    }
  },[])
  
  return(
    <Canvas
    frameloop='demand'
    shadows
    camera={{position:[20,3,5],fov:25}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        min={Math.PI/2}/>
   <Computers isMobile={isMobile}/>
      </Suspense>
 
<Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;