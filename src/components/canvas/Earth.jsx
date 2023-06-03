import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
const Earth = () => {
  const earth = useGLTF("./girl/scene.gltf");
  return (
    <mesh >
      <hemisphereLight intensity={1} />
      <spotLight
        position={[0, 15, 30]}
        angle={60}
        penumbra={0}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={earth.scene}
        scale={ 2}
        position={[0, -2, 1]}
        // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
    // <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0}/>
  )
}
const EarthCanvas = () => {
  // const [isMobile,setIsMobile] = useState(false);
  // useEffect(() => {
  //   // Add a listener for changes to the screen size
  //   const mediaQuery = window.matchMedia("(max-width: 500px)");

  //   // Set the initial value of the `isMobile` state variable
  //   setIsMobile(mediaQuery.matches);

  //   // Define a callback function to handle changes to the media query
  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches);
  //   };

  //   // Add the callback function as a listener for changes to the media query
  //   mediaQuery.addEventListener("change", handleMediaQueryChange);

  //   // Remove the listener when the component is unmounted
  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);

  return (
    <Canvas
    frameloop="demand"
    shadows
    camera={{ position: [-1, 3, 6], fov: 45,near:0.1,far:200 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
      <Earth />
    </Suspense>
    <Preload all />
  </Canvas>
  )
}

export default EarthCanvas;