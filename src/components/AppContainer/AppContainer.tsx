import Header from '../Header/Header';
import styles from './styles';
import Props from './types';

const AppContainer = ({ children }: Props) => (
  <div style={styles.appContainer}>
    <Header />
    {children}
  </div>
);

export default AppContainer;
