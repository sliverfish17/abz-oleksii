import { ElementType, ReactNode } from 'react';

import styles from './Heading.module.scss';

interface IHeadingProps {
  tag?: ElementType;
  children: ReactNode;
  className?: string;
}

export const Heading = ({ tag: Tag = 'h2', children, className = '' }: IHeadingProps) => {
  return <Tag className={`${styles.heading} ${className}`}>{children}</Tag>;
};
