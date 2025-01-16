import React from "react";
const Description = ({ text, setText }) => {

    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="description-container">
            <textarea
                className="h-full w-full p-2 bg-gray-200 text-gray-900 border-2 border-black rounded-lg outline-none shadow-none"
                id="description"
                onChange={onChange}
                value={text}
                placeholder="상세설명을 입력하세요"
            />
        </div>
    );

};
export default Description;