import React from "react";
import HomePageText from '../../assets/HomePageText.png';
import HomePageGraphic from '../../assets/HomePageGraphic.png';
import ActionBtn from "../../shared/ActionBtn";
import { SelectedPageEnum } from "../../shared/SelectedPageEnum.ts";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from 'framer-motion';

interface Props {
  setSelectedPage: (value: SelectedPageEnum) => void;
}

function Home({ setSelectedPage }: Props) {

  return(
    <section
      id="home"
      className="gap-16 bg-gray-20 py-20 md:h-full md:pb-0"
    >
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0}
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="Home Page Text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Amet inventore vero ratione itaque nulla sapiente, ipsa dolorum, 
              minus iste, accusamus fuga veniam vitae dolores quas unde ullam quaerat 
              recusandae voluptatum.</p>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay: 0.2, duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0}
            }}
          >
            <ActionBtn
              childern="join now"
              setSelectedPage={setSelectedPage}
            />
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPageEnum.ContactUs)}
              href={`#${SelectedPageEnum.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
        <img src={HomePageGraphic} alt="Home Page Graphic"/>
        </div>
      </div>

    </section>
  )
}


export default Home;