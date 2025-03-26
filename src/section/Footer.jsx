import React from "react";
import Container from "../compoents/Container";
import Flex from "../compoents/Flex";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="mt-20 mb-20 px-2 MyXl:px-0">
      <Container>
        <Flex className="justify-between sm:flex-row flex-col gap-[64px] sm:gap-0">
          <div>
            <h2 className="font-primary_font font-normal text-[76px] text-heading_text leading-[100%] ">
              Let’s connect
            </h2>

            <p className="font-secondary_font font-normal text-[18px] text-primary_text mt-4">
              Say hello at{" "}
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                className="text-heading_text hover:text-link border-b border-link hover:border-heading_text transition duration-200"
              >
                riajulhasansiam@gmail.com
              </a>
            </p>

            <p className="font-secondary_font font-normal text-[18px] text-primary_text mt-2">
              For more info, here’s my{" "}
              <a
                href="https://drive.google.com/file/d/1RgXjI80NB8X5E-Kli2cdJKIoq0Am3LLd/view"
                className="text-heading_text hover:text-link border-b border-link hover:border-heading_text transition duration-200"
              >
                resume
              </a>
            </p>

            <a className="text-link gap-6 text-2xl mt-10 flex">
              <FaLinkedinIn />
              <AiFillGithub />
              <BsTwitterX />
              <FaInstagram />
            </a>
          </div>

          <div>
            <form className="sm:w-[600px] w-full">
              <div className="mb-6">
                <label className="block text-primary_text text-[16px] font-secondary_font font-normal mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-[#1A1A1A] py-[12px] rounded-[4px] text-heading_text text-[18px] font-secondary_font font-normal"
                />
              </div>

              <div className="mb-4">
                <label className="block text-primary_text text-[16px] font-secondary_font font-normal mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-[#1A1A1A] py-[12px] rounded-[4px] text-heading_text text-[18px] font-secondary_font font-normal"
                />
              </div>

              <div className="mb-4">
                <label className="block text-primary_text text-[16px] font-secondary_font font-normal mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-[#1A1A1A] py-[12px] rounded-[4px] text-heading_text text-[18px] font-secondary_font font-normal"
                />
              </div>

              <div>
                <label className="block text-primary_text text-[16px] font-secondary_font font-normal mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-[#1A1A1A] py-[12px] rounded-[4px] text-heading_text text-[18px] font-secondary_font font-normal"
                ></textarea>
              </div>
            </form>

            <button
              type="submit"
              className="text-primary_bg text-[16px] font-secondary_font font-bold bg-link rounded-[100px] py-[19px] px-[40px] mt-10"
            >
              SUBMIT
            </button>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Footer;
