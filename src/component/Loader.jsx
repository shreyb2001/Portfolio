import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="flex items-center justify-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-teal-300 border-t-teal-900 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
