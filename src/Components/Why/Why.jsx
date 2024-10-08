import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import 'aos/dist/aos.css';
import Line from "../Line/Line";
import { HelmetProvider } from "react-helmet-async";
import Transition from "../Transition/Transition";
import { Link } from "react-router-dom";
function Why() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Why Choose Us</title>
        </Helmet>
      </HelmetProvider>
      <section className="2xl:max-w-[73rem] xl:max-w-[65rem] lg:max-w-[64rem]  heights 2xl:mt-36 xl:mt-32 mt-36    mx-auto  2xl:px-5 xl:px-14 lg:px-16 px-5 ">
        <div className="  ">
          <div className="">
            <p className="lg:text-5xl text-4xl  mb-5 text-green-950 z-50 lg:text-left text-center">Why Choose Us</p>
            <div className="space-y-6">
              <div className=" p-5  z-40  border  lg:grid lg:grid-cols-4      rounded-md bg-green-950  text-white  hover:shadow-lg hover:shadow-yellow-100 ">
                <div className="   flex justify-center items-center  lg:pb-0 pb-4 border-0   text-xl text-yellow-500">
                  Expertise & Experience
                </div>
                <div className="text-justify  col-span-3 z-40">
                  <div className="flex ">
                    <p className=" text-sm mt-1   z-40">
                      {" "}
                      Our consultants are industry veterans with a deep understanding of the latest technology trends and best practices.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" p-5  z-40  border  lg:grid lg:grid-cols-4      rounded-md bg-green-950  text-white  hover:shadow-lg hover:shadow-yellow-100 ">
                <div className="   flex justify-center items-center  lg:pb-0 pb-4   border-0   text-xl text-yellow-500">
                  Custom Centric Approach
                </div>
                <div className="text-justify  col-span-3 z-40">
                  <div className="flex ">
                    <p className="  text-sm  2xl:mt-1 xl:mt-5   z-40">
                      {" "}
                      We prioritize your business objectives and tailor our solutions to
                      meet your unique needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5  z-40  border  lg:grid lg:grid-cols-4      rounded-md bg-green-950  text-white  hover:shadow-lg hover:shadow-yellow-100 ">
                <div className="  z-50  flex justify-center items-center lg:pb-0 pb-4   border-0   text-xl text-yellow-500">
                  Proven Track Record
                </div>
                <div className="text-justify   col-span-3 z-40">
                  <div className="flex ">
                    <p className="  text-sm  mt-1    z-40">
                      {" "}
                      Our successful projects and satisfied clients speak volumes about
                      our commitment to excellence.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" p-5  z-40  border  lg:grid lg:grid-cols-4      rounded-md bg-green-950  text-white  hover:shadow-lg hover:shadow-yellow-100 ">
                <div className="  z-50  flex justify-center items-center  lg:pb-0 pb-4   border-0   text-xl text-yellow-500">
                  Cutting-Edge Technology
                </div>
                <div className="text-justify  col-span-3 z-40">
                  <div className="flex ">
                    <p className="  text-sm  mt-1   z-40">
                      {" "}
                      We leverage the latest tools and technologies to deliver solutions
                      that drive innovation and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Line />
    </>
  );
}
export default Transition(Why);
