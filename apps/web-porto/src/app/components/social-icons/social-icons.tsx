import Image from 'next/image';
import './social-icons.css';
import BoxIcon from '../box-icon';
import { IconData } from '../../models';

const socialIcons: IconData[] = [
  {
    component: <BoxIcon name="bxl-linkedin bx-sm" />,
    target: 'https://www.linkedin.com/in/ayi-hardiyanto-986b88139/',
  },
  {
    component: <BoxIcon name="bxl-instagram bx-sm" />,
    target: 'https://www.instagram.com/ayi.hardiyanto/',
  },
  {
    component: <BoxIcon name="bxl-github bx-sm" />,
    target: 'https://github.com/hardwhy?tab=repositories',
  },
];

export const SocialIcons = (props: { needAnimation?: boolean }) => {
  const { needAnimation = false } = props;
  let className = 'social-icon';
  if (needAnimation) className = className + '-animated';
  return (
    <div className={className}>
      {socialIcons.map((ni, index) => (
        <a
          key={`social-icon-#${index + 1}`}
          target="_blank"
          style={{ '--i': index + 1 } as React.CSSProperties}
          href={ni.target}
        >
          {ni.component}
        </a>
      ))}
    </div>
  );
};
