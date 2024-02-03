import React from "react";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import H1Text from "../../shared/H1Text";
import BenefitCard from './BenefitCard';
import { BenifitsType, SelectedPageEnum } from '../../shared/SelectedPageEnum';
import ActionBtn from "../../shared/ActionBtn";
import BenefitsPageGraphic from '../../assets/BenefitsPageGraphic.png';
import { motion } from "framer-motion";

interface Props {
  setSelectedPage: (value: SelectedPageEnum) => void;
}

function Benefits({ setSelectedPage }: Props) {

  const benefits: Array<BenifitsType> = [
    {
      icon: <HomeModernIcon className="w-6 " />,
      title: "State of the Art Facilities",
      paragraph: "Neque adipiscing amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque.",
      setSelectedPage: setSelectedPage
    },
    {
      icon: <UserGroupIcon className="w-6" />,
      title: "100's of Diverse Classes",
      paragraph: "Neque adipiscing amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque.",
      setSelectedPage: setSelectedPage
    },
    {
      icon: <AcademicCapIcon className="w-6" />,
      title: "Expert and Pro Trainers",
      paragraph: "Neque adipiscing amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque.",
      setSelectedPage: setSelectedPage
    }
  ];

  return(
    <section
      id="benefits"
      className="flex flex-col justify-center mx-auto min-h-full w-full py-10 "
    >
      <motion.div 
        className="w-5/8 mt-16 mx-[10%]"
        onViewportEnter={()=> setSelectedPage(SelectedPageEnum.Benefits)}  
      >
        {/* FIRST SECTION */}
        <div>
          <div className="md:w-7/12">
            <H1Text children="MORE THAN JUST A GYM" />
            <p
              className="mt-6 text-sm"
            >
              We provide world class fitness equipment, trainers and classes toget 
              you to your ultimate fitness goals with ease.We provide true care into each and every member.
            </p>
          </div>
          <div className="w-5/8 md:flex my-10 gap-8 justify-between items-center flex-shrink-0">
            {benefits.map(benefit => (
              <BenefitCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                paragraph={benefit.paragraph}
                setSelectedPage={setSelectedPage}
              />
              ))}
          </div>
        </div>

        {/* SECOND SECTION */}

        <div className="md:flex justify-cente">
          <div className="basis-4/5 mx-auto">
            <img
              className="md:pr-12"
              src={BenefitsPageGraphic} alt="Benefits Page Graphic"
            />
          </div>
          <div className="basis-4/5 flex flex-col justify-between">
            <div className="relative">
              <div className="before:absolute before:content-abstractwaves before:-top-20 before:-left-20 before:z-[]">
                <H1Text children={`MILLIONS OF HAPPY MEMBERS GETTINF FIT`} />
              </div>
            </div>
            <div>
              <p
                className="text-sm"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aut est ea? Necessitatibus laboriosam nulla modi reprehenderit ab natus 
              voluptatibus in accusamus, beatae voluptates suscipit magni ipsam sequi vel blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aut est ea? Necessitatibus laboriosam nulla modi reprehenderit ab natus
              voluptatibus in accusamus, beatae voluptates suscipit magni ipsam sequi vel blanditiis</p>
              <p
                className="text-sm mt-5"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aut est ea? Necessitatibus laboriosam nulla modi reprehenderit ab natus 
              voluptatibus in accusamus, beatae voluptates suscipit magni ipsam sequi vel blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aut est ea? Necessitatibus laboriosam nulla modi reprehenderit ab natus
              voluptatibus in accusamus, Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aut est ea? Necessitatibus laboriosam nulla modi beatae voluptates suscipit magni ipsam sequi vel blanditiis</p>
            </div>
            <div className=""> 
              <ActionBtn 
                childern="Join Now"
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        </div>

      </motion.div>

    </section>
  )
}


export default Benefits;