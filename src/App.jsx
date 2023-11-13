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
          <Experience
            isDark={isDark}
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
