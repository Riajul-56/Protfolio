import React from "react";
import Container from "../compoents/Container";
import Flex from "../compoents/Flex";

const Footer = () => {
  return (
    <section className="mt-20">
      <Container>
        <Flex>
          <div>
            <h2 className="font-primary_font font-normal text-[76px] text-heading_text leading-[100%] ">
              Let’s connect
            </h2>
            <p className="font-secondary_font font-normal text-[18px] text-primary_text">
              Say hello at{" "}
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                className="text-heading_text border-b border-link"
              >
                riajulhasansiam@gmail.com
              </a>
            </p>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Footer;
