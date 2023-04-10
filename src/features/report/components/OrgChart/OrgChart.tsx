import React from 'react';
// eslint-disable-next-line import/no-unresolved
import TreeNode from 'primereact/treenode';
import { OrganizationChart } from 'primereact/organizationchart';
import Props from './types';
import Styles from './styles';

const OrgChart = ({ data, header }: Props) => {
  const nodeTemplate = (node: TreeNode) => (
    <div style={Styles.labelsContainer}>
      <p style={Styles.chip}>{node?.data['Nivel Jerárquico']}</p>
      <p style={Styles.nameLabel}>{node.label}</p>
      <p style={Styles.label}>{node?.data[header.department]}</p>
      <p style={Styles.label}>{node?.data.Area}</p>
    </div>
  );
  return (
    <OrganizationChart value={[data]} nodeTemplate={nodeTemplate} style={Styles.container} />
  );
};

export default OrgChart;
