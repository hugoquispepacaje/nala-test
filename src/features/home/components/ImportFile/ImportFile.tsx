import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import useImportFile from './useImportFile';
import Styles from './styles';
import Props from './types';
import { button } from '../../../../style/commons';

const ImportFile = ({
  data,
  setData,
  hasData,
  setHasData,
  setModalEditVisible,
  setModalImportantHeader,
}: Props) => {
  const {
    fileUploadRef,
    uploadHandler,
    onClear,
    onPressEditHeader,
    onPressGenerateReport,
    uploadFileLabel,
    clearFileLabel,
    generateReportLabel,
    editHeaderLabel,
  } = useImportFile(data, setData, setHasData, setModalEditVisible, setModalImportantHeader);
  return (
    <div style={Styles.container}>
      {hasData ? (
        <>
          <Button label={clearFileLabel} onClick={onClear} rounded style={button} />
          <Button
            label={editHeaderLabel}
            onClick={onPressEditHeader}
            rounded
            style={button}
          />
          <Button
            label={generateReportLabel}
            onClick={onPressGenerateReport}
            rounded
            style={button}
          />
        </>
      ) : (
        <FileUpload
          ref={fileUploadRef}
          className="file-upload-custom"
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
