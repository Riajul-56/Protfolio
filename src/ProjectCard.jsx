import React from "react";
import Flex from "./compoents/Flex";
import project_1 from "./assets/project_1.png";
import { ImArrowUpRight2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ text, h3 }) => {
  return (
    <Flex className="gap-12 items-center mt-20">
      <Flex className="bg-[#1A1A1A] w-[600px] h-[600px] items-center justify-center rounded-lg">
        <img
          src={project_1}
          className="w-[500px] h-[347px] rounded-xl border border-primary_bg"
        />
      </Flex>

      <div>
        <h3 className="font-secondary_font font-medium text-heading_text text-[32px] leading-[140%] max-w-[576px]">
          {h3}
        </h3>

        <p className="font-secondary_font font-normal text-primary_text text-[18px] leading-[150%] max-w-[576px] mt-4 mb-8">
          {text}
        </p>

        <div className="mb-4">
          <h4 className="font-secondary_font font-semibold text-[16px] leading-[150%] text-heading_text  ">
            PROJECT INFO
          </h4>
        </div>

        <Flex className="font-secondary_font font-medium text-[16px] leading-[150%] text-heading_text justify-between items-center border-y border-[#484848] py-4">
          <h4>Year</h4>
          <h5 className="text-primary_text">2023</h5>
        </Flex>

        <Flex className="font-secondary_font font-medium text-[16px] leading-[150%] text-heading_text justify-between items-center border-b border-[#484848] py-4">
          <h4>Role</h4>
          <h5 className="text-primary_text">Front-end Developer</h5>
        </Flex>

        <Flex className="mt-12 gap-6">
          <a
            href="https://exclusive-smoky.vercel.app/"
            className="font-secondary_font font-bold text-[16px] text-link flex items-center gap-1 border-b border-link"
          >
            LIVE DEMO <ImArrowUpRight2 />
          </a>
          <a
            href="https://github.com/Riajul-56/Exclusive"
            className="font-secondary_font font-bold text-[16px] text-link flex items-center gap-1 border-b border-link"
          >
            SEE ON GITHUB <FaGithub />
          </a>
        </Flex>
      </div>
    </Flex>
  );
};

export default ProjectCard;
