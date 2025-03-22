import React from "react";
import Container from "../compoents/Container";
import Flex from "../compoents/Flex";

const About = () => {
  return (
    <section>
      <Container>
        <Flex>
          <div>
            <h2 className="font-primary_font font-normal text-[101px] text-heading_text leading-[90%] ">
              About me
            </h2>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
