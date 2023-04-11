import {
  header,
  increaseSalaryWorkers,
  months,
  treeNode,
  workers,
} from '../../../../../src/data/dataDummy';
import {
  generateOrgChart,
  getIncreaseSalaryWorkers,
  getNewWorkers,
  getTotalSalary,
} from '../../../../../src/features/report/utils/utiles';

describe('getIncreaseSalaryWorkers', () => {
  it('It should return a list with the workers who have increased their salary', () => {
    const month = '05-2020';
    const headers = getIncreaseSalaryWorkers(month, months, header);
    expect(headers).toEqual(increaseSalaryWorkers);
  });
});

describe('getNewWorkers', () => {
  it('It should return a list with the new workers of the month', () => {
    const month = '04-2020';
    const respCorrect = ['Jaime González'];
    const newWorkers = getNewWorkers(workers, month, header.startDate);
    expect(newWorkers).toEqual(respCorrect);
  });
});

describe('getTotalSalary', () => {
  it('It should return the sum of the month\'s salary', () => {
    const respCorrect = 4000000;
    const totalSalary = getTotalSalary(workers, header.salary);
    expect(totalSalary).toEqual(respCorrect);
  });
});

describe('getTotalSalary', () => {
  it('It should return the sum of the month\'s salary', () => {
    const respCorrect = 4000000;
    const totalSalary = getTotalSalary(workers, header.salary);
    expect(totalSalary).toEqual(respCorrect);
  });
});

describe('generateOrgChart', () => {
  it('It should return an object with the structure to paint the organization chart.', () => {
    const totalSalary = generateOrgChart(workers, header);
    expect(totalSalary).toEqual(treeNode);
  });
});

export { };
