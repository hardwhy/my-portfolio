import Image from 'next/image';
import { SocialIcons } from '../social-icons/social-icons';
import './css/banner-v2.css';
import { Profile } from '../../assets';
import { Typing } from '../typing/typing';
import { Col, Container, Row } from 'react-bootstrap';

export const Banner = () => {
  return (
    <section className="home" id="home">
      <Container>
        <Row className="align-items-center flex-wrap flex-md-nowrap gap-10 gap-sm-20">
          <Col xs={12} md={6} xl={7}>
            <div className="home-content">
              <h3>Hi, I am</h3>
              <h1>Ayi Hardiyanto</h1>
              <h3>
                <Typing
                  strings={[
                    'Software Engineer',
                    'Front-End Developer',
                    'Mobile Developer',
                    'Flutter Developer',
                  ]}
                />
              </h3>
              <p>
                Experienced Software Developer adept in bringing forth expertise
                in the design, installation, testing, and maintenance of
                software systems. Equipped with a diverse and promising skill
                set. Proficient in various platforms, languages, and embedded
                systems. Experienced with the latest cutting-edge development
                tools and procedures. Able to effectively self-manage during
                independent projects, as well as collaborate as part of a
                productive team.
              </p>
              <Row className="align-items-center flex-wrap g-3">
                <Col sm={'auto'} className="btn-box">
                  <a href={process.env.DOWNLOAD_CV_URL ?? ''}>Download CV</a>
                </Col>
                <Col sm={'auto'}>
                  <SocialIcons needAnimation />
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={'auto'} className="d-flex justify-content-center mx-auto">
            <div className="home-img">
              <Image
                src={Profile}
                alt="profile"
                className="img-fluid rounded-circle"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
