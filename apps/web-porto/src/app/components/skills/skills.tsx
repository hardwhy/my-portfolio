import { Col, Container, Row } from 'react-bootstrap';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './skills.css';
import 'react-circular-progressbar/dist/styles.css';

interface Skill {
  value: number;
  name: string;
}

export const MySkills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    {
      value: 80,
      name: 'Mobile Development',
    },
    {
      value: 80,
      name: 'Back-end Development',
    },
    {
      value: 80,
      name: 'Front-end Development',
    },
  ] as Skill[];

  return (
    <section id="skills" className="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Carousel
                responsive={responsive}
                infinite
                className="skill-slider"
              >
                {skills.map((s, index) => (
                  <div className="item" key={'skills' + index}>
                    <CircularProgressbar
                      value={s.value}
                      text={`${s.value}%`}
                      styles={buildStyles({
                        rotation: 0.25,
                        strokeLinecap: 'round',
                        textSize: '16px',
                        pathColor: '#90CAF980',
                        textColor: '#fff',
                        pathTransitionDuration: 0.5,

                        trailColor: 'none',
                      })}
                    />
                    <h5>{s.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
