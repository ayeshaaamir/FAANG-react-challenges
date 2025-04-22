const Profile = ({ data, setData, errors }) => {
  const { name, age, email } = data;
  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <form className="space-y-4 max-w-md mt-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Age
        </label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => handleDataChange(e, "age")}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors && <p className="mt-1 text-sm text-red-600">{errors.age}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>
    </form>
  );
};

export default Profile;
