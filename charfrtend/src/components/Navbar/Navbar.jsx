
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';



class Header extends Component {
    render() {
        return(
          <div>
          <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="custom-navbar bg-body-tertiary justify-content-center">
            <Navbar.Brand href="/"><h2>Character Generator</h2></Navbar.Brand>
            <Button className="me-2" href="/CharacterCardcontainer"><h4>My Characters</h4></Button>
            
            <Button className="me-2" href="/CreateCharacter"><h4>Create Character</h4> </Button>
          
            
            
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