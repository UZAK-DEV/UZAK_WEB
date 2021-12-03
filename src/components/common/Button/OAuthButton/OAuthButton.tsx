import "./OAuthButton.scss";
import google from "../../../../assets/img/google.svg";
import naver from "../../../../assets/img/naver.svg";
import kakao from "../../../../assets/img/kakao.svg";

export interface OAuthButtonProps {
  text: string;
  img: string;
}

const OAuthButton = ({ text, img }: OAuthButtonProps): JSX.Element => {
  const chooseImg = (img: string) => {
    switch (img) {
      case "google":
        return (
          <img src={google} alt="" className="OAuthButtonForm-Title-Img" />
        );
      case "naver":
        return <img src={naver} alt="" className="OAuthButtonForm-Title-Img" />;
      case "kakao":
        return <img src={kakao} alt="" className="OAuthButtonForm-Title-Img" />;
    }
  };

  return (
    <div className="OAuthButtonForm">
      <div className="OAuthButtonForm-Title">{chooseImg(img)}</div>
      <div className="OAuthButtonForm-Text">{text}</div>
    </div>
  );
};
export default OAuthButton;
