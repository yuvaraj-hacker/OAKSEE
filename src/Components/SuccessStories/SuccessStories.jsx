import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import '../SuccessStories/SuccessStories.css'

import 'aos/dist/aos.css';
import Line from "../Line/Line";
import { HelmetProvider } from "react-helmet-async";

import Transition from "../Transition/Transition";

function SuccessStories() {

 
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>success Stories</title>
      </Helmet>
      <div  className="flex flex-wrap lg:mt-32  top  md:gap-5 sm:gap-3 justify-center items-center  media   about " >
        <div >
          <p className="text-5xl text-green-950 ml-2 lg:mb-20">Success Stories</p>
          <img   className="lg:w-[500px] lg:h-[500px]  sized" src='/Images/successs.jpg' alt='success' />
        </div>
        <div    className=" lg:mt-8 success">
          <div className=" ">
            <div className="flex z-50  " >

              <div className="p-2  ">
                <div className="flex  flex-wrap gap-1 mb-2 mt-1  client ">
                  <p className=" text-yellow-600 lg:text-xl font-medium ">Client A:</p>
                  <p className="text-green-950 lg:text-xl font-medium">Digital Transformation</p>

                </div>

                <p className="text-green-950 text-justify    ">
                  Oaksee LLC transfomed cient A's operations by implementing a comprehensive digital strategy, resulting in a 30% increase in efficiency and a 20% reduction in costs. </p>
              </div>
            </div>
            <div className="flex mt-5 z-50 ">

              <div className="p-2">
                <div className="flex  flex-wrap gap-1  mb-2  client">
                  <p className=" text-yellow-600  lg:text-xl  font-medium">Client B:</p>
                  <p className="text-green-950  lg:text-xl  font-medium">Cybersecurity Enhancement </p>

                </div>

                <p className="text-green-950  text-justify ">
                  We helped a client B fortify their cybersecurity defenses, reducing the risk of data breaches and ensuring compliance with industry regulations. </p>
              </div>
            </div>
            <div className="flex mt-5 z-50 ">

              <div className="p-2 ">
                <div className="flex  flex-wrap gap-1 mb-2  client">
                  <p className=" text-yellow-600  lg:text-xl  font-medium">Client C:</p>
                  <p className="text-green-950  lg:text-xl  font-medium">Cloud Migration</p>

                </div>

                <p className="text-green-950 text-justify ">
                  By migrating client C's systems to the cloud, we improved their scalability and flexibility, enabling them to expand their services globally. </p>
              </div>
            </div>
            <div className="flex mt-5 z-50 ">

              <div className="p-2">
                <div className="flex flex-wrap gap-1 mb-2  client">
                  <p className=" text-yellow-600  lg:text-xl  font-medium">Client D:</p>
                  <p className="text-green-950  lg:text-xl  font-medium">Manpower Supply</p>

                </div>

                <p className="text-green-950 text-justify   ">
                  We provided client D with a team of highly skilled IT professionals for a major project, resulting in timely completion and exceeding client expectations. </p>
              </div>
            </div>

          </div>
         
        </div>
      
      </div>
      </HelmetProvider>
    
      <Line/>
    </>
  );
}

export default Transition(SuccessStories);

