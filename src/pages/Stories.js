import React from "react";

const OurStories = () => {
  const stories = [
    { id: 1, image: "./Story 2 Img.png", title: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, image: "./Story 2 Img.png", title: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 3, image: "./Story 2 Img.png", title: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 4, image: "./Story 2 Img.png", title: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Stories</h2>
      <div className="relative">
        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {stories.map((story) => (
            <div key={story.id} className=" rounded-lg overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-sm text-white">{story.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
          <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600">
            &larr;
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
          <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurStories;
