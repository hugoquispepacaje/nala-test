import { useNavigate } from 'react-router-dom';

const useHeader = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return { goHome };
};

export default useHeader;
