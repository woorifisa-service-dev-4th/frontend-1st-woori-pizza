import React, { useState } from 'react';

const Description = () => {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                onChange={onChange}
                value={text}
                placeholder="상세설명을 적어주세요"
            />
        </div>
    );
};

export default Description;
