import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import useReportScreen from './useReportScreen';
import TotalSalaryCard from '../../components/TotalSalaryCard/TotalSalaryCard';
import NewWorkersCard from '../../components/NewWorkersCard/NewWorkersCard';
import RaisesCard from '../../components/RaisesCard/RaisesCard';
import OrgChart from '../../components/OrgChart/OrgChart';
import {
  generateOrgChart,
  getIncreaseSalaryWorkers,
  getNewWorkers,
  getTotalSalary,
} from '../../utils/utiles';
import Styles from './styles';
import { montoMoneda } from '../../../../utils/utiles';
import { button } from '../../../../style/commons';

const ReportScreen = () => {
  const {
    monthData,
    header,
    orgChartRef,
    handlePrint,
    printLabel,
    organizationChartTitle,
  } = useReportScreen();
  return (
    <TabView scrollable>
      {Object.keys(monthData).map((monthName) => (
        <TabPanel header={monthName} key={monthName}>
          <div style={Styles.infoContainer}>
            <TotalSalaryCard
              totalSalary={montoMoneda(getTotalSalary(monthData[monthName], header.salary))}
            />
            <NewWorkersCard
              newWorkers={getNewWorkers(monthData[monthName], monthName, header.startDate)}
            />
            <RaisesCard
              increaseSalaryWorkers={getIncreaseSalaryWorkers(monthName, monthData, header)}
            />
          </div>
          <h3 style={Styles.orgChartTitle}>{organizationChartTitle}</h3>
          <div style={Styles.buttonContainer}>
            <Button label={printLabel} onClick={handlePrint} style={button} rounded />
          </div>
          <div ref={orgChartRef}>
            <OrgChart
              data={generateOrgChart(monthData[monthName], header)}
              header={header}
            />
          </div>
        </TabPanel>
      ))}
    </TabView>
  );
};

export default ReportScreen;
