import React from "react";
import Link from "gatsby-link";
import logo from "../images/favicon.png"

const Header = props => (
  <div className="header">
    <div className="header-aligment">
      <div className="nav">
        <Link exact to="/" activeClassName="active">
          <img src={logo} className="logo" alt="Dídac Sabatés"/>
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
              key={link.node.name}
              href={link.node.url}
              className={link.node.color}
              target="_blank"
              rel="noopener"
            >
              <i className={link.node.icon} />
            </a>
          );
        })}
      </div>
    </div>
  </div>
);

export default Header;
