import { Button } from 'components';

interface IHeaderLink {
  label: string;
  path: string;
}

export const HeaderLink = ({ label, path }: IHeaderLink) => {
  return (
    <a href={path}>
      <Button>{label}</Button>
    </a>
  );
};
