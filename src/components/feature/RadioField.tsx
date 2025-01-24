import { useState } from "react";

function RadioField() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLanguage(e.target.value);
  };
  const selectedText = () => {
    switch (selectedLanguage) {
      case "javascript":
        return "자바스크립트";
      case "python":
        return "파이썬";
      case "java":
        return "자바";
    }
  };
  return (
    <fieldset>
      <legend>좋아하는 프로그래밍 언어</legend>

      <div>
        <input
          type="radio"
          id="javascript"
          name="language"
          value="javascript"
          onChange={handleChange}
          checked={selectedLanguage === "javascript"}
        />
        <label htmlFor="javascript">자바스크립트</label>
      </div>

      <div>
        <input
          type="radio"
          id="python"
          name="language"
          value="python"
          onChange={handleChange}
          checked={selectedLanguage === "python"}
        />
        <label htmlFor="python">파이썬</label>
      </div>

      <div>
        <input
          type="radio"
          id="java"
          name="language"
          value="java"
          onChange={handleChange}
          checked={selectedLanguage === "java"}
        />
        <label htmlFor="java">자바</label>
      </div>
      <div>
        선택된 언어:
        <span> {selectedText()}</span>
      </div>
    </fieldset>
  );
}

export default RadioField;
