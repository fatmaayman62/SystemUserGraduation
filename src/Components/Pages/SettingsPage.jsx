import React, { useState } from "react";
export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="max-w-2xl min-h-screen mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Appearance */}
      <div className="dark:bg-[#03173b] shadow rounded-xl p-5 mb-6">
        <h2 className="sm:text-lg text-[16px] font-semibold mb-4">Appearance</h2>

        <div className="flex items-center justify-between">
          <span className="sm:text-[16px] text-[14px]">Dark Mode</span>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div
              className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ${darkMode ? "bg-gray-800" : "bg-gray-300"
                }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${darkMode ? "translate-x-6" : ""
                  }`}
              ></div>
            </div>
          </label>
        </div>
      </div>

      {/* Notifications */}
      <div className="dark:bg-[#03173b] shadow rounded-xl p-5 mb-6">
        <h2 className="sm:text-lg text-[16px] font-semibold mb-4">Notifications</h2>

        <div className="flex items-center justify-between">
          <span className="sm:text-[16px] text-[14px]">Enable Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="w-5 h-5"
          />
        </div>
      </div>

      {/* Account */}
      <div className="dark:bg-[#03173b] shadow rounded-xl p-5">
        <h2 className="sm:text-lg text-[16px] font-semibold mb-4">Account</h2>

        <button className="sm:text-[16px] text-[14px] bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Delete Account
        </button>
      </div>
    </div>
  );
}
