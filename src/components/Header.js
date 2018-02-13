import React from "react";
import Link from "gatsby-link";
import logo from "../images/favicon.png";
import ExternalLink from "../components/ExternalLink";

const Header = props => (
  <div className="header">
    <div className="header-aligment">
      <div className="nav">
        <Link exact to="/" activeClassName="active">
          <img src={logo} className="logo" alt="Dídac Sabatés" />
        </Link>
        <Link to="/work" activeClassName="active">
          Work
        </Link>
        <Link to="/projects" activeClassName="active">
          Projects
        </Link>
        <Link to="/writings" activeClassName="active">
          Writings
        </Link>
      </div>
      <div className="links">
        {props.links.map(link => {
          return (
            <ExternalLink
              key={link.node.name}
              className={link.node.color}
              url={link.node.url}
            >
              <i className={link.node.icon} />
            </ExternalLink>
          );
        })}
      </div>
    </div>
  </div>
);

export default Header;
