type OnBoardingProgressProps = {
  step: number;
  total: number;
  changeStep: (step: number) => void;
};

const OnBoardingProgress = ({
  step,
  total,
  changeStep,
}: OnBoardingProgressProps) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        {new Array(total + 1).fill(0).map((e, index) => {
          const active = index <= step;
          const circle = `w-12 h-12 flex justify-center items-center text-base font-normal rounded-full border-2 ${
            active
              ? "text-white border-active bg-active"
              : "text-secondary border-outline"
          }`;
          const bar = `w-4 sm:w-10 h-1 ${active ? "bg-active" : "bg-outline"}`;
          return (
            <div
              key={index}
              className="flex justify-center items-center cursor-pointer"
              onClick={() => changeStep(index)}
            >
              {index !== 0 && <div className={bar}></div>}
              <div className={circle}>{index + 1}</div>
              {index !== total && <div className={bar}></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OnBoardingProgress;
