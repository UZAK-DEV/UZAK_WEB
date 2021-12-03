import "./AuthButton.scss";
import { useNavigate } from "react-router-dom";
export interface AuthButtonProps {
  text: string;
  width: string;
  path: string;
}

const AuthButton = ({ text, width, path }: AuthButtonProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <div className="AuthButton" style={{ width: width }}>
        <button
          className="AuthButton-Btn"
          style={{ width: width }}
          onClick={() => {
            navigate(path);
          }}
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default AuthButton;
