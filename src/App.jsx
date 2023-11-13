import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "./component/Loader";
import Info from "./component/Info";
import { LightbulbIcon, MoonIcon } from "lucide-react";
import Experience from "./component/Experience";

function App() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);
  const [isDark, setDark] = useState(false);

  return (
    <section className="w-full h-screen relative">
      <div className="fixed top-16 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <Info currentStage={currentStage} />}
      </div>
      <button
        onClick={() => setDark(!isDark)}
        className={`fixed bottom-8 right-8 z-10 flex items-center justify-center rounded-full border-none`}
      >
        {isDark ? (
          <LightbulbIcon className="border-none bg-white w-16 h-16 rounded-full p-4 fill-teal-950 text-teal-950 hover:bg-teal-500 hover:text-white hover:fill-white" />
        ) : (
          <MoonIcon className="border-none bg-white w-16 h-16 rounded-full p-4 hover:bg-teal-500 hover:text-white hover:fill-white fill-teal-950 text-teal-950" />
        )}
      </button>
      <Canvas
        className={`${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ fov: 35, near: 0.1, far: 1000, position: [0, 7, 22] }}
        shadows
      >
        <Suspense fallback={<Loader />}>
<<<<<<< HEAD
          <Experience
            isDark={isDark}
=======
          {isDark ? (
            <>
              <ambientLight intensity={0.1} />
              <pointLight
                intensity={12}
                position={[-0.5, 1, 4]}
                distance={10}
              />
              <color attach="background" args={["black"]} />
              />
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
>>>>>>> 887a102f924cf30f9c5813f130267c691e55677f
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            currentStage={currentStage}
            setDark={setDark}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default App;
