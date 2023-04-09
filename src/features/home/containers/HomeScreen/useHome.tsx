import { useState } from 'react';

const useHome = () => {
  const [data, setData] = useState<any[]>([]);
  const [hasData, setHasData] = useState<boolean>(false);
  const [modalEditVisible, setModalEditVisible] = useState<boolean>(false);
  const [modalImportantVisible, setModalImportantVisible] = useState<boolean>(false);
  return {
    data,
    setData,
    hasData,
    setHasData,
    modalEditVisible,
    setModalEditVisible,
    modalImportantVisible,
    setModalImportantVisible,
  };
};

export default useHome;
