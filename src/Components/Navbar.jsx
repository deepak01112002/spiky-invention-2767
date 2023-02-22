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
function Navbar() {
  

  return (
    <nav style={{color:"grey"}}>
      <div style={{display:"flex",listStyleType:"none",justifyContent:"space-around"}}>
       <li>
          <NavLink to="/" activeClassName="active"
          className="hovereffect">HOME </NavLink>
          
          
        </li>
        <li>
          <NavLink to="/about" activeClassName="active"
          className="hovereffect">GUIDE </NavLink>
          
          
        </li>
        <li>
          <NavLink to="/" activeClassName="active"
          className="hovereffect">MWC </NavLink>
          
          
        </li>
        <li>
          <NavLink to="/" activeClassName="active"
          className="hovereffect">NEWS </NavLink>
          
          
        </li>
        <li>
          <NavLink to="/" activeClassName="active"
          className="hovereffect">REVIEWS </NavLink>
          
          
        </li>
        <li>
          <NavLink to="/" activeClassName="active"
          className="hovereffect">FEATURES </NavLink>
          
          
        </li>
        <li>
        <NavLink to="/" activeClassName="active"
        className="hovereffect">
          <Menu>
            <MenuButton  >
              VIDEOS <Icon as={TriangleDownIcon}/>
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
          <NavLink to="/" activeClassName="active"
          className="hovereffect">PODCASTS </NavLink>
          
          
        </li>
       
        <li>
        <NavLink to="/" activeClassName="active"
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
        <NavLink to="/" activeClassName="active"
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
        <NavLink to="/about" activeClassName="active"
        className="hovereffect">BRANDS </NavLink>
        
        </li>
        <li>
        <NavLink to="/" activeClassName="active"
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
        <NavLink to="/" activeClassName="active"
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