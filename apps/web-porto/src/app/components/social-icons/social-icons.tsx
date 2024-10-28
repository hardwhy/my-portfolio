import Image from 'next/image';
import './social-icons.css';
import Icon from '../icon';

const socialIcons = [
  <Icon name="bxl-linkedin bx-sm" />,
  <Icon name="bxl-instagram bx-sm" />,
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
          style={{ '--i': index + 1 } as React.CSSProperties}
          href="#"
        >
          {ni}
        </a>
      ))}
    </div>
  );
};
