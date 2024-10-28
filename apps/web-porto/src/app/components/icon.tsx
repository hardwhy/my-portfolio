import React from 'react';
import { IconName } from 'boxicons';

interface IconProps {
  name: IconName;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  return <i className={`bx ${name}`}></i>;
};

export default Icon;
