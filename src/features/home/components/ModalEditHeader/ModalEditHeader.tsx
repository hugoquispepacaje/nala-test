import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Props } from './types';
import useModalEditHeader from './useModalEditHeader';
import Styles from './styles';
import ModalFooter from '../../../../components/ModalFooter/ModelFooter';

const ModalEditHeader = ({
  data,
  setData,
  setVisible,
  visible,
}: Props) => {
  const {
    form,
    onChangeForm,
    closeModal,
    saveHeaders,
    headerLabel,
  } = useModalEditHeader(data, setData, setVisible);
  return (
    <Dialog
      header={headerLabel}
      visible={visible}
      onHide={closeModal}
      style={Styles.modalContainer}
      breakpoints={{ '960px': '75vw', '641px': '95vw' }}
      footer={<ModalFooter onCancel={closeModal} onSave={saveHeaders} />}
    >
      <div style={Styles.modalContent}>
        {
          Object.keys(form).map(
            (header) => (
              <div style={Styles.inputContainer} key={header}>
                <label htmlFor={header}>{`${header}:`}</label>
                <InputText
                  id={header}
                  value={form[header]}
                  onChange={(e) => onChangeForm(header)(e.target.value)}
                  key={header}
                />
              </div>
            ),
          )
        }
      </div>
    </Dialog>
  );
};

export default ModalEditHeader;
