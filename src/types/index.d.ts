type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

type OnBoardingStepProps = {
  step: number;
  updateForm: (step: number, data: any) => void;
  data: any;
};
