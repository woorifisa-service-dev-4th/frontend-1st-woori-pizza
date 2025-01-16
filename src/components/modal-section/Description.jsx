import React from 'react';

const Description = ({ text, setText }) => {
    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                onChange={onChange}
                value={text}
                placeholder={"상세설명을 입력해주세요"}
            />
        </div>
    );
};

export default Description;
