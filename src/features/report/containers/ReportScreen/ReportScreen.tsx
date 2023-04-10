// eslint-disable-next-line import/no-unresolved
import TreeNode from 'primereact/treenode';
import { OrganizationChart } from 'primereact/organizationchart';
import { TabView, TabPanel } from 'primereact/tabview';
import useReportScreen from './useReportScreen';
import { generateOrgChart } from '../../utils/utiles';
import Styles from './styles';

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
