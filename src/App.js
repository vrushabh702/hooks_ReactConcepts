import './App.css';
import EffectTutorial from './useEffect/EffectTutorial';
import LayoutEffectTutorial from './useLayoutEffect/LayoutEffectTutorial';
import ReducerTutorial from './useReducer/ReducerTutorial';
import RefTutorial from './UseRef/RefTutorial';
import StateTutorial from './useState/StatetTutorial';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello world</h1> */}
      {/* <StateTutorial></StateTutorial> */}
      {/* <ReducerTutorial></ReducerTutorial> */}
      {/* <EffectTutorial></EffectTutorial> */}
      {/* <RefTutorial></RefTutorial> */}
      <LayoutEffectTutorial></LayoutEffectTutorial>
    </div>
  );
}

export default App;
