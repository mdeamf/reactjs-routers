import './App.css';
import { ReactRouterDom } from './routers/ReactRouterDom';
import { ReachRouter } from './routers/ReachRouter';

function App() {
  return (
    <div className="App">
      <p>Choose your page!</p>

      {/* <ReactRouterDom /> */}

      <ReachRouter />
    </div>
  );
}

export default App;
