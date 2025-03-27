import React, { useState } from "react";
import Container from "../compoents/Container";
import Flex from "../compoents/Flex";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

let menu = [
  {
    name: "Work",
    link: "/",
  },
  {
    name: "About",
    link: "/About",
  },
  {
    name: "Contact",
    link: "/Contact",
  },
];

const Navbar = () => {
  const [navShow, setNavShow] = useState(false);
  const handleNav = () => {
    setNavShow(!navShow);
  };
  return (
    <section className="py-6 px-2 MyXl:px-0">
      <Container>
        <Flex className="justify-between items-center">
          <div>
            <h5 className="font-primary_font font-normal text-[32px] text-primary_text ">
              Riajul Hasan
            </h5>
          </div>

          <div
            className="sm:hidden block text-3xl text-primary_text mr-2"
            onClick={handleNav}
          >
            {navShow ? <ImCross /> : <FaBars />}
          </div>

          {navShow && (
            <menu className="sm:hidden bg-link border border-primary_text absolute top-18 right-2 w-[45vw] h-[30vw] py-2 rounded-xl font-semibold  text-[#222222] text-center px-3">
              <ul>
                {menu.map((item, index) => (
                  <li className="mt-1 mr-2" key={item.name}>{item.name}</li>
                ))}
              </ul>
            </menu>
          )}

          <menu className="hidden sm:block">
            <ul className="flex gap-8 text-primary_text font-secondary_font font-medium text-[16px]">
              {menu.map((item, index) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </menu>
        </Flex>
      </Container>
    </section>
  );
};

export default Navbar;
