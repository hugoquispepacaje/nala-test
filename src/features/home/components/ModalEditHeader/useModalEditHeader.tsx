import { useState, useEffect, useContext } from 'react';
import { getDataWithNewHeader, getInitForm } from './utiles';
import LanguageContext from '../../../../context/Language/LanguageContext';
import ObjectGeneric from '../../../../models/ObjectGeneric';

const useModalEditHeader = (
  data: any[],
  setData: (value: any[]) => void,
  setVisible: (value: boolean) => void,
) => {
  const [form, setForm] = useState<ObjectGeneric>({});
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    const headers = Array.isArray(data) && data.length > 0 ? Object.keys(data[0]) : [];
    setForm(getInitForm(headers));
  }, [data]);
  const onChangeForm = (header: string) => (value: string) => {
    setForm((f) => ({ ...f, [header]: value }));
  };
  const closeModal = () => {
    setVisible(false);
  };
  const saveHeaders = () => {
    setData(getDataWithNewHeader(data, form));
    closeModal();
  };

  return {
    form,
    onChangeForm,
    closeModal,
    saveHeaders,
    headerLabel: language.data.importFile.editHeader,
  };
};

export default useModalEditHeader;
