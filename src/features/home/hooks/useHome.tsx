import { useState } from 'react';

const useHome = () => {
  const [data, setData] = useState<any[]>([]);
  const [hasData, setHasData] = useState<boolean>(false);
  const [modalEditVisible, setModalEditVisible] = useState<boolean>(false);
  return {
    data, setData, hasData, setHasData, modalEditVisible, setModalEditVisible,
  };
};

export default useHome;
