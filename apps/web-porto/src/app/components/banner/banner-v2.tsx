import Image from 'next/image';
import { SocialIcons } from '../social-icons/social-icons';
import './banner-v2.css';
import { Profile } from '../../assets';
import { Typing } from '../typing/typing';

export const BannerV2 = () => {
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
          in various platforms, languages, and embedded
          systems.Experiencedwiththelatestcutting-edgedevelopmenttoolsandprocedures.
          Abletoeffectivelyself-manageduring independent projects, as well as
          collaborate as part of a productive team.
        </p>
        <div className="btn-box">
          <a href="#">Download CV</a>
          <a href="#">Let's Connect</a>
        </div>
        <SocialIcons needAnimation />
      </div>
      <div className="home-img">
        <Image src={Profile} alt="profile" />
      </div>
    </section>
  );
};
