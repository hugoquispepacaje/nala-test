import { Button } from 'primereact/button';
import { FooterProps } from './types';
import useFooter from './useFooter';
import Styles from './styles';

const Footer = ({ onSave, onCancel }: FooterProps) => {
  const { cancelLabel, editLabel } = useFooter();
  return (
    <div style={Styles.footerContainer}>
      <Button label={cancelLabel} icon="pi pi-times" onClick={onCancel} severity="danger" />
      <Button label={editLabel} icon="pi pi-check" onClick={onSave} severity="success" />
    </div>
  );
};

export default Footer;
