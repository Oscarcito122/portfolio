import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,linkProy }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <Col></Col>
          <a href={linkProy} target='_blank'> <button >Ver proyecto!  </button> </a>
        </div>
      </div>
    </Col>
  )
}