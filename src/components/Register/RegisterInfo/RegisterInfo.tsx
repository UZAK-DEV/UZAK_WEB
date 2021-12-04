// 나중에 모벡스 쓸때 클릭시 이벤트

import BackgroundCard from "../../common/BackgroundCard";
import AuthInput from "../../common/Input/AuthInput";
import "./RegisterInfo.scss";
import useRegister from "../../../hooks/Register/useRegister";
import AuthButton from "../../common/Button/AuthButton";
import GenderButton from "../../common/Button/GenderButton";
const RegisterInfo = () => {
  const { focus, setFocus } = useRegister();
  return (
    <>
      <div className="RegisterInfoForm">
        <BackgroundCard />
        <div className="RegisterInfoForm-Options">
          <div className="RegisterInfoForm-Options-title">회원가입</div>
          <div className="RegisterInfoForm-Options-inputs">
            <div className="RegisterInfoForm-Options-inputs-name">
              <div
                className={
                  focus === "name"
                    ? "RegisterInfoForm-Options-inputs-name-title focus"
                    : "RegisterInfoForm-Options-inputs-name-title"
                }
              >
                이름
              </div>
              <AuthInput
                placeholder=""
                type="text"
                width="100%"
                setFocus={setFocus}
                inputName="name"
                textType="kr"
              />
            </div>
            <div className="RegisterInfoForm-Options-inputs-age">
              <div
                className={
                  focus === "age"
                    ? "RegisterInfoForm-Options-inputs-age-title focus"
                    : "RegisterInfoForm-Options-inputs-age-title"
                }
              >
                나이
              </div>
              <div className="RegisterInfoForm-Options-inputs-age-inputs">
                <AuthInput
                  placeholder=""
                  type="text"
                  width="369px"
                  setFocus={setFocus}
                  inputName="age"
                  textType="number"
                />
                <div className="RegisterInfoForm-Options-inputs-age-inputs-title">
                  세
                </div>
              </div>
            </div>
            <div className="RegisterInfoForm-Options-inputs-gender">
              <div className="RegisterInfoForm-Options-inputs-gender-title">
                성별
              </div>
              <div className="RegisterInfoForm-Options-inputs-gender-button">
                <GenderButton text="남자" width="192px" />
                <GenderButton text="여자" width="192px" />
              </div>
            </div>
            <div className="RegisterInfoForm-Options-inputs-submitDiv">
              <AuthButton text="다음" width="100%" path="/register/success" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterInfo;
