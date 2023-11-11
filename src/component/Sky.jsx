/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/sky.glb 
Author: Aliaksandr.melas (https://sketchfab.com/alexandr.melas)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/milky-way-skybox-hdri-panorama-b57711d6a450410ca612c4a36f08ce21
Title: Milky Way Skybox HDRI panorama
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Sky(props) {
  const sky = useGLTF("/models/sky.glb");
  return (
    <mesh {...props}>
      <primitive object={sky.scene} />
    </mesh>
  );
}

useGLTF.preload("/models/sky.glb");