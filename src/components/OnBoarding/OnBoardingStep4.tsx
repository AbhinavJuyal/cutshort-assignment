import Check from "../../assets/Check";

const OnBoardingStep4 = ({ step, updateForm, data }: OnBoardingStepProps) => {
  const name = data.step1.name;
  console.log(name);
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    updateForm(step, {});
  };

  return (
    <>
      <div className="mb-10">
        <div className="w-20 aspect-square mx-auto my-10">
          <Check color="#664de6" />
        </div>
        <div className="text-primary text-4xl text-center font-semibold mb-4">
          Congratulations, {name || "Eren"}!
        </div>
        <div className="text-lg text-center font-medium text-secondary">
          You have completed the onboarding, you can start using the Eden!
        </div>
      </div>
      <div className="max-w-md mx-auto flex flex-col">
        <div className="flex justify-between items-stretch mb-6 gap-4"></div>
        <button
          className="w-full h-14 bg-active text-white text-center font-normal rounded-lg"
          onClick={handleSubmit}
        >
          Launch Eden
        </button>
      </div>
    </>
  );
};

export default OnBoardingStep4;
