import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SelectedPageEnum from "../../shared/SelectedPageEnum.ts";

interface Props {
  page: string;
  selectedPage: SelectedPageEnum;
  setSelectedPage: (value: SelectedPageEnum) => void;
}

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCaseVersion = page.toLowerCase().replace(/\s/g, '') as SelectedPageEnum;
  return(
    <AnchorLink
      className={`hover:text-primary-300
        transition ease-linear duration-200
        font-bold cursor-pointer
        ${selectedPage === lowerCaseVersion && "text-primary-500"}`}
      href={`#${lowerCaseVersion}`}
      onClick={() => setSelectedPage(lowerCaseVersion)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link;