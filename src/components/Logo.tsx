import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={logo} className="w-12 aspect-auto" alt="logo" />
      <div className="text-primary text-3xl font-bold">Eden</div>
    </div>
  );
};

export default Logo;
