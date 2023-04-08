import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import useImportFile from './useImportFile';
import Styles from './styles';
import Props from './types';

const ImportFile = ({
  data,
  setData,
  hasData,
  setHasData,
  setModalEditVisible,
}: Props) => {
  const {
    fileUploadRef,
    uploadHandler,
    onClear,
    onPressEditHeader,
    uploadFileLabel,
    clearFileLabel,
    generateReportLabel,
    editHeaderLabel,
  } = useImportFile(data, setData, setHasData, setModalEditVisible);
  return (
    <div style={Styles.container}>
      {hasData ? (
        <>
          <Button label={clearFileLabel} onClick={onClear} severity="danger" />
          <Button label={editHeaderLabel} onClick={onPressEditHeader} severity="secondary" />
          <Button label={generateReportLabel} onClick={onClear} severity="success" />
        </>
      ) : (
        <FileUpload
          ref={fileUploadRef}
          name="invoice"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          customUpload
          uploadHandler={uploadHandler}
          mode="basic"
          auto
          chooseLabel={uploadFileLabel}
          disabled={hasData}
        />
      )}
    </div>
  );
};

export default ImportFile;
