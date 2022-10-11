import { useEffect, useRef, useState } from "react";
import Logo from "../components/Logo";
import {
  OnBoardingStep1,
  OnBoardingStep2,
  OnBoardingStep3,
  OnBoardingStep4,
  OnBoardingProgress,
} from "../components/OnBoarding";

type Form = {
  filled: boolean;
} & Record<string, any>;

type FormValue = Record<string, Form>;

const initialState: FormValue = {
  step1: {
    filled: false,
    name: "",
    username: "",
  },
  step2: {
    filled: false,
    workshop: "",
    url: "",
  },
  step3: {
    filled: false,
    setup: {},
  },
  step4: {
    filled: false,
  },
};

const OnBoarding = () => {
  const [step, setStep] = useState<number>(0);
  const [form, setForm] = useState<FormValue>(initialState);

  useEffect(() => {
    console.log(form);
  }, [form]);

  const changeStep = (val: number) => {
    setStep(val);
  };

  const updateForm = (step: number, data: any) => {
    setForm((prev) => ({
      ...prev,
      [`step${step + 1}`]: { ...data, filled: true },
    }));
    setStep((prev) => (step >= totalSteps ? prev : prev + 1));
  };

  const key = `step${step + 1}`;
  const steps: JSX.Element[] = [
    <OnBoardingStep1 data={form[key]} step={step} updateForm={updateForm} />,
    <OnBoardingStep2 data={form[key]} step={step} updateForm={updateForm} />,
    <OnBoardingStep3 data={form[key]} step={step} updateForm={updateForm} />,
    <OnBoardingStep4 data={form} step={step} updateForm={updateForm} />,
  ];

  const totalSteps: number = steps.length - 1;

  return (
    <div className="relative h-screen w-screen flex flex-col justify-center items-center">
      <div className="mb-6 sm:mb-0">
        <Logo />
      </div>
      <div className="w-full sm:w-auto flex flex-col justify-center items-center font-extrabold mx-2 mb-10 mt-5 sm:mt-20">
        <div className="mb-7 sm:mb-16">
          <OnBoardingProgress
            step={step}
            total={totalSteps}
            changeStep={changeStep}
          />
        </div>
        <div className="w-full h-[420px] px-8 sm:px-0">{steps[step]}</div>
      </div>
    </div>
  );
};

export default OnBoarding;
