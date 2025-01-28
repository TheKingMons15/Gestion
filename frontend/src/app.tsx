import { Button } from '@components/Button';
import { useCounter } from '@hooks/useCounter';


function App() {
  const { count, increment } = useCounter(0);

  return (
    <div className="App">
      <h1>Vite + React + TypeScript</h1>
      <div className="card">
        <Button text={`count is ${count}`} onClick={increment} />
      </div>
    </div>
  );
}

export default App;