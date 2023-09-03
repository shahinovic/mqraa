import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CiLogout as Logout } from "react-icons/ci";
import { BsMoon as Moon } from "react-icons/bs";
import { TbWorld as World } from "react-icons/tb";
import { LuMessageSquare as Message } from "react-icons/lu";
import { GoScreenFull as Screen } from "react-icons/go";
import { AiOutlineWarning as Warning } from "react-icons/ai";
import { GiHamburgerMenu as DropdownIcon } from "react-icons/gi";
import { Dropdown } from "react-bootstrap";

const MyNavbar = ({ screenSize }) => {
  let renderDropdown = screenSize !== "xs" && screenSize !== "sm";
  return (
    <Navbar expand="lg" className="navbar ">
      <Container>
        <Nav className="me-md-auto w-100">
          <Link className="nav-link log text-success" to="/">
            <span>تسجيل الخروج</span>
            <Logout />
          </Link>
          {renderDropdown && (
            <>
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
            </>
          )}
          {!renderDropdown && (
            <Dropdown className="ms-auto">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <DropdownIcon />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link className="nav-link" to="/">
                    <Moon />
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="nav-link" to="/">
                    <World />
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="nav-link" to="/">
                    <Message />
                    <span className="active"></span>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="nav-link" to="/">
                    <Screen />
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="nav-link" to="/">
                    <Warning />
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
