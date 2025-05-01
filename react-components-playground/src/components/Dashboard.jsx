import { useState } from "react";
import TabForm from "./TabForm";
import Pagination from "./Pagination";
import AutocompleteSearchBar from "./AutocompleteSearchBar";
import FileExplorer from "./FileExplorer";
import ProgressBar from "./ProgressBar";
import OTPInput from "./OTPInput";
import NestedCheckboxes from "./NestedCheckboxes";
import { nestedCheckboxData } from "../utils/constants";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("tab-form");
  const [checked, setChecked] = useState({});

  const tabs = [
    { id: "tab-form", label: "Tab Form" },
    { id: "pagination", label: "Pagination" },
    { id: "auto-complete-search-bar", label: "Auto Complete Search Bar" },
    { id: "file-explorer", label: "File Explorer" },
    { id: "progress-bar", label: "Progress Bar" },
    { id: "otp-input", label: "OTP Input" },
    { id: "nested-checkbox", label: "Nested Checkbox" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "tab-form":
        return <TabForm />;
      case "pagination":
        return <Pagination />;
      case "auto-complete-search-bar":
        return <AutocompleteSearchBar />;
      case "file-explorer":
        return <FileExplorer />;
      case "progress-bar":
        return <ProgressBar />;
      case "otp-input":
        return <OTPInput />;
      case "nested-checkbox":
        return (
          <NestedCheckboxes
            data={nestedCheckboxData}
            checked={checked}
            setChecked={setChecked}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Machine Coding Interview Tasks
      </h1>

      <div className="flex space-x-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`pb-2 border-b-2 ${
              activeTab === tab.id
                ? "border-blue-500 text-blue-600 font-semibold"
                : "border-transparent text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
