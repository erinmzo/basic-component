import { useState } from "react";

function Toggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="relative bg-amber-500 h-[20px] py-4 w-[70px] rounded-lg text-white font-bold flex items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span
          className={`block bg-white w-3 h-3 rounded-full mx-2 transition-transform duration-300 ${
            isOpen ? "translate-x-10" : ""
          }`}
        ></span>
        <span className={`absolute ${isOpen ? "left-3" : "right-3"}`}>{isOpen ? "ON" : "OFF"}</span>
      </button>
    </div>
  );
}

export default Toggle;
