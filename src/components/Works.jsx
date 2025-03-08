import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
function Works() {
  const [images, setimages] = useState([
    {
      url: "https://wallpapercave.com/wp/wp3703396.jpg",
      top: "40%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://wallpapercave.com/wp/wp3703407.jpg",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://wallpapercave.com/wp/wp3703412.jpg",
      top: "45%",
      left: "59%",
      isActive: false,
    },
    {
      url: "https://wallpapercave.com/wp/wp3703427.jpg",
      top: "68%",
      left: "67%",
      isActive: false,
    },
    {
      url: "https://wallpapercave.com/wp/wp3703399.jpg",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://wallpapercave.com/wp/wp2519420.jpg",
      top: "90%",
      left: "50%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (data) => {
    function imageshow(arr) {
      setimages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
    switch (Math.floor(data * 100)) {
      case 0:
        imageshow([]);
        break;
      case 1:
        imageshow([0]);
        break;
      case 2:
        imageshow([0, 1]);

        break;
      case 3:
        imageshow([0, 1, 2,]);

        break;
      case 4:
        imageshow([0,1, 2, 3, ]);

        break;
      case 5:
        imageshow([0,1, 2, 3, 4, ]);

        break;
      case 6:
        imageshow([0,1, 2, 3, 4, 5, 6]);

        break;
    }
  });
  return (
    <div className="w-full mt-10">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[15vw] tracking-tight select-none">
          <span className="text-red-800">I</span>RON-MAN
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map((elem, index) =>
            elem.isActive ? (
              <img
                key={index}
                className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                src={elem.url}
                alt={`Image ${index + 1}`}
                style={{ top: elem.top, left: elem.left }}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default Works;
