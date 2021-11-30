import react, { useEffect } from "react";
import "./Register.scss";
import GoogleLogin from "react-google-login";

import {
  OAUTH_GOOGLE_CLIENTID,
  OAUTH_KAKAO_AUTH_URL,
} from "../../config/config.json";
import useOauth from "../../hooks/common/Oauth/useOauth";
import AuthInput from "../common/Input/AuthInput";
import AuthButton from "../common/Button/AuthButton";
const Register = () => {
  const { tryNaverLogin } = useOauth();
  useEffect(() => {
    tryNaverLogin();
  }, [tryNaverLogin]);
  return (
    <>
      <div className="RegisterForm">
        <div className="RegisterForm-background">
          {/* <img src="" alt="" className="RegisterForm-background-img" /> */}
        </div>
        <div className="RegisterForm-Options">
          <div className="RegisterForm-Options-title">회원가입</div>
          <div className="RegisterForm-Options-inputs">
            <div className="RegisterForm-Options-inputs-id">
              <div className="RegisterForm-Options-inputs-id-title">아이디</div>
              <AuthInput placeholder="" type="text" width="100%" />
            </div>
            <div className="RegisterForm-Options-inputs-pw">
              <div className="RegisterForm-Options-inputs-pw-title">
                비밀번호
              </div>
              <AuthInput placeholder="" type="password" width="100%" />
            </div>
            <div className="RegisterForm-Options-inputs-submitDiv">
              <AuthButton text="다음" width="100%" />
            </div>
          </div>
          <div className="RegisterForm-Options-Line"></div>
          <div className="RegisterForm-Options-OauthList">
            <div className="RegisterForm-Options-OauthList-GoogleDiv">
              <GoogleLogin clientId={OAUTH_GOOGLE_CLIENTID} />
            </div>
            <div className="RegisterForm-Options-OauthList-NaverDiv">
              <div id="naverIdLogin" />
            </div>
            <div className="RegisterForm-Options-OauthList-KakaoDiv">
              <button>
                <a href={OAUTH_KAKAO_AUTH_URL}>aflkj</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
