import React from "react";
import { Volcano } from "./Volcano_island_lowpoly";
import { Plane } from "./Plane";
import { Bird } from "./Bird";
import { Sky } from "./Sky";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Experience = ({
  isDark,
  isRotating,
  currentStage,
  setCurrentStage,
  setIsRotating,
  setDark,
}) => {
  const map = useTexture("/Texture/9078.jpg");
  console.log(map);

  return (
    <>
      {isDark ? (
        <>
          <ambientLight intensity={0.1} />
          <pointLight intensity={12} position={[-0.5, 1, 4]} distance={10} />
          <mesh>
            <meshStandardMaterial map={map} side={THREE.BackSide} />
            <sphereGeometry args={[15, 64, 64]} />
          </mesh>
        </>
      ) : (
        <>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <directionalLight intensity={0.8} position={[-1, 2, 1]} />
          <hemisphereLight
            skyColor="#b1eff"
            groundColor={"#000000"}
            intensity={0.8}
          />
          <Sky scale={[0.05, 0.05, 0.05]} rotation={[0, Math.PI / 16, 0]} />
        </>
      )}
      <Volcano
        scale={[0.001, 0.0008, 0.001]}
        position={[-1, -3, -1]}
        rotation={[0, Math.PI / 3.5, 0]}
        receiveShadow
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        currentStage={currentStage}
        setCurrentStage={setCurrentStage}
      />
      <Plane
        position={[-4, 0, 3]}
        scale={[1.75, 1.75, 1.75]}
        rotation={[Math.PI / 64, Math.PI / 2, -Math.PI / 6]}
      />
      <Bird
        scale={[0.003, 0.003, 0.003]}
        position={[5, -5, -5]}
        rotation={[0, -Math.PI, 0]}
      />
    </>
  );
};

export default Experience;
