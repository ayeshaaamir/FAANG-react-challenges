const Interest = ({ data, setData, errors }) => {
  const { interests = [] } = data;

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setData((prev) => ({
        ...prev,
        interests: [...prev.interests, name],
      }));
    } else {
      setData((prev) => ({
        ...prev,
        interests: prev.interests.filter((item) => item !== name),
      }));
    }
  };

  return (
    <div className="space-y-2">
      {["coding", "react", "javascript"].map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            id={`checkbox-${item}`}
            type="checkbox"
            name={item}
            checked={interests.includes(item)}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor={`checkbox-${item}`}
            className="text-sm text-gray-700 capitalize"
          >
            {item}
          </label>
        </div>
      ))}
      {errors.interests && <p className="mt-1 text-sm text-red-600">{errors.interests}</p>}
    </div>
  );
};

export default Interest;
