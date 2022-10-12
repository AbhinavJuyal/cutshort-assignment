import { useState } from "react";

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  prefixer?: JSX.Element;
};

const Input = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  prefixer,
}: InputProps) => {
  const [active, setActive] = useState<string>("border-outline");
  const random = Math.floor(Math.random() * 10000);
  const id = `input-${name}-${random}`;

  const onFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setActive("border-primary");
  };
  const onBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setActive("border-outline");
  };

  return (
    <div className="w-full flex flex-col mb-6 rounded-lg">
      <label htmlFor={id} className="text-black text-base font-semibold mb-2">
        {label}
      </label>
      <div
        className={`${active} border rounded-lg flex justify-center items-stretch`}
      >
        {prefixer}
        <input
          id={id}
          onFocus={onFocus}
          onBlur={onBlur}
          name={name}
          value={value}
          type="text"
          className="w-full h-14 pl-4 placeholder:font-normal rounded-lg"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
