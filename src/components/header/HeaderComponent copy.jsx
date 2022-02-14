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
    <div className="row align-items-center">
      <div className="col p-0 m-0">
        <nav
          className="navbar navbar-expand-sm sticky-top p-0 m-0"
          id="categories"
        >
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#categorieslist"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="categorieslist">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    All Categories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Electronic
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Clothing & shoes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Auto
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home & Garden
                  </a>
                </li>
                <li className="nav-item d-none d-md-none d-lg-block">
                  <a className="nav-link" href="#">
                    Health & Beauty
                  </a>
                </li>
                <li className="nav-item d-none d-md-none d-lg-block">
                  <a className="nav-link" href="#">
                    Toys & Games
                  </a>
                </li>
                <li className="nav-item d-none d-md-none d-lg-block">
                  <a className="nav-link" href="#">
                    Luaggage
                  </a>
                </li>
                <li className="nav-item">
                  <div className="btn-group">
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      More
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item d-none d-sm-block" href="#">
                        Health & Beauty
                      </a>
                      <a className="dropdown-item d-md-block" href="#">
                        Toys & Games
                      </a>
                      <a className="dropdown-item d-lg-block" href="#">
                        Luaggage
                      </a>
                      <a className="dropdown-item" href="#">
                        Personal Care
                      </a>
                      <a className="dropdown-item" href="#">
                        Personal Care
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

const Menu2 = () => {
  return (
    <div class="d-flex justify-content-end">
      <nav class="navbar navbar-expand-lg sticky-top navbar-light">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#topMenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="topMenu">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contactus.html">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

function Menu({ toggle, isOpen }, props) {
  return (
    <div className="d-flex justify-content-end">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={props} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
const Menu3 = ({ toggle, isOpen }, props) => {
  return (
    <div className="d-flex justify-content-end">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
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
            <Menu toggle={this.toggle} isOpen={this.state.isOpen} hh="ddd" />
            <Categories />
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
export default Header;
