import ImportFile from '../../components/ImportFile/ImportFile';
import ModalEditHeader from '../../components/ModalEditHeader/ModalEditHeader';
import PreviewTable from '../../components/PreviewTable/PreviewTable';
import useHome from './useHome';
import Styles from './styles';
import ModalImportantHeader from '../../components/ModalImportantHeader/ModalImportantHeader';

const HomeScreen = () => {
  const {
    data,
    setData,
    hasData,
    setHasData,
    modalEditVisible,
    setModalEditVisible,
    modalImportantVisible,
    setModalImportantVisible,
  } = useHome();
  return (
    <div style={Styles.mainContainer}>
      <ImportFile
        data={data}
        setData={setData}
        hasData={hasData}
        setHasData={setHasData}
        setModalEditVisible={setModalEditVisible}
        setModalImportantHeader={setModalImportantVisible}
      />
      {hasData ? <PreviewTable data={data} /> : null}
      <ModalEditHeader
        visible={modalEditVisible}
        setVisible={setModalEditVisible}
        data={data}
        setData={setData}
      />
      <ModalImportantHeader
        visible={modalImportantVisible}
        setVisible={setModalImportantVisible}
        data={data}
      />
    </div>
  );
};

export default HomeScreen;
