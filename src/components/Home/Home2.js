import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillInstagram } from "react-icons/ai";
import { SiWattpad } from "react-icons/si";
import { FaTumblr } from "react-icons/fa";
import { TbBrandAo3 } from "react-icons/tb";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span>@pika</span><span  className="purple">pipo</span>
              <br />
              <span style={{ fontSize: "0.5em" }}>
                she/her | Based in Vietnam 🇻🇳 | Ravenclaw 🦅
              </span>
            </h1>

            <p className="home-about-body">
              <b className="purple">A daydreamer</b>, so lost in my thoughts
              that i'm forgetting the world around me, i think… 🤷‍♂️
              <br />
              <br />I fell in love with
              <i>
                <b className="purple"> Dramione </b>
              </i>{" "}
              , and I love these two idiots so bad. ✨
              <br />
              <br />
              Welcome to my Dramione world! &nbsp;
              <i>
                <b className="purple">
                  I hope the stories I bring will make you happy.{" "}
                </b>{" "}
                <b className="purple"></b>
              </i>
              <br />
              <br />
              Don't forget to leave some lovely comments on{" "}
              <b className="purple">my fics!</b> Hihi 💕✨ <br />
              <i>
                <b className="purple">
                  {" "}
                  <br />
                  Many thanks!
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.wattpad.com/user/pikapipo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiWattpad />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://aboutgris.tumblr.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTumblr />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://archiveofourown.org/users/pikapipo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <TbBrandAo3 />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/wisngaan_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
