import React from "react";
import Link from "gatsby-link";

const Header = props => (
  <div className="header">
    <div className="header-aligment">
      <div className="nav">
        <Link exact to="/" activeClassName="active">
          Home
        </Link>
        <Link to="/work" activeClassName="active">
          Work
        </Link>
        <Link to="/writings" activeClassName="active">
          Writings
        </Link>
        <Link to="/about" activeClassName="active">
          About
        </Link>
      </div>
      <div className="links">
        {props.links.map(link => {
          return (
            <a
              key={link.name}
              href={link.url}
              className={link.color}
              target="_blank"
            >
              <i className={link.icon} />
            </a>
          );
        })}
      </div>
    </div>
  </div>
);

export default Header;
