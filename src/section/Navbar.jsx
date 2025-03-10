import React from "react";
import Container from "../compoents/Container";
import Flex from "../compoents/Flex";

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
  return (
    <section className="py-6">
      <Container>
        <Flex className="justify-between text-center">
          <div>
            <h5 className="font-primary_font font-normal text-[32px] text-primary_text ">
              Riajul Hasan
            </h5>
          </div>
          <menu>
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
