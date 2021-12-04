import BackgroundCard from "../../common/BackgroundCard";
import AuthInput from "../../common/Input/AuthInput";
import "./RegisterEmail.scss";
import useRegister from "../../../hooks/Register/useRegister";
import AuthButton from "../../common/Button/AuthButton";
const RegisterEmail = () => {
  const { focus, setFocus } = useRegister();
  return (
    <>
      <div className="RegisterEmailForm">
        <BackgroundCard />
        <div className="RegisterEmailForm-Options">
          <div className="RegisterEmailForm-Options-title">회원가입</div>
          <div className="RegisterEmailForm-Options-inputs">
            <div className="RegisterEmailForm-Options-inputs-email">
              <div
                className={
                  focus === "email"
                    ? "RegisterEmailForm-Options-inputs-email-title focus"
                    : "RegisterEmailForm-Options-inputs-email-title"
                }
              >
                이메일
              </div>
              <AuthInput
                placeholder=""
                type="text"
                width="100%"
                setFocus={setFocus}
                inputName="email"
                textType="eng"
              />
            </div>
            <div className="RegisterEmailForm-Options-inputs-submitDiv">
              <AuthButton text="다음" width="100%" path="/register/info" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterEmail;
