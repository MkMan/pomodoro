import { ButtonIcon } from '../button-icon/button-icon';
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
        <ButtonIcon
          aria-label="settings menu"
          iconName="bars"
          onClick={onSettingsClick}
          size={30}
        />
        <Heading size="3rem">Pomodoro</Heading>
      </div>
    </Container>
  </header>
);
