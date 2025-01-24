import { useState } from "react";

function Checkbox() {
  const [checks, setChecks] = useState([false, false, false]);
  const handleAllChecked = () => {
    const allValue = !checks[0];
    setChecks([allValue, allValue, allValue]);
  };
  const handleCheck = (index: number) => {
    setChecks((prev) => {
      return prev.map((check, i) => {
        if (i === index) {
          return !check;
        }
        return check;
      });
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <button className="bg-amber-600 py-2 px-4 font-bold text-white max-w-max rounded-lg" onClick={handleAllChecked}>
        전체선택
      </button>
      {checks.map((check, i) => (
        <div className="flex items-center gap-2" key={i}>
          <input type="checkbox" checked={check} onChange={() => handleCheck(i)} />
          <label>체크박스 {i + 1}</label>
        </div>
      ))}
    </div>
  );
}

export default Checkbox;
