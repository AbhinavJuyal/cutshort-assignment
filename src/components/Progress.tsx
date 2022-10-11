import { useEffect, useRef } from "react";

type ProgressProps = {
  className?: string;
  color: string;
  value: number;
};

const Progress = ({ className = "", color, value }: ProgressProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current) return;
    divRef.current.style.width = `${value}px`;
    // console.log(value);
  }, [value]);

  return (
    <div
      className={`progress-bar w-full flex items-start rounded-full bg-outline border-secondary ${
        className || "h-px"
      }`}
    >
      <div ref={divRef} className={`${color} h-full rounded-full`}></div>
    </div>
  );
};

export default Progress;
