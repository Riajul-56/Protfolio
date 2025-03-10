import React from "react";
import Container from "../compoents/Container";
import Flex from "../compoents/Flex";
import profile from "../assets/profile.png"

const Banner = () => {
  return (
    <section>
      <Container>
        <Flex className="items-center gap-20">
          <div>
            <h1 className="text-heading_text font-primary_font font-normal text-[101px] w-[544px] leading-[90%]">
              hi, i am <br /> Riajul Hasan.
            </h1>
            <p className="font-secondary_font font-normal text-[18px] text-primary_text leading-[150%] w-[544px] mt-[6px] mb-[40px]">
              A Sydney based front-end developer passionate about building
              accessible and user friendly websites.
            </p>
            <a
              href=""
              className="bg-btn py-[19px] pl-6 pr-[60px] rounded-3xl text-4 text-primary_bg font-bold leading-[100%] "
            >
              CONTACT ME
            </a>
          </div>
          <div>
            <img src={profile} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
