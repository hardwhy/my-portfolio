import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { Logo, navIcons } from '../../assets';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <Image src={Logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className='social-icon'>
              {navIcons.map((ni) => (
                <a key={ni} href="#">
                  <Image src={ni} alt="" />
                </a>
              ))}
            </div>
            <p>CopyRight 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
