import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1 from "../assets/img/proyectotessa.png";
import project2 from "../assets/img/proyectorecipe.jpg";
import project3 from "../assets/img/proyectoportfolio.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Teesa",
      description: "Aplicación Web E-commerce responsive creada para el negocio Teesa S.A.S., empresa dedicada a la comercialización de equipos alimenticios.",
      imgUrl: project1,
      linkProy: "https://pf-teesa-front.vercel.app/"
    },
    {
      title: "Recipe Ship",
      description: "Aplicación Web para los amantes de las recetas, el usuario puede navegar, filtrar, y crear datos acerca de recetas.",
      imgUrl: project2,
      linkProy: "https://github.com/Oscarcito122/proyectoindivualfood/tree/master"

    },
    {
      title: "Portfolio",
      description: "Portafolio en línea responsive para destacar mis proyectos como desarrollador web frontend. ¡Tú estás aquí! Gracias por entrar.",
      imgUrl: project3,
      linkProy: "https://portfolio-pi-eight-25.vercel.app/"

    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>Todos mis proyectos han sido cuidadosamente diseñados con el objetivo de brindar una experiencia de usuario intuitiva y sencilla,¡Espero que disfrutes explorando lo que he creado!.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}