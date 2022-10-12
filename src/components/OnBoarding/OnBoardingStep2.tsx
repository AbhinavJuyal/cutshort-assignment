import { useEffect, useState } from "react";
import Input from "../Input";

const LabelText = () => {
  return (
    <div className="h-14 flex justify-center items-center bg-outline px-4 rounded-l-lg">
      <span className="block text-secondary font-semibold">www.eden.com/</span>
    </div>
  );
};

const OnBoardingStep2 = ({ step, updateForm, data }: OnBoardingStepProps) => {
  const [workshop, setWorkShop] = useState<string>(data["workshop"] || "");
  const [url, setUrl] = useState<string>(data["workshop"] || "");
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (workshop === "" || url === "") {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  }, [workshop, url]);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    if (name === "workshop") setWorkShop(value);
    if (name === "url") setUrl(value);
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (workshop === "") return;
    if (url === "") return;
    updateForm(step, { workshop, url }); // update form
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
      <form className="max-w-md mx-auto" onSubmit={onSubmit}>
        <Input
          name="workshop"
          value={workshop}
          label="Workspace Name"
          placeholder="Eden"
          onChange={onChange}
        />
        <Input
          name="url"
          value={url}
          label="Workspace URL"
          placeholder="Example"
          onChange={onChange}
          prefixer={<LabelText />}
        />
        <button disabled={disabled} className="submit-btn">
          Create Workspace
        </button>
      </form>
    </>
  );
};

export default OnBoardingStep2;
