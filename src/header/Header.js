import UserInfo from "./UserInfo";
import Avatar from "./Avatar";
import PagePrinter from "./PagePrinter";

function Header() {
  return (
    <header className="header">
      <Avatar />
      <UserInfo />
      <PagePrinter />
    </header>
  );
}

export default Header;
