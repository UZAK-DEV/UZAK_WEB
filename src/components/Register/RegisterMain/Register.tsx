import react, { useEffect, useState } from "react";
import "./Register.scss";
import GoogleLogin from "react-google-login";

import {
  OAUTH_GOOGLE_CLIENTID,
  OAUTH_KAKAO_AUTH_URL,
} from "../../../config/config.json";
import BackgroundCard from "../../common/BackgroundCard";
import useOauth from "../../../hooks/common/Oauth/useOauth";
import useRegister from "../../../hooks/Register/useRegister";
import AuthInput from "../../common/Input/AuthInput";
import AuthButton from "../../common/Button/AuthButton";
import OAuthButton from "../../common/Button/OAuthButton";

const Register = () => {
  const { focus, setFocus } = useRegister();
  // const { tryNaverLogin } = useOauth();
  // useEffect(() => {
  //   tryNaverLogin();
  // }, [tryNaverLogin]);
  return (
    <>
      <div className="RegisterForm">
        <BackgroundCard />
        <div className="RegisterForm-Options">
          <div className="RegisterForm-Options-title">회원가입</div>
          <div className="RegisterForm-Options-inputs">
            <div className="RegisterForm-Options-inputs-id">
              <div
                className={
                  focus === "id"
                    ? "RegisterForm-Options-inputs-id-title focus"
                    : "RegisterForm-Options-inputs-id-title"
                }
              >
                아이디
              </div>
              <AuthInput
                placeholder=""
                type="text"
                width="100%"
                setFocus={setFocus}
                inputName="id"
              />
            </div>
            <div className="RegisterForm-Options-inputs-pw">
              <div
                className={
                  focus === "password"
                    ? "RegisterForm-Options-inputs-pw-title focus"
                    : "RegisterForm-Options-inputs-pw-title"
                }
              >
                비밀번호
              </div>
              <AuthInput
                placeholder=""
                type="password"
                width="100%"
                setFocus={setFocus}
                inputName="password"
              />
            </div>
            <div className="RegisterForm-Options-inputs-submitDiv">
              <AuthButton text="다음" width="100%" path="/register/email" />
            </div>
          </div>
          <div className="RegisterForm-Options-Line"></div>
          <div className="RegisterForm-Options-OauthList">
            <OAuthButton text="구글로 가입하기" img="google" />
            <OAuthButton text="네이버로 가입하기" img="naver" />
            <OAuthButton text="카카오로 가입하기" img="kakao" />
            {/* <div className="RegisterForm-Options-OauthList-GoogleDiv">
              <div className="RegisterForm-Options-OauthList-GoogleDiv-Title">
                <img
                  src={google}
                  alt=""
                  className="RegisterForm-Options-OauthList-GoogleDiv-Title-Img"
                />
              </div>
              <div className="RegisterForm-Options-OauthList-GoogleDiv-Text">
                구글로 가입하기
              </div>
              <GoogleLogin
                clientId={OAUTH_GOOGLE_CLIENTID}
                className="RegisterForm-Options-OauthList-GoogleDiv-Btn"
              />
            </div>
            <div className="RegisterForm-Options-OauthList-NaverDiv">
              <div id="naverIdLogin" />
            </div>
            <div className="RegisterForm-Options-OauthList-KakaoDiv">
              <button>
                <a href={OAUTH_KAKAO_AUTH_URL}>aflkj</a>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
