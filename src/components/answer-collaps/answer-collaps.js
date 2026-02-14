"use client";

import {useState} from "react";
import {ChevronDown} from "lucide-react";

export default function AnswerCollaps({
                                          title,
                                          defaultOpen = false,
                                          children,
                                      }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-gray-200 rounded-xl shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="
    flex items-center justify-between
    w-full px-5 py-4
    text-right
    bg-gray-50 hover:bg-gray-100
    transition-colors
    border border-gray-300 rounded-lg
  "
                type="button"
            >
                <span className="text-lg md:text-xl font-medium text-gray-800">
    {title}
  </span>

                <ChevronDown
                    className={`
      w-6 h-6 md:w-7 md:h-7 text-gray-600 flex-shrink-0
      transition-transform duration-300
      ${isOpen ? "rotate-180" : "rotate-0"}
    `}
                />
            </button>

            <div
                className={`
    overflow-hidden transition-all duration-300 ease-in-out
    ${isOpen ? "max-h-[1200px] opacity-100 pt-2" : "max-h-0 opacity-0"}
  `}
            >
                <div className="px-5 pb-5">{children}</div>
            </div>
        </div>
    );
}