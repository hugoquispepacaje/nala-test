import useReportScreen from './useReportScreen';

const ReportScreen = () => {
  const { report } = useReportScreen();
  return (<p>{JSON.stringify(report)}</p>);
};

export default ReportScreen;
