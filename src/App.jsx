import { Canvas } from "@react-three/fiber";
import { Volcano } from "./component/Volcano_island_lowpoly";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import Loader from "./component/Loader";
import { Sky } from "./component/Sky";
import { Plane } from "./component/Plane";
import { Bird } from "./component/Bird";
import Info from "./component/Info";

function App() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);

  return (
    <section className="w-full h-screen relative">
      <div className="fixed top-16 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <Info currentStage={currentStage} />}
      </div>
      <Canvas
        className={`${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ fov: 35, near: 0.1, far: 1000, position: [0, 7, 22] }}
        shadows
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <directionalLight intensity={0.8} position={[-1, 2, 1]} />
          <hemisphereLight
            skyColor="#b1eff"
            groundColor={"#000000"}
            intensity={0.8}
          />

          <Sky scale={[0.05, 0.05, 0.05]} rotation={[0, Math.PI / 16, 0]} />
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
        </Suspense>
      </Canvas>
    </section>
  );
}

export default App;