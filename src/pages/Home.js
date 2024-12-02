import React from "react";
import OurStories from "./Stories";
import CounterSection from "./Counters";
import Header from "./Header";

const Home = () => {
  return (

    <div>
         
      <div className="relative bg-black min-h-screen text-white">
        {/* Background Section */}
        <div
          className="relative flex items-center justify-center bg-cover bg-center min-h-screen"
          style={{
            backgroundImage: `url('./Hero Image.png')`,
          }}
        >
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Bottom Button */}
        <div className="absolute bottom-6 w-full flex justify-center">
          <button className="bg-transparent text-white border border-gray-200 px-4 py-2  hover:bg-white hover:text-black ">

            Test Drive
          </button>
        </div>
      </div>

      <section className="bg-black bg-opacity-90 text-white min-h-screen flex justify-center items-center">
        <div className="w-full max-w-4xl">
          {/* Image and Text Section */}
          <div className="relative">
            {/* Background Image */}
            <img
              src="./Features 2.1 video.png"
              alt="Car Interior"
              className="w-full h-auto object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute top-6 left-6">
              <h1 className="text-4xl ">Air X</h1>
            </div>
          </div>

          {/* Subheading */}
          <div className="mt-6 ">
            <h2 className="text-xl font-semibold">Accelerate into a New Era</h2>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row items-center bg-black bg-opacity-90 text-white min-h-screen">
        {/* Text Content */}
        <div className="lg:w-1/2 px-8 lg:px-24 ">
          <h1 className="text-4xl lg:text-6xl font-semibold mb-8">Lexo Z</h1>
          <h2 className="text-xl lg:text-2xl mb-8">
            Accelerate into a New Era
          </h2>
          <p className="text-gray-400 mb-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip.
          </p>
          <p className="text-gray-400 mb-8 text-lg">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat.
          </p>
          {/* Buttons */}
          <div className="flex space-x-4 text-lg">
            <button className="bg-white text-black px-6 py-3   hover:bg-gray-300">
              Order Now
            </button>
            <button className="text-white px-6 py-3  rounded hover:bg-gray-700">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src="./Features 2.2 Image.png"
            alt="Car"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="relative min-h-screen">
  {/* Image Section */}
  <div className="absolute inset-0">
    <img
      src="./Features 2.3 Img.png"
      alt="Car"
      className="object-cover mt-10 w-full h-full"
    />
  </div>

  {/* Overlay for Gradient Effect (optional) */}
  <div className="absolute inset-0 bg-transparent"></div>

  {/* Text Content */}
  <div className="relative flex flex-col items-center justify-center lg:items-start lg:justify-start lg:flex-row min-h-screen text-black px-8  lg:px-24">
    <div className="lg:w-1/2 text-center  mt-10 lg:text-left z-10">
      <h1 className="text-4xl lg:text-6xl  mt-10  mb-4">Air X</h1>
      <h2 className="text-xl lg:text-3xl font-semibold mt-10 mb-10">
        Accelerate into a New Era
      </h2>
      <p className="mb-4 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor. <br/>Lorem ipsum dolor sit amet.
      </p>
 
      {/* Buttons */}
      <div className="flex space-x-4 text-lg mt-8 justify-center lg:justify-start">
        <button className="bg-black text-2xl text-white px-6 py-3  hover:bg-gray-800">
          Order Now
        </button>
        <button className="text-black text-2xl border border-white px-6 py-3  hover:bg-gray-700">
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>



          
    <div className="flex flex-col lg:flex-row items-center bg-black text-white min-h-screen">

          {/* Image Section */}
      <div className="lg:w-1/2">
        <img
          src="./Model-X-Specs-Hero-Desktop-LHD 1.png"
          alt="Car"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Content */}
      <div className="lg:w-1/2 px-8 lg:px-16 py-10">
        <h2 className="text-xl lg:text-2xl mb-6">Model Air X Specifications</h2>
        <p className="text-gray-400 mb-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <p className="text-gray-400 mb-8 text-lg">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
        {/* Buttons */}
        <div className="flex space-x-4 text-lg">
          <button className="bg-white text-black px-6 py-3 font-semibold rounded hover:bg-gray-300">
            Order Now
          </button>
          <button className="text-white border border-white px-6 py-3 font-semibold rounded hover:bg-gray-700">
            Learn More
          </button>
        </div>
      </div>



    
    </div>

    <CounterSection/>  


    <div className="bg-black ">
        <div className="max-w-7xl bg-black m-auto pb-12">
          <section className="py-10">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* First Div */}
                <div className="bg-black p-6 rounded-lg shadow-md">
                  <img
                    src="./Design Img.png"
                    className="w-full h-full bg-black"
                    alt="above section"
                  />
                  <h3 className="text-xl font-semibold text-center mt-2 text-white">
                    Impeccable Design
                  </h3>
                </div>

                {/* Second Div */}
                <div className="bg-black p-6 rounded-lg shadow-md">
                  <img
                    src="./Performance Img.png"
                    className="w-full h-full bg-black"
                    alt="above section"
                  />
                  <h3 className="text-xl font-semibold text-center mt-2 text-white">
                    Elevated Performance{" "}
                  </h3>
                </div>

                {/* Third Div */}
                <div className="bg-black p-6 rounded-lg shadow-md">
                  <img
                    src="./Interiors Img.png"
                    className="w-full h-full bg-black"
                    alt="above section"
                  />
                  <h3 className="text-xl font-semibold text-center mt-2 text-white">
                    Great interiors{" "}
                  </h3>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-0 h-fit">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
                {/* First Div */}
                <div className="bg-black p-6 rounded-lg shadow-md">
                  <img
                    src="./Sustainable img.png"
                    className="w-full bg-black"
                    alt="above section"
                  />
                </div>

                {/* Second Div */}
                <div className="bg-black p-6 rounded-lg shadow-md mt-6">
                  <img
                    src="./Air X img.png"
                    className="w-full h-1/2  bg-black mt-auto"
                    alt="above section"
                  />
                  <h3 className="text-2xl  py-5 text-white">
                    Drive to a sustainable future{" "}
                  </h3>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt uteiusmod tempor incididunt
                    ut sed do eiusmod tempor incididunt uteiusmod tempor
                    incididunt ut Lorem
                  </p>
                </div>
              </div>
            </div>
          </section>
          <img
            src="./Image showcase.png"
            className="w-full h-full bg-black mt-10"
            alt="below section"
          />
        </div>
      </div>



    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('../Air X Ad (1).png')` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent">
        <div className="flex flex-col justify-center h-full text-white pl-12 md:pl-20">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4">Air X</h1>
          <p className="text-xl md:text-2xl mb-8">Accelerate into a New Era</p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-black font-semibold  hover:bg-gray-200">
              Order Now
            </button>
            <button className="px-6 py-3 bg-transparent  text-white font-semibold rounded-md hover:bg-white hover:text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>

    <OurStories/>
    


    </div>
  );
};

export default Home;
