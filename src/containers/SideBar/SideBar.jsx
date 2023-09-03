import { useState } from "react";
import { SidebarLinks, SidebarUser } from "../../components";
import "./Sidebar.css";
import { Form } from "react-bootstrap";

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`sidebar ${isOpen ? "open" : ""} position-relative`}
      dir="rtl"
    >
      <div className="nav-switch position-absolute my-2">
        <Form>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            onChange={() => setIsOpen(!isOpen)}
            checked={isOpen}
          />
        </Form>
      </div>
      <div className="sidebar-logo mt-5"></div>
      <SidebarUser isOpen={isOpen} />
      <SidebarLinks isOpen={isOpen} />
    </div>
  );
};

export default SideBar;
