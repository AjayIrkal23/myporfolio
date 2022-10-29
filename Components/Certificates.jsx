import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Link from "next/link";
import Image from "next/image";
import HCss from "../public/assests/HCss.png";
import HNode from "../public/assests/HNode.png";
import responsive from "../public/assests/responsive.png";
import Edureka from "../public/assests/edureka.png";
import jscert from "../public/assests/jscert.png";

export const Certificates = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div id="certificate" className="w-full p-2 pb-6 md:mb-[170px] lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest text-[#5651e5] uppercase py-4">
          Certifications
        </p>
        <h2 className="pb-16 capitalize">Certificates i Acquired</h2>

        <TabContext value={value}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            className="mb-6"
          >
            <TabList
              onChange={handleChange}
              centered
              variant="scrollable"
              scrollButtons={true}
              allowScrollButtonsMobile
            >
              <Tab class label="CSS" value="1" />
              <Tab label="NodeJs" value="2" />
              <Tab label="Responsive Web Design" value="3" />
              <Tab label="Edureka SuperIntern" value="4" />
              <Tab label="JS And DSA" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
              <Image
                className="rounded-xl group-hover:opacity-10 "
                src={HCss}
                alt="kohsa"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                <h3 className="text-2xl tracking-wider text-center text-white ">
                  Css Certificate
                </h3>
                <p className="pt-2 pb-4 text-center text-white ">Hacker Rank</p>
                <Link
                  href="https://www.hackerrank.com/certificates/3fa17938f88f"
                  target="_blank"
                >
                  <p className="py-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
                    Visit
                  </p>
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            {" "}
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
              <Image
                className="rounded-xl group-hover:opacity-10 "
                src={HNode}
                alt="kohsa"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                <h3 className="text-2xl tracking-wider text-center text-white ">
                  NodeJs Certificate
                </h3>
                <p className="pt-2 pb-4 text-center text-white ">Hacker Rank</p>
                <Link
                  href="https://www.hackerrank.com/certificates/0d5461004396"
                  target="_blank"
                >
                  <p className="py-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
                    Visit
                  </p>
                </Link>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="3">
            {" "}
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
              <Image
                className="rounded-xl group-hover:opacity-10 "
                src={responsive}
                alt="kohsa"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                <h3 className="text-2xl tracking-wider text-center text-white ">
                  Legacy Responsive WebDesign
                </h3>
                <p className="pt-2 pb-4 text-center text-white ">
                  FreeCodeCamp
                </p>
                <Link
                  href="https://www.freecodecamp.org/certification/AjayIrkal/responsive-web-design"
                  target="_blank"
                >
                  <p className="py-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
                    Visit
                  </p>
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="4">
            {" "}
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
              <Image
                className="rounded-xl group-hover:opacity-10 "
                src={Edureka}
                height="600px"
                alt="kohsa"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  ">
                <h3 className="text-2xl tracking-wider text-center text-white ">
                  Edureka Super Intern
                </h3>
                <p className="pt-2 pb-4 text-center text-white ">Edureka</p>
                <Link
                  target="blank"
                  href="https://www.edureka.co/lms/certificate/c91308ddbca3dd49cc29dd21314ea950"
                >
                  <p className="py-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
                    Visit
                  </p>
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="5">
            {" "}
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
              <Image
                className="rounded-xl group-hover:opacity-10 "
                src={jscert}
                alt="kohsa"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  ">
                <h3 className="text-2xl tracking-wider text-center text-white ">
                  JavaScript and DSA
                </h3>
                <p className="pt-2 pb-4 text-center text-white ">Edureka</p>
                <Link
                  target="blank"
                  href="https://www.freecodecamp.org/certification/AjayIrkal/javascript-algorithms-and-data-structures"
                >
                  <p className="py-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
                    Visit
                  </p>
                </Link>
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};
