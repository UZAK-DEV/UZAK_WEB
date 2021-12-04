import { NavLink } from "react-router-dom";
import Rectangle from "../../../assets/img/sideIcon.png";
import "./CustomLink.scss";

export interface CustomLinkProps {
  isActive: boolean;
  url: string;
  text?: string;
}

const CustomLink = ({ isActive, url, text }: CustomLinkProps): JSX.Element => {
  return (
    <>
      <div className="CustomLink">
        <div className="CustomLink-Icon">
          <img src={Rectangle} alt="" className="CustomLink-Icon-Img" />
        </div>
        <div className="CustomLink-Link">
          <NavLink
            to={url}
            className={"CustomLink-Link-Btn" + (isActive ? " actived" : "")}
          >
            {text}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default CustomLink;
