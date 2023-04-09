import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageContext from '../../context/Language/LanguageContext';

const useErrorBoundary = () => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const goHome = () => {
    navigate('/');
  };

  return { goHome, goHomeLabel: language.data.goHome };
};

export default useErrorBoundary;
