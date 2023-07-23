import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from "../Loader"

export const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={2.75} rotationIntensity={1} floatIntensity={1}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,2]}/>
      <mesh castShadow receiveShadow scale={2.75}>
    <icosahedronGeometry args={[1,1]}/>
    <meshStandardMaterial
    color="#C0C0C0"
    polygonOffset
    polygonOffsetFactor={-5}
    flatShading/>
    <Decal
    
    position={[0,0,1]}
    rotation={[2*Math.PI,0,6.25]}
    flatShading
    map={decal}/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas;  