// eslint-disable-next-line import/no-unresolved
import TreeNode from 'primereact/treenode';
import ObjectGeneric from '../../../models/ObjectGeneric';
import ImportantHeader from '../../../models/ImportantHeader';
import IncreaseSalaryWorker from '../../../models/IncreaseSalaryWorker';
import styles from '../containers/ReportScreen/styles';
import { getMonthFormatted, getPreviusMonth } from '../../../utils/utiles';

const filterByMonth = (data: any[]): ObjectGeneric => data.reduce(
  (acc, el) => {
    const month = el.Mes;
    const monthFormatted = getMonthFormatted(month);
    if (monthFormatted in acc) {
      acc[monthFormatted].push(el);
    } else {
      acc[monthFormatted] = [el];
    }
    return acc;
  },
  {} as ObjectGeneric,
);

const findStartWorker = (workers: any[], header: ImportantHeader) => {
  let startWorker: any;
  workers.forEach((worker) => {
    const boss = workers.find((workerTemp) => worker[header.bossId] === workerTemp[header.id]);
    if (boss === undefined) {
      startWorker = worker;
    }
  });
  return startWorker;
};

function listToTree(workers: any[], header: ImportantHeader): TreeNode {
  const workersCopy = [...workers];
  const map: any = {};
  let node;
  const roots = [];
  let i;

  for (i = 0; i < workersCopy.length; i += 1) {
    map[workersCopy[i].data[header.id]] = i;
    workersCopy[i].children = [];
  }
  for (i = 0; i < workersCopy.length; i += 1) {
    node = workersCopy[i];
    if (node.data[header.bossId] !== '0') {
      workersCopy[map[node.data[header.bossId]]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots[0];
}

const generateOrgChart = (workers: any[], header: ImportantHeader): TreeNode => {
  const startWorker = findStartWorker(workers, header);
  const workersFormatted: TreeNode[] = workers.map((worker) => ({
    label: worker['Nombre '],
    expanded: false,
    style: styles.nodeContainer,
    data: {
      ...worker,
      [header.bossId]: worker[header.id] === startWorker[header.id] ? '0' : worker[header.bossId],
    },
  }));
  return listToTree(workersFormatted, header);
};

const getTotalSalary = (workers: any[], salaryLabel: string): number => (
  workers.reduce((acc, el) => acc + parseInt(el[salaryLabel], 10), 0)
);

const getNewWorkers = (workers: any[], month: string, startDateLabel: string): string[] => (
  workers.reduce((acc, el) => {
    if (month === getMonthFormatted(el[startDateLabel])) {
      acc.push(el['Nombre ']);
    }
    return acc;
  }, []));

const getIncreaseSalaryWorkers = (month: string, months: ObjectGeneric, header: ImportantHeader)
  : IncreaseSalaryWorker[] => {
  const previusMonth: string = getPreviusMonth(month);
  if (!(previusMonth in months)) return [];
  const monthData = months[month];
  const previusMonthData = months[previusMonth];
  const increaseSalaryWorkers: IncreaseSalaryWorker[] = [];
  const { id, salary } = header;
  monthData.forEach((worker: any) => {
    const previusMonthWorker = previusMonthData.find(
      (workerTemp: any) => workerTemp[id] === worker[id],
    );
    if (
      previusMonthWorker
      && previusMonthWorker[salary] < worker[salary]
    ) {
      increaseSalaryWorkers.push({
        name: worker['Nombre '],
        increaseSalary: worker[salary] - previusMonthWorker[salary],
      });
    }
  });
  return increaseSalaryWorkers;
};

export {
  filterByMonth,
  generateOrgChart,
  getTotalSalary,
  getNewWorkers,
  getIncreaseSalaryWorkers,
};
