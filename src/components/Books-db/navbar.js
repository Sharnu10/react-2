import Logo from "./logo";

export default function NavBar({ children }) {
  return (
    <nav className="navbar">
      <Logo />

      {children}
    </nav>
  );
}
