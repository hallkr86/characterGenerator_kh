
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';



class Header extends Component {
    render() {
        return(
          <div>
          <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary justify-content-center">
            <Navbar.Brand href="/">Character Generator</Navbar.Brand>
            <Button href="/CreateCharacter">Create Character </Button>
          
            
            
          </Navbar>
         

          {/* <div className='sidebar'>
<CDBSidebar textColor="#fff" backgroundColor="#333">
    <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
      Navigation
    </CDBSidebarHeader>
    <CDBSidebarContent>
      <CDBSidebarMenu>
       
        <NavLink exact to="/CharacterCard" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="list">Character List</CDBSidebarMenuItem>
        </NavLink>
       
      </CDBSidebarMenu>
    </CDBSidebarContent>
  </CDBSidebar>
</div> */}

          </div>
        )


        
    }
}

export default Header;