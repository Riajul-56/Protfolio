import React from "react";
import Container from "../compoents/Container";
import Flex from "../compoents/Flex";


const Skill = () => {
  return (
    <section className="px-2 MyXl:px-0">
      <Container>
        <Flex className="justify-between items-center">
          <div>
            <h2 className="font-primary_font font-normal text-[76px] text-heading_text leading-[100%] ">
              My Capabilities
            </h2>
          </div>
          <div className="max-w-[600px] ">
            <p className="font-secondary_font font-normal text-[18px] text-primary_text leading-[150%]  ">
              I am always looking to add more skills.Morbi egestas neque eu
              blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
              purus faucibus tristique ut et dolor.{" "}
            </p>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Skill;
