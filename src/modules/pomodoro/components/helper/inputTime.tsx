import React, { RefObject } from "react";

interface IProps {
  onChange: (inputTime: number) => void;
  inputRef: RefObject<HTMLInputElement>;
}
const InputTime = ({ onChange, inputRef }: IProps) => {
  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(
      Math.abs(Number(event.target.value)) < 60
        ? Math.abs(Number(event.target.value))
        : 59
    );
  };
  return (
    <input
      type={"number"}
      className={"Input"}
      ref={inputRef}
      min={0}
      max={59}
      onChange={handleTimeChange}
    />
  );
};

//event: React.ChangeEvent<HTMLInputElement>
export default InputTime;
