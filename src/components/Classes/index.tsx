import React from "react";
import H1Text from "../../shared/H1Text";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { motion } from "framer-motion";
import { SelectedPageEnum, ClassesType } from "../../shared/SelectedPageEnum.ts";
import ClassesImgCard from "./ClassesImgCard.tsx";

interface Props {
  setSelectedPage: (value: SelectedPageEnum) => void;
}

function Classes({ setSelectedPage }: Props) {

  const classes: Array<ClassesType> = [
    {
      name: "Weight Training Classes",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magni quia beatae unde excepturi. Consequatur rerum fugiat explicabo officiis sapiente.`,
      image: image1
    },
    {
      name: "Weight Training Classes",
      description: "",
      image: image2
    },
    {
      name: "Weight Training Classes",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magni quia beatae unde excepturi. Consequatur rerum fugiat explicabo officiis sapiente.`,
      image: image3
    },
    {
      name: "Weight Training Classes",
      description: "",
      image: image4
    },
    {
      name: "Weight Training Classes",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magni quia beatae unde excepturi. Consequatur rerum fugiat explicabo officiis sapiente.`,
      image: image5
    },
    {
      name: "Weight Training Classes",
      description: "",
      image: image6
    },
  ]

  return(
    <section
      id="ourclasses"
      className="mx-auto w-full py-20 bg-primary-100"
    >

      <motion.div
        className="w-5/6 mx-[10%]"
        onViewportEnter={()=> setSelectedPage(SelectedPageEnum.OurClasses)}  
      >
        <div className="md:w-4/6 my-8">
          <H1Text
            children="OUR CLASSES"
          />
          <p className="mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quia beatae unde excepturi. Consequatur rerum fugiat explicabo officiis sapiente 
            sunt odit reiciendis laborum, recusandae, modi adipisci esse blanditiis perferendis nisi.
          </p>
        </div>
        <ul className="flex gap-6 mt-16 h-[300px] overflow-x-scroll overflow-y-hidden">

          {
            classes.map((classe, index) =>(
              <ClassesImgCard
                key={`${classe.name}-${index}`}
                name={classe.name}
                description={classe.description}
                image={classe.image}
              />
            ))
          }

        </ul>
      </motion.div>

    </section>
  )
}


export default Classes;