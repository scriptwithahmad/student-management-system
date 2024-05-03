import React from "react";

const Input = ({ type, inputText, register, className }) => {
  return (
    <>
      <label className="custom-field one">
        {type === "textarea" ? ( // Check if type is textarea
          <textarea
            rows={5}
            {...register}
            placeholder="Enter Message"
            className={`${className} text-gray-500 bg-[#f8fafc] focus:bg-[#f3f4f6] h-full w-full text-sm rounded-2xl p-4 focus:outline-none focus:text-gray-700`}
          ></textarea>
        ) : (
          // Render input for other types
          <input
            type={type}
            {...register}
            placeholder=""
            className={`${className} w-full text-gray-500 focus:text-gray-700`}
          />
        )}
        <span className="placeholder">{inputText}</span>
      </label>
    </>
  );
};

export default Input;
