import {
  OAUTH_NAVER_CLIENTID,
  OAUTH_NAVER_CALLBACK_URL,
} from "../../../config/config.json";
const { naver } = window as any;

const useOauth = () => {
  const tryNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: { OAUTH_NAVER_CLIENTID },
      callbackUrl: { OAUTH_NAVER_CALLBACK_URL },
      isPopup: false,
      loginButton: { color: "white", type: 1, height: "47" },
    });
    naverLogin.init();
  };

  return { tryNaverLogin };
};

export default useOauth;
