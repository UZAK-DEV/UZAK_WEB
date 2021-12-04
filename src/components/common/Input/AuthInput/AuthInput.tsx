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
  textType: string;
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
  textType,
}: AuthInputProps): JSX.Element => {
  return (
    <>
      <div className="AuthInput" style={{ width: width }}>
        <input
          type={type}
          placeholder={placeholder}
          className={
            textType === "kr" ? "AuthInput-Input kr" : "AuthInput-Input eng"
          }
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
