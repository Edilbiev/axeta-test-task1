import UserInfo from "./UserInfo";
import Avatar from "./Avatar";

function Header() {
  return (
    <header className="header">
      <Avatar />
      <UserInfo />
      <div className="print-button">
        <div className="print-button-inner">
          <button>PRINT THIS PAGE</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
