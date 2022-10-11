import { useEffect, useState } from "react";
import Input from "../Input";

const OnBoardingStep1 = ({ step, updateForm, data }: OnBoardingStepProps) => {
  const [name, setName] = useState<string>(data["name"] || "");
  const [userName, setUserName] = useState<string>(data["userName"] || "");
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (name === "" || userName === "") {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  }, [name, userName]);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "userName") setUserName(value);
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (name === "") return;
    if (userName === "") return;
    updateForm(step, { name, userName }); // update form
  };

  return (
    <>
      <div className="mb-10">
        <div className="text-primary text-4xl text-center font-semibold mb-4">
          <span className="sm:mr-2">Welcome!</span>
          <br className="block sm:hidden" />
          <span>First things first...</span>
        </div>
        <div className="text-lg text-center font-semibold text-secondary">
          You can always change them later.
        </div>
      </div>
      <form className="max-w-md mx-auto" onSubmit={onSubmit}>
        <Input
          name="name"
          value={name}
          label="Full Name"
          placeholder="Steve Jobs"
          onChange={onChange}
        />
        <Input
          name="userName"
          value={userName}
          label="Display Name"
          placeholder="Steve"
          onChange={onChange}
        />
        <button disabled={disabled} className="submit-btn">
          Create Workspace
        </button>
      </form>
    </>
  );
};

export default OnBoardingStep1;
