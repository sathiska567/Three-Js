import React, { useRef } from 'react';
import * as THREE from 'three'; // Importing Three.js library

import { useFrame, useLoader } from '@react-three/fiber'; // Importing hooks from @react-three/fiber
import { TextureLoader } from 'three'; // Importing TextureLoader from Three.js
import { OrbitControls, Stars } from '@react-three/drei'; // Importing OrbitControls and Stars from @react-three/drei
import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg'; // Importing texture images
import EarthCloudsMap from '../../assets/textures/8k_earth_clouds.jpg';
import EarthNightMap from '../../assets/textures/8k_earth_nightmap.jpg';
import EarthNormalMap from '../../assets/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg';

export default function Earth(props) {
  // Loading textures using TextureLoader from Three.js
  const [colorMap, normalMap, specularMap, nightMap, cloudsMap] = useLoader(TextureLoader, [
    EarthDayMap,
    EarthNormalMap,
    EarthSpecularMap,
    EarthSpecularMap, // You have EarthSpecularMap twice, might be a typo
    EarthNightMap,
    EarthCloudsMap,
  ]);

  const earthRef = useRef(); // Creating a reference for the mesh

  // Using useFrame hook to perform animation on each frame
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime(); // Getting the elapsed time
    earthRef.current.rotation.y = elapsedTime / 2; // Rotating the earth mesh based on elapsed time
  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}

      {/* Creating a point light */}
      <pointLight color="#f6f3ea" position={[1, 0, 4]} intensity={10.5} />

      {/* Creating a starry background */}
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />

      {/* Creating a mesh for clouds */}
      <mesh>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Creating a mesh for the earth */}
      <mesh ref={earthRef} position={[0, 0, 1]}>
        <sphereGeometry args={[1, 32, 32]} /> {/* Setting the geometry of the sphere */}
        {/* Applying materials to the earth mesh */}
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7} />
        {/* Adding OrbitControls for interactive rotation */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}
