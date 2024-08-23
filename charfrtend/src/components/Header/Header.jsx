
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

class Header extends Component {
    render() {
        return(
          <div>
          <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#home">Character Generator</Navbar.Brand>
          </Navbar>

          <div className='sidebar'>
<CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
    <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
      Navigation
    </CDBSidebarHeader>
    <CDBSidebarContent>
      <CDBSidebarMenu>
       
        <NavLink exact to="/student" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="list">Character List</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/manage" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="user">Manage Characters</CDBSidebarMenuItem>
        </NavLink>
      </CDBSidebarMenu>
    </CDBSidebarContent>
  </CDBSidebar>
</div>

          </div>
        )


        
    }
}

export default Header;