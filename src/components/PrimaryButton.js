import React from 'react'

const PrimaryButton = ({ text, edit, add,  green}) => {
    return (
        <div
            className={
                green
                    ? " bg-buttonGreen rounded-full py-2   flex gap-2 justify-center items-center text-white  px-2 "
                    : "rounded-full py-2  px-2 bg-white flex justify-center border-2 border-black items-center text-black"
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

            {add && (
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
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            )}
            <p> {text}</p>
        </div>
    );
}

export default PrimaryButton
