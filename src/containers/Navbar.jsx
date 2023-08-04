import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { CiLogout as Logout } from "react-icons/ci";
import { BsMoon as Moon } from "react-icons/bs";
import { TbWorld as World } from "react-icons/tb";
import { LuMessageSquare as Message } from "react-icons/lu";
import { GoScreenFull as Screen } from "react-icons/go";
import { AiOutlineWarning as Warning } from "react-icons/ai";
const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Nav className="me-auto">
          <Link className="nav-link text-success" to="/">
            <span>تسجيل الخروج</span>
            <Logout />
          </Link>
          <Link className="nav-link" to="/">
            <Moon />
          </Link>
          <Link className="nav-link" to="/">
            <World />
          </Link>
          <Link className="nav-link message" to="/">
            <Message />
            <span className="active"></span>
          </Link>
          <Link className="nav-link" to="/">
            <Screen />
          </Link>
          <Link className="nav-link" to="/">
            <Warning />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
