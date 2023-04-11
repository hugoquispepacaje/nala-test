import React from 'react';
import { Card } from 'primereact/card';
import Props from './types';
import useRaisesCard from './useRaisesCard';
import Styles from './styles';
import { montoMoneda } from '../../../../utils/utiles';

const RaisesCard = ({ increaseSalaryWorkers }: Props) => {
  const {
    increaseSalaryWorkersTitle,
    workerIncreaseLabel,
  } = useRaisesCard();
  if (Array.isArray(increaseSalaryWorkers) && increaseSalaryWorkers.length < 1) return null;
  const renderHeader = () => (
    <p style={Styles.headerText}>{increaseSalaryWorkersTitle}</p>
  );
  return (
    <div id="card-container">
      <Card style={Styles.container} header={renderHeader}>
        {increaseSalaryWorkers.map((worker) => (
          <div key={worker.name} style={Styles.workerContainer}>
            <p style={Styles.text}>{worker.name}</p>
            <p style={Styles.labelText}>{`${workerIncreaseLabel}:`}</p>
            <p style={Styles.text}>{montoMoneda(worker.increaseSalary)}</p>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default RaisesCard;
