import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Props from './types';
import Styles from './styles';
import usePreviewTable from './usePreviewTable';

const PreviewTable = ({ data }: Props) => {
  const { previewDataLaber } = usePreviewTable();
  return (
    <div style={Styles.mainContainer}>
      <h2 style={Styles.title}>{previewDataLaber}</h2>
      <DataTable style={Styles.tableContainer} value={data} scrollable scrollHeight="400px">
        {Object.keys(data[0]).map(
          (column) => <Column field={column} header={column} key={column} />,
        )}
      </DataTable>
    </div>
  );
};
export default PreviewTable;
