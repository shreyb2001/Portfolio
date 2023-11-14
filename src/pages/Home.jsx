import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../component/Loader";
import Info from "../component/Info";
import {
  LightbulbIcon,
  MoonIcon,
  Volume1Icon,
  Volume2Icon,
} from "lucide-react";
import Experience from "../component/Experience";
import sakura from "../audio/sakura.mp3";

function Home() {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);
  const [isDark, setDark] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <section className="w-full h-screen relative">
      <div className="fixed top-16 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <Info currentStage={currentStage} />}
      </div>
      <div
        className={`fixed bottom-10 right-10 z-10 flex flex-row-reverse gap-6 items-center justify-center rounded-full border-none`}
      >
        <button onClick={() => setDark(!isDark)}>
          {isDark ? (
            <LightbulbIcon className="border-none bg-white w-16 h-16 rounded-full p-4 fill-teal-950 text-teal-950 hover:bg-teal-500 hover:text-white hover:fill-white" />
          ) : (
            <MoonIcon className="border-none bg-white w-16 h-16 rounded-full p-4 hover:bg-teal-500 hover:text-white hover:fill-white fill-teal-950 text-teal-950" />
          )}
        </button>
        <button onClick={() => setIsPlayingMusic(!isPlayingMusic)}>
          <Volume2Icon
            className={`border-none w-16 h-16 rounded-full p-4 ${
              isPlayingMusic
                ? "bg-teal-950 text-white fill-white"
                : "bg-white fill-teal-950 text-teal-950"
            }  hover:bg-teal-500 hover:text-white hover:fill-white`}
          />
        </button>
      </div>
      <Canvas
        className={`${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ fov: 35, near: 0.1, far: 1000, position: [0, 3, 20] }}
        shadows
        dpr={[1, window.devicePixelRatio]}
      >
        <Suspense fallback={<Loader />}>
          <Experience
            isDark={isDark}
            isRotating={isRotating}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
            setIsRotating={setIsRotating}
            setDark={setDark}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
