import React from "react";

export default function iconTemplate({d,styles}) {
  return (
    <svg
      className={`h-6 w-6 ${styles} `}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={d}
      />
    </svg>
  );
}
