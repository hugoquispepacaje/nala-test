// eslint-disable-next-line import/no-unresolved
import TreeNode from 'primereact/treenode';
import { OrganizationChart } from 'primereact/organizationchart';
import { TabView, TabPanel } from 'primereact/tabview';
import useReportScreen from './useReportScreen';
import TotalSalaryCard from '../../components/TotalSalaryCard/TotalSalaryCard';
import NewWorkersCard from '../../components/NewWorkersCard/NewWorkersCard';
import RaisesCard from '../../components/RaisesCard/RaisesCard';
import {
  generateOrgChart,
  getIncreaseSalaryWorkers,
  getNewWorkers,
  getTotalSalary,
} from '../../utils/utiles';
import Styles from './styles';
import { montoMoneda } from '../../../../utils/utiles';

const ReportScreen = () => {
  const { monthData, header } = useReportScreen();
  const nodeTemplate = (node: TreeNode) => (
    <div style={Styles.labelsContainer}>
      <p style={Styles.chip}>{node?.data['Nivel Jerárquico']}</p>
      <p style={Styles.nameLabel}>{node.label}</p>
      <p style={Styles.label}>{node?.data[header.department]}</p>
      <p style={Styles.label}>{node?.data.Area}</p>
    </div>
  );
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
          <OrganizationChart
            value={[generateOrgChart(monthData[monthName], header)]}
            nodeTemplate={nodeTemplate}
          />
        </TabPanel>
      ))}
    </TabView>
  );
};

export default ReportScreen;
