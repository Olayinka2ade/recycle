import React from 'react'

const PrimaryButton = ({ text, edit, green}) => {
    return (
        <div
            className={
                green
                    ? " bg-buttonGreen rounded-full py-2   flex gap-2 justify-center items-center text-white  px-4 "
                    : "rounded-full py-2  px-3 bg-white flex justify-center border-2 border-black items-center text-black"
            }
        >
            {edit && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                </svg>
            )}
            <p> {text}</p>
        </div>
    );
}

export default PrimaryButton
