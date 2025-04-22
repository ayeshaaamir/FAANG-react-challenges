import { useEffect, useState } from "react";

const ProgressBarInput = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedProgress((prev) => {
        if (prev < progress) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return progress;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="w-full max-w-md mx-auto my-4">
      <div
        className="w-full bg-gray-200 rounded-full h-6 relative"
        role="progressbar"
        aria-valuenow={animatedProgress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Progress"
      >
        <div
          className="bg-blue-500 h-6 rounded-full transition-all duration-300 ease-in-out"
          style={{
            width: `${animatedProgress}%`,
          }}
        ></div>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white">
          {animatedProgress}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBarInput;
