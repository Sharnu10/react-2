import Number from "./Number";
import Search from "./Search";
import Logo from "./logo";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Logo />
      <Search />
      <Number />
    </nav>
  );
}
