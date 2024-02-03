import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '../../assets/Logo.png';
import Link from "./Link";
import useMediaQuery from '../../hooks/useMediaQuery.ts';
import ActionBtn from "../../shared/ActionBtn.tsx";
import SelectedPageEnum from "../../shared/SelectedPageEnum.ts";


interface Props {
  isTopPage: boolean;
  selectedPage: SelectedPageEnum;
  setSelectedPage: (value: SelectedPageEnum) => void;
}

function Navbar({ isTopPage, selectedPage, setSelectedPage}: Props) {

  const flexBetween = "flex items-center justify-between";
  const isAboveMediumeScreens = useMediaQuery("(min-width: 1060px)");

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const navBarBg = ( isTopPage ? "" : "bg-primary-100 drop-shadow");

  return(
    <nav >
      <div className={`${navBarBg} ${flexBetween} w-full py-6 z-30 fixed`}>

        <div className={`${flexBetween} mx-auto w-5/6 gap-16`}>
          {/* <img src="" alt="logo" /> */}
          <img src={Logo} alt="logo" />

          {isAboveMediumeScreens ? (
            <div className={`${flexBetween} w-full`}>

              <ul className={`${flexBetween} gap-8 text-sm`}>
                <li>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} />
                </li>

                <li>
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} />
                </li>

                <li>
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} />
                </li>

                <li>
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} />
                </li>
              </ul>

              <div className={`${flexBetween} gap-8`}>
                <button>Sign In</button>
                <ActionBtn
                  childern="Become a Member"
                  setSelectedPage={setSelectedPage}
                />
              </div>
              
            {/* Mobile header version */}
            </div>) : (
              <button className="rounded-full bg-secondary-500 p-2 hover:bg-primary-500 transition ease-in-out duration-300"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white"/>
              </button>
            )}
        </div>

      </div>

      {/* Mobile Menue Slider */}


      {!isAboveMediumeScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">

          {/* Close Icon */}

          <div className="p-12 flex justify-end">
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon className="h-6 w-6 text-gray-400"/>
            </button>
          </div>

         {/* Menu Icons */}

          <ul className="flex flex-col ml-[33%] gap-10 text-2xl">
            <li>
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
            </li>

            <li>
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
            </li>

            <li>
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
            </li>

            <li>
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
            </li>
          </ul>

        </div>
      )}
    </nav>
  )
}

export default Navbar;

