// AddButton.js
import React from 'react';

const AddButton = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            <div className="w-14 h-7 px-4 py-2 bg-green-800 rounded flex-col justify-start items-start gap-5 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <div className="text-stone-50 text-xs font-bold font-['Helvetica']">Add</div>
                </div>
            </div>
        </button>
    );
};

export default AddButton;
