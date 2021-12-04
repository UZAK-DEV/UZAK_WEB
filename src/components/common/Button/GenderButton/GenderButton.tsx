import "./GenderButton.scss";

export interface GenterButtonProps {
  text: string;
  width: string;
  gender?: string;
}

const GenderButton = ({
  text,
  width,
  gender,
}: GenterButtonProps): JSX.Element => {
  return (
    <>
      <div className="GenderButton" style={{ width: width }}>
        <button className="GenderButton-Btn">{text}</button>
      </div>
    </>
  );
};

export default GenderButton;
