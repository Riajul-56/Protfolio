import React from "react";
import Container from "../compoents/Container";
import Flex from "../compoents/Flex";
import { GoDotFill } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const About = () => {
  return (
    <section className="mt-[122px] px-2 MyXl-px-0 ">
      <div className="border-b border-[#484848] sm:pb-[391px] pb-20">
        <Container>
          <Flex className="justify-between sm:flex-row flex-col gap-5 sm:gap-0">
            <div>
              <h2 className="font-primary_font font-normal sm:text-[101px] text-[50px] text-heading_text leading-[90%] ">
                About me
              </h2>
            </div>

            <div className="max-w-[704px]">
              <h3 className="font-secondary_font font-normal sm:text-[32px] text-[20px] text-heading_text leading-[140%] ">
                I Am a Front-End Developer. Has Computer Science and Engineering
                background.
              </h3>

              <p className="font-secondary_font font-normal sm:text-lg text-sm text-primary_text leading-[150%] mt-4 sm:mb-[53px] mb-10">
                I am a front-end developer,looking for exciting opportunities.
                Has Computer Science and Engineering background. Likes to focus
                on accessibility when developing. Passionate and curious about
                solving problems. Currently, I’m exploring Nodejs, MySQL and a
                bit of Designing. While I am not programming, I enjoy playing
                Cricket, Photography and playing PUBG. Learning more to improve
                skill.
              </p>

              <Flex className="items-center sm:gap-4 gap-2">
                <a
                  href="https://drive.google.com/file/d/1RgXjI80NB8X5E-Kli2cdJKIoq0Am3LLd/view"
                  className="bg-btn hover:bg-heading_text transition duration-150 py-[19px] pl-6 pr-4 rounded-3xl text-4 text-primary_bg font-bold leading-[100%] flex items-center gap-6"
                >
                  My Resume <GoDotFill />
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
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default About;
