// FormInput.js
import React from 'react';

const FormInput = ({ label, value, onChange }) => {
    return (
        <div className="flex-col justify-start items-start gap-1">
            <div className="text-xs font-normal text-stone-50">{label}</div>
            <input
                type="text"
                className="w-full h-11 px-2.5 py-1.5 bg-white border border-slate-300 rounded"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default FormInput;
