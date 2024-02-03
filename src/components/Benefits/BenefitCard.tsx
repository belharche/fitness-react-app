import React from "react";
import { BenifitsType, SelectedPageEnum } from '../../shared/SelectedPageEnum';
import AnchorLink from "react-anchor-link-smooth-scroll";


function BenefitCard({ icon, title, paragraph, setSelectedPage}: BenifitsType) {

  return(
    <div className="border-solid text-center border-2 border-gray-200 px-8 py-12 rounded-md xs:mb-8">
      <div className="flex justify-center">
        <div className="bg-primary-100 p-2 rounded-full border-2 border-primary-300">
          {icon}
        </div>
      </div>
      <div className="font-bold my-3">
        {title}
      </div>
      <div className="text-sm">
        {paragraph}
      </div>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 cursor-pointer"
        href={`#${SelectedPageEnum.ContactUs}`}
        onClick={() => setSelectedPage(SelectedPageEnum.ContactUs)}
      >
        <p
          className="mt-3"
        >Learn More</p>
      </AnchorLink>
    </div>
  )
}


export default BenefitCard;