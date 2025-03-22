import React from "react";
import Container from "../compoents/Container";
import Flex from "../compoents/Flex";

const About = () => {
  return (
    <section className="mt-[122px] ">
      <div className="border-b border-[#484848] pb-[391px]">
        <Container>
          <Flex className="justify-between">
            <div>
              <h2 className="font-primary_font font-normal text-[101px] text-heading_text leading-[90%] ">
                About me
              </h2>
            </div>

            <div className="w-[704px]">
              <h3 className="font-secondary_font font-normal text-[32px] text-heading_text leading-[140%] ">
                I am a front-end developer based in Sydney. Has Mechanical
                Engineering background.
              </h3>
              <p className="font-secondary_font font-normal text-lg text-primary_text leading-[150%] mt-4 mb-[53px]">
                Successfully crafted an engaging product page featuring a
                dynamic lightbox gallery and seamless cart functionality,
                showcasing proficiency in JavaScript development.
              </p>
              <a
                href=""
                className="font-secondary_font font-bold text-[16px] text-link border-b  border-link "
              >
                MORE ABOUT ME
              </a>
            </div>
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default About;
