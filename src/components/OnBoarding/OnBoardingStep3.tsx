import { useEffect, useState } from "react";
import ManyUsers from "../../assets/ManyUsers";
import User from "../../assets/User";
import Select from "../Select";

const formData = [
  {
    icon: User,
    title: "For myself",
    subTitle: "Write better. Think more clearly. Stay organized.",
  },
  {
    icon: ManyUsers,
    title: "With my team",
    subTitle: "Wikis, docs, tasks & projects, all in one place.",
  },
];

const OnBoardingStep3 = ({ step, updateForm, data }: OnBoardingStepProps) => {
  const [selected, setSelected] = useState<number>(
    formData.findIndex((e) => e.title === data["setup"].title)
  );
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (selected === -1) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  }, [selected]);

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (selected === -1) return;
    updateForm(step, { setup: formData[selected] });
  };

  return (
    <>
      <div className="mb-10">
        <div className="text-primary text-4xl text-center font-semibold mb-4">
          Let's set up a home for all your work
        </div>
        <div className="text-lg text-center font-semibold text-secondary">
          You can always create another workspace later.
        </div>
      </div>
      <div className="max-w-md mx-auto flex flex-col">
        <div className="flex justify-between items-stretch mb-6 gap-4">
          {formData.map((e, idx) => {
            const Icon = e.icon;
            return (
              <Select
                key={idx}
                icon={<Icon color={selected === idx && "#664de6"} />}
                title={e.title}
                subTitle={e.subTitle}
                isActive={idx === selected}
                onClick={() => {
                  setSelected(idx);
                }}
              />
            );
          })}
        </div>
        <button
          disabled={disabled}
          className="submit-btn"
          onClick={handleSubmit}
        >
          Create Workspace
        </button>
      </div>
    </>
  );
};

export default OnBoardingStep3;
