import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
} from "react-icons/ai";
import { SiWattpad } from "react-icons/si";
import { FaTumblr } from "react-icons/fa";
import { TbBrandAo3 } from "react-icons/tb";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>"tell your cat i said pspsps!" 😼</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} _GRIS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.wattpad.com/user/_aboutGris"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiWattpad />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://aboutgris.tumblr.com/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTumblr />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://archiveofourown.org/users/grisverse/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <TbBrandAo3 />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/wisngaan_/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
