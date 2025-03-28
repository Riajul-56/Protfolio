import React from "react";

const SkillItem = ({ text }) => {
  return (
    <div>
      <p className="font-secondary_font font-bold text-[14px] sm:text-[16px] text-heading_text uppercase border border-[#484848] sm:py-5 px-6 py-4 sm:px-10 rounded-[100px] hover:bg-[#484848] hover:border-primary_text transition duration-300">
        {text}
      </p>
    </div>
  );
};

export default SkillItem;
