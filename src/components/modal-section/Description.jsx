import React from "react";
const Description = ({ text, setText }) => {

    const onChange = (e) => {
        setText(e.target.value); // Update the description text
    };

    return (
        <div className="description-container">
            <textarea
                id="description"
                className="description-input"
                onChange={onChange}
                value={text}
                placeholder="상세설명을 입력하세요"
            />
        </div>
    );

};
export default Description;