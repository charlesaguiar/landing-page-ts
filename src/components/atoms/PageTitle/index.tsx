import React from 'react';

import { Container, Title } from './styles';

interface IProps {
  title: string;
  hasEmoji?: boolean;
}

const PageTitle: React.FC<IProps> = ({ title, hasEmoji = false }) => {
  return (
    <Container>
      <Title>{`${title} ${hasEmoji && '✨'}`}</Title>
    </Container>
  );
};

export default PageTitle;
