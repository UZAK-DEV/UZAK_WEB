import { ChangeEvent, KeyboardEvent } from "react";
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
}

const AuthInput = ({
  value,
  placeholder,
  type,
  onChangeValue,
  onKeyDown,
  width,
}: AuthInputProps): JSX.Element => {
  return (
    <>
      <div className="AuthInput" style={{ width: width }}>
        <input
          type={type}
          placeholder={placeholder}
          className="AuthInput-Input"
          style={{ width: width }}
        />
      </div>
    </>
  );
};

export default AuthInput;
