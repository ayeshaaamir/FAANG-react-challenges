import { useState } from "react";
import Interest from "../features-components/tab-form/Interest";
import Profile from "../features-components/tab-form/Profile";
import Settings from "../features-components/tab-form/Settings";

const TabForm = () => {
  const initialData = {
    name: "",
    age: "",
    email: "",
    interests: [],
    theme: "",
  };
  const [errors, setErrors] = useState({
    name: "Name is not valid",
  });
  const [data, setData] = useState(initialData);
  const tabs = [
    {
      id: 0,
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 3) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 1) {
          err.age = "Age is not valid";
        }
        if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
          err.email = "Email is not valid";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      id: 1,
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interests.length === 0) {
          err.interests = "Select at least one interest";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      id: 2,
      name: "Settings",
      component: Settings,
      validate: () => {
        const err = {};
        if (!data.theme) {
          err.theme = "Select a theme";
        }
        setErrors(err);
        return err.theme ? false : true;
      },
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const ActiveTabComponent = tabs[activeTab].component;

  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) setActiveTab((prev) => prev - 1);
  };
  const handleNextClick = () => {
    if (tabs[activeTab].validate()) setActiveTab((prev) => prev + 1);
  };
  const handleSubmitClick = () => {
    if (tabs[activeTab].validate()) {
      alert("Form submitted successfully!");
      setData(initialData);
      setActiveTab(0);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4">
      <div className="flex space-x-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`pb-2 border-b-2 ${
              activeTab === tab.id
                ? "border-green-500 text-green-600 font-semibold"
                : "border-transparent text-gray-600 hover:text-green-500"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>

      <div className="flex justify-center gap-4 mt-4">
        {activeTab > 0 && (
          <button
            onClick={handlePrevClick}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Prev
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button
            onClick={handleNextClick}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Next
          </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button
            onClick={handleSubmitClick}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
