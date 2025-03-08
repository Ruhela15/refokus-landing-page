import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import d2 from "../assets/d2.mp4";
import d1 from "../assets/d1.mp4";
import d3 from "../assets/d3.mp4";
import d4 from "../assets/d4.mp4";
import d5 from "../assets/d5.mp4";

function Products() {
  const products = [
    {
      title: "Endgame",
      description: "Sample description",
      live: true,
      case: false,
    },
    {
      title: "Shellhead",
      description: "Sample description",
      live: true,
      case: false,
    },
    {
      title: "War",
      description: "Sample description",
      live: true,
      case: true,
    },
    {
      title: "Fire!",
      description: "Sample description",
      live: true,
      case: false,
    },
    {
      title: "unix",
      description: "Sample description",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (index) => {
    setPos(index * 23); 
  };

  const transitionSettings = {
    ease: [0.76, 0, 0.24, 1],
    duration: .1,
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product
          key={index}
          val={val}
          mover={() => mover(index)}
          count={index}
        />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: `${pos}rem` }}
          transition={transitionSettings}
          className="window absolute w-[32rem] h-[23rem] left-[42%] bg-white overflow-hidden"
        >
          <motion.div
            animate={{ y: `-${pos}rem` }}
            transition={transitionSettings}
            className="w-full h-full"
          >
            <video
              className="w-full h-full object-cover"
              src={d1}
              autoPlay
              loop
              muted
            />
          </motion.div>
          <motion.div
            animate={{ y: `-${pos}rem` }}
            transition={transitionSettings}
            className="w-full h-full"
          >
            <video
              className="w-full h-full object-cover"
              src={d2}
              autoPlay
              loop
              muted
            />
          </motion.div>
          <motion.div
            animate={{ y: `-${pos}rem` }}
            transition={transitionSettings}
            className="w-full h-full "
          >
            <video
              className="w-full h-full object-cover"
              src={d3}
              autoPlay
              loop
              muted
            />
          </motion.div>
          <motion.div
            animate={{ y: `-${pos}rem` }}
            transition={transitionSettings}
            className="w-full h-full "
          >
            <video
              className="w-full h-full object-cover"
              src={d4}
              autoPlay
              loop
              muted
            />
          </motion.div>
          <motion.div
            animate={{ y: `-${pos}rem` }}
            transition={transitionSettings}
            className="w-full h-full "
          >
            {" "}
            <video
              className="w-full h-full object-cover"
              src={d5}
              autoPlay
              loop
              muted
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
