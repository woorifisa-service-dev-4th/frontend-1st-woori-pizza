import React from "react";

export const Description = ({ text, setText }) => {
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="description-container">
      <textarea
        id="description"
        type="text"
        className="description-input"
        onChange={onChange}
        value={text}
        placeholder="상세설명을 입력하세요"
      />
    </div>
  );
};

export default Description;
