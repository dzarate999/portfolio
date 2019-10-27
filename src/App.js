import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Daniel Zarate',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
        {title: 'Resume', path: '/resume'},
      ],
      home: {
        title: 'Imagination',
        subTitle: 'Projects that make a difference',
        text: 'Checkout more about me below',
      },
      about: {
        title: 'About Me',
        subTitle:
          "I'm a project manager and digital designer focused on UI/UX.",
      },
      contact: {
        title: "Let's Talk",
      },
    };
  }

  render() {
    return (
      <div className="body">
        <Router>
          <Container className="p-0" fluid={true}>
            <Navbar
              className="border-bottom"
              bg="black"
              expand="lg"
              variant="dark"
            >
              <Navbar.Brand>Daniel Zarate</Navbar.Brand>
              <Navbar.Toggle
                className="border-0"
                aria-controls="navbar-toggle"
              />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route
              path="/"
              exact
              render={() => (
                <HomePage
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  text={this.state.home.text}
                />
              )}
            />
            <Route
              path="/about"
              exact
              render={() => (
                <AboutPage
                  title={this.state.about.title}
                  subTitle={this.state.about.subTitle}
                />
              )}
            />
            <Route
              path="/contact"
              exact
              render={() => <ContactPage title={this.state.contact.title} />}
            />
            <Route path="/resume" exact render={() => <ResumePage />} />

            <Footer />
          </Container>
        </Router>
      </div>
    );
  }
}
export default App;
