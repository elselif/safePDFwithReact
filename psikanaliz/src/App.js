import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Pdfview from './components/Pdfview';

import PDF from '../src/assets/psi35.pdf';

function App() {
  return (
    <div className="App">
      <Header/>
      <Pdfview pdf={PDF}/>
    </div>
  );
}

export default App;
