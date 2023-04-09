import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppContainer from './components/AppContainer/AppContainer';
import LanguageState from './context/Language/LanguageState';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import HomeScreen from './features/home/containers/HomeScreen/HomeScreen';
import ReportScreen from './features/report/containers/ReportScreen/ReportScreen';

const App = () => (
  <LanguageState>
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/report" element={<ReportScreen />} />
          <Route path="*" element={<ErrorBoundary />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  </LanguageState>
);

export default App;
