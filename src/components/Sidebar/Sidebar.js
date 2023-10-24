import React, { useState } from "react";
import "./style.css";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { Icons } from "../../assets/icons";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

function Sidebar(props) {
  const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <aside className="sidebar-section">
      <div className="logo-section">
        <Link to="/">
          <img src={logo} alt="" style={{ width: "200px" }} />
        </Link>
      </div>
      <div className="navbar">
        <NavLink to="/">{Icons.AiOutlineDashboard} Dashboard</NavLink>

        <Accordion open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">
              {Icons.AiOutlineCluster} Customer Details
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <NavLink to="/customer-details/search">
                {Icons.bullets} Search
              </NavLink>
              <NavLink to="/customer-details/overview">
                {Icons.bullets} Overview
              </NavLink>
              <NavLink to="/customer-details/activity-logs">
                {Icons.bullets} Activity Log
              </NavLink>
              <NavLink to="/customer-details/payment-details">
                {Icons.bullets} Payment Details
              </NavLink>
              <NavLink to="/customer-details/communication">
                {Icons.bullets} Communication
              </NavLink>
            </AccordionBody>
          </AccordionItem>
        </Accordion>

        <NavLink to="/reports">{Icons.fileSync} Reports</NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
