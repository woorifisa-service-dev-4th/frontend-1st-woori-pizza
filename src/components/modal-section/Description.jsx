import React, { useState } from "react";

const Description = ({ text, setText, url, setURL }) => {
    const [showInput, setShowInput] = useState(false);

    const handleTextChange = (e) => {
        setText(e.target.value); // Update description text
    };

    const handleURLChange = (e) => {
        setURL(e.target.value); // Update URL
    };

    const handleAddClick = () => {
        setShowInput(true); // Show input field
    };

    const handleCancel = () => {
        setShowInput(false); // Hide input field
        setURL(""); // Clear URL input
    };

    return (
        <div className="relative flex flex-col w-[93%] h-[76%] max-w-[300px] mx-auto pt-[5%] gap-4">
            <textarea
                className="h-full w-full p-2 bg-gray-200 text-gray-900 border-2 border-black rounded-lg outline-none shadow-none"
                id="description"
                onChange={handleTextChange}
                value={text}
                placeholder="상세설명을 입력하세요"
            />
            {url || showInput ? (
                <div className="relative">
                    <textarea
                        className="w-full p-2 bg-gray-200 text-gray-900 border-2 border-black rounded-lg outline-none shadow-none"
                        value={url}
                        onChange={handleURLChange}
                        placeholder={`git:\nnotion:\nblog:`} // Multi-line placeholder
                    />
                    <button
                        onClick={handleCancel}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                    >
                        -
                    </button>
                </div>
            ) : (
                <button
                    onClick={handleAddClick}
                    className="w-24 h-8 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600"
                >
                    + URL 추가
                </button>
            )}
        </div>
    );
};

export default Description;
