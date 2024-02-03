import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPageEnum } from './SelectedPageEnum.ts';

interface Props {
  childern: React.ReactNode;
  setSelectedPage: (value: SelectedPageEnum) => void;
}

function ActionBtn({ childern, setSelectedPage }: Props) {

  return(
    <AnchorLink
      className="px-10 py-2 rounded-md bg-secondary-500 hover:bg-primary-500 transition ease-in-out duration-300 hover:text-white"
      href="#contactus"
      onClick={() => setSelectedPage(SelectedPageEnum.ContactUs)}
    >
      {childern}
    </AnchorLink>
  )
}

export default ActionBtn;