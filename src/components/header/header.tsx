import { ActionIcon, Container, Header as MantineHeader } from '@mantine/core';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Heading } from '../heading/heading';
import { HeaderContentWrapper } from './styled';

type Props = {
  onSettingsClick: () => void;
};

const headerHight = 80;

export const Header: React.FC<Props> = ({ onSettingsClick }) => (
  <MantineHeader height={headerHight}>
    <Container h={headerHight}>
      <HeaderContentWrapper>
        <ActionIcon color="blue" onClick={onSettingsClick} size={30}>
          <GiHamburgerMenu aria-label="settings menu" size={30} />
        </ActionIcon>
        <Heading size="3rem">Pomodoro</Heading>
      </HeaderContentWrapper>
    </Container>
  </MantineHeader>
);
