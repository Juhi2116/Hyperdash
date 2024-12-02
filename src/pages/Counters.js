import React, { useEffect, useState } from "react";

const CounterSection = () => {
  const counters = [
    { id: 1, title: "Max Power", value: 1200, suffix: "+ hp" },
    { id: 2, title: "EPA estimated range up to", value: 516, suffix: " mi" },
    { id: 3, title: "minutes to charge 200 miles", value: 12, suffix: " mins" },
    { id: 4, title: "0-60 mph", value: 2, suffix: " sec", prefix: "<" },
  ];

  const [currentValues, setCurrentValues] = useState(
    counters.map(() => 0) // Initializing all counters to 0
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValues((prevValues) =>
        prevValues.map((value, index) =>
          value < counters[index].value ? value + 1 : value
        )
      );
    }, 30); // Animation speed
    return () => clearInterval(interval); // Cleanup interval
  }, [counters]);

  return (
    <div className="bg-black bg-opacity-90 text-white  py-24 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 py-12 gap-8 text-center">
        {counters.map((counter, index) => (
          <div key={counter.id} className="flex flex-col items-center">
            <h3 className="text-sm text-white mb-16 ">
              {counter.title}
            </h3>
            <p className="text-5xl ">
              {counter.prefix}
              {currentValues[index]}
              {counter.suffix}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
