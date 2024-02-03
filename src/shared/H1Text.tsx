import React from "react";

interface Props {
  children: React.ReactNode;
}

function H1Text({ children }: Props) {

  return(
    <h1
      className="font-bold text-4xl"
    >
      {children}
    </h1>
  )
}


export default H1Text;