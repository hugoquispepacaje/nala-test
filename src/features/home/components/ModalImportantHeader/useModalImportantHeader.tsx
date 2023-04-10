import {
  useState,
  useEffect,
  useContext,
  useRef,
} from 'react';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';
import { getHeaders } from '../../../../utils/utiles';
import LanguageContext from '../../../../context/Language/LanguageContext';

const useModalImportantHeader = (
  data: any[],
  setVisible: (value: boolean) => void,
) => {
  const toast = useRef<Toast>(null);
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [headers, setHeaders] = useState<string[]>([]);
  const [id, setId] = useState<string>('');
  const [bossId, setBossId] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [salary, setSalary] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');

  useEffect(() => {
    setHeaders(getHeaders(data[0] || []));
  }, [data]);

  const onChangeId = (value: string) => {
    setId(value);
  };

  const onChangeBossId = (value: string) => {
    setBossId(value);
  };

  const onChangeDepartment = (value: string) => {
    setDepartment(value);
  };

  const onChangeSalary = (value: string) => {
    setSalary(value);
  };

  const onChangeStartDate = (value: string) => {
    setStartDate(value);
  };

  const clearFields = () => {
    setId('');
    setBossId('');
    setDepartment('');
    setSalary('');
    setStartDate('');
  };

  const onCancel = () => {
    clearFields();
    setVisible(false);
  };

  const onContinue = () => {
    if ([id, bossId, department, salary, startDate].includes('')) {
      toast?.current?.show({
        severity: 'error',
        summary: language.data.importantHeader.errorMessageHeader,
        detail: language.data.importantHeader.errorMessage,
        life: 3000,
      });
      return;
    }
    clearFields();
    setVisible(false);
    navigate('/report', {
      state: {
        report: {
          data,
          header: {
            id,
            bossId,
            department,
            salary,
            startDate,
          },
        },
      },
    });
  };

  return {
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
    saveLabel: language.data.save,
    idLabel: language.data.importantHeader.idLabel,
    bossIdLabel: language.data.importantHeader.bossIdLabel,
    departmentLabel: language.data.importantHeader.departmentLabel,
    headerTitle: language.data.importantHeader.headerTitle,
    message: language.data.importantHeader.message,
    salaryLabel: language.data.importantHeader.salaryLabel,
    startDateLabel: language.data.importantHeader.startDateLabel,
  };
};

export default useModalImportantHeader;
