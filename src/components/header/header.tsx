import { ActionIcon } from '@mantine/core';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Container } from '../container/container';
import { Heading } from '../heading/heading';
import * as styles from './styles';

type Props = {
  onSettingsClick: () => void;
};

const headerHight = 80;

export const Header: React.FC<Props> = ({ onSettingsClick }) => (
  <header className={styles.header(headerHight)}>
    <Container height={headerHight} maxWidth={600}>
      <div className={styles.headerContentWrapper}>
        <ActionIcon color="blue" onClick={onSettingsClick} size={30}>
          <GiHamburgerMenu aria-label="settings menu" size={30} />
        </ActionIcon>
        <Heading size="3rem">Pomodoro</Heading>
      </div>
    </Container>
  </header>
);
