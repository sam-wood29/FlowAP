import { useAuth } from './store/auth';
import { Login } from './screens/Login';
import { Splash } from './screens/Splash';
import { Main } from './screens/Main';

function App() {
  const status = useAuth((s) => s.status);

  if (status === 'loading') return <Splash />;
  if (status === 'anon') return <Login />;
  return <Main />;
}

export default App;
