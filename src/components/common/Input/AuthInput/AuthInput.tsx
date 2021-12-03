import React, { ChangeEvent, KeyboardEvent } from "react";
import "./AuthInput.scss";

export interface AuthInputProps {
  value?: string;
  placeholder?: string;
  type: string;
  onChangeValue?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  padding?: string;
  fontSize?: string;
  width?: string;
  setFocus: React.Dispatch<React.SetStateAction<string>>;
  inputName: string;
}

const AuthInput = ({
  value,
  placeholder,
  type,
  onChangeValue,
  onKeyDown,
  width,
  setFocus,
  inputName,
}: AuthInputProps): JSX.Element => {
  return (
    <>
      <div className="AuthInput" style={{ width: width }}>
        <input
          type={type}
          placeholder={placeholder}
          className="AuthInput-Input"
          style={{ width: width }}
          onClick={() => {
            setFocus(inputName);
          }}
        />
      </div>
    </>
  );
};

export default AuthInput;
