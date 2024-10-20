import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './banner.css';
import { Header } from '../../assets';

enum ToRotate {
  MOBILE = 'Mobile Developer',
  FRONT_END = 'Front-end Developer',
  BACK_END = 'Back-end Developer',
}

export const MyBanner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState<string>('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = Object.values(ToRotate);
  const period = 1000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText?.substring(0, text.length - 1)
      : fullText?.substring(0, text.length + 1);
    if (updatedText) {
      setText(updatedText);
    }
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">{"Hardy's Portfolio"} </span>
            <h1>
              {'Change with heading'} <span className="wrap">{text}</span>
            </h1>
            <p>{'Change with description'}</p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Image className='illustration' src={Header} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
