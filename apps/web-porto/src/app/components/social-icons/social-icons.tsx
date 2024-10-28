import Image from 'next/image';
import './social-icons.css';
import Icon from '../icon';

const socialIcons = [
  <Icon name="bxl-linkedin bx-sm" />,
  <Icon name="bxl-instagram bx-sm" />,
];

export const SocialIcons = () => {
  return (
    <div className="social-icon">
      {socialIcons.map((ni, index) => (
        <a key={`social-icon-#${index + 1}`} href="#">
          {ni}
        </a>
      ))}
    </div>
  );
};
