import React from "react";
import Container from "../compoents/Container";
import ProjectCard from "../ProjectCard";
import Flex from "../compoents/Flex";

const Projects = () => {
  return (
    <section className="mt-20 pb-20 px-2 MyXl:px-0">
      <Container>
        <div>
          <h2 className="text-heading_text font-primary_font font-normal text-[76px] leading-[100%]">
            Featured Projects
          </h2>
          <p className="text-primary_text text-[18px] font-normal font-secondary_font leading-[150%] max-w-[600px] mt-3">
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>

        <Flex className="gap-12 items-center">
          <ProjectCard />
          <div>
            <h3 className="font-secondary_font font-medium text-heading_text text-[32px] leading-[140%] max-w-[576px]">
              Promotional landing page for our favorite show
            </h3>
            <p className="font-secondary_font font-normal text-primary_text text-[18px] leading-[150%] max-w-[576px] mt-4 mb-8">
              Teamed up with a designer to breathe life into a promotional
              webpage for our beloved show, Adventure Time. Delivered a fully
              responsive design with dynamic content capabilities, seamlessly
              integrating a newsletter feature to keep fans updated with the
              latest adventures.
            </p>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Projects;
