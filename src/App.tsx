import { Button } from 'primereact/button';

const App = () => {
  const nameButton = 'Hola';
  const mystyle = {
    padding: '10rem',
  };
  return (
    <div style={mystyle}>
      <Button label={nameButton} icon="pi pi-check" />
    </div>
  );
};

export default App;
