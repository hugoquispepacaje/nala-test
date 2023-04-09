import { Button } from 'primereact/button';
import Props from './types';
import useModalFooter from './useModalFooter';
import Styles from './styles';
import { button, buttonInverted } from '../../style/commons';

const ModalFooter = ({
  onSave,
  onCancel,
  customCancelLabel,
  customSaveLabel,
}: Props) => {
  const { cancelLabel, editLabel } = useModalFooter(customCancelLabel, customSaveLabel);
  return (
    <div style={Styles.container}>
      <Button label={cancelLabel} icon="pi pi-times" onClick={onCancel} style={buttonInverted} rounded />
      <Button label={editLabel} icon="pi pi-check" onClick={onSave} style={button} rounded />
    </div>
  );
};

export default ModalFooter;
