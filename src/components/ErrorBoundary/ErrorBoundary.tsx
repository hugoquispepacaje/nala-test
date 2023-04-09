import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import Styles from './styles';
import { button } from '../../style/commons';
import useErrorBoundary from './useErrorBoundary';

const ErrorBoundary = () => {
  const { goHome, goHomeLabel } = useErrorBoundary();
  return (
    <div style={Styles.mainContainer}>
      <Image
        src="https://www.nalarocks.com/wp-content/uploads/2022/11/Captura-de-Pantalla-2022-11-16-a-las-3.14.47-p.m..png"
        width="375"
      />
      <Button style={button} label={goHomeLabel} onClick={goHome} rounded />
    </div>
  );
};

export default ErrorBoundary;
