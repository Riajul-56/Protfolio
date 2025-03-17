import React from "react";
import Flex from "./compoents/Flex";
import project_1 from "./assets/project_1.png";
import project_2 from "./assets/project_2.png";


const ProjectCard = () => {
  return (
    <Flex>
      <Flex className="bg-[#1A1A1A] w-[600px] h-[600px] items-center justify-center rounded-lg">
        <img
          src={project_1}
          className="w-[500px] h-[347px] rounded-xl border border-primary_bg"
        />
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
