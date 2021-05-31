import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";

import { NavLink } from "react-router-dom";
function Menu({ menus }) {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          {menus.map((menu) => {
            return (
              <NavItem>
                <NavLink
                  className="navlink"
                  to={menu.path}
                  exact={menu.exact}
                  activeClassName="active-link"
                >
                  {menu.label}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Menu;
