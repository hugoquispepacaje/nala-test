import React from 'react';
import { Card } from 'primereact/card';
import Props from './types';
import useRaisesCard from './useRaisesCard';
import Styles from './styles';

const RaisesCard = ({ increaseSalaryWorkers }: Props) => {
  const {
    increaseSalaryWorkersTitle,
    workerNameLabel,
    workerIncreaseLabel,
  } = useRaisesCard();
  if (Array.isArray(increaseSalaryWorkers) && increaseSalaryWorkers.length < 1) return null;
  const renderHeader = () => (
    <p style={Styles.headerText}>{increaseSalaryWorkersTitle}</p>
  );
  return (
    <Card style={Styles.container} header={renderHeader}>
      {increaseSalaryWorkers.map((worker) => (
        <div key={worker.name} style={Styles.workerContainer}>
          <p style={Styles.labelText}>{`${workerNameLabel}:`}</p>
          <p style={Styles.text}>{worker.name}</p>
          <p style={Styles.labelText}>{`${workerIncreaseLabel}:`}</p>
          <p style={Styles.text}>{worker.increaseSalary}</p>
        </div>
      ))}
    </Card>
  );
};

export default RaisesCard;
