import LanguageState from './context/Language/LanguageState';
import HomeScreen from './features/home/containers/HomeScreen';

const App = () => (
  <LanguageState>
    <HomeScreen />
  </LanguageState>
);

export default App;
