import React from "react";
import Image from "next/image";

import Link from "next/link";

export const Projects = ({ ProjData }) => {
  return (
    <div id="project" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest text-[#5651e5] scroll-py-2">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {ProjData.map((item, index) => (
            <div key={index}>
              <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                <Image
                  className="rounded-xl group-hover:opacity-10 "
                  src={item.Image}
                  alt="kohsa"
                />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                  <h3 className="text-2xl tracking-wider text-center text-white ">
                    {item.Title}
                  </h3>
                  <p className="pt-2 pb-4 text-center text-white ">
                    {item.Stack}
                  </p>
                  <Link href={item.Url}>
                    <p className="py-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
                      More Info
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
