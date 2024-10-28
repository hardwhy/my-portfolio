import Image from 'next/image';
import { SocialIcons } from '../social-icons/social-icons';
import './banner-v2.css';
import { Profile } from '../../assets';

export const BannerV2 = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Ayi Hardiyanto</h1>
        <h3>
          And I'm a <span>Front-End Developer</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <div className="btn-box">
          <a href="#">Download CV</a>
          <a href="#">Let's Connect</a>
        </div>
        <SocialIcons />
      </div>
      <div className="home-img">
        <Image src={Profile} alt="profile" />
      </div>
    </section>
  );
};
