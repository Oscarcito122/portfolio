import skill1 from "../assets/img/html.png";
import skill2 from "../assets/img/css.png";
import skill3 from "../assets/img/javascript.png";
import skill4 from "../assets/img/react.png";
import skill5 from "../assets/img/redux.png";
import skill6 from "../assets/img/tailwind.png";
import skill7 from "../assets/img/typescript.png";
import skill8 from "../assets/img/nodejs.png";
import skill9 from "../assets/img/git.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={skill1} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={skill2} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={skill3} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={skill4} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={skill5} alt="Image" />
                                <h5>Redux Toolkit</h5>
                            </div>
                            <div className="item">
                                <img src={skill6} alt="Image" />
                                <h5>Tailwind CSS</h5>
                            </div>
                            <div className="item">
                                <img src={skill7} alt="Image" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={skill8} alt="Image" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={skill9} alt="Image" />
                                <h5>Git & Github</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}