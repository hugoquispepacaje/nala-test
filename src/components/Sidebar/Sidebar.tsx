import { Button } from 'primereact/button';
import { Sidebar as SidebarPrime } from 'primereact/sidebar';
import Props from './types';
import Styles from './styles';
import useSidebar from './useSidebar';
import { button } from '../../style/commons';

const Sidebar = ({ visibleSidebar, closeSidebar }: Props) => {
  const { changeLanguageLabel, languageToChange, changeLanguage } = useSidebar();
  return (
    <SidebarPrime visible={visibleSidebar} position="right" onHide={closeSidebar}>
      <div style={Styles.container}>
        <p style={Styles.changeLanguageLabel}>
          {changeLanguageLabel}
        </p>
        <div style={Styles.buttonContainer}>
          <Button label={languageToChange} onClick={changeLanguage} style={button} rounded />
        </div>
      </div>
    </SidebarPrime>
  );
};

export default Sidebar;
