import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.png';
import navIcon4 from '../assets/img/nav-icon5.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={100} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
        <h3>¡Redes Sociales!</h3> 
        <Col></Col>
                <a href="https://www.linkedin.com/in/tiago-bergmann-0576b7264/" target='_blank'><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Oscarcito122" target='_blank'><img src={navIcon2} alt="" /></a>
                <a href="https://wa.link/58wbir" target='_blank'><img src={navIcon3} alt="" /></a>
                <a href="mailto:oscarbergmann1106@gmail.com" target='_blank'><img src={navIcon4} alt="" /></a>

            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}