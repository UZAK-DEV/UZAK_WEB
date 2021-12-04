import "./BackgroundCard.scss";
import backgroundCardImg from "../../../assets/img/backGroundImg.svg";
const BackgroundCard = () => {
  return (
    <>
      <div className="BackgroundCard">
        <img
          src={backgroundCardImg}
          alt=""
          className="RegisterForm-background-img"
        />
      </div>
    </>
  );
};

export default BackgroundCard;
