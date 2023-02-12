import {
  ActionIcon,
  Container,
  Header as MantineHeader,
  Title,
} from '@mantine/core';
import { GiHamburgerMenu } from 'react-icons/gi';

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
        <Title size="3rem">Pomodoro</Title>
      </HeaderContentWrapper>
    </Container>
  </MantineHeader>
);
