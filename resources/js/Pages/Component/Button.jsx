import React from "react";

let status = {
    fill: "bg-green-500 text-white-500",
    outline: "bg-transparent border border-green-500 text-green-500",
};

export default function Button({ label, action = null, color }) {
    return (
        <button
            type="submit"
            className={`px-8 py-4 ${status[color]} flex items-center text-2xl`}
            onClick={action}
        >
            {label}
        </button>
    );
}
