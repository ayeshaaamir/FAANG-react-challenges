const Settings = ({ data, setData, errors }) => {
  const { theme } = data;
  const handleThemeChange = (e) => {
    setData((prev) => ({
      ...prev,
      theme: e.target.value,
    }));
  };
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="light"
          name="theme"
          value="light"
          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          checked={theme === "light"}
          onChange={handleThemeChange}
        />
        <label htmlFor="light" className="text-sm text-gray-700">
          Light
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="dark"
          name="theme"
          value="dark"
          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          checked={theme === "dark"}
          onChange={handleThemeChange}
        />
        <label htmlFor="dark" className="text-sm text-gray-700">
          Dark
        </label>
      </div>
      {errors.theme && <p className="mt-1 text-sm text-red-600">{errors.theme}</p>}

    </div>
  );
};

export default Settings;
