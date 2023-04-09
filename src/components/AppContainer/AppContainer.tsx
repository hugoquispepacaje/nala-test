import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import styles from './styles';
import Props from './types';
import useAppContainer from './useAppContainer';

const AppContainer = ({ children }: Props) => {
  const { visibleSidebar, openSidebar, closeSidebar } = useAppContainer();
  return (
    <div style={styles.appContainer}>
      <Header openSidebar={openSidebar} />
      <Sidebar visibleSidebar={visibleSidebar} closeSidebar={closeSidebar} />
      {children}
    </div>
  );
};

export default AppContainer;
