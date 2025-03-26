import React from "react";
import Container from "../compoents/Container";
import Flex from "../compoents/Flex";
import dp from "../assets/DP.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { ReactTyped } from "react-typed";



const Banner = () => {
  return (
    <section className="px-2 MyXl-px-0 sm:mt-[30px] mt-10">
      <div className="border-b border-[#484848] pb-20">
        <Container>
          <Flex className="items-center sm:gap-40 gap-[64px] flex-col sm:flex-row">
            <div>
              <h1 className="text-heading_text font-primary_font font-normal sm:text-[101px] sm:w-[544px] leading-[90%] text-[57px]">
                hi, i am <br />{" "}
                <ReactTyped
                  strings={["Riajul Hasan"]}
                  typeSpeed={80}
                  backSpeed={80}
                  loop
                >
                  <input type="text" className="sm:w-[544px] w-full" />
                </ReactTyped>
              </h1>

              <p className="font-secondary_font font-normal sm:text-lg text-[16px] text-primary_text leading-[150%] sm:max-w-[544px] mt-[6px] mb-[40px]">
                A front-end developer passionate about building accessible and
                user friendly websites.
              </p>

              <Flex className="items-center sm:gap-4 gap-2">
                <a
                  href=""
                  className="bg-btn hover:bg-heading_text transition duration-150 py-[19px] pl-6 pr-4 rounded-3xl text-4 text-primary_bg font-bold leading-[100%] flex items-center gap-6"
                >
                  CONTACT ME <GoDotFill />
                </a>

                <a
                  href="https://www.linkedin.com/in/riajul-hasan112/"
                  className="flex bg-[#222222] hover:bg-btn rounded-full text-btn hover:text-primary_bg transition duration-250 gap-4 p-4"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://github.com/Riajul-56"
                  className="flex bg-[#222222] hover:bg-btn rounded-full text-btn hover:text-primary_bg transition duration-250 gap-4 p-4"
                >
                  <FaGithub />
                </a>
              </Flex>
            </div>

            <div className="order-1 sm:order-0">
              <img
                src={dp}
                className="sm:h-[650px] h-[500px] w-[380px] sm:w-[500px] rounded-2xl"
              />
            </div>
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
