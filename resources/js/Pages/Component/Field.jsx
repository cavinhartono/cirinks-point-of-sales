import React from "react";

export default function Field({ placeholder, className = null}) {
  return <input
                            className={`w-full border border-gray-300 ${className}`}
                            placeholder={placeholder}
                        />;
}