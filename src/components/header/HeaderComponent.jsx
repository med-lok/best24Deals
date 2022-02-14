import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Logo = () => {
  return (
    <div className="col-2 col-sm-2 col-lg-2 align-self-center">
      <img
        src={process.env.PUBLIC_URL + "/images/Logo2.svg"}
        className="img-fluid"
      />
    </div>
  );
};

const Search = () => {
  return (
    <div className="col-7 col-sm-7 col-lg-5 search mt-3">
      <form>
        <div className="form-group row">
          <div className="col mx-0 px-0">
            <input
              type="text"
              className="form-control border-right-0"
              id="inputSearch"
              name="inputSearch"
              placeholder="Search"
            />
          </div>
          <div className="col mx-0 px-0 button">
            <button type="submit" className="btn">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
const Categories = () => {
  return (
    <div className="nav-scroller py-1 mb-2" id="categorieslist">
      <nav className="nav d-flex justify-content-between">
        <a className="p-2 text-muted d-none d-md-block" href="#">
          All
        </a>
        <a className="p-2 text-muted" href="#">
          Electronic
        </a>
        <a className="p-2 text-muted" href="#">
          Clothing & shoes
        </a>
        <a className="p-2 text-muted" href="#">
          Toys & Games
        </a>
        <a className="p-2 text-muted" href="#">
          Culture
        </a>
        <a className="p-2 text-muted" href="#">
          Luaggage
        </a>
        <a className="p-2 text-muted" href="#">
          Luaggage
        </a>
        <a className="p-2 text-muted" href="#">
          Luaggage
        </a>
        <a className="p-2 text-muted" href="#">
          Luaggage
        </a>
        <a className="p-2 text-muted" href="#">
          Luaggage
        </a>
        <a className="p-2 text-muted" href="#">
          Luaggage
        </a>
      </nav>
    </div>
  );
};

const Menu = ({ toggle, isOpen }) => {
  return (
    <div className=" justify-content-end">
      <Navbar className="navbar navbar-expand-lg sticky-top navbar-light">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar id="topMenu">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">About us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Contact us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <Jumbotron fluid className="m-0 pb-4">
        <Container>
          <Row className="align-items-center">
            <Logo />
            <Search />
            <Menu toggle={this.toggle} isOpen={this.state.isOpen} />
          </Row>
          <Row className="align-items-center">
            <Categories />
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
export default Header;
