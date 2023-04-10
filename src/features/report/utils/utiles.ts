// eslint-disable-next-line import/no-unresolved
import moment from 'moment';
// eslint-disable-next-line import/no-unresolved
import TreeNode from 'primereact/treenode';
import ObjectGeneric from '../../../models/ObjectGeneric';
import ImportantHeader from '../../../models/ImportantHeader';
import styles from '../containers/ReportScreen/styles';

const filterByMonth = (data: any[]): ObjectGeneric => data.reduce(
  (acc, el) => {
    const month = el.Mes;
    const monthFormatted = moment(month, 'DD-MM-YYYY').format('MM-YYYY');
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

export {
  filterByMonth,
  generateOrgChart,
};
