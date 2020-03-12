import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const AppBar = () => {
  return (
      <Menu fluid widths={4} className='appbar' inverted color='black'>
        <Menu.Item color='green' as={NavLink} style={{ fontFamily: 'Verdana'}} name="Strona Startowa" to="/" activeClassName="active" exact />
        <Menu.Item color='green' as={NavLink} style={{ fontFamily: 'Verdana'}} name="O Grze" to="/about" activeClassName="active" exact />
        {/* <Menu.Item color='green' as={NavLink} style={{ fontFamily: 'Verdana'}} name="Opinie i Komentarze" to="/comments" activeClassName="active" /> */}
        <Menu.Item color='green' as={NavLink} style={{ fontFamily: 'Verdana'}} name="Kontakt" to="/contact" activeClassName="active" />
      </Menu>
  );
};

export default AppBar;
