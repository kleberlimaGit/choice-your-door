import { useState } from "react";

interface NumberInputProps {
    value: number;
    onChange: (newValue: number) => void;
}

export default function NumberInput(props: NumberInputProps) {
    const [value, setValue] = useState(props.value);
    
    const updateValue = (newValue: number) => {
        if (newValue > 0) {
            setValue(newValue);
            props.onChange(newValue);
        }
    };


    return (
        <div className="flex text-black flex-col items-center justify-center">
            <span className="text-2xl text-gray-700 font-sans">Nº de Portas</span>
            <div className="flex">
                <button onClick={() => updateValue(value - 1)} className="bg-blue-500 text-white p-2 rounded-md text-3xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>

                </button>
                <span className="text-5xl font-sans mx-2">{value}</span>
                <button onClick={() => updateValue(value + 1)} className="bg-blue-500 text-white p-2 rounded-md text-3xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                </button>
            </div>
        </div>
    )
}