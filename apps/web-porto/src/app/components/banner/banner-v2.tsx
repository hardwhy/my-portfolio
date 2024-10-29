import Image from 'next/image';
import { SocialIcons } from '../social-icons/social-icons';
import './banner-v2.css';
import { Profile } from '../../assets';
import { Typing } from '../typing/typing';

export const Banner = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Ayi Hardiyanto</h1>
        <h3>
          And I'm a{' '}
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
          Experienced Software Developer adept in bringing forth expertise in
          the design, installation, testing, and maintenance of software
          systems. Equipped with a diverse and promising skill set. Proficient
          in various platforms, languages, and embedded systems. Experienced
          with the latest cutting-edge development tools and procedures. Able to
          effectively self-manage during independent projects, as well as
          collaborate as part of a productive team.
        </p>
        <div className="action-container">
          <div className="btn-box">
            <a href={process.env.DOWNLOAD_CV_URL ?? ''}>Download CV</a>
          </div>
          <SocialIcons needAnimation />
        </div>
      </div>
      <div className="home-img">
        <Image src={Profile} alt="profile" />
      </div>
    </section>
  );
};
