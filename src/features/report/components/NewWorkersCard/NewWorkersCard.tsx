import React from 'react';
import { Card } from 'primereact/card';
import Props from './types';
import useTotalSalaryCard from './useNewWorkersCard';
import Styles from './styles';

const TotalSalaryCard = ({ newWorkers }: Props) => {
  const { newWorkersTitle } = useTotalSalaryCard();
  if (Array.isArray(newWorkers) && newWorkers.length < 1) return null;
  const renderHeader = () => (
    <p style={Styles.headerText}>{newWorkersTitle}</p>
  );
  return (
    <div id="card-container">
      <Card header={renderHeader} style={Styles.container}>
        {newWorkers.map((workerName) => <p key={workerName} style={Styles.text}>{workerName}</p>)}
      </Card>
    </div>
  );
};

export default TotalSalaryCard;
