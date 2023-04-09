import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useReportScreen = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [report, setReport] = useState<any>({});
  useEffect(() => {
    if (state?.report) {
      setReport(state.report);
    } else {
      navigate('/error');
    }
  }, []);
  return { report };
};

export default useReportScreen;
