import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.css'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import {Icon} from '@chakra-ui/react'
import {TriangleDownIcon} from '@chakra-ui/icons'
// import Element from '../Pages/Element'
function Navbar() {
  

  return (
    <nav style={{color:"grey"}}>
      <div style={{display:"flex",listStyleType:"none",justifyContent:"space-around"}}>
       <li>
          <NavLink to="/" activeClassName="active"
          className="hovereffect">HOME </NavLink>
          
          
        </li>
        <li>
          <NavLink to="#" activeClassName="active"
          className="hovereffect">GUIDE </NavLink>
          
          
        </li>
        <li>
          <NavLink to="#" activeClassName="active"
          className="hovereffect">MWC </NavLink>
          
          
        </li>
        <li>
          <NavLink to="/Element" activeClassName="active"
          className="hovereffect">NEWS </NavLink>
          
          
        </li>
        <li>
          <NavLink to="#" activeClassName="active"
          className="hovereffect">REVIEWS </NavLink>
          
          
        </li>
        <li>
          <NavLink to="#" activeClassName="active"
          className="hovereffect">FEATURES </NavLink>
          
          
        </li>
        <li>
        <NavLink to="#" activeClassName="active"
        className="hovereffect">
          <Menu>
            <MenuButton  >
              VIDEOS <Icon as={TriangleDownIcon}/>
            </MenuButton>
            <MenuList className='menulist'>
              <NavLink to="/about"><MenuItem className='menuitem'>BUYING-GUIDS</MenuItem></NavLink>
              <MenuItem className='menuitem'>CRYPTOCURRENCY</MenuItem>
              <MenuItem className='menuitem'>EVENTS</MenuItem>
              <MenuItem className='menuitem'>HOW TOS</MenuItem>
              <MenuItem className='menuitem'>SPONSER</MenuItem>
            </MenuList>
          </Menu>
        </NavLink>
        
        </li>
        <li>
          <NavLink to="#" activeClassName="active"
          className="hovereffect">PODCASTS </NavLink>
          
          
        </li>
       
        <li>
        <NavLink to="#" activeClassName="active"
        className="hovereffect">
          <Menu>
            <MenuButton  >
              PRODUCT FINDER <Icon as={TriangleDownIcon}/>
            </MenuButton>
            <MenuList className='menulist'>
              <NavLink to="/about"><MenuItem className='menuitem'>Download</MenuItem ></NavLink>
              <MenuItem className='menuitem'>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem className='menuitem'>Delete</MenuItem>
              <MenuItem className='menuitem'>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </NavLink>
        
        </li>
        <li>
        <NavLink to="#" activeClassName="active"
        className="hovereffect">
          <Menu>
            <MenuButton  >
              COMPARE <Icon as={TriangleDownIcon}/>
            </MenuButton>
            <MenuList className='menulist'>
              <NavLink to="/about"><MenuItem className='menuitem'>Download</MenuItem ></NavLink>
              <MenuItem className='menuitem'>Create a Copy</MenuItem>
              <MenuItem className='menuitem'>Mark as Draft</MenuItem>
              <MenuItem className='menuitem'>Delete</MenuItem>
              <MenuItem className='menuitem'>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </NavLink>
        
        </li>
        <li>
        <NavLink to="#" activeClassName="active"
        className="hovereffect">BRANDS </NavLink>
        
        </li>
        <li>
        <NavLink to="#" activeClassName="active"
        className="hovereffect">
          <Menu>
            <MenuButton  >
              RECHARGE <Icon as={TriangleDownIcon}/>
            </MenuButton>
            <MenuList className='menulist'>
              <NavLink to="/about"><MenuItem className='menuitem'>Download</MenuItem></NavLink>
              <MenuItem className='menuitem'>Create a Copy</MenuItem>
              <MenuItem className='menuitem'>Mark as Draft</MenuItem>
              <MenuItem className='menuitem'>Delete</MenuItem>
              <MenuItem className='menuitem'>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </NavLink>
        
        </li>
        <li>
        <NavLink to="#" activeClassName="active"
        className="hovereffect">
          <Menu>
            <MenuButton  >
              MORE <Icon as={TriangleDownIcon}/>
            </MenuButton>
            <MenuList className='menulist'>
              <NavLink to="/about"><MenuItem className='menuitem'>Download</MenuItem></NavLink>
              <MenuItem className='menuitem'>Create a Copy</MenuItem>
              <MenuItem className='menuitem'>Mark as Draft</MenuItem>
              <MenuItem className='menuitem'>Delete</MenuItem>
              <MenuItem className='menuitem'>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </NavLink>
        
        </li>
        </div>
        
    </nav>
  )
}

export default Navbar