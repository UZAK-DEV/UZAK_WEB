import BackgroundCard from "../../common/BackgroundCard";
import AuthButton from "../../common/Button/AuthButton";
import icon from "../../../assets/img/registerIcon.svg";
import "./RegisterSuccess.scss";

const RegisterSuccess = () => {
  return (
    <>
      <div className="RegitserSuccessForm">
        <BackgroundCard />
        <div className="RegitserSuccessForm-Options">
          <div className="RegitserSuccessForm-Options-img">
            <img
              src={icon}
              alt=""
              className="RegitserSuccessForm-Options-img-icon"
            />
          </div>
          <div className="RegitserSuccessForm-Options-title">
            회원가입을 <br /> 완료했습니다.
          </div>
          <div className="RegitserSuccessForm-Options-submitDiv">
            <AuthButton text="시작하기" width="100%" path="/login" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterSuccess;
