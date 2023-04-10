import {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { filterByMonth } from '../../utils/utiles';
import ImportantHeader, { importantHeaderDefault } from '../../../../models/ImportantHeader';
import ObjectGeneric from '../../../../models/ObjectGeneric';
import LanguageContext from '../../../../context/Language/LanguageContext';

const useReportScreen = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const orgChartRef = useRef(null);
  const [monthData, setMonthData] = useState<ObjectGeneric>({});
  const [header, setHeader] = useState<ImportantHeader>(importantHeaderDefault);
  const { language } = useContext(LanguageContext);
  const handlePrint = useReactToPrint({
    content: () => orgChartRef.current,
  });
  useEffect(() => {
    if (state?.report) {
      setMonthData(filterByMonth(state.report.data));
      setHeader(state.report.header);
    } else {
      navigate('/error');
    }
  }, []);
  return {
    monthData,
    header,
    orgChartRef,
    handlePrint,
    printLabel: language.data.report.printLabel,
    organizationChartTitle: language.data.report.organizationChartTitle,
  };
};

export default useReportScreen;
