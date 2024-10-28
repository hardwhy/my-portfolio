import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { Logo } from '../../assets';
import './footer.css';
import { SocialIcons } from '../social-icons/social-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <Image src={Logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <SocialIcons/>
            <p>CopyRight 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
