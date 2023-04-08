import AppContainer from './components/AppContainer/AppContainer';
import LanguageState from './context/Language/LanguageState';
import HomeScreen from './features/home/containers/HomeScreen';

const App = () => (
  <LanguageState>
    <AppContainer>
      <HomeScreen />
    </AppContainer>
  </LanguageState>
);

export default App;
