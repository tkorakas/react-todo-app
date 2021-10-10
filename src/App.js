import './App.css';
import { TodosProvider } from './state/context';
import Todos from './components/Todos';

function App() {
  return (
    <TodosProvider>
      <Todos />
    </TodosProvider>
  );
}

export default App;
