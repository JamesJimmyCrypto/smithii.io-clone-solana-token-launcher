import { useState } from "react";

export default function PriorityFees() {
  const [isOpen, setIsOpen] = useState(false); // Dropdown state
  const [selected, setSelected] = useState("Turbo 2x"); // Selected state

  // Dropdown options
  const options = [
    { label: "Fast 1x", value: "Fast 1x" },
    { label: "Turbo 2x", value: "Turbo 2x" },
    { label: "Ultra 3x", value: "Ultra 3x" },
  ];

  // Function to handle selection
  const handleSelect = (option) => {
    setSelected(option.value);
    setIsOpen(false); // Close dropdown on select
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        Priority Fees: {selected}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.292 7.293a1 1 0 011.415 0L10 10.585l3.293-3.292a1 1 0 111.415 1.414l-4 4a1 1 0 01-1.415 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-neutral-900 ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-neutral-800 ${
                  selected === option.value ? "bg-teal-600 text-white" : ""
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="px-4 py-2 text-xs text-gray-500 border-t border-gray-700">
            Consider that priority fees generally facilitate sending transactions to the network, but its effectiveness is contingent upon the current status of the network.
          </div>
        </div>
      )}
    </div>
  );
}
