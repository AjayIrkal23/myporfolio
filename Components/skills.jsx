import React from "react";
import Image from "next/image";

export const Skills = ({ data }) => {
  return (
    <div id="skills" className="w-full p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest text-[#5651e5] uppercase py-4">
          Skills
        </p>
        <h2 className="capitalize">What do i do</h2>
        <div className="grid gap-8 py-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map((skill) => (
            <>
              <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
                <div className="grid items-center justify-center grid-cols-2 gap-4">
                  <div className="m-auto">
                    <Image src={skill.Image} width="64px" height="64px" />
                  </div>
                  <div className="flex flex-col items-center justify-center ">
                    <h3>{skill.Title}</h3>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
