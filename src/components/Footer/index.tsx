import { motion } from "framer-motion";
import React from "react";
import Logo from "../../assets/Logo.png";


function Footer() {

  return(
    <footer
      className="mt-28 flex justify-center py-15 bg-primary-100"
    >
      <motion.div
        className="md:flex mx-[10%] gap-4 md:justify-between py-10"
      >
        <div className="md:w-1/4">
          <img src={Logo} alt="Evolve Text" />
          <p className="text-[14px] my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure labore cupiditate nihil a? Non molestiae quidem tempore itaque asperiores.
          </p>
          <p className="text-[14px]">&copy;Evogym All Rights Reserved.</p>
        </div>
        <div className="md:w-1/4">
          <h2 className="font-bold">Links</h2>
          <ul>
            <li className="mt-4 text-[14px]">Lorem ipsum</li>
            <li className="mt-4 text-[14px]">Consectetur adipisicing</li>
            <li className="mt-4 text-[14px]">Iure labore</li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h2 className="font-bold">Contact Us</h2>
          <ul>
            <li className="mt-4 text-[14px]">Lorem ipsum consectetur.</li>
            <li className="mt-4 text-[14px]">+212 000000000</li>
          </ul>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer;