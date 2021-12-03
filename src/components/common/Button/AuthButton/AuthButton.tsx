import "./AuthButton.scss";

export interface AuthButtonProps {
  text: string;
  width: string;
}

const AuthButton = ({ text, width }: AuthButtonProps): JSX.Element => {
  return (
    <>
      <div className="AuthButton" style={{ width: width }}>
        <button className="AuthButton-Btn" style={{ width: width }}>
          {text}
        </button>
      </div>
    </>
  );
};

export default AuthButton;
