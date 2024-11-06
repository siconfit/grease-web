"use client";
import { useState } from "react";
const DATA = [
  {
    image:
      "https://images.pexels.com/photos/5632407/pexels-photo-5632407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/7987750/pexels-photo-7987750.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    image:
      "https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function Carousel() {
  const [imagePosition, setImagePosition] = useState(0);

  const moveRight = () => {
    setImagePosition((prevPosition) => (prevPosition + 1) % DATA.length);
  };

  const moveLeft = () => {
    setImagePosition(
      (prevPosition) => (prevPosition - 1 + DATA.length) % DATA.length,
    );
  };

  return (
    <div className="mx-auto my-8 flex h-96 max-w-6xl justify-between bg-gray-800">
      <div className="flex items-center bg-green-200 px-4">
        <button
          className="rounded-full bg-gray-500 p-2"
          onClick={() => moveLeft()}
        >
          <div>{"<"}</div>
        </button>
      </div>
      <img
        src={DATA[imagePosition].image}
        alt="Promociones Grease"
        className="inset-0 h-full w-auto overflow-hidden rounded-md bg-gray-600 object-cover"
      />
      <div className="flex items-center bg-green-200 px-4">
        <button
          className="rounded-full bg-gray-500 p-2"
          onClick={() => moveRight()}
        >
          <div>{">"}</div>
        </button>
      </div>
    </div>
  );
}
