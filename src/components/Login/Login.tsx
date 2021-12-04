import BackgroundCard from "../common/BackgroundCard";
import AuthInput from "../common/Input/AuthInput";
import useRegister from "../../hooks/Register/useRegister";
import "./Login.scss";
import AuthButton from "../common/Button/AuthButton";
import OAuthButton from "../common/Button/OAuthButton";

const Login = () => {
  const { focus, setFocus } = useRegister();
  return (
    <>
      <div className="LoginForm">
        <BackgroundCard />
        <div className="LoginForm-Options">
          <div className="LoginForm-Options-title">로그인</div>
          <div className="LoginForm-Options-inputs">
            <div className="LoginForm-Options-inputs-id">
              <div
                className={
                  focus === "id"
                    ? "LoginForm-Options-inputs-id-title focus"
                    : "LoginForm-Options-inputs-id-title"
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
                textType="eng"
              />
            </div>
            <div className="LoginForm-Options-inputs-pw">
              <div
                className={
                  focus === "password"
                    ? "LoginForm-Options-inputs-pw-title focus"
                    : "LoginForm-Options-inputs-pw-title"
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
                textType="eng"
              />
            </div>
            <div className="LoginForm-Options-inputs-submitDiv">
              <AuthButton
                text="로그인 하기"
                width="100%"
                path="/"
                type="login"
              />
            </div>
          </div>
          <div className="RegisterForm-Options-Line"></div>
          <div className="RegisterForm-Options-OauthList">
            <OAuthButton text="구글로 로그인" img="google" />
            <OAuthButton text="네이버로 로그인" img="naver" />
            <OAuthButton text="카카오로 로그인" img="kakao" />
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

export default Login;
