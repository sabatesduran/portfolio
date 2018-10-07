import React, {Component} from "react";
import Link from "gatsby-link";
import Logo from "../components/Logo";
import ExternalLink from "../components/ExternalLink";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-aligment">
          <div className="nav">
            <Link exact to="/" activeClassName="active">
              <Logo />
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
            {this.props.links.map(link => {
              return (
                <ExternalLink
                  key={link.node.name}
                  className={link.node.class}
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
  }
}

export default Header;
