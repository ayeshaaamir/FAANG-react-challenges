import ProgressBarInput from "../features-components/progress-bar/ProgressBarInput";

const ProgressBar = () => {
  const bars = [0, 25, 50, 75, 100];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Progress Bars</h1>
      <div className="space-y-4 w-full max-w-xl">
        {bars.map((progress) => (
          <div key={progress} className="w-full">
            <ProgressBarInput progress={progress} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
