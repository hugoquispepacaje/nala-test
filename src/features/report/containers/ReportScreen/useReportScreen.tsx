import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { filterByMonth } from '../../utils/utiles';
import ImportantHeader, { importantHeaderDefault } from '../../../../models/ImportantHeader';

const useReportScreen = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [monthData, setMonthData] = useState<any>({});
  const [header, setHeader] = useState<ImportantHeader>(importantHeaderDefault);
  useEffect(() => {
    if (state?.report) {
      setMonthData(filterByMonth(state.report.data));
      setHeader(state.report.header);
    } else {
      navigate('/error');
    }
  }, []);
  return { monthData, header };
};

export default useReportScreen;