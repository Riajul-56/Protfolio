import React from "react";

const SkillItem = ({ text }) => {
  return (
    <div>
      <p className="font-secondary_font font-bold text-[16px] text-heading_text uppercase border border-[#484848] py-5 px-10 rounded-[100px] hover:bg-[#484848] hover:border-primary_text transition duration-200">
        {text}
      </p>
    </div>
  );
};

export default SkillItem;
