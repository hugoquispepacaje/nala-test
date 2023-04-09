import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { Message } from 'primereact/message';
import { Toast } from 'primereact/toast';
import Props from './types';
import useModalImportantHeader from './useModalImportantHeader';
import Styles from './styles';
import ModalFooter from '../../../../components/ModalFooter/ModelFooter';

const ModalImportantHeader = ({
  data,
  setVisible,
  visible,
}: Props) => {
  const {
    headers,
    onCancel,
    onContinue,
    toast,
    id,
    bossId,
    department,
    salary,
    startDate,
    onChangeId,
    onChangeBossId,
    onChangeDepartment,
    onChangeSalary,
    onChangeStartDate,
    saveLabel,
    idLabel,
    bossIdLabel,
    departmentLabel,
    headerTitle,
    message,
    salaryLabel,
    startDateLabel,
  } = useModalImportantHeader(data, setVisible);
  return (
    <>
      <Dialog
        header={headerTitle}
        visible={visible}
        onHide={onCancel}
        style={Styles.modalContainer}
        breakpoints={{ '960px': '75vw', '641px': '95vw' }}
        footer={<ModalFooter onCancel={onCancel} onSave={onContinue} customSaveLabel={saveLabel} />}
      >
        <div style={Styles.modalContent}>
          <Message text={message} style={Styles.messageContainer} />
          <div style={Styles.inputContainer}>
            <label htmlFor={idLabel}>{idLabel}</label>
            <Dropdown
              id={idLabel}
              options={headers}
              value={id}
              onChange={(e) => onChangeId(e.value)}
            />
          </div>
          <div style={Styles.inputContainer}>
            <label htmlFor={bossIdLabel}>{bossIdLabel}</label>
            <Dropdown
              id={bossIdLabel}
              options={headers}
              value={bossId}
              onChange={(e) => onChangeBossId(e.value)}
            />
          </div>
          <div style={Styles.inputContainer}>
            <label htmlFor={departmentLabel}>{departmentLabel}</label>
            <Dropdown
              id={departmentLabel}
              options={headers}
              value={department}
              onChange={(e) => onChangeDepartment(e.value)}
            />
          </div>
          <div style={Styles.inputContainer}>
            <label htmlFor={salaryLabel}>{salaryLabel}</label>
            <Dropdown
              id={salaryLabel}
              options={headers}
              value={salary}
              onChange={(e) => onChangeSalary(e.value)}
            />
          </div>
          <div style={Styles.inputContainer}>
            <label htmlFor={startDateLabel}>{startDateLabel}</label>
            <Dropdown
              id={startDateLabel}
              options={headers}
              value={startDate}
              onChange={(e) => onChangeStartDate(e.value)}
            />
          </div>
        </div>
      </Dialog>
      <Toast ref={toast} />
    </>
  );
};

export default ModalImportantHeader;
