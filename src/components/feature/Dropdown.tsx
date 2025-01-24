import { useEffect, useRef, useState } from "react";

function Dropdown() {
  const OPTIONS = [
    {
      id: 1,
      value: "옵션1",
    },
    {
      id: 2,
      value: "옵션2",
    },
    {
      id: 3,
      value: "옵션3",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("선택하세요");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-[105px]">
      <button
        className=" w-[105px] py-2 px-4 border border-amber-400 bg-amber-300 font-bold rounded-lg"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedOption}
      </button>
      {isOpen && (
        <ul className="absolute left-0 top-[48px] w-[105px]">
          {OPTIONS.map((option) => (
            <li
              className="py-2 px-4 bg-amber-200 first:rounded-t-lg last:rounded-b-lg hover:bg-sky-300"
              key={option.id}
              onClick={() => setSelectedOption(option.value)}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
