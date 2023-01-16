import {
  ActionIcon,
  Container,
  Header as MantineHeader,
  Title,
} from '@mantine/core';
import { CiSettings } from 'react-icons/ci';

import { HeaderContentWrapper } from './styled';

type Props = {
  onSettingsClick: () => void;
};

export const Header: React.FC<Props> = ({ onSettingsClick }) => (
  <MantineHeader height={60}>
    <Container>
      <HeaderContentWrapper>
        <ActionIcon
          color="blue"
          onClick={onSettingsClick}
          size={30}
          variant="outline"
        >
          <CiSettings aria-label="settings menu" size={30} />
        </ActionIcon>
        <Title size="3rem">Pomodoro</Title>
      </HeaderContentWrapper>
    </Container>
  </MantineHeader>
);
