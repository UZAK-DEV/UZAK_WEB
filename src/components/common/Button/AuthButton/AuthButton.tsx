import "./AuthButton.scss";
import { useNavigate } from "react-router-dom";
export interface AuthButtonProps {
  text: string;
  width: string;
  path: string;
  type: string;
}

const AuthButton = ({
  text,
  width,
  path,
  type,
}: AuthButtonProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <div className="AuthButton" style={{ width: width }}>
        {type === "login" ? (
          <button
            className="AuthButton-Btn"
            onClick={() => {
              navigate(path);
            }}
          >
            {text}
          </button>
        ) : (
          <button
            className="AuthButton-Btn"
            onClick={() => {
              navigate(path);
            }}
          >
            {text}
          </button>
        )}
      </div>
    </>
  );
};

export default AuthButton;
