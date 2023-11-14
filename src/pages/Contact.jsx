import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import Loader from "../component/Loader";
import { Html, OrbitControls, Plane, Sky, Sparkles } from "@react-three/drei";
import { Monk } from "../component/Monk";
import * as THREE from "three";
import ContactForm from "../component/contactForm";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section className="flex gap-5 justify-center items-center h-screen w-full bg-black">
      <ContactForm loading={loading} setLoading={setLoading} />
      <Canvas
        shadows
        camera={{ position: [0, 0.5, 2.5], fov: 50 }}
        dpr={(1, window.devicePixelRatio)}
        className="w-[50%] flex items-center justify-center"
      >
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          enableZoom={false}
          enableDamping
        />
        <Suspense fallback={<Loader />}>
          <Sparkles count={1000} scale={4} />
          <color attach={"background"} args={["black"]} />

          <ambientLight intensity={2} />
          <directionalLight
            position={[-5, 5, 5]}
            castShadow
            shadow-mapSize={1024}
            intensity={3}
          />
          <group position={[0, -1, 0]}>
            <Monk loading={loading} />
          </group>
          <mesh
            rotation={[-0.5 * Math.PI, 0, 0]}
            position={[0, -1, 0]}
            receiveShadow
          >
            <planeGeometry args={[10, 10, 1, 1]} />
            <shadowMaterial transparent color={"white"} opacity={0.4} />
          </mesh>
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Contact;
