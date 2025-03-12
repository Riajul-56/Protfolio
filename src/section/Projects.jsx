import React from "react";
import Container from "../compoents/Container";

const Projects = () => {
  return (
    <section className="mt-20 pb-20">
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
      </Container>
    </section>
  );
};

export default Projects;
