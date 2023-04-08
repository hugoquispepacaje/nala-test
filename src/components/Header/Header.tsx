import { Button } from 'primereact/button';
import Styles from './styles';
import useHeader from './useHeader';

const Header = () => {
  const { language, onChangeLanguage, otherLanguage } = useHeader();
  return (
    <div style={Styles.headerContainer}>
      <h1 style={Styles.title}>{language.data.title}</h1>
      <div>
        <Button label={otherLanguage} onClick={onChangeLanguage} severity="info" rounded />
      </div>
    </div>
  );
};

export default Header;
