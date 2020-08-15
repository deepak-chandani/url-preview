import React from 'react';

const Header = (props) => {
  return (
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">

        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <strong>Url Preview</strong>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;
