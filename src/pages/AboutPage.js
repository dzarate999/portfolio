import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container';

function AboutPage(props) {
  return (
    <div>
      <Container fluid={true}>
        <Hero title={props.title} subTitle={props.subTitle} />

        <Row className="justify-content-center">
          <Col xs="0" lg="2" />
          <Col xs lg="4">
            <p>
              I currently reside in Prosper, TX which is a bit north of Dallas.
              I help clients take a dream in their head and implement it in
              reality. I specialize in taking a complex and length processes and
              breaking it down into smaller parts. In my spare time, I’m either
              at the gym, rough housing with my three dogs, or playing trivia
              with my wife and friends.
            </p>
            <p>
              I studied criminal justice at Sam Houston State University, where
              I received my bachelor’s degree. After 8 years as a police officer
              in Dallas, I was approached to start a Dallas division of a family
              sign company in one of the largest home market expansions in the
              United States. I worked with local and national home builders,
              residential developers, and marketing agencies to draw the hordes
              of future home owners to their new dream home.{' '}
            </p>
            <p>
              I am self-taught and forever learning in the ways of graphic
              design, web design, and functional programming. I use all of
              Adobe’s tools with all of YouTube’s videos to expand upon my love
              of design. I have a passion for learning, and I have a passion for
              the arts.
            </p>
          </Col>
          <Col md="1" />
          <Col xs lg="auto">
            <h3 className="display-5 font-weight-light">SKILLS</h3>
            <p>
              <span>- Project Manager</span>
              <br />
              <span>- Product Manager</span>
              <br />
              <span> - Visual Design</span>
              <br />
              <span>- Art Director</span>
              <br />
              <span>- Wireframing</span>
              <br />
              <span>- Marketing</span>
            </p>
            <h3 className="display-5 font-weight-light">AREAS OF INTEREST</h3>
            <p>
              <span>- Technology</span>
              <br />
              <span>- Music</span>
              <br />
              <span> - Fitness</span>
              <br />
              <span>- Video Games</span>
              <br />
              <span>- Table Top Games</span>
            </p>
            <Button href='/resume' variant="outline-dark" size="lg" block>
              Resume
            </Button>
          </Col>
          <Col xs="0" lg="2" />
        </Row>
      </Container>
    </div>
  );
}

export default AboutPage;
