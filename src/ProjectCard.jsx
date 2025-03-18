import React from "react";
import Flex from "./compoents/Flex";
import project_1 from "./assets/project_1.png";

const ProjectCard = ({text,h3}) => {
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
      </div>


    </Flex>
  );
};

export default ProjectCard;
