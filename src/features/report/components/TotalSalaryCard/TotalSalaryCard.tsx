import React from 'react';
import { Card } from 'primereact/card';
import Props from './types';
import useTotalSalaryCard from './useTotalSalaryCard';
import Styles from './styles';

const TotalSalaryCard = ({ totalSalary }: Props) => {
  const { totalSalaryTitle } = useTotalSalaryCard();
  const renderHeader = () => (
    <p style={Styles.headerText}>{totalSalaryTitle}</p>
  );
  return (
    <Card style={Styles.container} header={renderHeader}>
      <p style={Styles.text}>{totalSalary}</p>
    </Card>
  );
};

export default TotalSalaryCard;
