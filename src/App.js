
import './App.css'
import {Routes, Route,} from 'react-router-dom';
import PrincipalPage from './components/layout/PrincipalPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={ <PrincipalPage/> } />
      </Routes>
</div>
  );
}

export default App;
