import React from 'react';


const Header = () => {
  return (
    <header>
      <nav className="row">
        <div className="nav-left row">
          <h3>Bookstore CMS</h3>
        </div>
        <div className="nav-right">
          <a href="https://oluwadamilareolusakin.herokuapp.com" target="_blank">Other Projects</a>
          <a href="https://twitter.com/oluwadamilareo_" target="_blank">Twitter</a>
          <a href="https://medium.com/@oluwadamilareo_" target="_blank">Medium</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;