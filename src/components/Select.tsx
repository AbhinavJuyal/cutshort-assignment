import ManyUsers from "../assets/ManyUsers";
import User from "../assets/User";

type SelectProps = {
  index?: number;
  icon: any;
  title: string;
  subTitle: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Select = ({ icon, title, subTitle, onClick, isActive }: SelectProps) => {
  return (
    <div
      onClick={onClick}
      className={
        "w-full aspect-square border rounded-lg p-3 sm:p-6 " +
        (isActive ? "border-active" : "border-outline")
      }
    >
      <div className="w-10 mb-4">{icon}</div>
      <div className="font-primary text-primary mb-2">{title}</div>
      <div className="font-normal text-secondary">{subTitle}</div>
    </div>
  );
};

export default Select;
