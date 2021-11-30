import "./SideHeader.scss";
import CustomLink from "../CustomLink";
const SideHeader = () => {
  return (
    <>
      <div className="SideHeaderForm">
        <div className="SideHeaderForm-title">UZAK</div>
        <div className="SideHeaderForm-MainList">
          <CustomLink isActive={false} url="/" text="메인" />
          <CustomLink isActive={false} url="/" text="일정" />
          <CustomLink isActive={false} url="/" text="친구" />
          <CustomLink isActive={false} url="/" text="설정" />
        </div>
        <div className="SideHeaderForm-LogsList">
          <CustomLink isActive={true} url="/login" text="로그인 하기" />
          <CustomLink isActive={true} url="/register" text="회원가입 하기" />
        </div>
      </div>
    </>
  );
};

export default SideHeader;
