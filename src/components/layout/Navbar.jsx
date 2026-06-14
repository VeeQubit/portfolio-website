import Logo from "../common/Logo";
import Container from "./Container";
import navLinks from "../../data/navLinks";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          <Logo />

          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

        </nav>
      </Container>
    </header>
  );
}

export default Navbar;