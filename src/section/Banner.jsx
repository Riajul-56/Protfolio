import React from "react";
import Container from "../compoents/Container";
import Flex from "../compoents/Flex";
import dp from "../assets/DP.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Banner = () => {
  return (
    <section className="px-2 MyXl-px-0 ]">
      <div className="border-b border-[#484848] pb-20">
        <Container>
          <Flex className="items-center sm:gap-40 gap-20 flex-col sm:flex-row">
            <div className="order-1 sm:order-0">
              <h1 className="text-heading_text font-primary_font font-normal sm:text-[101px] max-w-[544px] leading-[90%] text-center sm:text-left text-[50px]">
                hi, i am <br /> Riajul Hasan.
              </h1>

              <p className="font-secondary_font font-normal text-[18px] text-primary_text leading-[150%] sm:max-w-[544px]  mt-[6px] mb-[40px] text-center sm:text-left">
                A front-end developer passionate about building accessible and
                user friendly websites.
              </p>

              <Flex className="items-center sm:gap-4 gap-2 justify-center">
                <a
                  href=""
                  className="bg-btn py-[19px] pl-6 pr-4 rounded-3xl text-4 text-primary_bg font-bold leading-[100%] flex items-center gap-6 "
                >
                  CONTACT ME <GoDotFill />
                </a>

                <a
                  href="https://www.linkedin.com/in/riajul-hasan112/"
                  className="flex bg-[#222222] rounded-full text-btn gap-4 p-4"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://github.com/Riajul-56"
                  className="flex bg-[#222222] rounded-full text-btn gap-4 p-4"
                >
                  <FaGithub />
                </a>
              </Flex>
            </div>

            <div>
              <img
                src={dp}
                className="sm:h-[650px] h-[500px] w-[400px] sm:w-[500px] rounded-xl"
              />
            </div>
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
