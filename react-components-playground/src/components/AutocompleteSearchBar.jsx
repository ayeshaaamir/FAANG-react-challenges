import { useEffect, useState } from "react";
import { SEARCH_RECIPES_API } from "../config";

const AutocompleteSearchBar = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.trim().length > 0) {
        const cached = localStorage.getItem(input);
        if (cached) {
          setResults(JSON.parse(cached));
        } else {
          fetchData(input);
        }
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [input]);

  const fetchData = async (query) => {
    try {
      const response = await fetch(SEARCH_RECIPES_API + query);
      const json = await response.json();
      const recipes = json?.recipes || [];
      setResults(recipes);
      localStorage.setItem(query, JSON.stringify(recipes));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-16">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Search Recipes
      </h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full border border-gray-300 rounded-full px-5 py-3 text-sm shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
        {showResults && results.length > 0 && (
          <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-2 rounded-md shadow-md max-h-60 overflow-y-auto">
            {results.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 text-sm hover:bg-blue-100 cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AutocompleteSearchBar;
