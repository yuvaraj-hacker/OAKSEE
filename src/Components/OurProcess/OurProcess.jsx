import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import Line from '../Line/Line';
import { HelmetProvider } from 'react-helmet-async';
import Transition from '../Transition/Transition';
import { Link } from 'react-router-dom';
function OurProcess() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Our Process</title>
        </Helmet>
        <section className="2xl:max-w-[75rem] xl:max-w-[65rem] lg:max-w-[66rem]  mx-auto  2xl:px-5 xl:px-14 lg:px-16 px-5 ">
          <div className="grid grid-cols-1   ">
            <div className="">
              <p className="text-5xl  text-green-950 z-50  ml-5">Our Process</p>
              <div className='lg:grid lg:grid-cols-6  '>
                <img className=" col-span-3  " src='/Images/process.jpg' alt='ourprocess' />
                <div className='col-span-3 flex justify-center items-center' >
                  <div className=''>
                    <div className="flex ">
                      <p className="text-8xl p-2 font-semibold text-gray-200">1</p>
                      <div className="p-5 mx-4">
                        <p className=" text-yellow-600 text-xl ">Discovery & Analysis</p>
                        <p className="text-green-950">We start by understanding your business needs, challenges, and goals. </p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="text-8xl p-1  font-semibold text-gray-200">2</p>
                      <div className="p-5">
                        <p className=" text-yellow-600  text-xl">Strategy Development </p>
                        <p className="text-green-950">We create a customized IT strategy that aligns with your objectives. </p>
                      </div>
                    </div>
                    <div className="flex">
                      <p className="text-8xl p-1 mt-2 font-semibold text-gray-200">3</p>
                      <div className="p-5">
                        <p className=" text-yellow-600  text-xl">Implementation</p>
                        <p className="text-green-950">We deploy the right solutions, ensuring a smooth transition with minimal disruption. </p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="text-8xl mt-2  font-semibold text-gray-200">4</p>
                      <div className="p-5">
                        <p className=" text-yellow-600  text-xl">Support & Maintenance</p>
                        <p className="text-green-950">We provide ongoing support to keep your IT infrastructure running smoothly and efficiently. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="  2xl:max-w-[80rem] xl:max-w-[60rem]  md:max-w-[55rem] mx-auto px-5 lg:text-lg text-sm 2xl:mt-[7.7rem] my-4 " >
          <div className=" grid grid-cols-1 text-center ">
            <div className="">
              <span className="text-green-950">Copyright © 2024 All Right Reserved by</span>
              <Link to='/'> <span className="text-yellow-700">OAKSEE. </span></Link>
              <span>
                Website Designed By <a href="http://arrowthought.com/" target="_blank"><span className="underline">Arrow Thought.</span></a>
              </span>
            </div>
          </div>
        </section>
      </HelmetProvider>
      <Line />
    </>
  )
}
export default Transition(OurProcess);