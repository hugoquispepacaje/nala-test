import ImportFile from '../components/ImportFile/ImportFile';
import ModalEditHeader from '../components/ModalEditHeader/ModalEditHeader';
import PreviewTable from '../components/PreviewTable/PreviewTable';
import useHome from '../hooks/useHome';

const HomeScreen = () => {
  const {
    data, setData, hasData, setHasData, modalEditVisible, setModalEditVisible,
  } = useHome();
  return (
    <div>
      <ImportFile
        data={data}
        setData={setData}
        hasData={hasData}
        setHasData={setHasData}
        setModalEditVisible={setModalEditVisible}
      />
      {hasData ? <PreviewTable data={data} /> : null}
      <ModalEditHeader
        visible={modalEditVisible}
        setVisible={setModalEditVisible}
        data={data}
        setData={setData}
      />
    </div>
  );
};

export default HomeScreen;
