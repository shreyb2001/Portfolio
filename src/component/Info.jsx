import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Box = ({ text, link, btnText }) => (
  <div className=" relative bg-blue-500 p-4 pb-9 text-white rounded-2xl text-lg">
    {text}
    <a
      className="py-3 px-6 rounded-lg bg-white text-blue-500 text-center font-semibold sm:w-1/2 w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3"
      href={link}
    >
      {btnText}
      <ArrowRight />
    </a>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm: text-xl sm:leading-snug text-center rounded-2xl bg-blue-500 py-4 px-8 text-white mx-5 ">
      Hi , I am <span className="font-bold">Shrey</span>
      <br />
      An Engineering Student from India
    </h1>
  ),
  2: (
    <Box
      text={"Worked on many platforms and picked up many skills along the way."}
      link={"/about"}
      btnText={"Learn More"}
    />
  ),
  3: (
    <Box
      text={"My curiosity led to working on some cool projects."}
      link={"/portfolio"}
      btnText={"Visit my portfolio"}
    />
  ),
  4: (
    <Box
      text={
        "Looking for an enthusiastic intern ? I'm just a few keystrokes away."
      }
      link={"/contact"}
      btnText={"Contact Me"}
    />
  ),
};

const Info = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Info;
