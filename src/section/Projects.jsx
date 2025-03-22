import React from "react";
import Container from "../compoents/Container";
import ProjectCard from "../ProjectCard";
import project_1 from "../assets/project_1.png"
import project_2 from "../assets/project_2.png"


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

        <ProjectCard
          img={project_1}
          h3={"Exclusive a Complete E-Commerce Website"}
          text={
            "This is an e-commerce website featuring a responsive UI built with React and Tailwind CSS. It includes a category-based sidebar, a navigation bar, a search bar, and promotional banners. The homepage highlights discounts, product categories, and a user-friendly shopping experience with a clean, modern design."
          }
          year={2024}
          link_1={"https://exclusive-smoky.vercel.app/"}
          link_2={"https://github.com/Riajul-56/Exclusive"}
        />

        <ProjectCard
          img={project_2}
          h3={"Best NFTs Marketplace."}
          text={
            "This NFT marketplace landing page features a futuristic dark-themed UI with neon accents, bold typography, and 3D artwork. It includes a navigation bar, CTA buttons, and a hero section promoting NFT creation and trading. Built with React.js and Tailwind CSS, it ensures a modern, responsive, and engaging user experience."
          }
          year={2025}
          link_1={"https://nextgen-gules.vercel.app/"}
          link_2={"https://github.com/Riajul-56/NextGen"}
        />
      </Container>
    </section>
  );
};

export default Projects;
