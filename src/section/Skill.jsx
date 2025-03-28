import React from "react";
import Container from "../compoents/Container";
import Flex from "../compoents/Flex";
import SkillItem from "../compoents/SkillItem";

const Skill = () => {
  return (
    <section className="px-2 MyXl:px-0 mt-20 ">
      <div className="border-b border-[#484848] pb-20">
        <Container>
          <Flex className="justify-between">
            <div>
              <h2 className="font-primary_font font-normal text-[76px] text-heading_text leading-[100%] ">
                My Capabilities
              </h2>
            </div>
            <div className="max-w-[600px] ">
              <p className="font-secondary_font font-normal text-lg text-primary_text leading-[150%] mb-8 ">
                I am always looking to add more skills.Morbi egestas neque eu
                blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex
                at purus faucibus tristique ut et dolor.{" "}
              </p>
              <Flex className="flex-wrap gap-4 ">
                <SkillItem text={"HTML"} />
                <SkillItem text={"CSS"} />
                <SkillItem text={"React"} />
                <SkillItem text={"Figma"} />
                <SkillItem text={"Tailwind Css"} />
                <SkillItem text={"Bootstrap"} />
                <SkillItem text={"Javascript"} />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default Skill;
