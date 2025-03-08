import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
function Card({ width, start, para, hover= false}) {
  return (
    <motion.div whileHover={{backgroundColor: hover=== true&& "#991B1B",padding:"25px"}}
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>one heading </h3>
          <FaArrowRightLong />
        </div>
        <h1 className="text-3xl font-medium mt-5">whatever heading ......</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start A project
            </h1>
            <button className="rounded-full px-5 mt-5 py-3 border-[1px] border-zinc-50 hover:bg-zinc-50 hover:text-zinc-800 transition">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-xl font-medium text-zinc-300 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;

