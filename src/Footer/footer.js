import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerstyles";

// const img = "https://picsum.photos/200/200?grayscale";
const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading
              style={{
                color: "white",
                textAlign: "start",
                marginLeft: "-300px",
              }}
            >
              VVRC
            </Heading>
            {/* <img src={img}></img> */}
          </Column>
          
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Plots </FooterLink>
            <FooterLink href="#">Houses </FooterLink>
            <FooterLink href="#">Interiors</FooterLink>
            <FooterLink href="#">Development</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Nagaram,EcIl,Hyderabad</FooterLink>
            <FooterLink href="#">Telangana State, India</FooterLink>
            <FooterLink href="#">+91 7337259222</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <p>CopyRight © {currentYear} VVRC</p>
    </Box>

  );
};
export default Footer;
