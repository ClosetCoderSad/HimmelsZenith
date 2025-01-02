import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
        isDarkMode
          ? "bg-black border-gray-100 text-white"
          : "bg-white border-gray-800 text-gray-800"
      }`}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        // Moon Icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21.753 15.653A9.004 9.004 0 018.347 2.247 9 9 0 1021.753 15.653zM12 21a8.966 8.966 0 01-6.364-2.636A8.967 8.967 0 019.75 4.25a7.003 7.003 0 008 8 8.967 8.967 0 01-2.636 6.364A8.966 8.966 0 0112 21z" />
        </svg>
      ) : (
        // Sun Icon
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 3a1 1 0 011-1h0a1 1 0 011 1v2a1 1 0 11-2 0V3zM12 19a1 1 0 011-1h0a1 1 0 011 1v2a1 1 0 11-2 0v-2zM4.22 4.22a1 1 0 011.41 0l1.42 1.42a1 1 0 11-1.42 1.42L4.22 5.64a1 1 0 010-1.42zM17.95 17.95a1 1 0 011.41 0l1.42 1.42a1 1 0 11-1.42 1.42l-1.42-1.42a1 1 0 010-1.42zM2 11a1 1 0 011-1h2a1 1 0 010 2H3a1 1 0 01-1-1zM20 11a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1zM4.22 19.78a1 1 0 010-1.42l1.42-1.42a1 1 0 111.42 1.42L5.64 19.78a1 1 0 01-1.42 0zM17.95 6.05a1 1 0 010-1.42l1.42-1.42a1 1 0 111.42 1.42L19.37 6.05a1 1 0 01-1.42 0zM12 6a6 6 0 106 6 6.006 6.006 0 00-6-6z" />
      </svg>
      )}
    </button>
  );
}

export default DarkModeToggle;
