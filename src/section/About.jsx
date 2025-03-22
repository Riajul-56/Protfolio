import React from "react";
import Container from "../compoents/Container";
import Flex from "../compoents/Flex";

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
                solving problems. Currently, I’m exploring Nodejs, MySQL and
                a bit of Designing. While I am not programming, I enjoy playing
                Cricket, Photography and playing PUBG. Learning more to
                improve skill.
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
