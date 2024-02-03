import React from "react";

interface Props {
  name: string;
  description?: string;
  image: string;
  key: string;
}

function ClassesImgCard({ name, description, image, key }: Props) {

  return ( 
    <li
      className="h-full relative flex justify-center items-center text-white text-center"
      key={key}
    >
      <div
        className="absolute opacity-0 hover:bg-primary-500 hover:opacity-[85%] w-full h-full flex flex-col justify-center items-center px-4 transition duration-300 ease-in-out"
      >
        <h2
          className="mb-4 font-bold"
        >
          {name}
        </h2>
        <p>
          {description}
        </p>
      </div>
      <div className="h-full w-[400px] rounded">
        <img src={image} alt={image} />
      </div>
    </li>
  )
}


export default ClassesImgCard;