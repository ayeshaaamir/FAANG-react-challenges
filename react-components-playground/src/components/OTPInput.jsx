import { useEffect, useRef, useState } from "react";

const OTPInput = () => {
  const [inputArr, setInputArr] = useState(new Array(6).fill(""));
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (value, idx) => {
    if (isNaN(value)) return;
    const newArr = [...inputArr];
    newArr[idx] = value.slice(-1);
    setInputArr(newArr);

    if (value && idx < 5) {
      refArr.current[idx + 1]?.focus();
    }
  };

  const handleOnKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !inputArr[idx] && idx > 0) {
      refArr.current[idx - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Validate OTP</h1>
      <div className="flex space-x-3">
        {inputArr.map((input, idx) => (
          <input
            key={idx}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="w-12 h-14 text-xl text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={input}
            ref={(input) => (refArr.current[idx] = input)}
            onChange={(e) => handleOnChange(e.target.value, idx)}
            onKeyDown={(e) => handleOnKeyDown(e, idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInput;
