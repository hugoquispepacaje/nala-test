import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import Styles from './styles';
import Props from './types';
import useHeader from './useHeader';

const Header = ({ openSidebar }: Props) => {
  const { goHome } = useHeader();
  return (
    <div style={Styles.headerContainer}>
      <Image
        src="https://www.nalarocks.com/wp-content/uploads/2022/09/logo-blanco.png"
        style={Styles.image}
        height="50px"
        onClick={goHome}
      />
      <div>
        <Button icon="pi pi-bars" onClick={openSidebar} style={Styles.button} text />
      </div>
    </div>
  );
};

export default Header;
